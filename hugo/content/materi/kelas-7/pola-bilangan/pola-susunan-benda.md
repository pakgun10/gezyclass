+++
title = "Pola Susunan Benda"
description = "Pola geometri dari susunan benda seperti korek api, ubin, dan lingkaran"
weight = 3
+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan mampu:

1. **Mengidentifikasi** pola dari susunan benda
2. **Menentukan** rumus banyak benda pada pola ke-$n$
3. **Menghitung** banyak benda pada pola tertentu
4. **Menyelesaikan** masalah kontekstual pola susunan benda

---

## A. Pola Korek Api

### Pola Persegi dari Korek Api

Perhatikan susunan persegi dari batang korek api berikut:

| Pola ke-1 | Pola ke-2 | Pola ke-3 |
|:---------:|:---------:|:---------:|
| $\square$ | $\square\square$ | $\square\square\square$ |
| 4 batang | 7 batang | 10 batang |

**Pola banyak batang:** $4, 7, 10, 13, ...$

$a = 4$, $b = 3$

$$U_n = 4 + (n-1) \times 3 = 3n + 1$$

**Contoh:** Pola ke-10 → $3 \times 10 + 1 = 31$ batang

### Pola Segitiga dari Korek Api

| Pola ke-1 | Pola ke-2 | Pola ke-3 |
|:---------:|:---------:|:---------:|
| $\triangle$ | $\triangle\triangle$ | $\triangle\triangle\triangle$ |
| 3 batang | 5 batang | 7 batang |

**Pola banyak batang:** $3, 5, 7, 9, ...$

$a = 3$, $b = 2$

$$U_n = 3 + (n-1) \times 2 = 2n + 1$$

**Contoh:** Pola ke-8 → $2 \times 8 + 1 = 17$ batang

---

## B. Tabel Pola Susunan Benda

| Pola | Suku 1 | Suku 2 | Suku 3 | Suku 4 | Rumus $U_n$ |
|:----:|:------:|:------:|:------:|:------:|:-----------:|
| Persegi korek api | 4 | 7 | 10 | 13 | $3n + 1$ |
| Segitiga korek api | 3 | 5 | 7 | 9 | $2n + 1$ |
| Persegi satuan | 1 | 4 | 9 | 16 | $n^2$ |
| Persegi panjang | 2 | 6 | 12 | 20 | $n(n+1)$ |
| Lingkaran | 1 | 3 | 5 | 7 | $2n - 1$ |

### Contoh 1: Berbagai Pola Korek Api

| Susunan | Pola bilangan | Rumus | Pola ke-10 |
|:--------|:-------------:|:-----:|:----------:|
| Segitiga siku-siku dari batang korek | $3, 5, 7, 9$ | $2n + 1$ | $21$ batang |
| Jajaran genjang dari batang korek | $6, 10, 14, 18$ | $4n + 2$ | $42$ batang |
| Rumah dari batang korek | $6, 11, 16, 21$ | $5n + 1$ | $51$ batang |

---

## C. Pola Ubin/Lantai

### Contoh 2: Ubin Hitam Putih

Sebuah lantai dipasang ubin dengan pola: ubin putih di pinggir, ubin hitam di tengah.

| Pola ke-1 | Pola ke-2 | Pola ke-3 |
|:---------:|:---------:|:---------:|
| $1 \times 1$ | $2 \times 2$ | $3 \times 3$ |
| Ubin putih: 4 | Ubin putih: 8 | Ubin putih: 12 |
| Ubin hitam: 1 | Ubin hitam: 4 | Ubin hitam: 9 |

**Pola ubin putih:** $4, 8, 12, 16, ...$ → $U_n = 4n$

**Pola ubin hitam:** $1, 4, 9, 16, ...$ → $U_n = n^2$

**Pola ke-5:** Ubin putih = $4 \times 5 = 20$, Ubin hitam = $5^2 = 25$

---

## D. Pola Lingkaran/Bola

### Contoh 3: Susunan Bola

Perhatikan susunan bola berikut:

| Pola ke-1 | Pola ke-2 | Pola ke-3 |
|:---------:|:---------:|:---------:|
| $\circ$ | $\circ\ \circ$ | $\circ\ \circ\ \circ$ |
| $\circ\ \circ$ | $\circ\ \circ\ \circ$ |
| $\circ\ \circ\ \circ$ |
| 1 bola | 3 bola | 6 bola |

Ini adalah **pola bilangan segitiga**:

$$1, 3, 6, 10, 15, ...$$

