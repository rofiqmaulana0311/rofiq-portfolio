/* =====================================================================
   CONTENT.JS: SEMUA ISI WEBSITE ADA DI SINI.
   Ganti file di folder assets/, lalu ubah angka/teks di bawah. Tidak perlu menyentuh index.html.
   Panduan lengkap: README.md
   ===================================================================== */

/* ---------- 1. FOTO POTRET (hero, about, intro) ---------- */
const PORTRAIT="img/portrait.webp";

/* ---------- 1b. STATUS: baris "Currently" di hero ---------- */
const CURRENTLY="Identity for a coffee roaster in Semarang";

/* ---------- 2. WORK: studi kasus brand identity ----------
   Setiap proyek punya folder sendiri: assets/work/<slug>/01.jpg, 02.jpg, 03.jpg ...
   W("slug", jumlahGambar). 0 = pakai mockup placeholder.
   Contoh: shots:W("p01-northwind-studio",6)  -> 01.jpg ... 06.jpg
   Gambar 01 juga dipakai di intro dan pratinjau hover.
   Ingin potret (4:5)? tulis manual: shots:[{src:"assets/work/p01-.../01.jpg"},{src:"assets/work/p01-.../02.jpg",tall:true}]
   Video: {src:"assets/work/p01-.../03.mp4",video:true} */
const W=(slug,n,ext="jpg")=>Array.from({length:n},(_,i)=>({src:`assets/work/${slug}/${String(i+1).padStart(2,"0")}.${ext}`}));
const PROJECTS=[
  {slug:"p01-northwind-studio",name:"Northwind Studio",type:"Brand identity",year:2026,with:"Northwind Studio",site:"https://example.com",c:["#ff3b1f","#1a1a1a"],
   info:"Independent branding studio from Oslo. A wordmark built on a strict grid, a monogram for small sizes and a type system for every touchpoint.",
   feat:["Site of the day","Codrops"],shots:W("p01-northwind-studio",0)},
  {slug:"p02-laut-coffee",name:"Laut Coffee",type:"Identity & packaging",year:2026,with:"Studio Arus",site:"https://example.com",c:["#2b5cff","#0d1b4d"],
   info:"Specialty coffee roaster in Bali. A wave mark, a hand-cut label system and packaging that changes colour per origin.",
   feat:["E-commerce honorable mention"],shots:W("p02-laut-coffee",0)},
  {slug:"p03-mira-hartono",name:"Mira Hartono",type:"Personal identity",year:2025,with:"Mira Hartono",site:"https://example.com",c:["#d9c9a8","#5a4630"],
   info:"Documentary photographer. A lowercase wordmark, a stamp for prints and a quiet stationery set.",
   feat:["Developer award"],shots:W("p03-mira-hartono",0)},
  {slug:"p04-pulse-festival",name:"Pulse Festival",type:"Event identity",year:2025,with:"Pulse Collective",site:"https://example.com",c:["#c6ff3a","#1c2b00"],
   info:"Electronic music festival in Jakarta. A pulse symbol that animates to the line-up, posters, wristbands and stage signage.",
   feat:["Website of the day"],shots:W("p04-pulse-festival",0)},
  {slug:"p05-kinetic-type",name:"Kinetic Type",type:"Rebrand",year:2025,with:"Kinetic Type",site:"https://example.com",c:["#f2f2ee","#0a0a0a"],
   info:"Independent type foundry. Rebrand from a single logo to a flexible K monogram system.",
   feat:["Typewolf"],shots:W("p05-kinetic-type",0)},
  {slug:"p06-atlas-archive",name:"Atlas Archive",type:"Visual identity",year:2024,with:"Atlas Foundation",site:"https://example.com",c:["#ff9ad5","#3d0f2a"],
   info:"Archive of 4,000 posters. A four-petal symbol, a catalogue numbering system and exhibition graphics.",
   feat:["Honorable mention"],shots:W("p06-atlas-archive",0)},
  {slug:"p07-sora-furniture",name:"Sora Furniture",type:"Identity & packaging",year:2024,with:"Sora",site:"https://example.com",c:["#a8b39a","#2f3a27"],
   info:"Japanese-inspired furniture maker. A step-shaped mark, joinery-inspired pattern and box packaging.",
   feat:["E-commerce nominee"],shots:W("p07-sora-furniture",0)},
  {slug:"p08-open-field",name:"Open Field",type:"Brand identity",year:2023,with:"Open Field",site:"https://example.com",c:["#ffb400","#3a2700"],
   info:"Urban farming non-profit. A sun-and-field symbol, campaign posters and volunteer kit.",
   feat:["CSS award"],shots:W("p08-open-field",0)}
];

/* ---------- 3. MARKS: koleksi logo ----------
   Taruh logo di assets/marks/ lalu isi src, mis. src:"assets/marks/m01-laut-coffee.svg"
   (SVG/PNG transparan, satu warna). Kosong = bentuk contoh di bawah.
   kind: Symbol | Wordmark | Monogram. c = [warna brand, warna tinta di atasnya]. */
