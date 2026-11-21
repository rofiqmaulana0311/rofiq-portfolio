# Rofiq Maulana: Portfolio

Website portofolio brand designer. Satu halaman statis: tanpa build, tanpa framework.
Buka `index.html` lewat server lokal (mis. `npx serve .`) atau upload seluruh folder ke hosting
(GitHub Pages, Netlify, Vercel).

## Struktur

```
.
├── index.html          # tampilan & animasi (tidak perlu disentuh untuk ganti konten)
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
| Link sosial & email | – | bagian footer di `index.html` (cari "EDIT DI SINI") |

Setiap folder punya `README.md` berisi nama file yang diharapkan.
Selama `src` kosong / jumlah gambar `0`, website memakai placeholder, jadi tidak ada gambar rusak.

## Tips gambar

- Studi kasus: lebar 2000 px, JPG kualitas ~85 atau WebP.
- Logo: SVG satu warna, latar transparan.
- Poster: sisi panjang 2000 px.
