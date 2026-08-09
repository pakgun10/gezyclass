+++
title = "B. Translasi (Pergeseran)"
description = "Menggeser titik, garis, dan bangun datar sejauh vektor translasi (a, b)"
weight = 2
+++

## Tujuan Pembelajaran

Setelah mempelajari subbab ini, murid diharapkan mampu:

1. **Menjelaskan** pengertian translasi sebagai pergeseran
2. **Menentukan** bayangan titik, garis, dan bangun datar akibat translasi $T\binom{a}{b}$
3. **Menyelesaikan** masalah kontekstual sederhana yang melibatkan pergeseran

---

## A. Apa Itu Translasi?

Translasi adalah transformasi yang **memindahkan setiap titik sejauh dan searah yang sama**. Benda digeser **tanpa diputar** dan **tanpa diubah ukurannya**, sehingga bayangan **kongruen** dan **searah** dengan aslinya.

Translasi ditulis $T\binom{a}{b}$ dengan arti: geser $a$ satuan ke kanan (jika $a>0$) atau kiri (jika $a<0$), lalu $b$ satuan ke atas (jika $b>0$) atau ke bawah (jika $b<0$).

$$(x, y) \xrightarrow{T\binom{a}{b}} (x + a, y + b)$$

![Translasi titik A(2,3) oleh T(3,4) menjadi A'(5,7)](/images/translasi-titik.png)

---

## B. Translasi pada Titik

### Contoh 1

Titik $A(2, 3)$ ditranslasikan oleh $T\binom{3}{4}$. Tentukan bayangannya!

**Jawab:** $A'(x+a, y+b) = (2+3, 3+4) = (5, 7)$.

---

## C. Translasi pada Bangun Datar

Geser **setiap titik sudut** dengan vektor yang sama, lalu hubungkan bayangannya.

![Translasi segitiga ABC oleh T(5,-2) menjadi A'B'C'](/images/translasi-segitiga.png)

### Contoh 2

Segitiga $ABC$ dengan $A(1,1)$, $B(4,1)$, $C(2,3)$ ditranslasikan oleh $T\binom{5}{-2}$. Tentukan bayangannya!

**Jawab:**

- $A(1,1) \to A'(1+5, 1-2) = (6,-1)$
- $B(4,1) \to B'(4+5, 1-2) = (9,-1)$
- $C(2,3) \to C'(2+5, 3-2) = (7,1)$

---

## D. Translasi pada Garis

Geser **dua titik** pada garis, lalu tentukan persamaan garis baru yang melalui kedua bayangan.

![Translasi garis y=2x+1 oleh (0,-5) menjadi y=2x-4](/images/translasi-garis.png)

### Contoh 3

Garis $y = 2x + 1$ ditranslasikan oleh $T\binom{0}{-5}$. Tentukan persamaan bayangannya!

**Jawab:** Ambil titik $P(0,1)$ dan $Q(1,3)$ pada garis. Bayangan: $P'(0,-4)$ dan $Q'(1,-2)$. Gradien: $m = \frac{-2-(-4)}{1-0} = 2$. Persamaan: $y = 2x - 4$.

Cara cepat: translasi $\binom{0}{-5}$ hanya menggeser konstanta, sehingga $y' = 2x + 1 - 5 = 2x - 4$.

---

## E. Penerapan: Pergerakan Robot

Robot bergerak dari titik $A(1,1)$ ke titik $A'(4,5)$ dengan satu translasi. Tentukan vektor translasinya!

![Lintasan robot: translasi (3,4)](/images/robot.png)

**Jawab:** $a = 4 - 1 = 3$ dan $b = 5 - 1 = 4$, sehingga $T\binom{3}{4}$.

---

## F. Rangkuman

| Translasi | Rumus |
|:----------|:------|
| Titik $(x,y)$ oleh $T\binom{a}{b}$ | $(x+a, y+b)$ |
| Garis $y = mx + c$ oleh $T\binom{a}{b}$ | $y - b = m(x - a) + c$ |
| Bangun datar | geser semua titik sudut |

<div class="note">
💡 <strong>Tips:</strong> Translasi tidak mengubah gradien garis dan tidak mengubah ukuran bangun. Ciri khasnya: bayangan sejajar dan sama persis dengan aslinya.
</div>

---

## G. Latihan Soal

1. Tentukan bayangan titik $A(3, -2)$ jika ditranslasikan oleh $T\binom{4}{5}$!
2. Tentukan bayangan titik $B(-1, 6)$ jika ditranslasikan oleh $T\binom{-3}{2}$!
3. Titik $C$ ditranslasikan oleh $T\binom{2}{-1}$ menghasilkan $C'(5, 3)$. Tentukan koordinat titik $C$!
4. Segitiga $KLM$ dengan $K(0,0)$, $L(3,0)$, $M(1,4)$ ditranslasikan oleh $T\binom{-2}{3}$. Tentukan koordinat bayangannya!
5. Garis $y = x + 3$ ditranslasikan oleh $T\binom{1}{-2}$. Tentukan persamaan bayangannya!
6. Sebuah titik bergeser dari $(2, 2)$ ke $(7, -3)$. Tentukan vektor translasinya!

---

## H. Kunci Jawaban

1. $A'(7, 3)$
2. $B'(-4, 8)$
3. $C = (3, 4)$ (karena $x + 2 = 5$ dan $y - 1 = 3$)
4. $K'(-2,3)$, $L'(1,3)$, $M'(-1,7)$
5. $y' = x + 1$ (cara cepat: $y' - (-2) = (x - 1) + 3 \Rightarrow y' = x + 1$)
6. $T\binom{5}{-5}$
