+++
title = "G. Transformasi pada Bangun Datar dan Masalah Kontekstual"
description = "Menerapkan transformasi tunggal pada bangun datar dan menyelesaikan masalah sehari-hari"
weight = 7
+++

## Tujuan Pembelajaran

Setelah mempelajari subbab ini, murid diharapkan mampu:

1. **Menentukan** bayangan bangun datar akibat transformasi tunggal dengan cara mentransformasikan titik-titik sudutnya
2. **Menyelesaikan** masalah kontekstual yang melibatkan transformasi (pola batik, desain, pergerakan benda)

---

## A. Transformasi pada Bangun Datar

Prinsipnya sederhana: **transformasikan semua titik sudut**, lalu hubungkan bayangan titik-titik sudut tersebut.

![Rotasi persegi panjang 90° dengan pusat O](/images/transformasi-bangun.png)

### Contoh 1

Persegi panjang $ABCD$ dengan $A(1,1)$, $B(3,1)$, $C(3,5)$, $D(1,5)$ dicerminkan terhadap sumbu $y$. Tentukan bayangannya!

**Jawab:** $(x,y) \to (-x,y)$:

- $A(1,1) \to A'(-1,1)$
- $B(3,1) \to B'(-3,1)$
- $C(3,5) \to C'(-3,5)$
- $D(1,5) \to D'(-1,5)$

Bayangan berupa persegi panjang dengan ukuran sama di sisi kiri sumbu $y$.

---

## B. Masalah Kontekstual 1: Pola Batik

Motif batik sering dibuat dengan **mencerminkan** satu motif dasar berulang-ulang terhadap sumbu simetri.

![Pola batik yang dibentuk dari refleksi motif dasar](/images/batik.png)

### Contoh Soal

Sebuah motif dasar berbentuk segitiga dengan titik sudut $(0.6, 3)$, $(3.4, 3)$, dan $(2, 1)$. Motif tersebut dicerminkan terhadap sumbu $y$ untuk membentuk pasangan motif yang simetris. Tentukan koordinat motif bayangannya!

**Jawab:** $(x, y) \to (-x, y)$:

- $(0.6, 3) \to (-0.6, 3)$
- $(3.4, 3) \to (-3.4, 3)$
- $(2, 1) \to (-2, 1)$

Jadi motif bayangan memiliki titik sudut $(-0.6, 3)$, $(-3.4, 3)$, dan $(-2, 1)$.

---

## C. Masalah Kontekstual 2: Lintasan Robot

Robot pengantar barang di sebuah pabrik bergerak dari titik $A(1, 1)$ menuju $B(4, 5)$ dengan satu translasi, lalu berputar $90^\circ$ berlawanan arah jarum jam dengan pusat $O$ untuk menghadap tujuan berikutnya.

![Lintasan robot: translasi (3,4)](/images/robot.png)

### Contoh Soal

a. Tentukan vektor translasi dari $A$ ke $B$!

b. Jika posisi robot setelah translasi adalah $B(4,5)$, tentukan posisinya setelah rotasi $90^\circ$ berlawanan arah jarum jam dengan pusat $O$!

**Jawab:**

a. $T = \binom{4-1}{5-1} = \binom{3}{4}$

b. $(4, 5) \xrightarrow{R_{90^\circ}} (-5, 4)$. Jadi posisi akhir robot $(-5, 4)$.

---

## D. Masalah Kontekstual 3: Peta dan Denah

Pada sebuah denah, taman berbentuk segitiga dengan titik sudut $P(1,1)$, $Q(3,1)$, $R(2,3)$ akan diperbesar $2$ kali dengan pusat $O$ untuk keperluan perluasan. Tentukan koordinat bayangan taman!

**Jawab:** $(x,y) \to (2x, 2y)$:

- $P(1,1) \to P'(2,2)$
- $Q(3,1) \to Q'(6,2)$
- $R(2,3) \to R'(4,6)$

Luas taman baru = $2^2 = 4$ kali luas taman semula.

---

## E. Rangkuman

| Objek | Cara mentransformasikan |
|:------|:------------------------|
| Titik | Gunakan rumus transformasi langsung |
| Garis | Transformasikan 2 titik, cari persamaan garis baru |
| Bangun datar | Transformasikan semua titik sudut, hubungkan bayangannya |

<div class="note">
💡 <strong>Contoh transformasi di sekitar kita:</strong> cermin (refleksi), eskalator dan pergeseran layar HP (translasi), kipas angin dan jarum jam (rotasi), zoom kamera/foto (dilatasi).
</div>

---

## F. Latihan Soal

1. Trapesium dengan titik sudut $(1,1)$, $(4,1)$, $(3,3)$, $(2,3)$ ditranslasikan oleh $T\binom{-2}{4}$. Tentukan koordinat bayangannya!
2. Segitiga $ABC$ dengan $A(2,1)$, $B(5,1)$, $C(3,4)$ dicerminkan terhadap sumbu $y$. Tentukan koordinat bayangannya!
3. Persegi dengan titik sudut $(1,1)$, $(3,1)$, $(3,3)$, $(1,3)$ dirotasikan $90^\circ$ berlawanan arah jarum jam dengan pusat $O$. Tentukan koordinat bayangannya!
4. Segitiga dengan titik sudut $(1,1)$, $(2,1)$, $(1.5, 2)$ didilatasi dengan pusat $O$ dan $k = 4$. Tentukan koordinat bayangannya!
5. Sebuah layar HP berukuran $6 \text{ cm} \times 12 \text{ cm}$ di-zoom $1.5$ kali. Berapa ukuran layar yang baru?

---

## G. Kunci Jawaban

1. $(-1,5)$, $(2,5)$, $(1,7)$, $(0,7)$
2. $A'(-2,1)$, $B'(-5,1)$, $C'(-3,4)$
3. $(-1,1)$, $(-1,3)$, $(-3,3)$, $(-3,1)$ (tiap titik $(x,y) \to (-y,x)$)
4. $(4,4)$, $(8,4)$, $(6,8)$
5. $9 \text{ cm} \times 18 \text{ cm}$
