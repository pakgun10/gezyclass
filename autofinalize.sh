#!/bin/bash
# Finalisasi otomatis sesi ujian yang lewat batas (durasi + 5 menit)
KEY=$(cat /home/pgun/gezyclass/.autofinalize_key 2>/dev/null)
[ -n "$KEY" ] || exit 0
curl -s -m 20 -X POST "http://127.0.0.1:8090/api/exam/finalize-stale?key=$KEY" >/dev/null 2>&1
