+++
title = "D. Jangkauan dan Kuartil"
description = "Menentukan jangkauan, kuartil, dan jangkauan antar kuartil suatu data"
weight = 4
+++

## Tujuan Pembelajaran

Setelah mempelajari subbab ini, murid diharapkan mampu:

1. **Menentukan** jangkauan (range) suatu data
2. **Menentukan** kuartil bawah, tengah, dan atas
3. **Menentukan** jangkauan antar kuartil

---

## A. Jangkauan (Range)

**Jangkauan** adalah selisih antara data terbesar dan data terkecil.

$$\text{Jangkauan} = \text{data terbesar} - \text{data terkecil}$$

![Jangkauan dari min 3 ke max 12 adalah 9](/images/stat-jangkauan.png)

### Contoh 1

Data: $3, 8, 12, 5, 9$. Tentukan jangkauan!

**Jawab:** Terbesar $12$, terkecil $3$. Jangkauan $= 12 - 3 = 9$.

---

## B. Kuartil

Data yang sudah diurutkan dibagi menjadi **4 bagian sama banyak**, sehingga terdapat:

- **$Q_1$ (kuartil bawah):** median dari separuh data bawah
- **$Q_2$ (kuartil tengah):** median seluruh data
- **$Q_3$ (kuartil atas):** median dari separuh data atas

![Diagram kotak: min, Q1, median, Q3, max](/images/stat-boxplot.png)

### Contoh 2

Data: $3, 5, 7, 8, 10, 12, 15$. Tentukan $Q_1$, $Q_2$, $Q_3$!

**Jawab:** Data sudah urut (7 data).

- $Q_2$ = data ke-4 $= 8$
- $Q_1$ = median dari $3,5,7$ $= 5$
- $Q_3$ = median dari $10,12,15$ $= 12$

---

## C. Jangkauan Antar Kuartil

$$\text{JAK} = Q_3 - Q_1$$

Pada contoh: JAK $= 12 - 5 = 7$.

---

<div class="note">
💡 <strong>Tips:</strong> Jangkauan hanya memakai dua nilai (terbesar & terkecil) sehingga mudah terpengaruh pencilan; JAK lebih kokoh karena memakai kuartil.
</div>

---

## D. Latihan Soal

1. Tentukan jangkauan dari $4, 9, 15, 7, 11$!
2. Data $2, 6, 8, 10, 14, 18$: tentukan $Q_1$, $Q_2$, $Q_3$!
3. Dari soal 2, tentukan JAK!
4. Data $10, 20, 30, 40, 50$: tentukan $Q_1$ dan $Q_3$!
5. Mengapa jangkauan bisa menyesatkan jika ada pencilan?
6. Jika $Q_1 = 20$ dan $Q_3 = 35$, berapa JAK?

---

## E. Kunci Jawaban

1. $15 - 4 = 11$
2. Urut: $2,6,8,10,14,18$; $Q_2 = \tfrac{8+10}{2}=9$; $Q_1=6$; $Q_3=14$
3. JAK $= 14 - 6 = 8$
4. $Q_1 = 20$, $Q_3 = 40$
5. Karena jangkauan memakai nilai ekstrem; satu pencilan membuat jangkauan membesar meski sebagian besar data rapat
6. JAK $= 15$
