// GezyClass security hooks v6 — akses publik via endpoint khusus.
// - Soal: opsi diberi oid (indeks asli) + type (pg/pgk/bs); kunci tidak bocor.
// - Penilaian server: pg/bs = 1 jawaban; pgk = set jawaban (harus tepat semua).
// - Helper qs/j dideklarasikan lokal per router (aman di JSVM PocketBase).

// ---------- EXAM: start ----------
routerAdd("POST", "/api/exam/start", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var body = c.requestInfo().body || {};
    var token = String(body.token || "").trim().toUpperCase();
    var examId = String(body.exam_id || "").trim();
    var nama = String(body.nama || "").trim().slice(0, 50);
    var noAbsen = String(body.no_absen || "").trim();
    var kelas = String(body.kelas || "").trim().slice(0, 8);
    if (!token || !examId || !nama || !noAbsen || !kelas) {
      return c.json(400, { message: "Semua field wajib diisi." });
    }
    var col = $app.findCollectionByNameOrId("exam_tokens");
    var found = $app.findRecordsByFilter(col,
      "token = " + qs(token) + " && exam_id = " + qs(examId) + " && (is_shared = true || is_used = false)", "", 1, 0);
    if (found.length === 0) return c.json(400, { message: "Token tidak valid atau sudah digunakan!" });
    var tk = found[0];
    if (!tk.get("is_shared")) {
      var usedOnce = $app.findRecordsByFilter($app.findCollectionByNameOrId("exam_sessions"),
        "token = " + qs(token) + " && exam_id = " + qs(examId), "", 1, 0);
      if (usedOnce.length > 0) return c.json(400, { message: "Token sudah digunakan." });
    }
    var sessCol = $app.findCollectionByNameOrId("exam_sessions");
    var rec = new Record(sessCol);
    rec.set("exam_id", examId);
    rec.set("token", token);
    rec.set("nama", nama);
    rec.set("no_absen", parseInt(noAbsen, 10) || 0);
    rec.set("kelas", kelas);
    rec.set("status", "ongoing");
    rec.set("started_at", new Date().toISOString());
    $app.save(rec);
    if (!tk.get("is_shared")) {
      tk.set("is_used", true);
      tk.set("used_at", new Date().toISOString());
      $app.save(tk);
    }
    return c.json(200, { id: rec.id });
  } catch (err) {
    return c.json(500, { message: "Terjadi kesalahan: " + err.message });
  }
});

// ---------- EXAM: info sesi ----------
routerAdd("GET", "/api/exam/session", function (c) {
  try {
    var id = (c.requestInfo().query["id"] || "") || "";
    if (!id) return c.json(400, { message: "id wajib" });
    var rec = $app.findRecordById($app.findCollectionByNameOrId("exam_sessions"), id);
    var ex = null;
    try { ex = $app.findRecordById($app.findCollectionByNameOrId("exams"), rec.get("exam_id")); } catch (e2) {}
    return c.json(200, {
      id: rec.id, exam_id: rec.get("exam_id"), status: rec.get("status"),
      nama: rec.get("nama"), kelas: rec.get("kelas"), no_absen: rec.get("no_absen"),
      total_score: rec.get("total_score"), max_score: rec.get("max_score"),
      exam_title: ex ? (ex.get("title") || "Ujian") : "Ujian",
      duration: ex ? (ex.get("duration") || 1800) : 1800
    });
  } catch (e) {
    return c.json(404, { message: "Sesi tidak ditemukan." });
  }
});

