+++
title = "Pola Barisan Bilangan"
description = "Menentukan suku berikutnya, barisan aritmetika, beda tetap, dan aturan barisan bilangan"
weight = 2
+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan mampu:

1. **Menentukan** aturan suatu barisan bilangan
2. **Menentukan** suku berikutnya dari barisan bilangan
3. **Menjelaskan** pengertian barisan aritmetika
4. **Menentukan** beda ($b$) pada barisan aritmetika
5. **Menyelesaikan** masalah yang melibatkan barisan bilangan

---

## A. Barisan Bilangan

Barisan bilangan adalah **kumpulan bilangan yang disusun menurut aturan tertentu**.

$$U_1, U_2, U_3, U_4, ..., U_n$$

- $U_1$ = suku pertama
- $U_2$ = suku kedua
- $U_n$ = suku ke-$n$

---

## B. Menentukan Aturan Barisan

Untuk menemukan aturan, hitung **selisih antar suku** yang berurutan.

### Contoh 1: Selisih Tetap

| Barisan | $U_1$ | $U_2$ | $U_3$ | $U_4$ | $U_5$ | Selisih |
|:-------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-------:|
| $7, 11, 15, 19, 23$ | 7 | 11 | 15 | 19 | 23 | $+4$ |
| $40, 35, 30, 25, 20$ | 40 | 35 | 30 | 25 | 20 | $-5$ |
| $12, 22, 32, 42, 52$ | 12 | 22 | 32 | 42 | 52 | $+10$ |

### Contoh 2: Selisih Tidak Tetap

| Barisan | Selisih | Pola Selisih |
|:-------:|:-------:|:------------|
| $1, 4, 9, 16, 25$ | $+3, +5, +7, +9$ | Bertambah 2 setiap kali |
| $2, 6, 18, 54, 162$ | $\times 3$ | Dikali 3 setiap suku |
| $1, 1, 2, 3, 5, 8$ | $0, +1, +1, +2, +3$ | Fibonacci |

---

## C. Barisan Aritmetika

Barisan aritmetika adalah barisan bilangan yang memiliki **selisih tetap** (konstan) antara dua suku berurutan. Selisih tetap ini disebut **beda** ($b$).

$$b = U_2 - U_1 = U_3 - U_2 = U_4 - U_3 = ...$$

### Rumus Suku ke-$n$

$$U_n = a + (n-1)b$$

dengan:
- $a = U_1$ = suku pertama
- $b$ = beda
- $n$ = nomor suku

### Contoh 3: Barisan Aritmetika

| Barisan | $a$ | $b$ | $U_5$ |
|:-------:|:---:|:---:|:-----:|
| $3, 7, 11, 15, 19$ | 3 | $+4$ | $3 + 4(4) = 19$ |
| $20, 16, 12, 8, 4$ | 20 | $-4$ | $20 + 4(-4) = 4$ |
| $5, 10, 15, 20, 25$ | 5 | $+5$ | $5 + 4(5) = 25$ |
| $100, 90, 80, 70, 60$ | 100 | $-10$ | $100 + 4(-10) = 60$ |
| $8, 14, 20, 26, 32$ | 8 | $+6$ | $8 + 4(6) = 32$ |

### Contoh 4: Mencari Suku ke-$n$

**Tentukan suku ke-20 dari barisan: $5, 9, 13, 17, ...$**

$a = 5$, $b = 9 - 5 = 4$

$$U_{20} = 5 + (20-1) \times 4$$

$$U_{20} = 5 + 76 = 81$$

### Contoh 5: Mencari Beda

**Suku ke-5 suatu barisan aritmetika adalah 23. Suku pertama adalah 7. Berapa bedanya?**

$$U_5 = a + 4b$$

$$23 = 7 + 4b$$

$$4b = 16$$

$$b = 4$$

---

## D. Barisan Geometri Sederhana

Barisan geometri adalah barisan yang memiliki **rasio tetap** (perkalian tetap) antar suku.

$$r = \frac{U_2}{U_1} = \frac{U_3}{U_2} = ...$$

### Contoh 6: Barisan Geometri

