#!/usr/bin/env bash
# ============================================================
# deploy.sh — Pipeline build & deploy GezyClass
#   1) Audit dark mode (cek-darkmode.sh) → berhenti jika melanggar
#   2) Build Hugo
#   3) Sync ke document root (yang diserve nginx)
# Penggunaan: ./deploy.sh
# ============================================================
set -euo pipefail

BASE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "== [1/3] Audit dark mode =="
"$BASE/cek-darkmode.sh"

echo ""
echo "== [2/3] Build Hugo =="
cd "$BASE/hugo"
/home/pgun/.local/bin/hugo --gc --minify

echo ""
echo "== [3/3] Sync ke document root =="
rsync -a --delete "$BASE/hugo/public/" "$BASE/public/"

echo ""
echo "✅ Deploy selesai: class.gezytech.web.id sudah versi terbaru."
