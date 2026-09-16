const fs = require('fs');
const path = require('path');

const categories = [
  "Web Exploitation",
  "Cryptography",
  "Binary Exploitation",
  "Reverse Engineering",
  "Forensics",
  "OSINT",
  "Steganography",
  "Networking",
  "Misc"
];

const easyTemplates = [
  { 
    title: "Base64 Basics", 
    desc: "Decode this string to find the flag: {data}", 
    hint: "It ends with ==", 
    solution: "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: {flag}.",
    lab: false 
  },
  { 
    title: "Inspect Element", 
    desc: "The flag is hidden in the source code of a mysterious page.", 
    hint: "F12 is your friend.", 
    solution: "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: {flag}.",
    lab: false 
  },
  { 
    title: "Hidden Text", 
    desc: "There is white text on a white background.", 
    hint: "Ctrl+A might reveal something.", 
    solution: "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: {flag}.",
    lab: false 
  },
  { 
    title: "Simple Forensics", 
    desc: "Find the flag in this image metadata.", 
    hint: "exiftool is useful here.", 
    solution: "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: {flag}.",
    lab: false 
  },
  { 
    title: "Caesar Cipher", 
    desc: "Veni Vidi Vici. The message is shifted by 3.", 
    hint: "ROT13 but different.", 
    solution: "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: {flag}.",
    lab: false 
  },
  { 
    title: "Linux 101", 
    desc: "Find the hidden file in the home directory.", 
    hint: "ls -la", 
    solution: "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: {flag}.",
    lab: true, 
    env: { user: "player", hostname: "linux-basic", fileSystem: { home: { player: { ".secret.txt": "{flag}" } } } } 
  },
];

const mediumTemplates = [
  { 
    title: "SQLi Login", 
    desc: "Bypass the login prompt. We know the admin username.", 
    hint: "' OR 1=1 --", 
    solution: "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: {flag}.",
    lab: false 
  },
  { 
    title: "Directory Traversal", 
    desc: "Read the /etc/passwd file from the web server.", 
    hint: "../../../etc/passwd", 
    solution: "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: {flag}.",
    lab: false 
  },
  { 
    title: "RSA Basic", 
    desc: "Given N, e, and C. Find the plaintext.", 
    hint: "Factor N if it's small enough.", 
    solution: "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: {flag}.",
    lab: false 
  },
  { 
    title: "Buffer Overflow 1", 
    desc: "Overwrite the variable to get the flag.", 
    hint: "Check the buffer size.", 
    solution: "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: {flag}.",
    lab: false 
  },
  { 
    title: "Stego Audio", 
    desc: "There is a hidden message in the spectrogram.", 
    hint: "Use Audacity or Sonic Visualiser.", 
    solution: "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: {flag}.",
    lab: false 
  },
  { 
    title: "File Permissions", 
    desc: "You are a low privilege user, but a script runs as root.", 
    hint: "Check SUID bits.", 
    solution: "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: {flag}.",
    lab: true,
    env: { user: "player", hostname: "server", fileSystem: { home: { player: { "hint.txt": "Check /opt/script" } }, opt: { "script": "Executable binary that prints: {flag}" } } } 
  }
];

