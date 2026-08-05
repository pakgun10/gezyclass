+++
title = "Sifat-Sifat Operasi Bilangan Berpangkat"
description = "Materi sifat-sifat operasi bilangan berpangkat untuk kelas 8: perkalian, pembagian, perpangkatan, dan contohnya"
weight = 2
aliases = ["/materi/kelas-8/sifat-sifat-operasi-bilangan-berpangkat/"]

+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan mampu:

1. **Menjelaskan** sifat-sifat operasi bilangan berpangkat
2. **Menerapkan** sifat perkalian bilangan berpangkat $a^m \times a^n = a^{m+n}$
3. **Menerapkan** sifat pembagian bilangan berpangkat $a^m \div a^n = a^{m-n}$
4. **Menerapkan** sifat perpangkatan bilangan berpangkat $(a^m)^n = a^{m \times n}$
5. **Menerapkan** sifat perkalian dan pembagian dengan basis berbeda

---

## A. Sifat Perkalian Bilangan Berpangkat

### Rumus

$$a^m \times a^n = a^{m + n}$$

dengan $a \neq 0$, serta $m$ dan $n$ bilangan bulat positif.

### Pembuktian

$$a^m \times a^n = \underbrace{a \times a \times \cdots \times a}_{m \text{ kali}} \times \underbrace{a \times a \times \cdots \times a}_{n \text{ kali}}$$

$$= \underbrace{a \times a \times a \times \cdots \times a}_{(m + n) \text{ kali}}$$

$$= a^{m + n}$$

### Contoh 1: Perkalian

Sederhanakan bentuk berikut!

| Soal | Penyelesaian |
|:---:|---|
| $2^3 \times 2^4$ | $2^{3+4} = 2^7 = 128$ |
| $5^2 \times 5^6$ | $5^{2+6} = 5^8 = 390.625$ |
| $(-3)^2 \times (-3)^5$ | $(-3)^{2+5} = (-3)^7 = -2.187$ |
| $x^4 \times x^7$ | $x^{4+7} = x^{11}$ |

> **Penting!** Sifat ini hanya berlaku jika **basisnya sama**. $2^3 \times 3^4$ tidak bisa disederhanakan dengan sifat ini.

---

## B. Sifat Pembagian Bilangan Berpangkat

### Rumus

$$a^m \div a^n = \frac{a^m}{a^n} = a^{m - n}$$

dengan $a \neq 0$, serta $m$ dan $n$ bilangan bulat positif, $m > n$.

### Pembuktian

$$\frac{a^m}{a^n} = \frac{\overbrace{a \times a \times \cdots \times a}^{m \text{ kali}}}{\underbrace{a \times a \times \cdots \times a}_{n \text{ kali}}}$$

$$= \underbrace{a \times a \times \cdots \times a}_{(m - n) \text{ kali}} = a^{m - n}$$

### Contoh 2: Pembagian

Sederhanakan bentuk berikut!

| Soal | Penyelesaian |
|:---:|---|
| $2^7 \div 2^3$ | $2^{7-3} = 2^4 = 16$ |
| $(-5)^6 \div (-5)^4$ | $(-5)^{6-4} = (-5)^2 = 25$ |
| $10^9 \div 10^5$ | $10^{9-5} = 10^4 = 10.000$ |
| $\frac{x^8}{x^2}$ | $x^{8-2} = x^6$ |

---

## C. Sifat Perpangkatan Bilangan Berpangkat

### Rumus

$$(a^m)^n = a^{m \times n}$$

dengan $a \neq 0$, serta $m$ dan $n$ bilangan bulat positif.

### Pembuktian

$$(a^m)^n = \underbrace{a^m \times a^m \times a^m \times \cdots \times a^m}_{n \text{ kali}}$$

$$= \underbrace{a \times a \times \cdots \times a}_{m \times n \text{ kali}}$$

$$= a^{m \times n}$$

### Contoh 3: Perpangkatan

Sederhanakan bentuk berikut!

| Soal | Penyelesaian |
|:---:|---|
| $(2^3)^4$ | $2^{3 \times 4} = 2^{12} = 4.096$ |
| $(5^2)^5$ | $5^{2 \times 5} = 5^{10} = 9.765.625$ |
| $((-2)^3)^2$ | $(-2)^{3 \times 2} = (-2)^6 = 64$ |
| $(x^4)^3$ | $x^{4 \times 3} = x^{12}$ |

> **Perhatikan:** $((-2)^3)^2 = (-2)^6 = 64$, sedangkan $((-2)^2)^3 = (-2)^6 = 64$. Hasilnya sama karena perkalian bersifat komutatif.

---

## D. Sifat Perpangkatan dari Suatu Perkalian

### Rumus

$$(a \times b)^n = a^n \times b^n$$

dengan $a$ dan $b$ bilangan real, serta $n$ bilangan bulat positif.

### Pembuktian

$$(a \times b)^n = \underbrace{(a \times b) \times (a \times b) \times \cdots \times (a \times b)}_{n \text{ kali}}$$

$$= \underbrace{a \times a \times \cdots \times a}_{n \text{ kali}} \times \underbrace{b \times b \times \cdots \times b}_{n \text{ kali}}$$

$$= a^n \times b^n$$

### Contoh 4: Perpangkatan Perkalian

Sederhanakan bentuk berikut!

