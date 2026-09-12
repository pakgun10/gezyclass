#!/usr/bin/env bash
# ============================================================
# deploy.sh — Pipeline build & deploy GezyClass
#   1) Pastikan konten produksi sudah direstore
#   2) Audit dark mode (cek-darkmode.sh) → berhenti jika melanggar
#   3) Build Hugo
#   4) Sync ke document root (yang diserve nginx)
# Penggunaan: ./deploy.sh
# ============================================================
set -euo pipefail

BASE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

require_content() {
  local label="$1"
  local relative_path="$2"
  local absolute_path="$BASE/$relative_path"

  if [[ ! -d "$absolute_path" ]] || [[ -z "$(find "$absolute_path" -type f -print -quit)" ]]; then
    echo "❌ Konten $label belum tersedia: $relative_path"
    echo "   Restore konten dari backup sebelum menjalankan deploy."
    exit 1
  fi
}

echo "== [1/4] Cek konten produksi =="
require_content "materi" "hugo/content/materi"
require_content "soal latihan" "hugo/content/latihan"
require_content "data soal latihan" "hugo/static/latihan/data"
require_content "CBT kelas 7" "hugo/content/cbt/kelas7"
require_content "CBT kelas 8" "hugo/content/cbt/kelas8"
require_content "CBT kelas 9" "hugo/content/cbt/kelas9"

echo "== [2/4] Audit dark mode =="
"$BASE/cek-darkmode.sh"

echo ""
echo "== [3/4] Build Hugo =="
cd "$BASE/hugo"
/home/pgun/.local/bin/hugo --gc --minify

echo ""
echo "== [4/4] Sync ke document root =="
rsync -a --delete "$BASE/hugo/public/" "$BASE/public/"

echo ""
echo "✅ Deploy selesai: class.gezytech.web.id sudah versi terbaru."
