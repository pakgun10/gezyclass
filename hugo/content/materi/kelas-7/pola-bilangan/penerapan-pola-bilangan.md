+++
title = "E. Penerapan Pola Bilangan"
description = "Menyelesaikan masalah kontekstual yang melibatkan pola bilangan dalam kehidupan sehari-hari"
weight = 5
+++

## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan mampu:

1. **Mengidentifikasi** pola bilangan dalam masalah sehari-hari
2. **Merumuskan** masalah ke dalam model pola bilangan
3. **Menyelesaikan** masalah kontekstual yang melibatkan pola bilangan
4. **Memprediksi** nilai pada pola yang lebih jauh

---

## A. Pola dalam Arsitektur

### Contoh 1: Tangga

Sebuah tangga memiliki anak tangga dengan tinggi: anak ke-1 = 12 cm, ke-2 = 18 cm, ke-3 = 24 cm. Hitung tinggi anak tangga ke-12!

**Penyelesaian:**

$a = 12$, $b = 6$

$$U_{12} = 12 + 11 \times 6 = 12 + 66 = 78 \text{ cm}$$

### Contoh 2: Susunan Genteng

Baris paling atas genteng = 1 genteng. Baris kedua = 3 genteng. Baris ketiga = 5 genteng. Jika pola berlanjut, berapa genteng pada baris ke-20?

$a = 1$, $b = 2$

$$U_{20} = 1 + 19 \times 2 = 39 \text{ genteng}$$

---

## B. Pola dalam Ekonomi

### Contoh 3: Keuntungan Toko

Seorang pedagang mencatat keuntungan: hari ke-1 = Rp20.000, ke-2 = Rp26.000, ke-3 = Rp32.000, ke-4 = Rp38.000. Jika pola tetap, berapa keuntungan pada hari ke-14?

$a = 20.000$, $b = 6.000$

$$U_{14} = 20.000 + 13 \times 6.000 = 20.000 + 78.000 = 98.000$$

Jadi, keuntungan hari ke-14 adalah **Rp98.000**.

### Contoh 4: Target Penjualan

Seorang sales menargetkan: bulan ke-1 = 5 unit, ke-2 = 8 unit, ke-3 = 11 unit. Pada bulan ke berapa targetnya mencapai 47 unit?

$a = 5$, $b = 3$

$$U_n = 5 + (n-1)3 = 3n + 2$$

$$3n + 2 = 47 \Rightarrow 3n = 45 \Rightarrow n = 15$$

Jadi, target 47 unit tercapai pada **bulan ke-15**.

---

## C. Pola dalam Alam

### Contoh 5: Fibonacci pada Bunga

Pola kelopak bunga sering mengikuti bilangan Fibonacci:

$$1, 1, 2, 3, 5, 8, 13, 21, 34, ...$$

Bunga lili memiliki 3 kelopak, bunga aster memiliki 21 atau 34 kelopak.

Aturan Fibonacci: **setiap suku = jumlah dua suku sebelumnya**

$$U_n = U_{n-1} + U_{n-2}$$

### Contoh 6: Pertumbuhan Tanaman

Tinggi tanaman pada minggu ke-1 = 4 cm, ke-2 = 8 cm, ke-3 = 12 cm. Berapa tinggi pada minggu ke-10?

$a = 4$, $b = 4$

$$U_{10} = 4 + 9 \times 4 = 40 \text{ cm}$$

---

## D. Pola dalam Permainan

### Contoh 7: Turnamen Catur

Dalam turnamen catur, setiap babak menghilangkan setengah peserta. Jika mula-mula 64 peserta, berapa peserta pada babak ke-4?

$$64, 32, 16, 8, ...$$

Ini barisan geometri dengan $r = \frac{1}{2}$

Babak ke-4: $64 \times \left(\frac{1}{2}\right)^3 = 8$ peserta

### Contoh 8: Menyusun Bola

Seorang anak menyusun bola dengan pola: baris ke-1 = 1 bola, ke-2 = 2 bola, ke-3 = 3 bola, dan seterusnya. Jika ia menyusun 10 baris, berapa total bola?

Ini adalah barisan: $1, 2, 3, 4, ..., 10$

Jumlah = $\frac{10}{2}(1 + 10) = 5 \times 11 = 55$ bola

---

## E. Pola dalam Konstruksi

### Contoh 9: Pipa yang Ditumpuk

Pipa-pipa ditumpuk: baris paling atas 1 pipa, baris kedua 2 pipa, baris ketiga 3 pipa, dst. Jika ada 15 baris, berapa total pipa?

