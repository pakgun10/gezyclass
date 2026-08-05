+++
title = "Menentukan Rumus Suku ke-n"
description = "Menemukan dan menggunakan rumus suku ke-n dari barisan bilangan"
weight = 4
+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan mampu:

1. **Menemukan** rumus suku ke-$n$ dari suatu barisan
2. **Menentukan** suku tertentu menggunakan rumus $U_n$
3. **Menentukan** nomor suku ($n$) jika nilai suku diketahui
4. **Menerapkan** rumus suku ke-$n$ dalam pemecahan masalah

---

## A. Menemukan Rumus $U_n$

Rumus suku ke-$n$ adalah fungsi yang menyatakan nilai suku ke-$n$ berdasarkan $n$.

### Barisan Aritmetika

$$U_n = a + (n-1)b$$

**Langkah-langkah:**
1. Tentukan suku pertama ($a$)
2. Tentukan beda ($b$) = $U_2 - U_1$
3. Substitusi ke rumus $U_n = a + (n-1)b$

### Contoh 1: Menemukan Rumus

| Barisan | $a$ | $b$ | Rumus $U_n$ |
|:-------:|:---:|:---:|:-----------:|
| $2, 5, 8, 11, 14$ | 2 | 3 | $2 + (n-1)3 = 3n - 1$ |
| $10, 7, 4, 1, -2$ | 10 | $-3$ | $10 + (n-1)(-3) = -3n + 13$ |
| $5, 9, 13, 17, 21$ | 5 | 4 | $5 + (n-1)4 = 4n + 1$ |
| $20, 15, 10, 5, 0$ | 20 | $-5$ | $20 + (n-1)(-5) = -5n + 25$ |
| $1, 8, 15, 22, 29$ | 1 | 7 | $1 + (n-1)7 = 7n - 6$ |

---

## B. Menentukan Suku Tertentu

### Contoh 2: Menggunakan Rumus

**Barisan: $7, 12, 17, 22, ...$ Tentukan $U_{15}$!**

$a = 7$, $b = 5$

$$U_n = 7 + (n-1)5 = 5n + 2$$

$$U_{15} = 5(15) + 2 = 75 + 2 = 77$$

### Contoh 3: Berbagai Perhitungan

| Barisan | Rumus $U_n$ | Yang Ditanyakan | Hasil |
|:-------:|:-----------:|:---------------:|:-----:|
| $3, 6, 9, 12$ | $3n$ | $U_{10}$ | $30$ |
| $4, 7, 10, 13$ | $3n + 1$ | $U_{20}$ | $61$ |
| $8, 5, 2, -1$ | $-3n + 11$ | $U_{12}$ | $-25$ |
| $6, 10, 14, 18$ | $4n + 2$ | $U_{30}$ | $122$ |
| $-2, 2, 6, 10$ | $4n - 6$ | $U_{8}$ | $26$ |

---

## C. Mencari $n$ Jika $U_n$ Diketahui

### Contoh 4: Mencari Nomor Suku

**Barisan: $5, 9, 13, 17, ...$ Suku ke berapa yang bernilai 81?**

$a = 5$, $b = 4$

$$U_n = 5 + (n-1)4 = 4n + 1$$

$$4n + 1 = 81$$

$$4n = 80$$

$$n = 20$$

Jadi, $81$ adalah suku ke-20.

### Contoh 5: Lebih Banyak Latihan

| Rumus $U_n$ | Nilai $U_n$ | $n$ |
|:-----------:|:-----------:|:---:|
| $3n + 2$ | $29$ | $3n+2=29 \Rightarrow 3n=27 \Rightarrow n=9$ |
| $5n - 3$ | $47$ | $5n-3=47 \Rightarrow 5n=50 \Rightarrow n=10$ |
| $2n + 5$ | $31$ | $2n+5=31 \Rightarrow 2n=26 \Rightarrow n=13$ |
| $4n - 1$ | $75$ | $4n-1=75 \Rightarrow 4n=76 \Rightarrow n=19$ |

---

## D. Membuat Rumus dari Pola Kontekstual

