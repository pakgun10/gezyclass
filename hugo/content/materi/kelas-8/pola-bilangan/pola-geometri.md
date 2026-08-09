+++
title = "C. Pola Bilangan Geometri"
description = "Mengidentifikasi, menentukan suku ke-n, dan memprediksi pola barisan geometri"
weight = 3
+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, murid diharapkan mampu:

1. **Mengidentifikasi** pola barisan geometri
2. **Menentukan** rasio dan suku ke-$n$ barisan geometri
3. **Memprediksi** suku-suku berikutnya pada barisan geometri
4. **Menyelesaikan** permasalahan yang melibatkan barisan geometri

---

## A. Pengertian Barisan Geometri

Barisan geometri adalah barisan bilangan yang hasil bagi antara dua suku berurutan selalu sama. Hasil bagi tetap ini disebut **rasio** ($r$).

![Barisan geometri 2, 6, 18, 54](/images/pola-geometri.png)

### Contoh

$$2, 6, 18, 54, \ldots$$

Rasio: $\frac{6}{2} = 3$, $\frac{18}{6} = 3$, $\frac{54}{18} = 3$ → rasio $r = 3$.

---

## B. Rumus Suku ke-$n$

Jika suku pertama $= a$ dan rasio $= r$, maka suku ke-$n$:

$$\boxed{U_n = a \times r^{\,n-1}}$$

### Contoh 1

Barisan: $3, 6, 12, 24, \ldots$

- $a = 3$, $r = 2$
- $U_6 = 3 \times 2^5 = 3 \times 32 = 96$

### Contoh 2

Barisan: $81, 27, 9, 3, \ldots$ (rasio pecahan)

- $a = 81$, $r = \frac{1}{3}$
- $U_5 = 81 \times \left(\frac{1}{3}\right)^4 = 81 \times \frac{1}{81} = 1$

---

## C. Menentukan Suku Pertama dan Rasio

### Contoh

Diketahui $U_3 = 20$ dan $U_6 = 160$.

$$U_3 = a \times r^2 = 20$$
$$U_6 = a \times r^5 = 160$$

Bagi: $\frac{U_6}{U_3} = r^3 = \frac{160}{20} = 8 \Rightarrow r = 2$.

Maka $a = \frac{20}{r^2} = \frac{20}{4} = 5$.

---

## D. Penerapan Barisan Geometri

### Contoh: Bakteri

Sebuah koloni bakteri berjumlah $100$. Setiap jam, jumlahnya menjadi 2 kali lipat. Berapa bakteri setelah 5 jam?

- $a = 100$, $r = 2$
- $U_6 = 100 \times 2^5 = 100 \times 32 = 3200$

Setelah 5 jam, bakteri berjumlah $3.200$.

---

## E. Rangkuman

| No | Konsep | Rumus |
|:--:|:------:|:------|
| 1 | **Rasio** | $r = \frac{U_2}{U_1}$ |
| 2 | **Suku ke-$n$** | $U_n = a \times r^{n-1}$ |
| 3 | **Rasio > 1** | Barisan membesar |
| 4 | **0 < r < 1** | Barisan mengecil |

<div class="note">
💡 <strong>Tips:</strong> Untuk mengecek apakah suatu barisan adalah geometri, bagi setiap suku dengan suku sebelumnya. Jika hasilnya selalu sama, itu barisan geometri.
</div>

---

## F. Latihan Soal

> **Petunjuk:** Pada semua soal berikut, $a$ adalah suku pertama, $r$ adalah rasio, dan $U_n$ adalah suku ke-$n$ dari barisan geometri.

1. Barisan $4, 8, 16, 32, \ldots$ Tentukan $a$, $r$, dan $U_7$!
2. Barisan $1, 3, 9, 27, \ldots$ Tentukan $U_8$!
3. Diketahui $a = 5$, $r = 2$. Tentukan $U_6$!
4. Diketahui $U_3 = 18$ dan $U_6 = 486$. Tentukan $a$ dan $r$!
5. Barisan $200, 100, 50, \ldots$ Tentukan $U_5$!
6. Diketahui $a = 3$, $r = \frac{1}{3}$. Tentukan $U_4$!
7. Suku ke-3 suatu barisan geometri adalah 12 dan suku ke-6 adalah 96. Tentukan $a$ dan $r$!
8. Sebuah kertas dilipat menjadi dua sama banyak setiap kali. Jika tebal kertas awal $0,1$ mm, berapa tebal kertas setelah dilipat 8 kali?

