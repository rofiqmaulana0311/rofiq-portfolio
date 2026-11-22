# Rofiq Maulana: Portfolio

Website portofolio brand designer. Satu halaman statis: tanpa build, tanpa framework.
Buka `index.html` lewat server lokal (mis. `npx serve .`) atau upload seluruh folder ke hosting
(GitHub Pages, Netlify, Vercel).

## Struktur

```
.
├── index.html          # tampilan & animasi (tidak perlu disentuh untuk ganti konten)
├── 404.html            # halaman 404: puzzle logogram (GitHub Pages memakainya otomatis)
├── content.js          # SEMUA ISI: proyek, logo, poster, foto potret
├── img/
│   ├── portrait.webp   # foto potret (hero, about, intro)
│   ├── portrait.jpg
│   ├── logo-white.*    # logogram versi putih (hero, footer)
│   ├── logo-black.*    # logogram versi hitam
│   └── favicon.png
├── assets/
│   ├── work/           # 1 folder per studi kasus: p01-nama/01.jpg, 02.jpg, ...
│   ├── marks/          # 1 file per logo: m01-nama.svg
│   └── other/          # 1 file per poster/print: o01-nama.jpg
└── fonts/              # opsional, font yang di-host sendiri
```

## Mengganti konten

| Ingin mengganti | Taruh file di | Lalu ubah di `content.js` |
|---|---|---|
| Foto potret | `img/portrait.webp` | `PORTRAIT` (kalau nama file beda) |
| Gambar studi kasus | `assets/work/p01-.../01.jpg, 02.jpg…` | `shots:W("p01-...", jumlah)` |
| Nama, info, tahun proyek | – | `PROJECTS` |
| Logo di section Marks | `assets/marks/m01-....svg` | `src` di `MARKS` |
| Poster / print | `assets/other/o01-....jpg` | `src` & `ratio` di `ARCHIVE` |
| Baris "Currently" di hero | – | `CURRENTLY` |
| Link sosial & email | – | bagian footer di `index.html` (cari "EDIT DI SINI") |

Setiap folder punya `README.md` berisi nama file yang diharapkan.
Selama `src` kosong / jumlah gambar `0`, website memakai placeholder, jadi tidak ada gambar rusak.

## Tips gambar

- Studi kasus: lebar 2000 px, JPG kualitas ~85 atau WebP.
- Logo: SVG satu warna, latar transparan.
- Poster: sisi panjang 2000 px.

## Fitur interaktif

- **Intro infinite zoom**: kamera menembus kartu proyek dan mendarat di foto potret.
- **Sistem kapur**: grain diam hanya di bidang hitam; foto, tirai studi kasus, dan portal membuka dengan tepi bergerigi.
- **Footer papan tulis**: ikon batang kapur = Draw, ikon penghapus di bawahnya = Erase, ikon panah melingkar = Reset (hapus coretan, logo kembali); ikon panah atas di kanan bawah = Back to top, lalu tekan & seret. Menggambar dan menghapus hanya berlaku pada bentuk logo itu sendiri, bukan kotak bingkainya: Erase mengikis logo, Draw menggambar kembali bagian logo yang terhapus. Di luar logo tidak ada efek, dan di HP halaman tetap bisa di-scroll. Di HP logo dan tombolnya lebih kecil supaya tidak bertumpuk. Saat Draw, titik gambar ada di ujung kapur (pojok kiri atas cursor); saat Erase, ikon penghapus selebar kuas (`BRUSH`).
- **Morph**: klik proyek, pratinjau berubah menjadi gambar pembuka studi kasus.
- **Marks**: garis konstruksi, scale test (16 px sampai penuh), dan invert.
- **Portal Other Side**: pusaran poster tersedot ke titik hitam; saat hover, huruf OTHER/SIDE meluncur halus ke tengah; masuk hanya dengan klik (atau ketuk di HP).
- **Statement About**: setelah section About menempel (200svh), kata demi kata muncul (pudar biasa, tanpa garis luar, gerak, blur, atau huruf acak); "the 404" tetap link ke halaman 404 tanpa garis bawah; kalimat hanya tampil selama section menempel, jadi tidak pernah terlihat bergerak naik
- **Work: spiral 3D (WebGL)**: cover proyek tersusun memutar seperti tangga spiral di ruang gelap bergrid tipis, terinspirasi pacomepertant.com. Scroll memutar spiral; saat bergerak cover membusur ke samping, lalu spiral terus berputar pelan sendiri. Sisi belakang cover tampil kabur. Cover muncul dari bawah saat section pertama terlihat. Hover memperbesar isi cover, klik membuka studi kasus. Hanya cover, tanpa teks. Cover diambil dari gambar pertama tiap proyek (`assets/work/pXX-.../01.jpg`, rasio ideal 1.7:1); selama belum ada, dibuat otomatis dari warna brand. Tanpa WebGL, tampil daftar link biasa.
- **Marks: orbit lubang hitam**: di ruang gelap bergrid yang sama dengan Work, logo beredar di tiga orbit elips mengelilingi lubang hitam bercincin oranye. Scroll menyempitkan orbit dan mempercepat putaran; logo tersedot satu per satu (orbit dalam dulu), lalu lubang hitam membesar memenuhi layar dan berlanjut ke gerbang Other Side. Hover memperlambat orbit dan melingkari logo, klik membuka detail mark seperti sebelumnya. Warna logo otomatis memakai warna brand yang cukup terang di latar gelap.
- **Other Side**: kanvas tak berujung, poster tidak saling bersentuhan; di HP dua kolom yang bergerak atas-bawah.
- **Cursor custom** (`img/cursor-default.png`, `img/cursor-pointer.png`): oranye di elemen interaktif, berputar saat diam; hitam di Other Side.
- **Nav** jatuh berhamburan seperti serpihan kapur saat mentok di footer, kembali saat scroll naik.
- **Suara** (default mati, ikon speaker di header): klik halus hanya saat hover cover proyek. Dibuat dengan WebAudio, tanpa file.
- Semua animasi mati otomatis untuk pengunjung yang memilih *reduced motion*.
