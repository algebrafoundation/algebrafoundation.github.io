# Algebra Foundation — Website

**Cuma dua file.** CSS, JavaScript, dan logo sudah ada di dalam file HTML-nya.
Tidak ada folder, tidak ada file pendukung yang bisa hilang.

```
index.html    halaman utama
berita.html   daftar berita
```

---

## Cara upload

1. Buka repo `algebrafoundation.github.io` di GitHub
2. **Add file** → **Upload files** → **choose your files**
3. Pilih `index.html` dan `berita.html`
4. **Commit changes**

Kalau ditanya mau menimpa file lama, iya, timpa saja.

Tunggu 1–2 menit, buka `https://algebrafoundation.github.io/`
lalu tekan **Ctrl+Shift+R** (bukan refresh biasa — browser sering
masih menyimpan versi lama).

File lama seperti `style.css`, `main.js`, atau folder `assets`
kalau masih ada di repo boleh dihapus, sudah tidak dipakai.

---

## Yang wajib diganti

Semua ditandai komentar `<!-- GANTI ... -->` di dalam file.

| # | Yang diganti | Ada di mana |
|---|---|---|
| 1 | **Link Google Form** — cari `GANTI-LINK-INI`, ganti semua | `index.html` (4×), `berita.html` (2×) |
| 2 | Nominal bantuan (`Rp 750.000`) | `index.html`, bagian hero |
| 3 | Angka statistik (128 penerima, 31 kampus, dst) | `index.html`, bagian `<!-- ANGKA -->` |
| 4 | Tanggal penutupan pendaftaran | `index.html`, bagian `<!-- CARA DAFTAR -->` |
| 5 | Cerita penerima ("Rani A." dan "Bagas S.") | `index.html`, bagian `<!-- TENTANG -->` |
| 6 | Email, Instagram, WhatsApp | footer di **kedua** file |
| 7 | Syarat, program, isi berita | sesuaikan kebijakan yayasan |

**Cara paling cepat ganti link Google Form:** di GitHub klik `index.html` →
ikon pensil → Ctrl+F ketik `GANTI-LINK-INI` → ganti → **Commit changes**.
Ulangi untuk `berita.html`.

> File HTML-nya panjang karena logo ikut tertanam di dalamnya.
> Kalau mau mengedit, lebih nyaman pakai Notepad atau VS Code di komputer,
> lalu upload ulang.

---

## Menambah foto (opsional)

Ada lima slot foto. Yang kosong tampil sebagai panel biru berlogo,
jadi tidak akan terlihat rusak. Untuk mengisinya, upload foto dengan
nama persis berikut ke repo (cara upload sama seperti di atas):

| Nama file | Muncul di | Rasio |
|---|---|---|
| `foto-kegiatan.jpg` | Halaman utama, bagian Tentang kami | 4:3 |
| `berita-1.jpg` | Kartu berita ke-1 | 16:9 |
| `berita-2.jpg` | Kartu berita ke-2 | 16:9 |
| `berita-3.jpg` | Kartu berita ke-3 | 16:9 |
| `berita-4.jpg` | Berita ke-4 di `berita.html` | 16:9 |

Kompres dulu di squoosh.app sampai di bawah 300 KB.

---

## Menambah berita baru

Di `berita.html` cari komentar `SALIN BLOK <article> DI BAWAH INI`.
Salin satu blok `<article class="post">...</article>` utuh, tempel di paling
atas, lalu ubah tanggal, judul, dan isinya.

---

## Kalau tampilan masih polos

Berarti file yang termuat masih versi lama. Tekan **Ctrl+Shift+R**.
Kalau tetap, cek di repo apakah `index.html` ukurannya sekitar 115 KB —
kalau masih 22 KB, berarti yang ter-upload masih file lama.