$S_{15} = \frac{15}{2}(1 + 15) = 7,5 \times 16 = 120$ pipa

### Contoh 10: Biaya Produksi

Biaya produksi barang: unit ke-1 = Rp50.000, unit ke-2 = Rp48.000, unit ke-3 = Rp46.000. Jika pola berlanjut, berapa biaya untuk unit ke-20?

$a = 50.000$, $b = -2.000$

$$U_{20} = 50.000 + 19 \times (-2.000) = 50.000 - 38.000 = 12.000$$

---

## F. Rangkuman

| No | Aplikasi | Pola | Konsep |
|:--:|:---------|:----|:-------|
| 1 | **Arsitektur** | Tangga, genteng | Barisan aritmetika |
| 2 | **Ekonomi** | Keuntungan, target | $U_n = a + (n-1)b$ |
| 3 | **Alam** | Pertumbuhan, kelopak | Fibonaci, aritmetika |
| 4 | **Permainan** | Turnamen, menyusun bola | Geometri, deret |
| 5 | **Konstruksi** | Pipa, biaya | Deret aritmetika |

<div class="note">
💡 <strong>Tips:</strong> Dalam soal cerita, cari dulu $U_1$, $U_2$, $U_3$. Jika selisih tetap → gunakan rumus barisan aritmetika. Tanyakan: naik/turun berapa setiap langkah? Itulah beda ($b$).
</div>

---

## G. Latihan Soal

1. Sebuah kolam: hari ke-1 terisi 50 liter, ke-2 terisi 65 liter, ke-3 terisi 80 liter. Berapa volume pada hari ke-10?
2. Tabungan minggu ke-1 = Rp15.000, ke-2 = Rp22.000, ke-3 = Rp29.000. Berapa tabungan ke-12?
3. Produksi pabrik: bulan ke-1 = 100 unit, ke-2 = 95 unit, ke-3 = 90 unit. Berapa produksi bulan ke-15?
4. Sebuah taman: baris ke-1 = 10 bibit, ke-2 = 14 bibit, ke-3 = 18 bibit. Baris ke berapa yang berisi 50 bibit?
5. Biaya sewa: jam ke-1 = Rp30.000, ke-2 = Rp50.000, ke-3 = Rp70.000. Berapa biaya untuk 8 jam?
6. Bakteri membelah menjadi 2 setiap jam. Mula-mula 1 bakteri. Berapa bakteri setelah 7 jam?
7. Sebuah pohon: tahun ke-1 tinggi 2 m, ke-2 = 3,5 m, ke-3 = 5 m. Berapa tinggi setelah 10 tahun?
8. Seorang atlet lari: hari ke-1 = 2 km, ke-2 = 2,5 km, ke-3 = 3 km. Pada hari ke berapa ia berlari 8 km?
9. Kursi baris ke-1 = 15 kursi, ke-2 = 18 kursi, ke-3 = 21 kursi. Berapa total kursi pada 12 baris pertama?
10. Sebuah tangga: anak ke-1 = 20 cm, ke-2 = 17 cm, ke-3 = 14 cm. Berapa tinggi anak tangga ke-10?

---

## H. Kunci Jawaban

1. $a=50, b=15$. $U_{10} = 50 + 9(15) = 185$ liter
2. $a=15.000, b=7.000$. $U_{12} = 15.000 + 11(7.000) = 92.000$
3. $a=100, b=-5$. $U_{15} = 100 + 14(-5) = 30$ unit
4. $U_n = 10 + (n-1)4 = 4n + 6$. $4n+6=50 \Rightarrow n=11$
5. $a=30.000, b=20.000$. $U_8 = 30.000 + 7(20.000) = 170.000$
6. Barisan geometri $r=2$. $U_7 = 1 \times 2^{6} = 64$ bakteri
7. $a=2, b=1,5$. $U_{10} = 2 + 9(1,5) = 15,5$ m
8. $U_n = 2 + (n-1)0,5 = 0,5n + 1,5$. $0,5n + 1,5 = 8 \Rightarrow n=13$
9. $a=15, b=3$. $U_{12} = 15 + 11(3) = 48$. $S_{12} = \frac{12}{2}(15 + 48) = 6 \times 63 = 378$ kursi
10. $a=20, b=-3$. $U_{10} = 20 + 9(-3) = -7$ cm (tidak masuk akal — berarti pola hanya berlaku sampai beberapa anak tangga)
