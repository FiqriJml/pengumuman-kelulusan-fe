# Pengumuman Kelulusan - SMK NEGERI 2 GERUNG

## Deskripsi Proyek

Proyek ini adalah aplikasi web sederhana untuk menampilkan pengumuman kelulusan siswa SMK NEGERI 2 GERUNG tahun pelajaran 2024/2025.  
Data siswa disimpan di Firebase Firestore dan dapat dicari berdasarkan NISN dan tanggal lahir.

---

## Fitur

- Pencarian data kelulusan berdasarkan NISN dan tanggal lahir
- Menampilkan nama siswa, status kelulusan, dan rata-rata nilai
- Tampilan responsif dan user-friendly
- Integrasi dengan Firebase Firestore untuk penyimpanan data

---

## Struktur Proyek

/public
├── index.html # Halaman utama aplikasi
├── firebase-config.js # Konfigurasi Firebase
├── app.js # Script frontend untuk query Firestore
├── LOGO SMKN_2_GERUNG- ENHANCE 2.png # Logo sekolah
README.md # Dokumentasi proyek
.gitignore # File ignore Git

---

## Cara Menjalankan

1. Clone repository ini:  
   git clone
   github.com

cd repo-name/public

2. Jalankan server lokal (misal dengan Live Server di VSCode atau `http-server`):  
   http-server .

atau buka `index.html` dengan Live Server.

3. Buka browser dan akses `http://localhost:8080` (atau port yang digunakan).

4. Masukkan NISN dan tanggal lahir untuk mencari data kelulusan.

---

## Cara Deploy ke Firebase Hosting

1. Login Firebase CLI:  
   firebase login

2. Inisialisasi hosting (jika belum):  
   firebase init hosting

- Pilih project Firebase Anda
- Set folder publik ke `public`
- Pilih **No** untuk single-page app jika bukan SPA

3. Deploy aplikasi:  
   firebase deploy --only hosting

4. Akses aplikasi melalui URL hosting Firebase yang diberikan.

---

## Kontribusi

Silakan buat issue atau pull request jika ada saran atau perbaikan.
