# Konten Materi (tidak disimpan di Git)

Folder ini berisi konten GezyClass (markdown bab/subab + CBT) dan **tidak di-commit ke repository**.
Sumber konten adalah **backup harian**, bukan Git.

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
