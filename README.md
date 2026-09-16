# 🛡️ CyberLMS CTF

Aplikasi Virtual Lab & Learning Management System (LMS) khusus untuk pelatihan Keamanan Siber (Cyber Security) dan kompetisi Capture The Flag (CTF).

## 🚀 Fitur Utama
- **Level Soal:** Easy, Medium, Hard, Very Hard (Total 400 Soal Acak).
- **Virtual Lab Terminal:** Akses terminal simulasi Linux di browser untuk menyelesaikan tantangan.
- **Sistem Peran (Role):** Akun khusus Siswa (untuk berlatih) dan Guru (untuk memantau).
- **Leaderboard Global:** Sistem peringkat (Emas, Perak, Perunggu) berdasarkan pengumpulan poin (Flag).
- **Teacher Dashboard:** Guru dapat melihat kunci jawaban lengkap, memantau *progress* penyelesaian siswa, dan mengatur akses guru lain.

---

## 🛠️ Panduan Instalasi (Deploy) di LXC Proxmox

Aplikasi ini menggunakan teknologi React + Vite. Berikut adalah langkah-langkah untuk menjalankan aplikasi ini di Production menggunakan LXC Server (Ubuntu/Debian) yang ada di Proxmox.

### 1. Perbarui Sistem & Instal Aplikasi Dasar
Masuk ke console/SSH LXC Anda sebagai root, lalu jalankan perintah ini:
```bash
apt update && apt upgrade -y
apt install curl git nginx nano -y
```

### 2. Instal Node.js (Versi 20 LTS)
Kita memerlukan Node.js untuk melakukan *build* terhadap source code aplikasi:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
```
*(Untuk memastikan Node.js sudah terinstal, jalankan perintah `node -v`)*

### 3. Clone Repositori Ini
Unduh source code dari GitHub ke dalam server Anda:
```bash
cd /root
git clone https://github.com/kajurtkjsmkbp-hub/CyberLMS-CTF.git
cd CyberLMS-CTF
```

### 4. Instal Dependencies & Build Aplikasi
Ubah kode React mentah menjadi file statis (HTML/CSS/JS) yang siap tayang dan jauh lebih cepat:
```bash
npm install
npm run build
```
Proses ini akan menghasilkan sebuah folder bernama `dist`.

### 5. Pindahkan Website ke Direktori Nginx
Nginx membaca file dari direktori `/var/www/html/`. Kita akan memasukkan folder `dist` tadi ke dalamnya:
```bash
rm -rf /var/www/html/*
cp -r dist/* /var/www/html/
```

Beri izin akses yang benar agar Nginx dapat membacanya:
```bash
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html
```

### 6. Konfigurasi Nginx untuk React Router (Penting!)
Aplikasi ini menggunakan React Router (Single Page Application). Jika Anda melakukan *refresh* pada URL (misal `/dashboard`), Nginx akan memberikan error 404. Untuk mengatasinya, ubah file konfigurasi Nginx:

```bash
nano /etc/nginx/sites-available/default
```

Cari bagian `location / { ... }` dan ubah menjadi seperti berikut:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```
*Simpan dan keluar (Pada Nano: `Ctrl+X`, ketik `Y`, tekan `Enter`).*

### 7. Restart Nginx
Aktifkan Nginx dan pastikan akan berjalan secara otomatis jika server mati/restart:
```bash
systemctl restart nginx
systemctl enable nginx
```

### 🎉 Selesai!
Aplikasi LMS CTF Anda kini sudah online di dalam jaringan Proxmox. Buka browser dan ketikkan **Alamat IP dari LXC** tersebut (misal: `http://192.168.1.50`). Selamat berlatih!
