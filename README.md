# Algebra Foundation — Website

Website statis untuk yayasan Algebra Foundation: bantuan biaya kuliah bulanan
untuk mahasiswa D3 dan S1 di Indonesia.

Isi website: keterangan tentang yayasan, program, syarat, cara daftar
(mengarah ke Google Form), halaman berita, dan tanya jawab.

Tidak butuh server, tidak butuh database. Cukup HTML, CSS, dan sedikit
JavaScript — jadi bisa langsung di-hosting gratis di GitHub Pages.

---

## Isi folder

```
algebra-foundation/
├── index.html               ← halaman utama
├── berita.html              ← daftar berita
├── README.md                ← file ini
└── assets/
    ├── css/style.css        ← semua tampilan diatur di sini
    ├── js/main.js           ← menu mobile & animasi
    └── img/
        ├── logo.svg         ← logo warna (sudah jadi, dipakai di header)
        ├── logo-putih.svg   ← logo putih (dipakai di footer)
        └── (foto-fotomu)    ← lihat TARUH-FOTO-DI-SINI.txt
```

Website sudah bisa langsung dipakai tanpa menambah file gambar apa pun.
Logo sudah dibuatkan dalam bentuk SVG, dan slot foto yang masih kosong
tampil sebagai panel biru berlogo — bukan kotak putih kosong.

---

## Langkah 1 — Yang wajib diganti dulu

Sebelum dipublikasikan, ganti bagian berikut. Semua sudah saya tandai dengan
komentar `<!-- GANTI ... -->` di dalam file HTML supaya gampang dicari.

| # | Yang diganti | Ada di mana |
|---|---|---|
| 1 | **Link Google Form** — cari teks `GANTI-LINK-INI`, ganti semua dengan link form aslimu | `index.html` (4 tempat), `berita.html` (2 tempat) |
| 2 | **Logo** — kalau mau pakai logo aslimu, simpan sebagai `logo.png` + `logo-putih.png`, lalu ganti tulisan `logo.svg` → `logo.png` di kedua file HTML | folder `assets/img/` |
| 3 | Nominal bantuan (`Rp 750.000 / bulan`) dan tanggal cair | `index.html`, bagian hero |
| 4 | Angka statistik (128 penerima, 31 kampus, dst) | `index.html`, bagian `<!-- ANGKA -->` |
| 5 | Tanggal penutupan pendaftaran | `index.html`, bagian `<!-- CARA DAFTAR -->` |
| 6 | Email, Instagram, WhatsApp, alamat | bagian footer di **kedua** file HTML |
| 7 | Syarat, program, dan isi berita | sesuaikan dengan kebijakan yayasan |
| 8 | Cerita penerima (kutipan "Rani A." dan "Bagas S.") | `index.html`, bagian `<!-- TENTANG -->` |
| 9 | Foto — lihat `assets/img/TARUH-FOTO-DI-SINI.txt` untuk nama file yang dipakai | folder `assets/img/` |

**Cara paling cepat mengganti link Google Form:** buka file di editor
(VS Code, Notepad++, atau langsung di GitHub), tekan `Ctrl+H` / `Cmd+H`,
cari `GANTI-LINK-INI` lalu ganti semua dengan link formmu.

Link Google Form biasanya berbentuk `https://forms.gle/xxxxxxxx` — ambil dari
tombol **Kirim → ikon rantai → Perpendek URL** di Google Form.

---

## Langkah 2 — Upload ke GitHub

### Cara A: lewat browser (paling gampang, tanpa install apa pun)

