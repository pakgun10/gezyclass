+++
title = "Menyelesaikan SPLDV dengan Metode Eliminasi"
description = "Menyelesaikan SPLDV dengan metode eliminasi — menghilangkan variabel"
weight = 4
+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan mampu:

1. **Menyamakan** koefisien salah satu variabel
2. **Mengeliminasi** variabel dengan menjumlah atau mengurang persamaan
3. **Menentukan** penyelesaian SPLDV dengan eliminasi
4. **Menerapkan** dalam soal cerita

---

## A. Langkah-Langkah

1. Samakan koefisien variabel yang akan dieliminasi (kali dengan bilangan yang sesuai)
2. Jumlahkan atau kurangkan kedua persamaan untuk menghilangkan variabel
3. Selesaikan untuk mendapatkan nilai variabel pertama
4. Ulangi untuk variabel kedua (atau substitusi balik)

---

## B. Contoh 1: Eliminasi $x$

Selesaikan $\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$

**Eliminasi $x$** (koefisien sudah sama: 1 dan 1):
$$\begin{aligned}
x + y &= 5 \\
x - y &= 1 \quad (-) \\
\hline
0 + 2y &= 4 \\
y &= 2
\end{aligned}$$

**Eliminasi $y$** (koefisien sudah sama: 1 dan -1 → jumlahkan):
$$\begin{aligned}
x + y &= 5 \\
x - y &= 1 \quad (+) \\
\hline
2x + 0 &= 6 \\
x &= 3
\end{aligned}$$

Penyelesaian: $(3, 2)$ ✅

---

## C. Contoh 2: Samakan Koefisien

Selesaikan $\begin{cases} 2x + 3y = 13 \\ 3x + 2y = 12 \end{cases}$

**Eliminasi $x$** (samakan koefisien: KPK 2 dan 3 = 6):
$\times 3$: $6x + 9y = 39$
$\times 2$: $6x + 4y = 24 \quad (-)$
$0 + 5y = 15$
$y = 3$

**Eliminasi $y$** (samakan koefisien: KPK 3 dan 2 = 6):
$\times 2$: $4x + 6y = 26$
$\times 3$: $9x + 6y = 36 \quad (-)$
$-5x = -10$
$x = 2$

Penyelesaian: $(2, 3)$ ✅

---

## D. Tabel Contoh

| SPLDV | Eliminasi $x$ | Eliminasi $y$ | Hasil |
|:------|:-------------|:-------------|:------|
| $\begin{cases}3x-y=7\\ x+2y=7\end{cases}$ | $\times 1$: $3x-y=7$; $\times 3$: $3x+6y=21$ → $(-) -7y=-14$, $y=2$ | $\times 2$: $6x-2y=14$; $\times 1$: $x+2y=7$ → $(+)7x=21$, $x=3$ | $(3,2)$ |
| $\begin{cases}2x+y=10\\ x-3y=-2\end{cases}$ | $\times 1$: $2x+y=10$; $\times 2$: $2x-6y=-4$ → $(-)7y=14$, $y=2$ | $\times 3$: $6x+3y=30$; $\times 1$: $x-3y=-2$ → $(+)7x=28$, $x=4$ | $(4,2)$ |
| $\begin{cases}5x+2y=16\\ 3x+4y=18\end{cases}$ | $\times 3$: $15x+6y=48$; $\times 5$: $15x+20y=90$ → $(-)-14y=-42$, $y=3$ | $\times 2$: $10x+4y=32$; $\times 1$: $3x+4y=18$ → $(-)7x=14$, $x=2$ | $(2,3)$ |

---

## E. Rangkuman

$$\boxed{\text{Samakan koefisien } \to \text{ Jumlah/kurang } \to \text{ Selesaikan}}$$

<div class="note">
💡 <strong>Tips:</strong> Jika koefisien sudah sama, langsung jumlah/kurang. Jika beda, cari KPK. Jumlahkan jika tanda koefisien berbeda, kurangkan jika sama.
</div>

---

## F. Latihan Soal

1. Selesaikan dengan eliminasi: $\begin{cases}x + 2y = 8\\ x - y = 2\end{cases}$
2. Selesaikan: $\begin{cases}2x + y = 7\\ 3x - y = 8\end{cases}$
3. Selesaikan: $\begin{cases}3x + 2y = 13\\ 2x + 3y = 12\end{cases}$
4. Selesaikan: $\begin{cases}4x - 3y = 10\\ 2x + y = 8\end{cases}$
5. Harga 2 kg apel dan 3 kg jeruk Rp85.000. Harga 3 kg apel dan 1 kg jeruk Rp70.000. Berapa harga per kg masing-masing?