$$U_n = \frac{n(n+1)}{2}$$

**Contoh:** Pola ke-8 → $\frac{8 \times 9}{2} = 36$ bola

---

## E. Contoh Soal Cerita

### Contoh 4: Pagar Kayu

Seorang tukang membuat pagar dari bilah kayu. Pola pertama menggunakan 5 bilah, pola kedua 8 bilah, pola ketiga 11 bilah. Jika pola berlanjut, berapa bilah pada pola ke-15?

**Penyelesaian:**

$a = 5$, $b = 3$

$$U_{15} = 5 + 14 \times 3 = 5 + 42 = 47 \text{ bilah}$$

### Contoh 5: Kursi Pertemuan

Pada sebuah pertemuan, kursi diatur dengan pola: baris ke-1 = 5 kursi, ke-2 = 8 kursi, ke-3 = 11 kursi. Berapa total kursi pada 10 baris pertama?

**Penyelesaian:**

$a = 5$, $b = 3$

$$U_{10} = 5 + 9 \times 3 = 32$$

Jumlah 10 suku pertama:

$$S_n = \frac{n}{2}(a + U_n)$$

$$S_{10} = \frac{10}{2}(5 + 32) = 5 \times 37 = 185 \text{ kursi}$$

---

## F. Rangkuman

| No | Pola Susunan | Barisan | Rumus $U_n$ |
|:--:|:------------:|:-------:|:-----------:|
| 1 | **Persegi korek api** | $4, 7, 10, 13$ | $3n + 1$ |
| 2 | **Segitiga korek api** | $3, 5, 7, 9$ | $2n + 1$ |
| 3 | **Persegi satuan** | $1, 4, 9, 16$ | $n^2$ |
| 4 | **Segitiga bola** | $1, 3, 6, 10$ | $\frac{n(n+1)}{2}$ |
| 5 | **Ubin putih pinggir** | $4, 8, 12, 16$ | $4n$ |

<div class="note">
💡 <strong>Tips:</strong> Untuk pola susunan benda, hitung dulu banyak benda pada pola ke-1, 2, 3. Jika membentuk barisan aritmetika, gunakan rumus $U_n = a + (n-1)b$.
</div>

---

## G. Latihan Soal

1. Pola korek api persegi: $4, 7, 10, 13, ...$ Berapa batang pada pola ke-12?
2. Pola korek api segitiga: $3, 5, 7, 9, ...$ Berapa batang pada pola ke-20?
3. Susunan lingkaran membentuk pola segitiga: $1, 3, 6, 10, ...$ Berapa lingkaran pada pola ke-7?
4. Ubin putih pada tepi: $4, 8, 12, 16, ...$ Berapa ubin putih pada pola ke-15?
5. Susunan kursi: baris ke-1 = 8 kursi, ke-2 = 11 kursi, ke-3 = 14 kursi. Berapa kursi pada baris ke-10?
6. Pola pagar: $6, 10, 14, 18, ...$ Berapa bilah pada pola ke-25?
7. Pola batang korek rumah: $6, 11, 16, 21, ...$ Tentukan rumus $U_n$!
8. Pola ke-1 = 2 lingkaran, ke-2 = 4, ke-3 = 6. Berapa lingkaran pola ke-30?
9. Sebuah tangga: anak tangga ke-1 = 5 cm, ke-2 = 8 cm, ke-3 = 11 cm. Berapa tinggi anak tangga ke-8?
10. Perhatikan pola: 
    - Pola 1: 2 batang
    - Pola 2: 5 batang
    - Pola 3: 8 batang
    - Pola 4: 11 batang
    Tentukan rumus $U_n$ dan banyak batang pada pola ke-20!

---

## H. Kunci Jawaban

1. $U_{12} = 3(12) + 1 = 37$ batang
2. $U_{20} = 2(20) + 1 = 41$ batang
3. $U_7 = \frac{7 \times 8}{2} = 28$ lingkaran
4. $U_{15} = 4 \times 15 = 60$ ubin
5. $a=8, b=3$. $U_{10} = 8 + 9(3) = 35$ kursi
6. $a=6, b=4$. $U_{25} = 6 + 24(4) = 102$ bilah
7. $a=6, b=5$. $U_n = 5n + 1$
8. $a=2, b=2$. $U_{30} = 2 + 29(2) = 60$ lingkaran
9. $a=5, b=3$. $U_8 = 5 + 7(3) = 26$ cm
10. $a=2, b=3$. $U_n = 3n - 1$. $U_{20} = 3(20) - 1 = 59$ batang
