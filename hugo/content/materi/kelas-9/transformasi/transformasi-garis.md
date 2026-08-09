+++
title = "F. Transformasi Tunggal pada Garis"
description = "Menentukan persamaan bayangan garis akibat refleksi, translasi, rotasi, dan dilatasi"
weight = 6
+++

## Tujuan Pembelajaran

Setelah mempelajari subbab ini, murid diharapkan mampu:

1. **Menentukan** persamaan bayangan garis lurus akibat transformasi tunggal
2. **Menggunakan** dua titik pada garis untuk menemukan bayangannya

---

## A. Strategi Umum

Untuk menentukan persamaan bayangan sebuah garis:

1. Ambil **dua titik** yang terletak pada garis (misal titik potong dengan sumbu atau dua titik mudah)
2. Transformasikan kedua titik tersebut
3. Tentukan persamaan garis yang melalui kedua bayangan

![Refleksi garis y=2x+1 terhadap sumbu x menjadi y=-2x-1](/images/transformasi-garis.png)

---

## B. Translasi pada Garis

### Contoh 1

Garis $y = 2x + 3$ ditranslasikan oleh $T\binom{4}{-1}$. Tentukan persamaan bayangannya!

**Jawab (cara cepat):** Translasi $\binom{a}{b}$ menggeser garis sehingga $y' - b = m(x' - a) + c$.

$$y' - (-1) = 2(x' - 4) + 3 \Rightarrow y' = 2x' - 8 + 3 - 1 = 2x' - 4$$

Jadi bayangannya $y' = 2x - 4$.

---

## C. Refleksi pada Garis

### Contoh 2

Garis $y = 3x - 1$ dicerminkan terhadap sumbu $x$. Tentukan persamaan bayangannya!

**Jawab:** Ambil titik $(0,-1)$ dan $(1,2)$ pada garis. Bayangan terhadap sumbu $x$: $(0,1)$ dan $(1,-2)$.

Gradien bayangan: $m = \frac{-2 - 1}{1 - 0} = -3$. Persamaan: $y = -3x + 1$.

---

## D. Rotasi pada Garis

### Contoh 3

Garis $y = 2x$ dirotasikan $90^\circ$ berlawanan arah jarum jam dengan pusat $O$. Tentukan persamaan bayangannya!

**Jawab:** Ambil titik $(0,0)$ dan $(1,2)$ pada garis. Bayangan rotasi $90^\circ$: $(0,0) \to (0,0)$ dan $(1,2) \to (-2,1)$.

Gradien bayangan: $m = \frac{1 - 0}{-2 - 0} = -\tfrac{1}{2}$. Persamaan: $y = -\tfrac{1}{2}x$.

> Perhatikan: gradien garis berubah dari $2$ menjadi $-\tfrac{1}{2}$ (saling tegak lurus), karena rotasi $90^\circ$ memutar garis sebesar sudut siku-siku.

---

## E. Dilatasi pada Garis

### Contoh 4

Garis $y = 2x + 1$ didilatasi dengan pusat $O$ dan $k = 3$. Tentukan persamaan bayangannya!

**Jawab:** Ambil titik $(0,1)$ dan $(1,3)$. Bayangan: $(0,3)$ dan $(3,9)$.

Gradien: $m = \frac{9 - 3}{3 - 0} = 2$ (tetap!). Persamaan melalui $(0,3)$: $y = 2x + 3$.

> Dilatasi dengan pusat $O$ **tidak mengubah gradien** garis; hanya menggeser titik potongnya.

---

## F. Rangkuman

| Transformasi | Pengaruh pada garis $y = mx + c$ |
|:-------------|:--------------------------------|
| Translasi $T\binom{a}{b}$ | gradien tetap, konstanta berubah |
| Refleksi sumbu $x$ | gradien menjadi $-m$ |
| Refleksi sumbu $y$ | gradien menjadi $-m$ |
| Rotasi $90^\circ$ (pusat $O$) | gradien menjadi $-\tfrac{1}{m}$ |
| Rotasi $180^\circ$ (pusat $O$) | gradien tetap |
| Dilatasi pusat $O$ | gradien tetap, konstanta dikali $k$ |

<div class="note">
💡 <strong>Tips:</strong> Jika ragu, selalu kembali ke cara dua titik — pasti benar dan tidak perlu menghafal banyak rumus.
</div>

---

## G. Latihan Soal

1. Garis $y = x + 2$ ditranslasikan oleh $T\binom{3}{1}$. Tentukan persamaan bayangannya!
2. Garis $y = -2x + 5$ dicerminkan terhadap sumbu $x$. Tentukan persamaan bayangannya!
3. Garis $y = 3x$ dirotasikan $180^\circ$ dengan pusat $O$. Tentukan persamaan bayangannya!
4. Garis $y = x + 1$ didilatasi dengan pusat $O$ dan $k = 2$. Tentukan persamaan bayangannya!
5. Garis $y = 4x - 3$ dicerminkan terhadap sumbu $y$. Tentukan persamaan bayangannya!

---

## H. Kunci Jawaban

1. $y' = x$ (karena $y' - 1 = (x' - 3) + 2 \Rightarrow y' = x'$)
2. $y' = 2x - 5$ (titik $(0,5)$, $(1,3)$ → bayangan $(0,-5)$, $(1,-3)$ → gradien $2$)
3. $y' = 3x$ (rotasi $180^\circ$ mengubah $(0,0) \to (0,0)$, $(1,3) \to (-1,-3)$; gradien tetap $3$)
4. $y' = 2x + 2$ (titik $(0,1)$, $(1,2)$ → bayangan $(0,2)$, $(2,4)$ → gradien $2$)
5. $y' = -4x - 3$ (titik $(0,-3)$, $(1,1)$ → bayangan $(0,-3)$, $(-1,1)$ → gradien $-4$)
