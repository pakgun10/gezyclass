# Checklist Dark Mode — Layout Baru GezyClass

> Dokumen WAJIB dibaca SEBELUM menambah atau mengubah layout Hugo.
> Tujuan: mencegah bug hard-coded color seperti di `/latihan/` (teks tidak
> terbaca saat dark mode aktif, karena warna kartu di-hardcode terang).

---

## 1. Aturan Emas

1. **SEMUA warna memakai CSS variables** dari `hugo/layouts/_default/baseof.html`.
   Jangan pernah hardcode hex untuk latar, teks, border, atau shadow.
2. Hanya **3 pengecualian** yang boleh hardcode:
   - Gradien hero/header: `background:linear-gradient(135deg,#111827,#1f3a5f)`
     dengan `color:#fff` — sengaja gelap di kedua mode.
   - `color:#fff` **hanya** di atas elemen berlatar gelap (hero, tombol primer).
   - `rgba(...)` untuk shadow/overlay (bukan warna teks/latar).
3. Warna dasar:
   - Latar halaman → `var(--bg)` / `var(--page-bg)`
   - Kartu/kontainer → `var(--card)`
   - Teks utama → `var(--text)` · teks sekunder → `var(--sub)` / `var(--muted)`
4. Elemen berwarna (badge, feedback, alert) selalu pakai **pasangan token**:
   bg + border + text (mis. `--green-bg` + `--green-border` + `--green`).
5. Input selalu: `background:var(--input-bg);color:var(--text);border:1px solid var(--input-border)`.
6. Jangan menambah hex baru untuk "biar kontras" — kalau token belum ada,
   tambahkan token ke baseof.html (dua blok: `:root` DAN `[data-theme="dark"]`).

---

## 2. Token CSS yang tersedia

### Mode terang (`:root`)
| Token | Nilai | Pemakaian |
|---|---|---|
| `--bg` / `--page-bg` | `#f8f9fa` / `#f0f2f5` | latar halaman |
| `--card` | `#fff` | kartu, panel, opsi soal |
| `--text` | `#1a1a2e` | teks utama |
| `--sub` | `#666` | teks sekunder |
| `--muted` | `#64748b` | catatan kecil, deskripsi |
| `--card-border` | `#e5e7eb` | border kartu/opsi/baris |
| `--input-bg` / `--input-border` | `#fff` / `#d1d5db` | input form |
| `--accent` / `--accent-2` | `#111827` / `#1f3a5f` | tombol primer, hero |
| `--btn-ghost` / `--btn-ghost-text` | `#e5e7eb` / `#333` | tombol sekunder |
| `--danger` | `#d32f2f` | tombol kumpul/hapus |
| `--green` / `--green-bg` / `--green-border` | `#2e7d32` / `#e8f5e9` / `#4caf50` | benar, badge hijau |
| `--red` / `--red-bg` / `--red-border` | `#d32f2f` / `#ffebee` / `#d32f2f` | salah, badge merah |
| `--amber-bg` / `--amber-text` | `#fef3c7` / `#92400e` | peringatan sedang |
| `--info-bg` / `--info-text` | `#ecfeff` / `#155e75` | info biru |
| `--feedback-bg` / `--feedback-border` | `#fefce8` / `#fde68a` | feedback kuning |
| `--alert-bg` / `--alert-border` / `--alert-text` | `#fee2e2` / `#fca5a5` / `#991b1b` | alert merah |
| `--expl-bg` / `--expl-text` | `#f0f4ff` / `#333` | pembahasan |
| `--thead-bg` | `#f8fafc` | header tabel |
| `--row-border` | `#e5e7eb` | border baris tabel |
| `--sel-bg` | `#f0f0f8` | opsi terpilih |
| `--num-empty` | `#999` | angka/kosong |
| `--teal` | `#0f766e` | aksen teal (durasi ujian) |
| `--nav-bg` / `--nav-text` | `#1a1a2e` / `#fff` | navbar |

### Mode gelap (`[data-theme="dark"]`)
Token yang sama, nilai gelap: `--bg/--page-bg:#0f0f1a`, `--card:#1e1e32`,
`--text:#e0e0e0`, `--sub:#999`, `--muted:#8f8fa8`, `--card-border:#2f2f4a`,
`--input-bg:#262640`, `--input-border:#44446a`, `--accent:#3a3a5c`,
`--btn-ghost:#3a3a5c`, `--btn-ghost-text:#e0e0e0`, `--danger:#ef5350`,
`--green:#7bc47f`, `--green-bg:#1d3a24`, `--red:#ef5350`, `--red-bg:#3d1f24`,
`--amber-bg:#3d3016`, `--amber-text:#fbbf24`, `--info-bg:#0e2733`,
`--info-text:#7dd3fc`, `--feedback-bg:#3a3218`, `--feedback-border:#a78b3a`,
`--alert-bg:#3d1f24`, `--alert-border:#b05c5c`, `--alert-text:#fca5a5`,
`--expl-bg:#1a2340`, `--expl-text:#d0d0e0`, `--thead-bg:#252540`,
`--row-border:#2f2f4a`, `--sel-bg:#2c2c4a`, `--num-empty:#777`, `--teal:#5eead4`.

---

## 3. Checklist Elemen (centang setiap layout baru)