### Contoh 6: Kursi di Aula

Sebuah aula memiliki baris kursi: baris ke-1 = 12 kursi, ke-2 = 16 kursi, ke-3 = 20 kursi. Tentukan:
a) Rumus banyak kursi pada baris ke-$n$
b) Banyak kursi pada baris ke-18
c) Baris ke berapa yang memiliki 60 kursi?

**Penyelesaian:**

a) $a = 12$, $b = 4$. $U_n = 12 + (n-1)4 = 4n + 8$

b) $U_{18} = 4(18) + 8 = 72 + 8 = 80$ kursi

c) $4n + 8 = 60 \Rightarrow 4n = 52 \Rightarrow n = 13$

### Contoh 7: Tabungan

Seorang anak menabung: minggu ke-1 = Rp5.000, ke-2 = Rp8.000, ke-3 = Rp11.000. Tentukan minggu ke berapa tabungannya Rp50.000?

$a = 5.000$, $b = 3.000$

$$U_n = 5.000 + (n-1)3.000 = 3.000n + 2.000$$

$$3.000n + 2.000 = 50.000$$

$$3.000n = 48.000$$

$$n = 16$$

Jadi, tabungan Rp50.000 tercapai pada **minggu ke-16**.

---

## E. Rangkuman

| No | Yang Dicari | Rumus/Cara |
|:--:|:-----------:|:-----------|
| 1 | **Rumus $U_n$** (diketahui $a$ dan $b$) | $U_n = a + (n-1)b$ |
| 2 | **Suku ke-$n$** (diketahui rumus) | Substitusi $n$ |
| 3 | **Nomor suku $n$** (diketahui $U_n$) | Selesaikan persamaan |
| 4 | **Beda $b$** (diketahui dua suku) | $b = U_{k+1} - U_k$ |
| 5 | **Suku pertama $a$** | $a = U_1$ |

<div class="note">
💡 <strong>Tips:</strong> $U_n = a + (n-1)b$ bisa diubah ke bentuk $U_n = bn + (a-b)$. Misal: $U_n = 2 + (n-1)5 = 5n - 3$. Bentuk kedua ini kadang lebih mudah digunakan!
</div>

---

## F. Latihan Soal

1. Tentukan rumus $U_n$ dari barisan: $6, 10, 14, 18, ...$
2. Tentukan rumus $U_n$ dari barisan: $15, 12, 9, 6, ...$
3. Tentukan $U_{12}$ dari barisan: $4, 9, 14, 19, ...$
4. Tentukan $U_{20}$ dari barisan: $30, 26, 22, 18, ...$
5. Barisan: $8, 15, 22, 29, ...$ Suku ke berapa yang bernilai $176$?
6. Barisan: $-3, 1, 5, 9, ...$ Tentukan $U_{15}$!
7. Diketahui $U_n = 6n - 2$. Tentukan $U_8$!
8. Diketahui $U_n = 4n + 7$. Tentukan $n$ jika $U_n = 55$!
9. Sebuah barisan: $U_n = 3n + 5$. Tentukan $U_{25}$!
10. Suatu barisan aritmetika memiliki $a = 12$ dan $b = 7$. Tentukan $U_{30}$!

---

## G. Kunci Jawaban

1. $a=6, b=4$. $U_n = 6 + (n-1)4 = 4n + 2$
2. $a=15, b=-3$. $U_n = 15 + (n-1)(-3) = -3n + 18$
3. $a=4, b=5$. $U_n = 5n - 1$. $U_{12} = 5(12) - 1 = 59$
4. $a=30, b=-4$. $U_n = -4n + 34$. $U_{20} = -4(20) + 34 = -46$
5. $U_n = 7n + 1$. $7n + 1 = 176 \Rightarrow n = 25$
6. $U_n = 4n - 7$. $U_{15} = 4(15) - 7 = 53$
7. $U_8 = 6(8) - 2 = 46$
8. $4n + 7 = 55 \Rightarrow n = 12$
9. $U_{25} = 3(25) + 5 = 80$
10. $U_{30} = 12 + 29(7) = 215$
