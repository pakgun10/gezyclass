+++
title = "D. Dilatasi (Perbesaran dan Perkecilan)"
description = "Memperbesar atau memperkecil titik dan bangun datar dengan faktor skala k"
weight = 4
+++

## Tujuan Pembelajaran

Setelah mempelajari subbab ini, murid diharapkan mampu:

1. **Menjelaskan** pengertian dilatasi dan faktor skala $k$
2. **Menentukan** bayangan titik dan bangun datar akibat dilatasi dengan pusat $O(0,0)$ dan faktor skala $k$
3. **Membedakan** dilatasi yang memperbesar ($k > 1$) dan memperkecil ($0 < k < 1$)

---

## A. Apa Itu Dilatasi?

Dilatasi adalah transformasi yang **mengubah ukuran** bangun (memperbesar atau memperkecil) dengan **bentuk yang tetap**. Berbeda dengan refleksi, translasi, dan rotasi (yang mempertahankan ukuran), dilatasi menghasilkan bayangan yang **sebangun** dengan aslinya.

$$(x, y) \xrightarrow{D_{O,k}} (kx, ky)$$

- Jika $k > 1$: bangun **diperbesar**
- Jika $0 < k < 1$: bangun **diperkecil**
- Jika $k < 0$: bangun diperbesar/diperkecil **berlawanan arah** dari pusat

![Dilatasi segitiga dengan pusat O dan faktor skala k=2 (diperbesar)](/images/dilatasi-perbesar.png)

---

## B. Dilatasi dengan Faktor Skala $k > 1$ (Memperbesar)

### Contoh 1

Segitiga $ABC$ dengan $A(1,1)$, $B(3,1)$, $C(2,4)$ didilatasi dengan pusat $O(0,0)$ dan faktor skala $k = 2$. Tentukan bayangannya!

**Jawab:** $(x, y) \to (2x, 2y)$:

- $A(1,1) \to A'(2,2)$
- $B(3,1) \to B'(6,2)$
- $C(2,4) \to C'(4,8)$

Setiap panjang sisi bayangan **2 kali** panjang sisi aslinya.

---

## C. Dilatasi dengan Faktor Skala $0 < k < 1$ (Memperkecil)

![Dilatasi persegi dengan faktor skala k=1/2 (diperkecil)](/images/dilatasi-perkecil.png)

### Contoh 2

Persegi $ABCD$ dengan titik sudut $(0,0)$, $(4,0)$, $(4,4)$, $(0,4)$ didilatasi dengan pusat $O$ dan $k = \tfrac{1}{2}$. Tentukan bayangannya!

**Jawab:** $(x, y) \to \left(\tfrac{1}{2}x, \tfrac{1}{2}y\right)$:

- $(0,0) \to (0,0)$
- $(4,0) \to (2,0)$
- $(4,4) \to (2,2)$
- $(0,4) \to (0,2)$

Bayangan berupa persegi berukuran $2 \times 2$, setengah dari ukuran aslinya.

---

## D. Penerapan: Zoom Foto

Memperbesar foto pada layar HP atau komputer adalah contoh dilatasi. Jika sebuah foto $4 \text{ cm} \times 6 \text{ cm}$ di-zoom $2\times$, ukurannya menjadi $8 \text{ cm} \times 12 \text{ cm}$.

![Zoom foto 2x = dilatasi k=2](/images/zoom.png)

---

## E. Rangkuman

| Dilatasi pusat $O$, faktor $k$ | Rumus |
|:------------------------------|:------|
| Titik $(x, y)$ | $(kx, ky)$ |
| $k > 1$ | memperbesar |
| $0 < k < 1$ | memperkecil |
| Bangun datar | kalikan setiap koordinat titik sudut dengan $k$ |

<div class="note">
💡 <strong>Tips:</strong> Luas bayangan = $k^2 \times$ luas aslinya. Jika $k = 2$, luas bayangan 4 kali luas aslinya!
</div>

---

## F. Latihan Soal

1. Tentukan bayangan titik $A(3, 5)$ jika didilatasi dengan pusat $O$ dan faktor skala $k = 2$!
2. Tentukan bayangan titik $B(-4, 6)$ jika didilatasi dengan pusat $O$ dan faktor skala $k = \tfrac{1}{2}$!
3. Titik $C(2, -3)$ didilatasi dengan pusat $O$ menghasilkan $C'(6, -9)$. Berapa faktor skala $k$?
4. Persegi panjang dengan titik sudut $(1,1)$, $(3,1)$, $(3,2)$, $(1,2)$ didilatasi dengan pusat $O$ dan $k = 3$. Tentukan koordinat bayangannya!
5. Sebuah lingkaran berjari-jari $4$ cm diperbesar dengan dilatasi $k = 3$. Berapa jari-jari bayangannya?

---

## G. Kunci Jawaban

1. $A'(6, 10)$
2. $B'(-2, 3)$
3. $k = 3$ (karena $2k = 6$ dan $-3k = -9$)
4. $(3,3)$, $(9,3)$, $(9,6)$, $(3,6)$
5. $12$ cm (karena $4 \times 3$)