| Soal | Penyelesaian |
|:---:|---|
| $(2 \times 3)^4$ | $2^4 \times 3^4 = 16 \times 81 = 1.296$ |
| $(2x)^5$ | $2^5 \times x^5 = 32x^5$ |
| $(4a)^3$ | $4^3 \times a^3 = 64a^3$ |
| $(-3p)^4$ | $(-3)^4 \times p^4 = 81p^4$ |

> **Alternatif:** $(2 \times 3)^4 = 6^4 = 1.296$ — hasilnya sama!

---

## E. Sifat Perpangkatan dari Suatu Pembagian

### Rumus

$$\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$$

dengan $a$ dan $b$ bilangan real, $b \neq 0$, serta $n$ bilangan bulat positif.

### Pembuktian

$$\left(\frac{a}{b}\right)^n = \underbrace{\frac{a}{b} \times \frac{a}{b} \times \cdots \times \frac{a}{b}}_{n \text{ kali}}$$

$$= \frac{\overbrace{a \times a \times \cdots \times a}^{n \text{ kali}}}{\underbrace{b \times b \times \cdots \times b}_{n \text{ kali}}} = \frac{a^n}{b^n}$$

### Contoh 5: Perpangkatan Pembagian

Sederhanakan bentuk berikut!

| Soal | Penyelesaian |
|:---:|---|
| $\left(\frac{2}{5}\right)^3$ | $\frac{2^3}{5^3} = \frac{8}{125}$ |
| $\left(\frac{x}{y}\right)^4$ | $\frac{x^4}{y^4}$ |
| $\left(\frac{3}{4}\right)^2$ | $\frac{3^2}{4^2} = \frac{9}{16}$ |

---

## F. Rangkuman Sifat-Sifat

| No | Sifat | Rumus | Syarat |
|:--:|:----:|:-----:|:------:|
| 1 | **Perkalian** | $a^m \times a^n = a^{m+n}$ | Basis sama |
| 2 | **Pembagian** | $a^m \div a^n = a^{m-n}$ | Basis sama, $m > n$ |
| 3 | **Perpangkatan** | $(a^m)^n = a^{m \times n}$ | — |
| 4 | **Perkalian dipangkatkan** | $(a \times b)^n = a^n \times b^n$ | — |
| 5 | **Pembagian dipangkatkan** | $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ | $b \neq 0$ |

### Tips Menghafal

<div class="note">
💡 <strong>Tips:</strong> Kalau ragu, jabarkan saja ke bentuk perkalian berulang. Misalnya $(2^3)^2 = (2 \times 2 \times 2)^2 = (8)^2 = 64$, dan $2^{3 \times 2} = 2^6 = 64$. Cocok! Berarti rumusnya benar.
</div>

---

## G. Contoh Soal Cerita

### Contoh 6: Volume Balok

Sebuah balok memiliki panjang $2^3$ cm, lebar $2^2$ cm, dan tinggi $2^4$ cm. Hitunglah volume balok tersebut dalam bentuk bilangan berpangkat!

**Penyelesaian:**

$$V = p \times l \times t$$

$$V = 2^3 \times 2^2 \times 2^4$$

$$V = 2^{3+2+4} = 2^9$$

$$V = 512 \text{ cm}^3$$

Jadi, volume balok tersebut adalah $\mathbf{512 \text{ cm}^3}$ atau $2^9 \text{ cm}^3$.

---

## H. Latihan Soal

Kerjakan soal-soal berikut!

1. Sederhanakan $3^4 \times 3^5$ dalam bentuk pangkat!
2. Hitung $(-2)^8 \div (-2)^5$!
3. Sederhanakan $(5^3)^4$ dalam bentuk pangkat!
4. Nyatakan $(3 \times 4)^3$ dalam bentuk $a^n \times b^n$!
5. Sederhanakan $\left(\frac{6}{7}\right)^2$ dalam bentuk $\frac{a^n}{b^n}$!
6. Hitung $2^3 \times 2^4 \div 2^2$!
7. Jika $a = 2$, hitung $a^2 \times a^3 \div a^4$!
8. Sederhanakan $(x^2 \times x^5)^3$ dalam bentuk $x^n$!
9. Sebuah persegi memiliki panjang sisi $2^3$ cm. Hitung luas persegi dalam bentuk pangkat!
10. Mana yang lebih besar: $(3^2)^3$ atau $3^{2^3}$?

---

## I. Kunci Jawaban

1. $3^4 \times 3^5 = 3^{4+5} = 3^9$
2. $(-2)^8 \div (-2)^5 = (-2)^{8-5} = (-2)^3 = -8$
3. $(5^3)^4 = 5^{3 \times 4} = 5^{12}$
4. $(3 \times 4)^3 = 3^3 \times 4^3$
5. $\left(\frac{6}{7}\right)^2 = \frac{6^2}{7^2} = \frac{36}{49}$
6. $2^3 \times 2^4 \div 2^2 = 2^{3+4-2} = 2^5 = 32$
7. $a^2 \times a^3 \div a^4 = a^{2+3-4} = a^1 = 2$
8. $(x^2 \times x^5)^3 = (x^{2+5})^3 = (x^7)^3 = x^{7 \times 3} = x^{21}$
9. $L = s^2 = (2^3)^2 = 2^{3 \times 2} = 2^6 = 64 \text{ cm}^2$
10. $(3^2)^3 = 3^6 = 729$, sedangkan $3^{2^3} = 3^8 = 6.561$. Jadi $3^{2^3}$ lebih besar.
