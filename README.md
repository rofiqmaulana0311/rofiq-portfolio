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
- **Statement About**: setelah section About menempel (200svh), kata demi kata muncul (pudar biasa, tanpa garis luar, gerak, blur, atau huruf acak); "the 404" tetap link ke halaman 404 tanpa garis bawah; kalimat hanya tampil selama section menempel, jadi tidak pernah terlihat bergerak naik
- **Perjalanan Work → Marks → Other Side (satu section, satu layar menempel)**: latar gelap bergrain yang sama dengan hero, menyambung tanpa putus.
  - *Work*: spiral 3D (WebGL) cover proyek, terinspirasi pacomepertant.com; scroll memutar spiral, cover membusur saat bergerak, sisi belakang kabur. Hover memperbesar isi cover, klik membuka studi kasus. Cover = `assets/work/pXX-.../01.jpg` (rasio ideal 1.7:1), selama belum ada dibuat dari warna brand.
  - *Transisi*: semua cover tersedot ke satu titik cahaya kecil di tengah.
  - *Marks*: dari titik itu orbit logo mekar; scroll menyempitkan orbit dan logo tersedot satu per satu ke lubang hitam bercincin oranye. Hover memperlambat orbit, klik membuka detail mark.
  - *Other Side*: lubang hitam membesar jadi portal berisi giroskop krom 3D (raymarching WebGL) yang berputar; huruf OTHER / SIDE muncul dari pusat. Hover membuat cincin berputar makin cepat dan huruf tertarik gravitasi; klik untuk masuk.
  - Link #work, #marks, #other di menu tetap menuju fase masing-masing. Batas fase diatur di `JB` (index.html).
- **Other Side**: kanvas tak berujung, poster tidak saling bersentuhan; di HP dua kolom yang bergerak atas-bawah.
- **Cursor custom** (`img/cursor-default.png`, `img/cursor-pointer.png`): oranye di elemen interaktif, berputar saat diam; hitam di Other Side.
- **Nav** jatuh berhamburan seperti serpihan kapur saat mentok di footer, kembali saat scroll naik.
- **Suara** (default mati, ikon speaker di header): klik halus hanya saat hover cover proyek. Dibuat dengan WebAudio, tanpa file.
- Semua animasi mati otomatis untuk pengunjung yang memilih *reduced motion*.

## UX
- **Label hover**: nama proyek / klien + tahun muncul kecil di samping kursor saat hover cover (spiral) atau logo (orbit). Tidak tampil di HP.
- **Penunjuk fase** di bawah layar perjalanan: Work · Marks · Other side, dengan garis progres; bisa diklik untuk lompat. Di HP ada petunjuk "Tap a cover / mark / the portal".
- **Ajakan kerja sama** di header: "Available for work" (titik berdenyut) → email. Di HP tampil "Hire me". Ganti alamat email di header & footer.
- **Intro** hanya diputar sekali per kunjungan (sessionStorage), dengan tombol "Skip intro" (atau tombol Esc).
- **Pratinjau link** (Open Graph): `img/og.jpg` 1200×630 + judul & deskripsi di `<head>`. Setelah situs online, ganti `og:image` ke URL lengkap (mis. https://domainmu.com/img/og.jpg) supaya WhatsApp/LinkedIn bisa membacanya.