const G={C:(cx,cy,r)=>`<circle cx="${cx}" cy="${cy}" r="${r}" pathLength="1"/>`,L:(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" pathLength="1"/>`,R:(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" pathLength="1"/>`};
const {C,L,R}=G;
const MARKS=[
 {client:"Laut Coffee",src:"" /* assets/marks/m01-laut-coffee.svg */,kind:"Symbol",year:2026,industry:"Coffee roaster",c:["#2B5CFF","#F2F2EE"],
  svg:`<path d="M10 50a40 40 0 0 1 80 0z"/><path d="M10 58h80v8H10zM22 74h56v8H22z"/>`,g:C(50,50,40)+L(0,50,100,50)+L(50,0,50,100)+R(10,10,80,80)},
 {client:"Sora Furniture",src:"" /* assets/marks/m02-sora-furniture.svg */,kind:"Symbol",year:2024,industry:"Furniture",c:["#A8B39A","#0A0A0A"],
  svg:`<path d="M10 90V10h40v40h40v40z"/>`,g:R(10,10,80,80)+L(50,0,50,100)+L(0,50,100,50)+C(50,50,40)},
 {client:"Atlas Archive",src:"" /* assets/marks/m03-atlas-archive.svg */,kind:"Symbol",year:2024,industry:"Culture",c:["#FF9AD5","#0A0A0A"],
  svg:`<circle cx="50" cy="30" r="20"/><circle cx="50" cy="70" r="20"/><circle cx="30" cy="50" r="20"/><circle cx="70" cy="50" r="20"/><circle cx="50" cy="50" r="12" style="fill:var(--hole,#f2f2ee)"/>`,g:C(50,50,40)+C(50,50,20)+L(10,10,90,90)+L(90,10,10,90)},
 {client:"Northwind",src:"" /* assets/marks/m04-northwind.svg */,kind:"Monogram",year:2026,industry:"Branding studio",c:["#FF3B1F","#0A0A0A"],
  svg:`<path d="M14 88V12h14l30 48V12h14v76H58L28 40v48z"/><rect x="78" y="74" width="10" height="14"/>`,g:R(14,12,72,76)+L(14,50,88,50)+L(0,12,100,12)+L(0,88,100,88)},
 {client:"Open Field",src:"" /* assets/marks/m05-open-field.svg */,kind:"Symbol",year:2023,industry:"Urban farming",c:["#FFB400","#0A0A0A"],
  svg:`<path d="M10 80c10-20 20-20 30 0s20 20 30 0 15-15 20-5v15H10z"/><circle cx="68" cy="30" r="14"/>`,g:C(68,30,14)+C(68,30,28)+L(0,80,100,80)+L(68,0,68,100)},
 {client:"Ombak Records",src:"" /* assets/marks/m06-ombak-records.svg */,kind:"Wordmark",year:2024,industry:"Music label",c:["#0D1B4D","#F2F2EE"],
  svg:`<text x="50" y="62" text-anchor="middle" style="font:400 34px Anton,Impact,sans-serif;letter-spacing:.5px">OMBAK</text>`,g:L(0,62,100,62)+L(0,37,100,37)+L(8,0,8,100)+L(92,0,92,100)},
 {client:"Pulse Collective",src:"" /* assets/marks/m07-pulse-collective.svg */,kind:"Symbol",year:2025,industry:"Music festival",c:["#C6FF3A","#0A0A0A"],
  svg:`<rect x="10" y="40" width="12" height="20"/><rect x="28" y="25" width="12" height="50"/><rect x="46" y="10" width="12" height="80"/><rect x="64" y="25" width="12" height="50"/><rect x="82" y="40" width="8" height="20"/>`,g:L(0,50,100,50)+R(10,10,80,80)+L(10,10,90,90)+L(10,90,90,10)},
 {client:"Kinetic Type",src:"" /* assets/marks/m08-kinetic-type.svg */,kind:"Monogram",year:2025,industry:"Type foundry",c:["#0A0A0A","#F2F2EE"],
  svg:`<path d="M14 12h16v30l26-30h20L48 44l30 44H58L38 56l-8 9v23H14z"/>`,g:R(14,12,64,76)+L(30,0,30,100)+L(0,44,100,44)+C(46,50,38)},
 {client:"Rumah Teh",src:"" /* assets/marks/m09-rumah-teh.svg */,kind:"Symbol",year:2023,industry:"Tea house",c:["#3A2700","#FFB400"],
  svg:`<path d="M50 8 92 44H8z"/><path d="M20 50h60v42H20z"/><circle cx="50" cy="71" r="10" style="fill:var(--hole,#f2f2ee)"/>`,g:L(50,0,50,100)+L(8,44,92,44)+C(50,71,21)+R(20,50,60,42)},
 {client:"Mira Hartono",src:"" /* assets/marks/m10-mira-hartono.svg */,kind:"Wordmark",year:2025,industry:"Photographer",c:["#D9C9A8","#0A0A0A"],
  svg:`<text x="50" y="58" text-anchor="middle" style="font:700 19px Satoshi,Figtree,sans-serif;letter-spacing:-.5px;text-transform:none">mira h.</text>`,g:L(0,58,100,58)+L(0,44,100,44)+L(50,0,50,100)},
 {client:"Tanah Studio",src:"" /* assets/marks/m11-tanah-studio.svg */,kind:"Symbol",year:2022,industry:"Ceramics",c:["#5A4630","#F2F2EE"],
  svg:`<path d="M50 10a40 40 0 1 0 .1 0zM50 30a20 20 0 1 1-.1 0z" fill-rule="evenodd"/><rect x="46" y="4" width="8" height="30"/>`,g:C(50,50,40)+C(50,50,20)+L(50,0,50,100)+L(0,50,100,50)},
 {client:"Ruang Kosong",src:"" /* assets/marks/m12-ruang-kosong.svg */,kind:"Symbol",year:2022,industry:"Gallery",c:["#F2F2EE","#0A0A0A"],
  svg:`${[0,1,2].flatMap(r=>[0,1,2].map(c=>r===1&&c===1?"":`<circle cx="${22+c*28}" cy="${22+r*28}" r="9"/>`)).join("")}`,g:L(22,0,22,100)+L(50,0,50,100)+L(78,0,78,100)+L(0,22,100,22)+L(0,50,100,50)+L(0,78,100,78)}
];

/* ---------- 4. OTHER SIDE: poster, print, dll ----------
   Taruh file di assets/other/ lalu isi src, mis. src:"assets/other/o01-kopi-pagi-fest.jpg"
   ratio = tinggi/lebar (A-series 1.414, persegi 1, 4:5 = 1.25). */
const ARCHIVE=[
  {title:"Kopi Pagi Fest",type:"Event poster",year:2026,format:"A2 Risograph",ratio:1.414,c:["#0A0A0A","#F2F2EE"],src:"" /* assets/other/o01-kopi-pagi-fest.jpg */},
  {title:"Suara Kota",type:"Gig poster",year:2026,format:"B2 Screenprint",ratio:1.414,c:["#F2F2EE","#0A0A0A"],src:"" /* assets/other/o02-suara-kota.jpg */},
  {title:"Tanah Air",type:"Book cover",year:2025,format:"Offset, 14×21 cm",ratio:1.5,c:["#2B5CFF","#F2F2EE"],src:"" /* assets/other/o03-tanah-air.jpg */},
  {title:"Malam Panjang",type:"Film poster",year:2025,format:"A1",ratio:1.414,c:["#1B1B1B","#FFB400"],src:"" /* assets/other/o04-malam-panjang.jpg */},
  {title:"Type Specimen 01",type:"Specimen",year:2025,format:"Folded A3",ratio:1.25,c:["#C6FF3A","#0A0A0A"],src:"" /* assets/other/o05-type-specimen-01.jpg */},
  {title:"Pasar Senggol",type:"Market poster",year:2024,format:"A2",ratio:1.414,c:["#F2F2EE","#0A0A0A"],src:"" /* assets/other/o06-pasar-senggol.jpg */},
  {title:"Ombak",type:"Album cover",year:2024,format:"12\" vinyl",ratio:1,c:["#0D1B4D","#F2F2EE"],src:"" /* assets/other/o07-ombak.jpg */},
  {title:"Zine No. 3",type:"Zine",year:2024,format:"A5, 32 pp",ratio:1.414,c:["#FF9AD5","#0A0A0A"],src:"" /* assets/other/o08-zine-no-3.jpg */},
  {title:"Lantai Dua",type:"Exhibition",year:2023,format:"A0",ratio:1.414,c:["#0A0A0A","#C6FF3A"],src:"" /* assets/other/o09-lantai-dua.jpg */},
  {title:"Rumah Teh",type:"Packaging",year:2023,format:"Tin label",ratio:1,c:["#A8B39A","#0A0A0A"],src:"" /* assets/other/o10-rumah-teh.jpg */},
  {title:"Hujan",type:"Poster",year:2023,format:"A2",ratio:1.25,c:["#F2F2EE","#2B5CFF"],src:"" /* assets/other/o11-hujan.jpg */},
  {title:"Ruang Kosong",type:"Calendar",year:2022,format:"A3, 13 pp",ratio:1.414,c:["#FFB400","#0A0A0A"],src:"" /* assets/other/o12-ruang-kosong.jpg */}
];

window.CONTENT={currently:CURRENTLY,portrait:PORTRAIT,projects:PROJECTS,marks:MARKS,archive:ARCHIVE,G};