// ---------- EXAM: soal publik (tanpa kunci; opsi + oid + type) ----------
routerAdd("GET", "/api/pub/exam-questions", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var examId = (c.requestInfo().query["exam_id"] || "") || "";
    if (!examId) return c.json(400, { message: "exam_id wajib" });
    var eqs = $app.findRecordsByFilter($app.findCollectionByNameOrId("exam_questions"),
      "exam_id = " + qs(examId), "", 500, 0);
    var qCol = $app.findCollectionByNameOrId("questions");
    var out = [];
    for (var i = 0; i < eqs.length; i++) {
      var eq = eqs[i];
      var qr;
      try { qr = $app.findRecordById(qCol, eq.get("question_id")); } catch (e2) { continue; }
      var opts = j(qr, "options_json") || [];
      var cleanOpts = [];
      for (var k = 0; k < opts.length; k++) cleanOpts.push({ text: opts[k].text, oid: k });
      out.push({
        eqId: eq.id, qid: qr.id, question: qr.get("question"),
        options: cleanOpts, points: eq.get("points") || 5,
        type: qr.get("type") || "pg",
        explanation: qr.get("explanation") || "", difficulty: qr.get("difficulty") || ""
      });
    }
    return c.json(200, { items: out });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- EXAM: submit (penilaian server; pg/pgk/bs) ----------
routerAdd("POST", "/api/exam/submit", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var eqArr = function(a, b){
      if (!a || !b || a.length !== b.length) return false;
      var ca = a.slice().sort(), cb = b.slice().sort();
      for (var i = 0; i < ca.length; i++) if (String(ca[i]) !== String(cb[i])) return false;
      return true;
    };
    var body = c.requestInfo().body || {};
    var sessionId = String(body.session_id || "").trim();
    var answers = body.answers || {};
    if (!sessionId) return c.json(400, { message: "session_id wajib" });
    var sess = $app.findRecordById($app.findCollectionByNameOrId("exam_sessions"), sessionId);
    if (sess.get("status") !== "ongoing") return c.json(400, { message: "Sesi sudah selesai." });
    var eqs = $app.findRecordsByFilter($app.findCollectionByNameOrId("exam_questions"),
      "exam_id = " + qs(sess.get("exam_id")), "", 500, 0);
    var qCol = $app.findCollectionByNameOrId("questions");
    var anCol = $app.findCollectionByNameOrId("exam_answers");
    var review = [], total = 0, max = 0, correct = 0, wrong = 0, empty = 0;
    for (var i = 0; i < eqs.length; i++) {
      var eq = eqs[i], eqId = eq.id, points = eq.get("points") || 5;
      max += points;
      var qr = $app.findRecordById(qCol, eq.get("question_id"));
      var qtype = qr.get("type") || "pg";
      var opts = j(qr, "options_json") || [];
      var correctSet = [];
      for (var x = 0; x < opts.length; x++) if (opts[x].score === 1) correctSet.push(x);
      var sel = answers[eqId];
      var selArr = [], has = false;
      if (Array.isArray(sel)) {
        selArr = sel.filter(function(z){ return z !== null && z !== undefined && z !== ""; });
        has = selArr.length > 0;
      } else {
        has = (sel !== undefined && sel !== null && sel !== "");
        if (has) selArr = [sel];
      }
      var isCorrect = has && eqArr(selArr, correctSet);
      if (!has) empty++; else if (isCorrect) correct++; else wrong++;
      if (isCorrect) total += points;
      var cleanOpts = [];
      for (var y = 0; y < opts.length; y++) cleanOpts.push({ text: opts[y].text, oid: y });
      var corrIdx = (qtype === "pgk" || qtype === "mr") ? correctSet : (correctSet.length ? correctSet[0] : -1);
      review.push({
        eqId: eqId, qid: qr.id, question: qr.get("question"), type: qtype,
        options: cleanOpts,
        selected_index: (Array.isArray(sel) ? selArr : (has ? sel : null)),
        correct_index: corrIdx, is_correct: isCorrect,
        score: isCorrect ? points : 0, max_score: points,
        explanation: qr.get("explanation") || ""
      });
    }
    for (var jj = 0; jj < review.length; jj++) {
      var item = review[jj];
      var existing = $app.findRecordsByFilter(anCol,
        "session_id = " + qs(sessionId) + " && question_id = " + qs(item.qid), "", 1, 0);
      var rec;
      if (existing.length) rec = existing[0];
      else { rec = new Record(anCol); rec.set("session_id", sessionId); rec.set("question_id", item.qid); }
      rec.set("answer_json", { selected_index: item.selected_index });
      rec.set("is_correct", item.is_correct);
      rec.set("score", item.score);
      rec.set("max_score", item.max_score);
      rec.set("submitted_at", new Date().toISOString());
      $app.save(rec);
    }
    sess.set("status", "submitted");
    sess.set("ended_at", new Date().toISOString());
    sess.set("total_score", total);
    sess.set("max_score", max);
    $app.save(sess);
    var exam = $app.findRecordById($app.findCollectionByNameOrId("exams"), sess.get("exam_id"));
    return c.json(200, {
      total_score: total, max_score: max, correct: correct, wrong: wrong, empty: empty,
      nama: sess.get("nama"), kelas: sess.get("kelas"),
      exam_title: exam.get("title") || "Ujian",
      show_score: !!exam.get("show_score_after"),
      show_explanation: !!exam.get("show_explanation_after"),
      review: review
    });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- EXAM: review ----------
routerAdd("GET", "/api/exam/review", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var sessionId = (c.requestInfo().query["session"] || "") || "";
    if (!sessionId) return c.json(400, { message: "session wajib" });
    var sess = $app.findRecordById($app.findCollectionByNameOrId("exam_sessions"), sessionId);
    var exam = $app.findRecordById($app.findCollectionByNameOrId("exams"), sess.get("exam_id"));
    var eqs = $app.findRecordsByFilter($app.findCollectionByNameOrId("exam_questions"),
      "exam_id = " + qs(sess.get("exam_id")), "", 500, 0);
    var ansList = $app.findRecordsByFilter($app.findCollectionByNameOrId("exam_answers"),
      "session_id = " + qs(sessionId), "", 500, 0);
    var ansMap = {};
    for (var i = 0; i < ansList.length; i++) ansMap[ansList[i].get("question_id")] = ansList[i];
    var qCol = $app.findCollectionByNameOrId("questions");
    var review = [], correct = 0, wrong = 0, empty = 0;
    for (var j2 = 0; j2 < eqs.length; j2++) {
      var eq = eqs[j2], qid = eq.get("question_id");
      var qr = $app.findRecordById(qCol, qid);
      var qtype = qr.get("type") || "pg";
      var opts = j(qr, "options_json") || [];
      var correctSet = [];
      for (var x = 0; x < opts.length; x++) if (opts[x].score === 1) correctSet.push(x);
      var ans = ansMap[qid];
      var aj = ans ? (j(ans, "answer_json") || {}) : {};
      var selIdx = ans ? aj.selected_index : null;
      var selArr = [];
      if (Array.isArray(selIdx)) { selArr = selIdx; }
      else if (selIdx !== null && selIdx !== undefined && selIdx !== "") { selArr = [selIdx]; }
      var isCorrect = ans ? !!ans.get("is_correct") : false;
      if (selArr.length === 0) empty++; else if (isCorrect) correct++; else wrong++;
      var cleanOpts = [];
      for (var y = 0; y < opts.length; y++) cleanOpts.push({ text: opts[y].text, oid: y });
      var corrIdx = (qtype === "pgk" || qtype === "mr") ? correctSet : (correctSet.length ? correctSet[0] : -1);
      review.push({
        question: qr.get("question"), type: qtype, options: cleanOpts,
        selected_index: (Array.isArray(selIdx) ? selArr : (selArr.length ? selArr[0] : null)),
        correct_index: corrIdx,
        is_correct: isCorrect, explanation: qr.get("explanation") || "",
        points: eq.get("points") || 5
      });
    }
    return c.json(200, {
      nama: sess.get("nama"), kelas: sess.get("kelas"), no_absen: sess.get("no_absen"),
      exam_title: exam.get("title") || "Ujian",
      show_score: !!exam.get("show_score_after"),
      show_explanation: !!exam.get("show_explanation_after"),
      total_score: sess.get("total_score") || 0, max_score: sess.get("max_score") || 0,
      correct: correct, wrong: wrong, empty: empty, review: review
    });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- LATIHAN: daftar soal publik (tanpa kunci) ----------
routerAdd("GET", "/api/pub/latihan", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var slug = (c.requestInfo().query["slug"] || "") || "";
    if (!slug) return c.json(400, { message: "slug wajib" });
    var list = $app.findRecordsByFilter($app.findCollectionByNameOrId("latihan_soal"),
      "slug = " + qs(slug), "", 1, 0);
    if (!list.length) return c.json(404, { message: "Soal tidak ditemukan." });
    var rec = list[0];
    var soal = j(rec, "soal_json") || [];
    var out = [];
    for (var i = 0; i < soal.length; i++) {
      var q = soal[i];
      out.push({ q: q.q, o: q.o || [] });
    }
    return c.json(200, {
      judul: rec.get("judul"), kelas: rec.get("kelas"), semester: rec.get("semester"),
      bab: rec.get("bab"), back_url: rec.get("back_url"), soal: out
    });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- LATIHAN: start ----------
routerAdd("POST", "/api/latihan/start", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var body = c.requestInfo().body || {};
    var slug = String(body.slug || "").trim();
    var nama = String(body.nama || "").trim();
    var absen = String(body.no_absen || "").trim();
    var kelas = String(body.kelas || "").trim();
    if (!slug || !nama || !absen || !kelas) return c.json(400, { message: "Data tidak lengkap." });
    var col = $app.findCollectionByNameOrId("latihan_sesi");
    var existing = $app.findRecordsByFilter(col,
      "latihan_slug = " + qs(slug) + " && nama = " + qs(nama) + " && no_absen = " + qs(absen) + " && kelas = " + qs(kelas),
      "", 100, 0);
    if (existing.length >= 3) return c.json(400, { message: "Kamu sudah mengerjakan latihan ini 3 kali." });
    var rec = new Record(col);
    rec.set("latihan_slug", slug);
    rec.set("nama", nama);
    rec.set("no_absen", absen);
    rec.set("kelas", kelas);
    rec.set("attempt", existing.length + 1);
    rec.set("access_key", "K" + Math.random().toString(36).slice(2, 10));
    rec.set("status", "ongoing");
    rec.set("started_at", new Date().toISOString());
    $app.save(rec);
    return c.json(200, { id: rec.id });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- LATIHAN: submit ----------
routerAdd("POST", "/api/latihan/submit", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var body = c.requestInfo().body || {};
    var sessionId = String(body.session_id || "").trim();
    var answers = body.answers || {};
    if (!sessionId) return c.json(400, { message: "session_id wajib" });
    var rec = $app.findRecordById($app.findCollectionByNameOrId("latihan_sesi"), sessionId);
    if (rec.get("status") !== "ongoing") return c.json(400, { message: "Latihan sudah dikumpulkan." });
    var soalList = $app.findRecordsByFilter($app.findCollectionByNameOrId("latihan_soal"),
      "slug = " + qs(rec.get("latihan_slug")), "", 1, 0);
    if (!soalList.length) return c.json(500, { message: "Data soal tidak ditemukan." });
    var soal = j(soalList[0], "soal_json") || [];
    var detail = [], benar = 0, salah = 0, kosong = 0, benarNomor = [], salahNomor = [];
    for (var i = 0; i < soal.length; i++) {
      var q = soal[i];
      var s = answers[i];
      if (s === undefined || s === null || s === "") { kosong++; detail.push({ i: i, ok: 0, st: "-" }); }
      else if (String(s) === String(q.k)) { benar++; benarNomor.push(i + 1); detail.push({ i: i, ok: 1, st: s }); }
      else { salah++; salahNomor.push(i + 1); detail.push({ i: i, ok: 0, st: s }); }
    }
    rec.set("status", "submitted");
    rec.set("ended_at", new Date().toISOString());
    rec.set("total_score", benar);
    rec.set("max_score", soal.length);
    rec.set("jawaban_json", detail);
    $app.save(rec);
    return c.json(200, { total_score: benar, max_score: soal.length, correct: benar, wrong: salah, empty: kosong, benar_nomor: benarNomor, salah_nomor: salahNomor });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- GURU: daftar latihan + sesi (auth guru) ----------
routerAdd("GET", "/api/guru/latihan", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var ri = c.requestInfo();
    if (!ri.auth || ri.auth.collection().name !== "guru") {
      return c.json(403, { message: "Akses khusus guru." });
    }
    var out = [];
    var lat = $app.findRecordsByFilter($app.findCollectionByNameOrId("latihan_soal"), "is_active = true", "", 500, 0);
    for (var i = 0; i < lat.length; i++) {
      var rec = lat[i];
      var sesiList = $app.findRecordsByFilter($app.findCollectionByNameOrId("latihan_sesi"),
        "latihan_slug = " + qs(rec.get("slug")), "", 1000, 0);
      var sesi = [];
      for (var k = 0; k < sesiList.length; k++) {
        var sv = sesiList[k];
        if (sv.get("status") !== "submitted") continue;
        sesi.push({
          id: sv.id, nama: sv.get("nama"), no_absen: sv.get("no_absen"), kelas: sv.get("kelas"),
          attempt: sv.get("attempt") || 1, total_score: sv.get("total_score") || 0,
          max_score: sv.get("max_score") || 0, jawaban_json: j(sv, "jawaban_json") || [],
          ended_at: sv.get("ended_at") || ""
        });
      }
      out.push({ slug: rec.get("slug"), judul: rec.get("judul"), kelas: rec.get("kelas"), bab: rec.get("bab"), sesi: sesi });
    }
    return c.json(200, { items: out });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- GURU: rekap hasil CBT (auth guru) ----------
routerAdd("GET", "/api/guru/exam-recap", function (c) {
  try {
    var ri = c.requestInfo();
    if (!ri.auth || ri.auth.collection().name !== "guru") {
      return c.json(403, { message: "Akses khusus guru." });
    }

    var exams = $app.findRecordsByFilter(
      $app.findCollectionByNameOrId("exams"),
      "is_active = true", "title", 500, 0
    );
    var sessionsCol = $app.findCollectionByNameOrId("exam_sessions");
    var classesCol = $app.findCollectionByNameOrId("classes");
    var out = [];

    for (var i = 0; i < exams.length; i++) {
      var exam = exams[i];
      var className = "";
      var classID = String(exam.get("class_id") || "");
      if (classID) {
        try {
          className = String($app.findRecordById(classesCol, classID).get("name") || "");
        } catch (classErr) {}
      }

      var sessionList = $app.findRecordsByFilter(
        sessionsCol, "exam_id = '" + exam.id.replace(/'/g, "''") + "'",
        "-started_at", 1000, 0
      );
      var sesi = [];
      for (var k = 0; k < sessionList.length; k++) {
        var session = sessionList[k];
        sesi.push({
          id: session.id,
          nama: session.get("nama") || "",
          no_absen: session.get("no_absen"),
          kelas: session.get("kelas") || "",
          status: session.get("status") || "",
          total_score: session.get("total_score") || 0,
          max_score: session.get("max_score") || 0,
          started_at: session.get("started_at") || "",
          ended_at: session.get("ended_at") || ""
        });
      }
      out.push({
        exam_id: exam.id,
        title: exam.get("title") || "Ujian",
        class_name: className,
        duration: exam.get("duration") || 0,
        sesi: sesi
      });
    }
    return c.json(200, { items: out });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- EXAM: autosave jawaban ----------
routerAdd("POST", "/api/exam/autosave", function (c) {
  try {
    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var j = function(rec, f){
      var v = rec.get(f);
      if (v == null) return null;
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === "number") {
          var ss = "";
          for (var bi = 0; bi < v.length; bi++) ss += String.fromCharCode(v[bi]);
          try { return JSON.parse(ss); } catch (e2) { return null; }
        }
        return v;
      }
      if (typeof v === "string") { try { return JSON.parse(v); } catch (e2) { return null; } }
      return v;
    };
    var eqArr = function(a, b){
      if (!a || !b || a.length !== b.length) return false;
      var ca = a.slice().sort(), cb = b.slice().sort();
      for (var i = 0; i < ca.length; i++) if (String(ca[i]) !== String(cb[i])) return false;
      return true;
    };
    var body = c.requestInfo().body || {};
    var sessionId = String(body.session_id || "").trim();
    var answers = body.answers || {};
    if (!sessionId) return c.json(400, { message: "session_id wajib" });
    var sess = $app.findRecordById($app.findCollectionByNameOrId("exam_sessions"), sessionId);
    if (sess.get("status") !== "ongoing") return c.json(200, { ok: true, skipped: true });
    var eqs = $app.findRecordsByFilter($app.findCollectionByNameOrId("exam_questions"),
      "exam_id = " + qs(sess.get("exam_id")), "", 500, 0);
    var qCol = $app.findCollectionByNameOrId("questions");
    var anCol = $app.findCollectionByNameOrId("exam_answers");
    var saved = 0;
    for (var i = 0; i < eqs.length; i++) {
      var eq = eqs[i], eqId = eq.id;
      var sel = answers[eqId];
      if (sel === undefined || sel === null) continue;
      var qr = $app.findRecordById(qCol, eq.get("question_id"));
      var opts = j(qr, "options_json") || [];
      var correctSet = [];
      for (var x = 0; x < opts.length; x++) if (opts[x].score === 1) correctSet.push(x);
      var selArr = [], has = false;
      if (Array.isArray(sel)) {
        selArr = sel.filter(function(z){ return z !== null && z !== undefined && z !== ""; });
        has = selArr.length > 0;
      } else {
        has = (sel !== "" && sel !== null && sel !== undefined);
        if (has) selArr = [sel];
      }
      if (!has) continue;
      var isCorrect = eqArr(selArr, correctSet);
      var existing = $app.findRecordsByFilter(anCol,
        "session_id = " + qs(sessionId) + " && question_id = " + qs(qr.id), "", 1, 0);
      var rec;
      if (existing.length) rec = existing[0];
      else { rec = new Record(anCol); rec.set("session_id", sessionId); rec.set("question_id", qr.id); }
      rec.set("answer_json", { selected_index: Array.isArray(sel) ? selArr : sel });
      rec.set("is_correct", isCorrect);
      rec.set("score", isCorrect ? (eq.get("points") || 5) : 0);
      rec.set("max_score", eq.get("points") || 5);
      rec.set("submitted_at", new Date().toISOString());
      $app.save(rec);
      saved++;
    }
    return c.json(200, { ok: true, saved: saved });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});

// ---------- EXAM: finalize-stale (dipanggil cron eksternal tiap menit) ----------
routerAdd("POST", "/api/exam/finalize-stale", function (c) {
  try {
    var ri = c.requestInfo();
    var key = String((ri.query && ri.query["key"]) || "").trim();
    var expect = "";
    try {
      var b = $os.readFile("../.autofinalize_key");
      if (b && b.length !== undefined) {
        var ss = "";
        for (var i = 0; i < b.length; i++) ss += String.fromCharCode(b[i]);
        expect = ss.trim();
      }
    } catch (e) {}
    if (!expect) return c.json(500, { message: "kunci internal belum diset" });
    if (key !== expect) return c.json(403, { message: "forbidden" });

    var qs = function(v){ return "'" + String(v == null ? "" : v).replace(/'/g, "''") + "'"; };
    var sessCol = $app.findCollectionByNameOrId("exam_sessions");
    var exCol = $app.findCollectionByNameOrId("exams");
    var eqCol = $app.findCollectionByNameOrId("exam_questions");
    var anCol = $app.findCollectionByNameOrId("exam_answers");
    var now = new Date();
    var list = $app.findRecordsByFilter(sessCol, "status = 'ongoing'", "", 500, 0);
    var finalized = 0;
    for (var i2 = 0; i2 < list.length; i2++) {
      var sess = list[i2];
      var started = sess.get("started_at");
      if (!started) continue;
      var ex = null;
      try { ex = $app.findRecordById(exCol, sess.get("exam_id")); } catch (e2) {}
      var dur = ex ? (ex.get("duration") || 1800) : 1800;
      var deadline = new Date(new Date(started).getTime() + dur * 1000 + 5 * 60 * 1000);
      if (now < deadline) continue;
      var eqs = $app.findRecordsByFilter(eqCol, "exam_id = " + qs(sess.get("exam_id")), "", 500, 0);
      var max = 0;
      for (var k2 = 0; k2 < eqs.length; k2++) max += (eqs[k2].get("points") || 5);
      var ansList = $app.findRecordsByFilter(anCol, "session_id = " + qs(sess.id), "", 500, 0);
      var total = 0;
      for (var a = 0; a < ansList.length; a++) total += (ansList[a].get("score") || 0);
      sess.set("status", "submitted");
      sess.set("ended_at", now.toISOString());
      sess.set("total_score", total);
      sess.set("max_score", max);
      $app.save(sess);
      finalized++;
    }
    if (finalized > 0) console.log("AUTO-FINALIZE: " + finalized + " sesi difinalisasi");
    return c.json(200, { finalized: finalized });
  } catch (e) {
    return c.json(500, { message: "Terjadi kesalahan: " + e.message });
  }
});