const hardTemplates = [
  { 
    title: "Blind SQLi", 
    desc: "Extract the admin password character by character.", 
    hint: "Use time-based or boolean-based injection.", 
    solution: "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: {flag}.",
    lab: false 
  },
  { 
    title: "ROP Chain", 
    desc: "Bypass NX and ASLR using Return Oriented Programming.", 
    hint: "Find gadgets in libc.", 
    solution: "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: {flag}.",
    lab: false 
  },
  { 
    title: "Custom Crypto", 
    desc: "The author rolled their own crypto algorithm. Break it.", 
    hint: "Look for predictable PRNGs.", 
    solution: "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: {flag}.",
    lab: false 
  },
  { 
    title: "Advanced Malware", 
    desc: "Deobfuscate this packed malware sample.", 
    hint: "Dump the memory after unpacking.", 
    solution: "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: {flag}.",
    lab: false 
  },
  { 
    title: "Heap Exploitation", 
    desc: "Use a use-after-free vulnerability to get a shell.", 
    hint: "Understand the glibc heap implementation.", 
    solution: "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: {flag}.",
    lab: false 
  },
  { 
    title: "Privilege Escalation", 
    desc: "Find a misconfigured cron job to become root.", 
    hint: "Check /etc/crontab.", 
    solution: "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: {flag}.",
    lab: true,
    env: { user: "player", hostname: "hard-box", fileSystem: { etc: { crontab: "* * * * * root /tmp/cleanup.sh" }, tmp: { "out.txt": "Automated system read result: {flag}" } } } 
  }
];

const veryHardTemplates = [
  { 
    title: "Kernel Exploit", 
    desc: "Exploit a heap overflow in a custom kernel module.", 
    hint: "Use unprivileged userfaultfd.", 
    solution: "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: {flag}.",
    lab: false 
  },
  { 
    title: "Browser 0-Day", 
    desc: "Write an exploit for a v8 JavaScript engine bug.", 
    hint: "Type confusion is key.", 
    solution: "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: {flag}.",
    lab: false 
  },
  { 
    title: "Zero Knowledge Proofs", 
    desc: "Break the implementation of a ZKP protocol.", 
    hint: "The Fiat-Shamir heuristic might be flawed.", 
    solution: "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: {flag}.",
    lab: false 
  },
  { 
    title: "Hypervisor Escape", 
    desc: "Escape the VM and execute code on the host.", 
    hint: "Look at the virtual network adapter.", 
    solution: "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: {flag}.",
    lab: false 
  },
  { 
    title: "Hardware Reverse", 
    desc: "Extract the firmware from this IoT device dump.", 
    hint: "Analyze the SPI flash layout.", 
    solution: "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: {flag}.",
    lab: false 
  },
  { 
    title: "Rootkit Analysis", 
    desc: "Analyze and remove a stealthy rootkit.", 
    hint: "Check system call hooks.", 
    solution: "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: {flag}.",
    lab: true,
    env: { user: "root", hostname: "compromised", fileSystem: { root: { "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.", ".hidden_rootkit_flag": "{flag}" } } } 
  }
];

function generateChallenges(difficulty, count, templates, startId, basePoints) {
  let challenges = [];
  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length];
    const flag = `CTF{${difficulty.toLowerCase()}_${Math.random().toString(36).substring(2, 10)}}`;
    
    // Generate encoded data dynamically if base64 needed
    const flagBase64 = Buffer.from(flag).toString('base64');
    
    let challenge = {
      id: startId + i,
      title: `${template.title} #${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      difficulty: difficulty,
      points: basePoints + Math.floor(Math.random() * 5) * 10,
      description: template.desc.replace("{data}", flagBase64),
      hint: template.hint,
      solution: template.solution.replace(/{flag}/g, flag),
      flag: flag,
      requiresLab: template.lab
    };

    if (template.lab) {
      let envStr = JSON.stringify(template.env);
      envStr = envStr.replace(/{flag}/g, flag);
      challenge.labEnvironment = JSON.parse(envStr);
    }
    
    challenges.push(challenge);
  }
  return challenges;
}

const allChallenges = [
  ...generateChallenges("Easy", 100, easyTemplates, 1, 10),
  ...generateChallenges("Medium", 100, mediumTemplates, 101, 50),
  ...generateChallenges("Hard", 100, hardTemplates, 201, 100),
  ...generateChallenges("Very Hard", 100, veryHardTemplates, 301, 300)
];

const fileContent = `export const challenges = ${JSON.stringify(allChallenges, null, 2)};`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'challenges.js'), fileContent);
console.log("Successfully generated 400 challenges with specific solutions!");
