# Konten GezyClass (tidak disimpan di Git)

Konten materi, soal latihan, dan soal CBT **tidak di-commit ke repository**.
Sumber konten adalah **backup harian**, bukan Git.

Selain folder ini, data soal latihan JSON berada di `hugo/static/latihan/data/`.

## Sumber backup
- VPS: `/home/pgun/backup-gezyclass/archives/backup-gezyclass-*.tar.gz`
- Google Drive: `gdrive-gezyteach:gezyclass/`
- Telegram DM PakGun (arsip 7 hari)

## Cara restore saat pindah/upgrade server
```bash
# 1. Clone kode
git clone git@github.com:pakgun10/gezyclass.git

# 2. Ekstrak konten dari backup (arsip berisi gezyclass/hugo/content, static, public, pb snapshot)
tar -xzf backup-gezyclass-YYYYMMDD-HHMMSS.tar.gz
cp -r gezyclass/hugo/content gezyclass/hugo/static gezyclass/hugo/public /path/gezyclass/hugo/

# 3. Build
cd /path/gezyclass/hugo && hugo
```
