#!/usr/bin/env bash
# ============================================================
# cek-darkmode.sh — Audit Aturan Emas DARK-MODE-CHECKLIST.md
# Dipanggil OTOMATIS oleh deploy.sh SEBELUM build & rsync.
#   Exit 0 = bersih (tidak ada hard-coded color melanggar)
#   Exit 1 = ada pelanggaran → build DIHENTIKAN, tampilkan file+baris
# ============================================================
set -uo pipefail

BASE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LAYOUTS="$BASE/hugo/layouts"
EXCLUDE="_default/baseof.html"   # sumber token tema — warna di sini justru definisi var()

echo "🔍 [cek-darkmode] Memindai hard-coded color di: $LAYOUTS (kecuali $EXCLUDE)"

# Semua baris yang mengandung hex color, format: path:nomor:konten
MATCHES="$(grep -rn -iE '#[0-9a-f]{3,8}' "$LAYOUTS" --include='*.html' | grep -v "$EXCLUDE:" || true)"

VIOLATIONS=""
while IFS= read -r line; do
  # Hapus bagian yang DIIZINKAN (Aturan Emas #2), lalu cek sisa hex:
  #  1. gradien hero  linear-gradient(135deg,#111827,#1f3a5f)
  #  2. shadow/overlay rgba(...)
  #  3. color:#fff murni (teks di atas elemen gelap) — BUKAN background/border
  stripped="$(printf '%s\n' "$line" | sed -E \
    -e 's/linear-gradient\(135deg, ?#111827, ?#1f3a5f\)//Ig' \
    -e 's/rgba\([^)]*\)//g' \
    -e 's/[^a-zA-Z-]color:#f{3,6}([^0-9a-fA-F]|$)/X\1/Ig')"
  if printf '%s\n' "$stripped" | grep -qiE '#[0-9a-f]{3,8}'; then
    VIOLATIONS+="$line"$'\n'
  fi
done <<< "$MATCHES"

if [[ -n "$VIOLATIONS" ]]; then
  echo ""
  echo "❌ [cek-darkmode] PELANGGARAN Aturan Emas DARK-MODE-CHECKLIST.md — build DIHENTIKAN:"
  echo "   (format: file:baris → konten)"
  echo ""
  printf '%s' "$VIOLATIONS" | sed 's/^/   /'
  echo ""
  echo "   Cara perbaiki: ganti hex dengan var() dari baseof.html (lihat DARK-MODE-CHECKLIST.md bagian 2 & 3)."
  echo "   Contoh:  background:#fff      →  background:var(--card)"
  echo "            color:#111827        →  color:var(--text)"
  echo "            border:1px solid #e5e7eb → border:1px solid var(--card-border)"
  echo "            background:#e8f5e9;color:#2e7d32 → background:var(--green-bg);color:var(--green)"
  exit 1
fi

echo "✅ [cek-darkmode] Bersih — tidak ada hard-coded color yang melanggar Aturan Emas."
exit 0