1. Login ke [github.com](https://github.com), klik **+** di pojok kanan atas → **New repository**.
2. Isi **Repository name**, misalnya `algebra-foundation`.
3. Pilih **Public**, lalu klik **Create repository**.
4. Di halaman repo yang kosong, klik **uploading an existing file**.
5. Seret semua isi folder ini (`index.html`, `berita.html`, `README.md`, dan folder `assets`) ke area upload.
6. Klik **Commit changes**.

> Catatan: kalau drag-and-drop foldernya gagal, upload `index.html`, `berita.html`,
> dan `README.md` dulu, lalu buat folder `assets/css` dengan cara mengetik
> `assets/css/style.css` di kolom nama file saat memilih **Add file → Create new file**.

### Cara B: lewat Git di komputer

```bash
cd algebra-foundation
git init
git add .
git commit -m "Website Algebra Foundation"
git branch -M main
git remote add origin https://github.com/NAMA-AKUN/algebra-foundation.git
git push -u origin main
```

Ganti `NAMA-AKUN` dengan username GitHub-mu.

---

## Langkah 3 — Aktifkan GitHub Pages

1. Buka repo di GitHub → tab **Settings**.
2. Menu kiri, pilih **Pages**.
3. Bagian **Source**, pilih **Deploy from a branch**.
4. **Branch**: pilih `main`, folder `/ (root)`, lalu **Save**.
5. Tunggu 1–2 menit, refresh halaman. Alamat websitemu muncul di atas:

```
https://NAMA-AKUN.github.io/algebra-foundation/
```

Selesai. Setiap kali kamu mengubah file dan commit, website ikut ter-update
otomatis dalam satu-dua menit.

### Kalau mau pakai domain sendiri

Misalnya `algebrafoundation.org`:

1. Di **Settings → Pages → Custom domain**, isi nama domainmu → **Save**.
2. Di penyedia domainmu, tambahkan record DNS:
   - `A` → `185.199.108.153`
   - `A` → `185.199.109.153`
   - `A` → `185.199.110.153`
   - `A` → `185.199.111.153`
   - `CNAME` `www` → `NAMA-AKUN.github.io`
3. Kembali ke Settings → Pages, centang **Enforce HTTPS** setelah DNS aktif.

---

## Cara menambah berita baru

Buka `berita.html`. Cari komentar:

```html
<!-- ====== SALIN BLOK <article> DI BAWAH INI UNTUK MENAMBAH BERITA BARU ====== -->
```

Salin satu blok `<article class="post">...</article>` utuh, tempel di bagian
paling atas (berita terbaru di atas), lalu ubah isinya:

```html
<article class="post" id="nama-singkat-berita">
  <div class="post__meta">
    <time class="post__date" datetime="2026-09-01">1 September 2026</time>
    <span class="post__badge">Pengumuman</span>
  </div>
  <h2 class="post__title">Judul beritanya di sini</h2>
  <div class="post__body">
    <p>Paragraf pertama.</p>
    <p>Paragraf kedua.</p>
  </div>
</article>
```

Label di `post__badge` bebas — misalnya *Pengumuman*, *Laporan*, *Kegiatan*, *Kemitraan*.

Kalau mau berita itu juga muncul di halaman depan, tambahkan blok berikut di
`index.html` bagian `<!-- BERITA -->` dan hapus salah satu yang lama
(halaman depan enak dilihat kalau isinya tiga berita saja):

```html
<a class="news__item" href="berita.html#nama-singkat-berita">
  <time class="news__date" datetime="2026-09-01">1 September 2026</time>
  <h3 class="news__title">Judul beritanya</h3>
  <p class="news__text">Satu kalimat ringkasan.</p>
</a>
```

---

## Menambah foto

Website ini punya lima slot foto. Slot yang belum diisi otomatis tampil
sebagai panel biru berlogo, jadi tidak akan terlihat rusak.

Cara mengisinya: simpan fotomu di `assets/img/` dengan nama persis berikut.

| Nama file | Muncul di | Rasio |
|---|---|---|
| `foto-kegiatan.jpg` | Halaman utama, bagian Tentang kami | 4:3 |
| `berita-1.jpg` | Kartu berita ke-1 | 16:9 |
| `berita-2.jpg` | Kartu berita ke-2 | 16:9 |
| `berita-3.jpg` | Kartu berita ke-3 | 16:9 |
| `berita-4.jpg` | Berita ke-4 di `berita.html` | 16:9 |

Kompres dulu fotonya di [squoosh.app](https://squoosh.app) sampai di bawah
300 KB supaya website tetap ringan dibuka pakai kuota.

Untuk berita baru, pakai nama file lanjutan (`berita-5.jpg`, `berita-6.jpg`)
dan sesuaikan `src` di dalam blok `<figure class="foto">`.

---

## Mengganti warna

Semua warna diatur di baris awal `assets/css/style.css`:

```css
:root{
  --navy:     #123363;   /* biru tua, dari topi wisuda di logo */
  --azure:    #2F80CE;   /* biru muda, dari swoosh di logo */
  --sky:      #EAF2FA;   /* latar seksi bernuansa biru */
  --marigold: #E39A2B;   /* warna tombol daftar & penanda pencairan */
}
```

Ganti kode heksanya, seluruh website ikut berubah.

---

## Melihat hasilnya di komputer sebelum di-upload

Klik dua kali `index.html` — langsung terbuka di browser. Itu saja sudah cukup.

Kalau ingin lebih rapi dan punya Python:

```bash
cd algebra-foundation
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

---

## Catatan

- Semua isi tulisan di website ini masih **contoh**. Angka, syarat, nominal,
  dan berita perlu disesuaikan dengan data asli yayasan.
- Website sudah responsif (rapi di HP), punya fokus keyboard yang terlihat,
  dan menghormati pengaturan *reduce motion* di perangkat pengguna.
- Font diambil dari Google Fonts, jadi butuh koneksi internet saat dibuka.