### A. Kartu & kontainer (.card, .q-card, .exam-card, .result-stat, .input-box …)
- [ ] background = `var(--card)`, BUKAN `#fff`
- [ ] border = `var(--card-border)` (atau `var(--row-border)` untuk tabel)
- [ ] teks utama = `var(--text)`, teks kecil = `var(--muted)`

### B. Badge & status (benar/salah/kosong/amber)
- [ ] hijau: `background:var(--green-bg);color:var(--green)` (+ `var(--green-border)` jika ada border)
- [ ] merah: `background:var(--red-bg);color:var(--red)` (+ `var(--red-border)`)
- [ ] amber: `background:var(--amber-bg);color:var(--amber-text)`
- [ ] abu/kosong: `background:var(--btn-ghost);color:var(--num-empty)`

### C. Tombol
- [ ] primer: `background:var(--accent);color:#fff`
- [ ] ghost/sekunder: `background:var(--btn-ghost);color:var(--btn-ghost-text)`
- [ ] danger: `background:var(--danger);color:#fff`
- [ ] hover/fokus: `border-color:var(--accent)`

### D. Tabel (dashboard guru, daftar, dsb.)
- [ ] header `th`: `background:var(--thead-bg)`
- [ ] border baris: `border-bottom:1px solid var(--row-border)`
- [ ] teks sel mewarisi `var(--text)` (jangan set warna sendiri)

### E. Input & form
- [ ] `background:var(--input-bg);color:var(--text);border:1px solid var(--input-border)`
- [ ] label: `color:var(--text)`
- [ ] placeholder: biarkan default atau `var(--muted)`

### F. Hero / header gradien
- [ ] Boleh tetap `linear-gradient(135deg,#111827,#1f3a5f)` + `color:#fff` (sengaja)
- [ ] Teks sekunder di dalam hero: `rgba(255,255,255,.8)` — jangan `var(--muted)` (terlalu gelap di atas gradien)

### G. Feedback / alert / info / pembahasan
- [ ] feedback kuning: `var(--feedback-bg)` + `var(--feedback-border)`
- [ ] alert merah: `var(--alert-bg)` + `var(--alert-border)` + `var(--alert-text)`
- [ ] info biru: `var(--info-bg)` + `var(--info-text)`
- [ ] pembahasan: `var(--expl-bg)` + `var(--expl-text)`

### H. Navigasi soal & review (khas /latihan/ & /cbt/)
- [ ] tombol nomor: `background:var(--card);color:var(--text);border:1px solid var(--card-border)`
- [ ] nomor aktif: `border:2px solid var(--accent)`
- [ ] nomor terjawab: `var(--green-bg)` + `var(--green-border)`
- [ ] opsi terpilih: `border-color:var(--accent);background:var(--sel-bg)`
- [ ] review benar/salah: pasangan `--green-*` / `--red-*`
- [ ] border kiri review kosong: `var(--num-empty)`

### I. Loading / empty / note
- [ ] loading: `color:var(--sub)`
- [ ] empty state: kartu `var(--card)` + teks `var(--muted)`
- [ ] note/keterangan kecil: `color:var(--muted)`

---

## 4. Audit Otomatis (WAJIB sebelum commit — otomatis di deploy.sh)

> Script: **`./cek-darkmode.sh`** — dipanggil otomatis oleh **`./deploy.sh`**
> sebelum build & rsync. Jika ada pelanggaran: **exit 1 → build BERHENTI**
> dan ditampilkan file:baris yang bermasalah (bukan sekadar warning).


```bash
# 1) Hex yang TIDAK boleh muncul di layout (selain baseof.html)
grep -rn "#fff\|#000\|#111827\|#1a1a2e\|#1f2937\|#f0f2f5\|#e5e7eb\|#d1d5db\|#64748b\|#f8fafc\|#ddd\|#e0e0e0" hugo/layouts/ | grep -v "_default/baseof.html"

# 2) Hasil yang DIBOLEHKAN (filter manual):
#    - linear-gradient(135deg,#111827,#1f3a5f)  → hero, sengaja
#    - color:#fff                               → hanya di atas elemen gelap
#    - rgba(...)                                → shadow/overlay
#    Sisanya WAJIB diganti var().
```

## 5. Verifikasi Manual (sebelum bilang "selesai")

1. `cd hugo && /home/pgun/.local/bin/hugo --gc --minify`
2. Sync: `rsync -a --delete hugo/public/ ../public/`
3. Buka halaman baru di `https://class.gezytech.web.id/...` (tambah `?v=N` anti-cache).
4. Klik 🌙 di navbar → pastikan: kartu gelap, teks terang & kontras, badge
   hijau/merah/amber tetap beda, input & tabel ikut gelap.
5. Bandingkan dengan halaman yang sudah benar: `/materi/kelas-7/bilangan-bulat/`.

## 6. Pola Benar vs Salah

```css
/* ❌ SALAH — hardcode terang, gelap-mode rusak */
.q-card{background:#fff;color:#111827;border:1px solid #e5e7eb}
input[type=text]{border:1px solid #d1d5db}
.badge.green{background:#e8f5e9;color:#2e7d32}

/* ✅ BENAR — pakai token dari baseof.html */
.q-card{background:var(--card);color:var(--text);border:1px solid var(--card-border)}
input[type=text]{background:var(--input-bg);color:var(--text);border:1px solid var(--input-border)}
.badge.green{background:var(--green-bg);color:var(--green)}
```

---

*File ini bagian dari build code (bukan konten materi), jadi aman di repo & ikut git history.*