| Barisan | $a$ | $r$ | $U_4$ |
|:-------:|:---:|:---:|:-----:|
| $2, 6, 18, 54$ | 2 | $\times 3$ | $2 \times 3^{3} = 54$ |
| $80, 40, 20, 10$ | 80 | $\times \frac{1}{2}$ | $80 \times \frac{1}{8} = 10$ |
| $3, 12, 48, 192$ | 3 | $\times 4$ | $3 \times 4^{3} = 192$ |

> **Untuk SMP, cukup kenali pola geometri sederhana. Fokus utama adalah barisan aritmetika.**

---

## E. Contoh Soal Cerita

### Contoh 7: Menabung

Seorang siswa menabung Rp5.000 di minggu pertama, Rp8.000 di minggu kedua, Rp11.000 di minggu ketiga, dan seterusnya dengan pola yang sama. Berapa tabungan di minggu ke-10?

$a = 5.000$, $b = 3.000$

$$U_{10} = 5.000 + 9 \times 3.000$$

$$U_{10} = 5.000 + 27.000 = 32.000$$

Jadi, tabungan minggu ke-10 adalah **Rp32.000**.

### Contoh 8: Kursi Bioskop

Baris pertama bioskop berisi 10 kursi. Baris kedua 14 kursi. Baris ketiga 18 kursi. Jika pola terus berlanjut, berapa kursi di baris ke-12?

$a = 10$, $b = 4$

$$U_{12} = 10 + 11 \times 4 = 10 + 44 = 54$$

Jadi, baris ke-12 berisi **54 kursi**.

---

## F. Rangkuman

| No | Jenis Barisan | Ciri | Rumus $U_n$ |
|:--:|:-------------:|:----:|:-----------:|
| 1 | **Aritmetika** | Selisih tetap ($b$) | $a + (n-1)b$ |
| 2 | **Geometri** | Rasio tetap ($r$) | $a \times r^{n-1}$ |
| 3 | **Persegi** | $n^2$ | $n^2$ |
| 4 | **Fibonacci** | $U_n = U_{n-1} + U_{n-2}$ | Rekursif |

<div class="note">
💡 <strong>Tips:</strong> Selalu hitung selisih antar suku terlebih dahulu! Jika selisih tetap → aritmetika. Jika selisih membesar/mengecil dengan pola → cari pola lain.
</div>

---

## G. Latihan Soal

1. Tentukan $a$ dan $b$ dari barisan: $6, 10, 14, 18, ...$
2. Tentukan suku ke-15 dari barisan: $3, 7, 11, 15, ...$
3. Tentukan suku ke-10 dari barisan: $50, 46, 42, 38, ...$
4. Suatu barisan: $a=4$, $b=7$. Tentukan $U_8$!
5. Suku ke-4 = 17, suku ke-7 = 29. Tentukan $a$ dan $b$!
6. Barisan: $1, 4, 7, 10, ...$ — tentukan $U_{20}$!
7. Sebuah barisan: $100, 85, 70, 55, ...$ — suku ke berapa yang bernilai $-20$?
8. Dalam suatu gedung, baris ke-1 ada 20 kursi, ke-2 ada 24 kursi. Berapa kursi di baris ke-15?
9. Tentukan 2 suku berikutnya: $3, 6, 12, 24, ...$
10. Tentukan suku ke-8 dari barisan geometri: $5, 15, 45, 135, ...$

---

## H. Kunci Jawaban

1. $a = 6$, $b = 10 - 6 = 4$
2. $U_{15} = 3 + 14(4) = 3 + 56 = 59$
3. $a = 50$, $b = -4$. $U_{10} = 50 + 9(-4) = 50 - 36 = 14$
4. $U_8 = 4 + 7(7) = 4 + 49 = 53$
5. $U_4 = a + 3b = 17$. $U_7 = a + 6b = 29$. Kurangkan: $3b = 12 \Rightarrow b = 4$. $a = 17 - 12 = 5$
6. $a=1$, $b=3$. $U_{20} = 1 + 19(3) = 58$
7. $a=100$, $b=-15$. $U_n = 100 + (n-1)(-15) = -20 \Rightarrow 100 - 15n + 15 = -20 \Rightarrow -15n = -135 \Rightarrow n=9$
8. $a=20$, $b=4$. $U_{15} = 20 + 14(4) = 76$ kursi
9. Rasio $\times 2$. Dua suku berikutnya: $48, 96$
10. $a=5$, $r=3$. $U_8 = 5 \times 3^{7} = 5 \times 2.187 = 10.935$
