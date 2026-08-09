+++
title = "G. Korespondensi Satu-Satu"
description = "Pengertian korespondensi satu-satu dan menghitung banyak korespondensi yang mungkin (pengayaan)"
weight = 7
+++

## Tujuan Pembelajaran

Setelah mempelajari subbab ini, murid diharapkan mampu:

1. **Menjelaskan** pengertian korespondensi satu-satu
2. **Menentukan** apakah suatu fungsi merupakan korespondensi satu-satu
3. **Menghitung** banyak korespondensi satu-satu antara dua himpunan (pengayaan)

---

## A. Pengertian Korespondensi Satu-Satu

**Korespondensi satu-satu** adalah fungsi dari $A$ ke $B$ di mana **setiap anggota $A$ dipasangkan dengan tepat satu anggota $B$ dan setiap anggota $B$ dipasangkan dengan tepat satu anggota $A$** — tidak ada yang bercabang dan tidak ada yang tersisa.

Syarat: **$n(A) = n(B)$**.

![Korespondensi satu-satu antara A={1,2,3} dan B={a,b,c}](/images/korespondensi-11.png)

---

## B. Contoh Soal

### Contoh 1

Fungsi $f$ dari $A = \{1, 2, 3\}$ ke $B = \{a, b, c\}$ dengan $f(1)=a$, $f(2)=b$, $f(3)=c$. Apakah $f$ korespondensi satu-satu?

**Jawab:** Ya — setiap anggota $A$ tepat satu pasangan, dan setiap anggota $B$ ($a, b, c$) semuanya terpasang tepat satu kali. $n(A) = n(B) = 3$. ✅

### Contoh 2

Fungsi $g$ dari $A = \{1, 2, 3\}$ ke $B = \{a, b, c\}$ dengan $g(1)=a$, $g(2)=a$, $g(3)=b$. Apakah $g$ korespondensi satu-satu?

**Jawab:** **Bukan.** Anggota $a$ dipasang dua kali ($1$ dan $2$) dan anggota $c$ tidak terpasang.

---

## C. Menghitung Banyak Korespondensi Satu-Satu

Banyak korespondensi satu-satu antara $A$ dan $B$ dengan $n(A) = n(B) = n$ adalah:

$$n! = n \times (n-1) \times (n-2) \times \dots \times 2 \times 1$$

### Contoh 3

Berapa banyak korespondensi satu-satu yang mungkin antara $A = \{1, 2, 3\}$ dan $B = \{a, b, c\}$?

**Jawab:** $3! = 3 \times 2 \times 1 = 6$.

Ke enam cara itu: $(1a,2b,3c)$, $(1a,2c,3b)$, $(1b,2a,3c)$, $(1b,2c,3a)$, $(1c,2a,3b)$, $(1c,2b,3a)$.

---

<div class="note">
💡 <strong>Tips:</strong> Faktorial adalah perkalian berurutan menurun. $4! = 24$, $5! = 120$ — cepat membesar, jadi perhatikan jumlah anggotanya.
</div>

---

## D. Latihan Soal

1. Tuliskan pengertian korespondensi satu-satu!
2. Apa syarat banyak anggota agar dua himpunan dapat berkorespondensi satu-satu?
3. $A = \{1, 2\}$, $B = \{a, b\}$. Berapa banyak korespondensi satu-satu yang mungkin?
4. Fungsi $h(1)=x$, $h(2)=y$, $h(3)=z$ dari $A=\{1,2,3\}$ ke $B=\{x,y,z\}$. Apakah korespondensi satu-satu?
5. Berapa banyak korespondensi satu-satu antara himpunan dengan 4 anggota dan himpunan dengan 4 anggota?
6. Mengapa dua himpunan dengan banyak anggota berbeda tidak mungkin berkorespondensi satu-satu?

---

## E. Kunci Jawaban

1. Fungsi di mana setiap anggota $A$ tepat satu pasangan di $B$ dan setiap anggota $B$ tepat satu pasangan di $A$
2. $n(A) = n(B)$
3. $2! = 2$: $(1a,2b)$ dan $(1b,2a)$
4. Ya — semua terpasang tepat satu kali
5. $4! = 24$
6. Karena jika jumlahnya beda, pasti ada anggota yang tersisa atau terpasang dua kali