---

## G. Kunci Jawaban

1. $a = 4$, $r = 2$, $U_7 = 4 \times 2^6 = 256$
2. $U_8 = 1 \times 3^7 = 2187$
3. $U_6 = 5 \times 2^5 = 160$
4. $r^3 = \frac{486}{18} = 27 \Rightarrow r = 3$, $a = \frac{18}{9} = 2$
5. $r = \frac{1}{2}$, $U_5 = 200 \times \left(\frac{1}{2}\right)^4 = 200 \times \frac{1}{16} = 12,5$
6. $U_4 = 3 \times \left(\frac{1}{3}\right)^3 = 3 \times \frac{1}{27} = \frac{1}{9}$
7. $r^3 = \frac{96}{12} = 8 \Rightarrow r = 2$, $a = \frac{12}{4} = 3$
8. $U_9 = 0,1 \times 2^8 = 0,1 \times 256 = 25,6$ mm

---

## H. Asesmen Sumatif

Kerjakan soal-soal berikut untuk mengukur pemahamanmu terhadap materi subbab ini.

### Bagian A — Soal Mudah (5 soal)

1. Barisan geometri $5, 15, 45, 135, \ldots$ Rasio barisan tersebut adalah ...
   - A. $3$
   - B. $5$
   - C. $10$
   - D. $15$

2. Barisan $2, 6, 18, 54, \ldots$ Suku ke-5 adalah ...
   - A. $108$
   - B. $162$
   - C. $324$
   - D. $486$

3. Diketahui $a = 4$ dan $r = 2$. Suku ke-6 adalah ...
   - A. $64$
   - B. $128$
   - C. $256$
   - D. $512$

4. Barisan geometri berikut yang mempunyai rasio $\frac{1}{2}$ adalah ...
   - A. $1, 2, 4, 8, \ldots$
   - B. $16, 8, 4, 2, \ldots$
   - C. $3, 6, 12, 24, \ldots$
   - D. $10, 20, 40, 80, \ldots$

5. Suku pertama barisan geometri $8, 24, 72, 216, \ldots$ adalah ...
   - A. $3$
   - B. $8$
   - C. $24$
   - D. $72$

### Bagian B — Soal Sedang (3 soal)

6. Diketahui $U_3 = 25$ dan $U_5 = 625$. Rasio barisan tersebut adalah ...
   - A. $2$
   - B. $3$
   - C. $4$
   - D. $5$

7. Barisan geometri dengan $a = 1000$ dan $r = \frac{1}{10}$. Suku ke-4 adalah ...
   - A. $0,1$
   - B. $1$
   - C. $10$
   - D. $100$

8. Sebuah barisan geometri memiliki $U_4 = 54$ dan $U_7 = 1458$. Suku pertama $a$ adalah ...
   - A. $2$
   - B. $3$
   - C. $6$
   - D. $9$

### Bagian C — Soal Sulit (2 soal)

9. **Soal HOTS:** Sebuah bakteri membelah diri menjadi 2 setiap 30 menit. Awalnya terdapat 5 bakteri.
   - (a) Berapa bakteri setelah 3 jam?
   - (b) Setelah berapa menit jumlah bakteri mencapai 640?
   - (c) Jika kapasitas wadah maksimum 10.000 bakteri, apakah bakteri akan melampaui kapasitas dalam 5 jam? Jelaskan.

10. **Soal HOTS:** Diketahui barisan geometri dengan $U_2 \times U_5 = 512$ dan $U_3 = 16$.
    - (a) Tentukan nilai $a$ dan $r$.
    - (b) Tentukan $U_8$.
    - (c) Jika setiap suku barisan dijumlahkan dari $U_1$ sampai $U_8$, apakah hasilnya lebih besar dari $5000$? Jelaskan.
