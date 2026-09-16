export const challenges = [
  {
    "id": 1,
    "title": "Base64 Basics #1",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfOWJrMjJjbHZ9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_9bk22clv}.",
    "flag": "CTF{easy_9bk22clv}",
    "requiresLab": false
  },
  {
    "id": 2,
    "title": "Inspect Element #2",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 10,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_n29s9tl0}.",
    "flag": "CTF{easy_n29s9tl0}",
    "requiresLab": false
  },
  {
    "id": 3,
    "title": "Hidden Text #3",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 20,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_rrz4y9j3}.",
    "flag": "CTF{easy_rrz4y9j3}",
    "requiresLab": false
  },
  {
    "id": 4,
    "title": "Simple Forensics #4",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_ts2ma8mn}.",
    "flag": "CTF{easy_ts2ma8mn}",
    "requiresLab": false
  },
  {
    "id": 5,
    "title": "Caesar Cipher #5",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 20,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_qyo15lzt}.",
    "flag": "CTF{easy_qyo15lzt}",
    "requiresLab": false
  },
  {
    "id": 6,
    "title": "Linux 101 #6",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_dsmv8rqs}.",
    "flag": "CTF{easy_dsmv8rqs}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_dsmv8rqs}"
          }
        }
      }
    }
  },
  {
    "id": 7,
    "title": "Base64 Basics #7",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 10,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfeTA1N29ncGx9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_y057ogpl}.",
    "flag": "CTF{easy_y057ogpl}",
    "requiresLab": false
  },
  {
    "id": 8,
    "title": "Inspect Element #8",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_5qrxesdc}.",
    "flag": "CTF{easy_5qrxesdc}",
    "requiresLab": false
  },
  {
    "id": 9,
    "title": "Hidden Text #9",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_7h8oiczi}.",
    "flag": "CTF{easy_7h8oiczi}",
    "requiresLab": false
  },
  {
    "id": 10,
    "title": "Simple Forensics #10",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_jxjlk3qj}.",
    "flag": "CTF{easy_jxjlk3qj}",
    "requiresLab": false
  },
  {
    "id": 11,
    "title": "Caesar Cipher #11",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 30,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_tsu8x09j}.",
    "flag": "CTF{easy_tsu8x09j}",
    "requiresLab": false
  },
  {
    "id": 12,
    "title": "Linux 101 #12",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_bu7z7f0r}.",
    "flag": "CTF{easy_bu7z7f0r}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_bu7z7f0r}"
          }
        }
      }
    }
  },
  {
    "id": 13,
    "title": "Base64 Basics #13",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 50,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfNjB6ZmE1cGN9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_60zfa5pc}.",
    "flag": "CTF{easy_60zfa5pc}",
    "requiresLab": false
  },
  {
    "id": 14,
    "title": "Inspect Element #14",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_ldk9z6iq}.",
    "flag": "CTF{easy_ldk9z6iq}",
    "requiresLab": false
  },
  {
    "id": 15,
    "title": "Hidden Text #15",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_tg1fn375}.",
    "flag": "CTF{easy_tg1fn375}",
    "requiresLab": false
  },
  {
    "id": 16,
    "title": "Simple Forensics #16",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 50,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_yuk5uwdf}.",
    "flag": "CTF{easy_yuk5uwdf}",
    "requiresLab": false
  },
  {
    "id": 17,
    "title": "Caesar Cipher #17",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_2quhltt4}.",
    "flag": "CTF{easy_2quhltt4}",
    "requiresLab": false
  },
  {
    "id": 18,
    "title": "Linux 101 #18",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_sjjntz67}.",
    "flag": "CTF{easy_sjjntz67}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_sjjntz67}"
          }
        }
      }
    }
  },
  {
    "id": 19,
    "title": "Base64 Basics #19",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 20,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfMzRkc25xZTd9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_34dsnqe7}.",
    "flag": "CTF{easy_34dsnqe7}",
    "requiresLab": false
  },
  {
    "id": 20,
    "title": "Inspect Element #20",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 30,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_q2i02ow9}.",
    "flag": "CTF{easy_q2i02ow9}",
    "requiresLab": false
  },
  {
    "id": 21,
    "title": "Hidden Text #21",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 20,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_stzmopid}.",
    "flag": "CTF{easy_stzmopid}",
    "requiresLab": false
  },
  {
    "id": 22,
    "title": "Simple Forensics #22",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_09s0c7zf}.",
    "flag": "CTF{easy_09s0c7zf}",
    "requiresLab": false
  },
  {
    "id": 23,
    "title": "Caesar Cipher #23",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 40,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_l4gatl15}.",
    "flag": "CTF{easy_l4gatl15}",
    "requiresLab": false
  },
  {
    "id": 24,
    "title": "Linux 101 #24",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_ltdf5h8f}.",
    "flag": "CTF{easy_ltdf5h8f}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_ltdf5h8f}"
          }
        }
      }
    }
  },
  {
    "id": 25,
    "title": "Base64 Basics #25",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfYmVkdTU4NzV9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_bedu5875}.",
    "flag": "CTF{easy_bedu5875}",
    "requiresLab": false
  },
  {
    "id": 26,
    "title": "Inspect Element #26",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 20,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_mhzhzufe}.",
    "flag": "CTF{easy_mhzhzufe}",
    "requiresLab": false
  },
  {
    "id": 27,
    "title": "Hidden Text #27",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 20,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_nick10zh}.",
    "flag": "CTF{easy_nick10zh}",
    "requiresLab": false
  },
  {
    "id": 28,
    "title": "Simple Forensics #28",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_el33cq38}.",
    "flag": "CTF{easy_el33cq38}",
    "requiresLab": false
  },
  {
    "id": 29,
    "title": "Caesar Cipher #29",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 10,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_yl1u1rid}.",
    "flag": "CTF{easy_yl1u1rid}",
    "requiresLab": false
  },
  {
    "id": 30,
    "title": "Linux 101 #30",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_lce99ohz}.",
    "flag": "CTF{easy_lce99ohz}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_lce99ohz}"
          }
        }
      }
    }
  },
  {
    "id": 31,
    "title": "Base64 Basics #31",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 10,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfdGp2OWxvdW99",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_tjv9louo}.",
    "flag": "CTF{easy_tjv9louo}",
    "requiresLab": false
  },
  {
    "id": 32,
    "title": "Inspect Element #32",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_7f0daewz}.",
    "flag": "CTF{easy_7f0daewz}",
    "requiresLab": false
  },
  {
    "id": 33,
    "title": "Hidden Text #33",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 40,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_j4aybgix}.",
    "flag": "CTF{easy_j4aybgix}",
    "requiresLab": false
  },
  {
    "id": 34,
    "title": "Simple Forensics #34",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_jainnpe0}.",
    "flag": "CTF{easy_jainnpe0}",
    "requiresLab": false
  },
  {
    "id": 35,
    "title": "Caesar Cipher #35",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 10,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_1e5pyje3}.",
    "flag": "CTF{easy_1e5pyje3}",
    "requiresLab": false
  },
  {
    "id": 36,
    "title": "Linux 101 #36",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_ssltylq3}.",
    "flag": "CTF{easy_ssltylq3}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_ssltylq3}"
          }
        }
      }
    }
  },
  {
    "id": 37,
    "title": "Base64 Basics #37",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 50,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfbmt1Y2R6cGV9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_nkucdzpe}.",
    "flag": "CTF{easy_nkucdzpe}",
    "requiresLab": false
  },
  {
    "id": 38,
    "title": "Inspect Element #38",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 50,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_pv8jj34a}.",
    "flag": "CTF{easy_pv8jj34a}",
    "requiresLab": false
  },
  {
    "id": 39,
    "title": "Hidden Text #39",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 10,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_q570yf0r}.",
    "flag": "CTF{easy_q570yf0r}",
    "requiresLab": false
  },
  {
    "id": 40,
    "title": "Simple Forensics #40",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 50,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_m9a1l9ab}.",
    "flag": "CTF{easy_m9a1l9ab}",
    "requiresLab": false
  },
  {
    "id": 41,
    "title": "Caesar Cipher #41",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_hv8die9w}.",
    "flag": "CTF{easy_hv8die9w}",
    "requiresLab": false
  },
  {
    "id": 42,
    "title": "Linux 101 #42",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_g4kfo9jr}.",
    "flag": "CTF{easy_g4kfo9jr}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_g4kfo9jr}"
          }
        }
      }
    }
  },
  {
    "id": 43,
    "title": "Base64 Basics #43",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfa3ZueGZ4NHp9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_kvnxfx4z}.",
    "flag": "CTF{easy_kvnxfx4z}",
    "requiresLab": false
  },
  {
    "id": 44,
    "title": "Inspect Element #44",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_3u0bce1t}.",
    "flag": "CTF{easy_3u0bce1t}",
    "requiresLab": false
  },
  {
    "id": 45,
    "title": "Hidden Text #45",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 30,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_g8tmv48q}.",
    "flag": "CTF{easy_g8tmv48q}",
    "requiresLab": false
  },
  {
    "id": 46,
    "title": "Simple Forensics #46",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_yp1e41yj}.",
    "flag": "CTF{easy_yp1e41yj}",
    "requiresLab": false
  },
  {
    "id": 47,
    "title": "Caesar Cipher #47",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_mgfwykkf}.",
    "flag": "CTF{easy_mgfwykkf}",
    "requiresLab": false
  },
  {
    "id": 48,
    "title": "Linux 101 #48",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_6gvvd1a4}.",
    "flag": "CTF{easy_6gvvd1a4}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_6gvvd1a4}"
          }
        }
      }
    }
  },
  {
    "id": 49,
    "title": "Base64 Basics #49",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 10,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfaHNneDZsOHh9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_hsgx6l8x}.",
    "flag": "CTF{easy_hsgx6l8x}",
    "requiresLab": false
  },
  {
    "id": 50,
    "title": "Inspect Element #50",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 40,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_xyiczu2p}.",
    "flag": "CTF{easy_xyiczu2p}",
    "requiresLab": false
  },
  {
    "id": 51,
    "title": "Hidden Text #51",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 30,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_970wchdi}.",
    "flag": "CTF{easy_970wchdi}",
    "requiresLab": false
  },
  {
    "id": 52,
    "title": "Simple Forensics #52",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_1epq88hx}.",
    "flag": "CTF{easy_1epq88hx}",
    "requiresLab": false
  },
  {
    "id": 53,
    "title": "Caesar Cipher #53",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_paqn4dg3}.",
    "flag": "CTF{easy_paqn4dg3}",
    "requiresLab": false
  },
  {
    "id": 54,
    "title": "Linux 101 #54",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_xvvzb8pf}.",
    "flag": "CTF{easy_xvvzb8pf}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_xvvzb8pf}"
          }
        }
      }
    }
  },
  {
    "id": 55,
    "title": "Base64 Basics #55",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 30,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfMTU3dG8wMWl9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_157to01i}.",
    "flag": "CTF{easy_157to01i}",
    "requiresLab": false
  },
  {
    "id": 56,
    "title": "Inspect Element #56",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 50,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_ha2n2q0v}.",
    "flag": "CTF{easy_ha2n2q0v}",
    "requiresLab": false
  },
  {
    "id": 57,
    "title": "Hidden Text #57",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_xwo93krh}.",
    "flag": "CTF{easy_xwo93krh}",
    "requiresLab": false
  },
  {
    "id": 58,
    "title": "Simple Forensics #58",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 50,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_rsztiwij}.",
    "flag": "CTF{easy_rsztiwij}",
    "requiresLab": false
  },
  {
    "id": 59,
    "title": "Caesar Cipher #59",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 50,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_ii3bnhh6}.",
    "flag": "CTF{easy_ii3bnhh6}",
    "requiresLab": false
  },
  {
    "id": 60,
    "title": "Linux 101 #60",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_id6id5gj}.",
    "flag": "CTF{easy_id6id5gj}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_id6id5gj}"
          }
        }
      }
    }
  },
  {
    "id": 61,
    "title": "Base64 Basics #61",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 20,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfd3Vwd2pwZHd9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_wupwjpdw}.",
    "flag": "CTF{easy_wupwjpdw}",
    "requiresLab": false
  },
  {
    "id": 62,
    "title": "Inspect Element #62",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 50,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_jmqkig5f}.",
    "flag": "CTF{easy_jmqkig5f}",
    "requiresLab": false
  },
  {
    "id": 63,
    "title": "Hidden Text #63",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 10,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_0ka660wu}.",
    "flag": "CTF{easy_0ka660wu}",
    "requiresLab": false
  },
  {
    "id": 64,
    "title": "Simple Forensics #64",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 20,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_mpmc71l4}.",
    "flag": "CTF{easy_mpmc71l4}",
    "requiresLab": false
  },
  {
    "id": 65,
    "title": "Caesar Cipher #65",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_60uxi6sk}.",
    "flag": "CTF{easy_60uxi6sk}",
    "requiresLab": false
  },
  {
    "id": 66,
    "title": "Linux 101 #66",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_9mt7v68n}.",
    "flag": "CTF{easy_9mt7v68n}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_9mt7v68n}"
          }
        }
      }
    }
  },
  {
    "id": 67,
    "title": "Base64 Basics #67",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 40,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfZ2lmcXV4ZmN9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_gifquxfc}.",
    "flag": "CTF{easy_gifquxfc}",
    "requiresLab": false
  },
  {
    "id": 68,
    "title": "Inspect Element #68",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 40,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_486xsilm}.",
    "flag": "CTF{easy_486xsilm}",
    "requiresLab": false
  },
  {
    "id": 69,
    "title": "Hidden Text #69",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 20,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_2vmdjxr4}.",
    "flag": "CTF{easy_2vmdjxr4}",
    "requiresLab": false
  },
  {
    "id": 70,
    "title": "Simple Forensics #70",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_4nczjkdd}.",
    "flag": "CTF{easy_4nczjkdd}",
    "requiresLab": false
  },
  {
    "id": 71,
    "title": "Caesar Cipher #71",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_ikzvdajv}.",
    "flag": "CTF{easy_ikzvdajv}",
    "requiresLab": false
  },
  {
    "id": 72,
    "title": "Linux 101 #72",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_mxrg357i}.",
    "flag": "CTF{easy_mxrg357i}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_mxrg357i}"
          }
        }
      }
    }
  },
  {
    "id": 73,
    "title": "Base64 Basics #73",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 30,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfeDJhYXF5ZWp9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_x2aaqyej}.",
    "flag": "CTF{easy_x2aaqyej}",
    "requiresLab": false
  },
  {
    "id": 74,
    "title": "Inspect Element #74",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_l9q3hfoq}.",
    "flag": "CTF{easy_l9q3hfoq}",
    "requiresLab": false
  },
  {
    "id": 75,
    "title": "Hidden Text #75",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_x93luqmn}.",
    "flag": "CTF{easy_x93luqmn}",
    "requiresLab": false
  },
  {
    "id": 76,
    "title": "Simple Forensics #76",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_gaoalavw}.",
    "flag": "CTF{easy_gaoalavw}",
    "requiresLab": false
  },
  {
    "id": 77,
    "title": "Caesar Cipher #77",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 10,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_zgozo6oe}.",
    "flag": "CTF{easy_zgozo6oe}",
    "requiresLab": false
  },
  {
    "id": 78,
    "title": "Linux 101 #78",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 20,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_h423jy71}.",
    "flag": "CTF{easy_h423jy71}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_h423jy71}"
          }
        }
      }
    }
  },
  {
    "id": 79,
    "title": "Base64 Basics #79",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 40,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfbjlzdWxuMGx9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_n9suln0l}.",
    "flag": "CTF{easy_n9suln0l}",
    "requiresLab": false
  },
  {
    "id": 80,
    "title": "Inspect Element #80",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_5xjgkdu8}.",
    "flag": "CTF{easy_5xjgkdu8}",
    "requiresLab": false
  },
  {
    "id": 81,
    "title": "Hidden Text #81",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_b4sp0d6e}.",
    "flag": "CTF{easy_b4sp0d6e}",
    "requiresLab": false
  },
  {
    "id": 82,
    "title": "Simple Forensics #82",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_8ze26puy}.",
    "flag": "CTF{easy_8ze26puy}",
    "requiresLab": false
  },
  {
    "id": 83,
    "title": "Caesar Cipher #83",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 20,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_mcse9mwk}.",
    "flag": "CTF{easy_mcse9mwk}",
    "requiresLab": false
  },
  {
    "id": 84,
    "title": "Linux 101 #84",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_wve03uy5}.",
    "flag": "CTF{easy_wve03uy5}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_wve03uy5}"
          }
        }
      }
    }
  },
  {
    "id": 85,
    "title": "Base64 Basics #85",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfcGZqYmRvMDh9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_pfjbdo08}.",
    "flag": "CTF{easy_pfjbdo08}",
    "requiresLab": false
  },
  {
    "id": 86,
    "title": "Inspect Element #86",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 30,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_uxv88fwx}.",
    "flag": "CTF{easy_uxv88fwx}",
    "requiresLab": false
  },
  {
    "id": 87,
    "title": "Hidden Text #87",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_adp3wn54}.",
    "flag": "CTF{easy_adp3wn54}",
    "requiresLab": false
  },
  {
    "id": 88,
    "title": "Simple Forensics #88",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_p9r6s2h5}.",
    "flag": "CTF{easy_p9r6s2h5}",
    "requiresLab": false
  },
  {
    "id": 89,
    "title": "Caesar Cipher #89",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_x69ynovs}.",
    "flag": "CTF{easy_x69ynovs}",
    "requiresLab": false
  },
  {
    "id": 90,
    "title": "Linux 101 #90",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_rlw9csd8}.",
    "flag": "CTF{easy_rlw9csd8}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_rlw9csd8}"
          }
        }
      }
    }
  },
  {
    "id": 91,
    "title": "Base64 Basics #91",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 20,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfOGh3NzFob2N9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_8hw71hoc}.",
    "flag": "CTF{easy_8hw71hoc}",
    "requiresLab": false
  },
  {
    "id": 92,
    "title": "Inspect Element #92",
    "category": "Networking",
    "difficulty": "Easy",
    "points": 20,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_8we0pko0}.",
    "flag": "CTF{easy_8we0pko0}",
    "requiresLab": false
  },
  {
    "id": 93,
    "title": "Hidden Text #93",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 40,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_w8kk4pps}.",
    "flag": "CTF{easy_w8kk4pps}",
    "requiresLab": false
  },
  {
    "id": 94,
    "title": "Simple Forensics #94",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_jrjwyl8d}.",
    "flag": "CTF{easy_jrjwyl8d}",
    "requiresLab": false
  },
  {
    "id": 95,
    "title": "Caesar Cipher #95",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 20,
    "description": "Veni Vidi Vici. The message is shifted by 3.",
    "hint": "ROT13 but different.",
    "solution": "Langkah 1: Siswa diberikan teks terenkripsi (ciphertext).\nLangkah 2: Karena petunjuk mengatakan 'shifted by 3', ini adalah sandi Caesar dengan pergeseran 3 karakter (ROT3).\nLangkah 3: Gunakan alat dekripsi online atau skrip Python untuk menggeser huruf mundur sebanyak 3 langkah.\nLangkah 4: Hasil dekripsinya adalah flag: CTF{easy_x7s5jlvj}.",
    "flag": "CTF{easy_x7s5jlvj}",
    "requiresLab": false
  },
  {
    "id": 96,
    "title": "Linux 101 #96",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the hidden file in the home directory.",
    "hint": "ls -la",
    "solution": "Langkah 1: Masuk ke dalam Terminal Virtual Lab.\nLangkah 2: Ketikkan perintah 'ls -la' untuk menampilkan semua file, termasuk file tersembunyi (yang diawali dengan titik).\nLangkah 3: Anda akan melihat file bernama '.secret.txt'.\nLangkah 4: Baca file tersebut dengan mengetik 'cat .secret.txt' untuk mendapatkan flag: CTF{easy_1aromhsf}.",
    "flag": "CTF{easy_1aromhsf}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "linux-basic",
      "fileSystem": {
        "home": {
          "player": {
            ".secret.txt": "CTF{easy_1aromhsf}"
          }
        }
      }
    }
  },
  {
    "id": 97,
    "title": "Base64 Basics #97",
    "category": "Steganography",
    "difficulty": "Easy",
    "points": 40,
    "description": "Decode this string to find the flag: Q1RGe2Vhc3lfYmFtbDdycTF9",
    "hint": "It ends with ==",
    "solution": "Langkah 1: Salin string base64 yang diberikan.\nLangkah 2: Buka website seperti CyberChef atau gunakan perintah terminal 'echo [string] | base64 -d'.\nLangkah 3: Setelah di-decode, teks asli akan menampilkan flag secara langsung yaitu: CTF{easy_baml7rq1}.",
    "flag": "CTF{easy_baml7rq1}",
    "requiresLab": false
  },
  {
    "id": 98,
    "title": "Inspect Element #98",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 30,
    "description": "The flag is hidden in the source code of a mysterious page.",
    "hint": "F12 is your friend.",
    "solution": "Langkah 1: Buka halaman web soal (atau simulasi soal ini).\nLangkah 2: Klik kanan pada halaman dan pilih 'Inspect' atau tekan F12 untuk membuka Developer Tools.\nLangkah 3: Cari di dalam tag HTML (biasanya tersembunyi di komentar HTML <!-- -->).\nLangkah 4: Anda akan menemukan flag: CTF{easy_b1l4tn67}.",
    "flag": "CTF{easy_b1l4tn67}",
    "requiresLab": false
  },
  {
    "id": 99,
    "title": "Hidden Text #99",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "There is white text on a white background.",
    "hint": "Ctrl+A might reveal something.",
    "solution": "Langkah 1: Buka halaman soal.\nLangkah 2: Teks flag disembunyikan menggunakan warna font yang sama dengan warna latar (putih).\nLangkah 3: Blok semua teks di halaman dengan menekan Ctrl+A (atau Command+A).\nLangkah 4: Teks yang tersembunyi akan tersorot dan memperlihatkan flag: CTF{easy_jtomxpzp}.",
    "flag": "CTF{easy_jtomxpzp}",
    "requiresLab": false
  },
  {
    "id": 100,
    "title": "Simple Forensics #100",
    "category": "Misc",
    "difficulty": "Easy",
    "points": 30,
    "description": "Find the flag in this image metadata.",
    "hint": "exiftool is useful here.",
    "solution": "Langkah 1: Unduh file gambar yang diberikan.\nLangkah 2: Buka terminal dan gunakan alat ExifTool dengan perintah 'exiftool nama_file.jpg'.\nLangkah 3: Periksa output metadata pada bagian 'Copyright' atau 'Description'.\nLangkah 4: Metadata tersebut menyimpan flag: CTF{easy_5ae6wa8h}.",
    "flag": "CTF{easy_5ae6wa8h}",
    "requiresLab": false
  },
  {
    "id": 101,
    "title": "SQLi Login #1",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 50,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_c1nl4exj}.",
    "flag": "CTF{medium_c1nl4exj}",
    "requiresLab": false
  },
  {
    "id": 102,
    "title": "Directory Traversal #2",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_sfecuxy9}.",
    "flag": "CTF{medium_sfecuxy9}",
    "requiresLab": false
  },
  {
    "id": 103,
    "title": "RSA Basic #3",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 50,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_wndtxefs}.",
    "flag": "CTF{medium_wndtxefs}",
    "requiresLab": false
  },
  {
    "id": 104,
    "title": "Buffer Overflow 1 #4",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 50,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_z4c3ev9r}.",
    "flag": "CTF{medium_z4c3ev9r}",
    "requiresLab": false
  },
  {
    "id": 105,
    "title": "Stego Audio #5",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 70,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_vf1c43h3}.",
    "flag": "CTF{medium_vf1c43h3}",
    "requiresLab": false
  },
  {
    "id": 106,
    "title": "File Permissions #6",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 60,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_l1pxds6x}.",
    "flag": "CTF{medium_l1pxds6x}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_l1pxds6x}"
        }
      }
    }
  },
  {
    "id": 107,
    "title": "SQLi Login #7",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_8tqq5vet}.",
    "flag": "CTF{medium_8tqq5vet}",
    "requiresLab": false
  },
  {
    "id": 108,
    "title": "Directory Traversal #8",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 60,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_sxn13uey}.",
    "flag": "CTF{medium_sxn13uey}",
    "requiresLab": false
  },
  {
    "id": 109,
    "title": "RSA Basic #9",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_ifjb5l00}.",
    "flag": "CTF{medium_ifjb5l00}",
    "requiresLab": false
  },
  {
    "id": 110,
    "title": "Buffer Overflow 1 #10",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 90,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_tcvfcs2i}.",
    "flag": "CTF{medium_tcvfcs2i}",
    "requiresLab": false
  },
  {
    "id": 111,
    "title": "Stego Audio #11",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 90,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_6dbmgd02}.",
    "flag": "CTF{medium_6dbmgd02}",
    "requiresLab": false
  },
  {
    "id": 112,
    "title": "File Permissions #12",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 50,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_8khri0re}.",
    "flag": "CTF{medium_8khri0re}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_8khri0re}"
        }
      }
    }
  },
  {
    "id": 113,
    "title": "SQLi Login #13",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_5wwt7bsk}.",
    "flag": "CTF{medium_5wwt7bsk}",
    "requiresLab": false
  },
  {
    "id": 114,
    "title": "Directory Traversal #14",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_65e7gmw5}.",
    "flag": "CTF{medium_65e7gmw5}",
    "requiresLab": false
  },
  {
    "id": 115,
    "title": "RSA Basic #15",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_e2hw3gat}.",
    "flag": "CTF{medium_e2hw3gat}",
    "requiresLab": false
  },
  {
    "id": 116,
    "title": "Buffer Overflow 1 #16",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_hkexdtwz}.",
    "flag": "CTF{medium_hkexdtwz}",
    "requiresLab": false
  },
  {
    "id": 117,
    "title": "Stego Audio #17",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_m602013g}.",
    "flag": "CTF{medium_m602013g}",
    "requiresLab": false
  },
  {
    "id": 118,
    "title": "File Permissions #18",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 50,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_9wb5w2r5}.",
    "flag": "CTF{medium_9wb5w2r5}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_9wb5w2r5}"
        }
      }
    }
  },
  {
    "id": 119,
    "title": "SQLi Login #19",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 70,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_3ywiof28}.",
    "flag": "CTF{medium_3ywiof28}",
    "requiresLab": false
  },
  {
    "id": 120,
    "title": "Directory Traversal #20",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_fg4th9lx}.",
    "flag": "CTF{medium_fg4th9lx}",
    "requiresLab": false
  },
  {
    "id": 121,
    "title": "RSA Basic #21",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_lli1phqa}.",
    "flag": "CTF{medium_lli1phqa}",
    "requiresLab": false
  },
  {
    "id": 122,
    "title": "Buffer Overflow 1 #22",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 60,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_i1e5y3c1}.",
    "flag": "CTF{medium_i1e5y3c1}",
    "requiresLab": false
  },
  {
    "id": 123,
    "title": "Stego Audio #23",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_qjr0497v}.",
    "flag": "CTF{medium_qjr0497v}",
    "requiresLab": false
  },
  {
    "id": 124,
    "title": "File Permissions #24",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_1s463ogw}.",
    "flag": "CTF{medium_1s463ogw}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_1s463ogw}"
        }
      }
    }
  },
  {
    "id": 125,
    "title": "SQLi Login #25",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 60,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_flj0zhns}.",
    "flag": "CTF{medium_flj0zhns}",
    "requiresLab": false
  },
  {
    "id": 126,
    "title": "Directory Traversal #26",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 70,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_9kjkhdeq}.",
    "flag": "CTF{medium_9kjkhdeq}",
    "requiresLab": false
  },
  {
    "id": 127,
    "title": "RSA Basic #27",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_8dgw727m}.",
    "flag": "CTF{medium_8dgw727m}",
    "requiresLab": false
  },
  {
    "id": 128,
    "title": "Buffer Overflow 1 #28",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 60,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_8xju7xgz}.",
    "flag": "CTF{medium_8xju7xgz}",
    "requiresLab": false
  },
  {
    "id": 129,
    "title": "Stego Audio #29",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 80,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_560abufj}.",
    "flag": "CTF{medium_560abufj}",
    "requiresLab": false
  },
  {
    "id": 130,
    "title": "File Permissions #30",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 60,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_e6vaa1lf}.",
    "flag": "CTF{medium_e6vaa1lf}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_e6vaa1lf}"
        }
      }
    }
  },
  {
    "id": 131,
    "title": "SQLi Login #31",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_srcqayvn}.",
    "flag": "CTF{medium_srcqayvn}",
    "requiresLab": false
  },
  {
    "id": 132,
    "title": "Directory Traversal #32",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_tfi2wmwp}.",
    "flag": "CTF{medium_tfi2wmwp}",
    "requiresLab": false
  },
  {
    "id": 133,
    "title": "RSA Basic #33",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 90,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_rrsl7m2m}.",
    "flag": "CTF{medium_rrsl7m2m}",
    "requiresLab": false
  },
  {
    "id": 134,
    "title": "Buffer Overflow 1 #34",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_ufjwbcdm}.",
    "flag": "CTF{medium_ufjwbcdm}",
    "requiresLab": false
  },
  {
    "id": 135,
    "title": "Stego Audio #35",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 70,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_emdhc176}.",
    "flag": "CTF{medium_emdhc176}",
    "requiresLab": false
  },
  {
    "id": 136,
    "title": "File Permissions #36",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 80,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_23nl43uc}.",
    "flag": "CTF{medium_23nl43uc}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_23nl43uc}"
        }
      }
    }
  },
  {
    "id": 137,
    "title": "SQLi Login #37",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_wc8boz9l}.",
    "flag": "CTF{medium_wc8boz9l}",
    "requiresLab": false
  },
  {
    "id": 138,
    "title": "Directory Traversal #38",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_119uf1ti}.",
    "flag": "CTF{medium_119uf1ti}",
    "requiresLab": false
  },
  {
    "id": 139,
    "title": "RSA Basic #39",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_em6kuck9}.",
    "flag": "CTF{medium_em6kuck9}",
    "requiresLab": false
  },
  {
    "id": 140,
    "title": "Buffer Overflow 1 #40",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 90,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_epqvka46}.",
    "flag": "CTF{medium_epqvka46}",
    "requiresLab": false
  },
  {
    "id": 141,
    "title": "Stego Audio #41",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 60,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_8sagqjxh}.",
    "flag": "CTF{medium_8sagqjxh}",
    "requiresLab": false
  },
  {
    "id": 142,
    "title": "File Permissions #42",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 60,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_0sugaens}.",
    "flag": "CTF{medium_0sugaens}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_0sugaens}"
        }
      }
    }
  },
  {
    "id": 143,
    "title": "SQLi Login #43",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_sh63dkxf}.",
    "flag": "CTF{medium_sh63dkxf}",
    "requiresLab": false
  },
  {
    "id": 144,
    "title": "Directory Traversal #44",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 90,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_uf6accpe}.",
    "flag": "CTF{medium_uf6accpe}",
    "requiresLab": false
  },
  {
    "id": 145,
    "title": "RSA Basic #45",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 90,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_1xw5pys2}.",
    "flag": "CTF{medium_1xw5pys2}",
    "requiresLab": false
  },
  {
    "id": 146,
    "title": "Buffer Overflow 1 #46",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 80,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_4ll1s2p9}.",
    "flag": "CTF{medium_4ll1s2p9}",
    "requiresLab": false
  },
  {
    "id": 147,
    "title": "Stego Audio #47",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 50,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_dfkinon3}.",
    "flag": "CTF{medium_dfkinon3}",
    "requiresLab": false
  },
  {
    "id": 148,
    "title": "File Permissions #48",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 60,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_rmrl3i2g}.",
    "flag": "CTF{medium_rmrl3i2g}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_rmrl3i2g}"
        }
      }
    }
  },
  {
    "id": 149,
    "title": "SQLi Login #49",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 50,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_6cyetusl}.",
    "flag": "CTF{medium_6cyetusl}",
    "requiresLab": false
  },
  {
    "id": 150,
    "title": "Directory Traversal #50",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 60,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_rhngfbx0}.",
    "flag": "CTF{medium_rhngfbx0}",
    "requiresLab": false
  },
  {
    "id": 151,
    "title": "RSA Basic #51",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_xpm3twm8}.",
    "flag": "CTF{medium_xpm3twm8}",
    "requiresLab": false
  },
  {
    "id": 152,
    "title": "Buffer Overflow 1 #52",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_99jrbuzl}.",
    "flag": "CTF{medium_99jrbuzl}",
    "requiresLab": false
  },
  {
    "id": 153,
    "title": "Stego Audio #53",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 80,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_0ynhgqh8}.",
    "flag": "CTF{medium_0ynhgqh8}",
    "requiresLab": false
  },
  {
    "id": 154,
    "title": "File Permissions #54",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 60,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_3ho4banb}.",
    "flag": "CTF{medium_3ho4banb}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_3ho4banb}"
        }
      }
    }
  },
  {
    "id": 155,
    "title": "SQLi Login #55",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 50,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_hot0fqir}.",
    "flag": "CTF{medium_hot0fqir}",
    "requiresLab": false
  },
  {
    "id": 156,
    "title": "Directory Traversal #56",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_7wel33ss}.",
    "flag": "CTF{medium_7wel33ss}",
    "requiresLab": false
  },
  {
    "id": 157,
    "title": "RSA Basic #57",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_b74aq7s4}.",
    "flag": "CTF{medium_b74aq7s4}",
    "requiresLab": false
  },
  {
    "id": 158,
    "title": "Buffer Overflow 1 #58",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 50,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_yqtsni7n}.",
    "flag": "CTF{medium_yqtsni7n}",
    "requiresLab": false
  },
  {
    "id": 159,
    "title": "Stego Audio #59",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_6legxlh3}.",
    "flag": "CTF{medium_6legxlh3}",
    "requiresLab": false
  },
  {
    "id": 160,
    "title": "File Permissions #60",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_jizp2rjp}.",
    "flag": "CTF{medium_jizp2rjp}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_jizp2rjp}"
        }
      }
    }
  },
  {
    "id": 161,
    "title": "SQLi Login #61",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_cnm5stu3}.",
    "flag": "CTF{medium_cnm5stu3}",
    "requiresLab": false
  },
  {
    "id": 162,
    "title": "Directory Traversal #62",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_psfgno2z}.",
    "flag": "CTF{medium_psfgno2z}",
    "requiresLab": false
  },
  {
    "id": 163,
    "title": "RSA Basic #63",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_u6iuwyse}.",
    "flag": "CTF{medium_u6iuwyse}",
    "requiresLab": false
  },
  {
    "id": 164,
    "title": "Buffer Overflow 1 #64",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_0boukc91}.",
    "flag": "CTF{medium_0boukc91}",
    "requiresLab": false
  },
  {
    "id": 165,
    "title": "Stego Audio #65",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_4i9kmyx5}.",
    "flag": "CTF{medium_4i9kmyx5}",
    "requiresLab": false
  },
  {
    "id": 166,
    "title": "File Permissions #66",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_zgh3nv1r}.",
    "flag": "CTF{medium_zgh3nv1r}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_zgh3nv1r}"
        }
      }
    }
  },
  {
    "id": 167,
    "title": "SQLi Login #67",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 60,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_1xxk4djc}.",
    "flag": "CTF{medium_1xxk4djc}",
    "requiresLab": false
  },
  {
    "id": 168,
    "title": "Directory Traversal #68",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 60,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_wy5gnl5w}.",
    "flag": "CTF{medium_wy5gnl5w}",
    "requiresLab": false
  },
  {
    "id": 169,
    "title": "RSA Basic #69",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 70,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_svpmtvz0}.",
    "flag": "CTF{medium_svpmtvz0}",
    "requiresLab": false
  },
  {
    "id": 170,
    "title": "Buffer Overflow 1 #70",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 50,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_mnhsedni}.",
    "flag": "CTF{medium_mnhsedni}",
    "requiresLab": false
  },
  {
    "id": 171,
    "title": "Stego Audio #71",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 50,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_nkeh7imf}.",
    "flag": "CTF{medium_nkeh7imf}",
    "requiresLab": false
  },
  {
    "id": 172,
    "title": "File Permissions #72",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_8p3cgw9o}.",
    "flag": "CTF{medium_8p3cgw9o}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_8p3cgw9o}"
        }
      }
    }
  },
  {
    "id": 173,
    "title": "SQLi Login #73",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_nmbbh2ff}.",
    "flag": "CTF{medium_nmbbh2ff}",
    "requiresLab": false
  },
  {
    "id": 174,
    "title": "Directory Traversal #74",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 50,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_4zzha9gx}.",
    "flag": "CTF{medium_4zzha9gx}",
    "requiresLab": false
  },
  {
    "id": 175,
    "title": "RSA Basic #75",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 50,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_pu6lmtz8}.",
    "flag": "CTF{medium_pu6lmtz8}",
    "requiresLab": false
  },
  {
    "id": 176,
    "title": "Buffer Overflow 1 #76",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_jt1052kk}.",
    "flag": "CTF{medium_jt1052kk}",
    "requiresLab": false
  },
  {
    "id": 177,
    "title": "Stego Audio #77",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 80,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_80p0noz5}.",
    "flag": "CTF{medium_80p0noz5}",
    "requiresLab": false
  },
  {
    "id": 178,
    "title": "File Permissions #78",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_3fon7zmc}.",
    "flag": "CTF{medium_3fon7zmc}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_3fon7zmc}"
        }
      }
    }
  },
  {
    "id": 179,
    "title": "SQLi Login #79",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 90,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_tbpxtf0z}.",
    "flag": "CTF{medium_tbpxtf0z}",
    "requiresLab": false
  },
  {
    "id": 180,
    "title": "Directory Traversal #80",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_lk4akxxp}.",
    "flag": "CTF{medium_lk4akxxp}",
    "requiresLab": false
  },
  {
    "id": 181,
    "title": "RSA Basic #81",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 90,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_eisl5o4w}.",
    "flag": "CTF{medium_eisl5o4w}",
    "requiresLab": false
  },
  {
    "id": 182,
    "title": "Buffer Overflow 1 #82",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 90,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_j2bzxa5e}.",
    "flag": "CTF{medium_j2bzxa5e}",
    "requiresLab": false
  },
  {
    "id": 183,
    "title": "Stego Audio #83",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_pwjn1oyh}.",
    "flag": "CTF{medium_pwjn1oyh}",
    "requiresLab": false
  },
  {
    "id": 184,
    "title": "File Permissions #84",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 80,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_7wa6qflp}.",
    "flag": "CTF{medium_7wa6qflp}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_7wa6qflp}"
        }
      }
    }
  },
  {
    "id": 185,
    "title": "SQLi Login #85",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 90,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_361dbgr8}.",
    "flag": "CTF{medium_361dbgr8}",
    "requiresLab": false
  },
  {
    "id": 186,
    "title": "Directory Traversal #86",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 90,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_7qradu5k}.",
    "flag": "CTF{medium_7qradu5k}",
    "requiresLab": false
  },
  {
    "id": 187,
    "title": "RSA Basic #87",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_nq8pre4a}.",
    "flag": "CTF{medium_nq8pre4a}",
    "requiresLab": false
  },
  {
    "id": 188,
    "title": "Buffer Overflow 1 #88",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 80,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_bxjcxw94}.",
    "flag": "CTF{medium_bxjcxw94}",
    "requiresLab": false
  },
  {
    "id": 189,
    "title": "Stego Audio #89",
    "category": "Misc",
    "difficulty": "Medium",
    "points": 60,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_m8npck9x}.",
    "flag": "CTF{medium_m8npck9x}",
    "requiresLab": false
  },
  {
    "id": 190,
    "title": "File Permissions #90",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 70,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_hxxl588k}.",
    "flag": "CTF{medium_hxxl588k}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_hxxl588k}"
        }
      }
    }
  },
  {
    "id": 191,
    "title": "SQLi Login #91",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 90,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_omb21xx5}.",
    "flag": "CTF{medium_omb21xx5}",
    "requiresLab": false
  },
  {
    "id": 192,
    "title": "Directory Traversal #92",
    "category": "Steganography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_octsksiv}.",
    "flag": "CTF{medium_octsksiv}",
    "requiresLab": false
  },
  {
    "id": 193,
    "title": "RSA Basic #93",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_g2sg3kat}.",
    "flag": "CTF{medium_g2sg3kat}",
    "requiresLab": false
  },
  {
    "id": 194,
    "title": "Buffer Overflow 1 #94",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 60,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_bwmagb2f}.",
    "flag": "CTF{medium_bwmagb2f}",
    "requiresLab": false
  },
  {
    "id": 195,
    "title": "Stego Audio #95",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 50,
    "description": "There is a hidden message in the spectrogram.",
    "hint": "Use Audacity or Sonic Visualiser.",
    "solution": "Langkah 1: Unduh file audio (.wav atau .mp3) yang diberikan.\nLangkah 2: Buka file tersebut menggunakan aplikasi Sonic Visualiser atau Audacity.\nLangkah 3: Ubah tampilan audio dari mode Waveform ke mode Spectrogram.\nLangkah 4: Pada frekuensi tertentu, akan tergambar visual teks yang merupakan flag: CTF{medium_n491x0df}.",
    "flag": "CTF{medium_n491x0df}",
    "requiresLab": false
  },
  {
    "id": 196,
    "title": "File Permissions #96",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "You are a low privilege user, but a script runs as root.",
    "hint": "Check SUID bits.",
    "solution": "Langkah 1: Masuk ke Terminal Virtual Lab sebagai user 'player'.\nLangkah 2: Gunakan perintah 'ls -la /opt/script' atau 'find / -perm -4000 2>/dev/null' untuk melihat file dengan SUID root.\nLangkah 3: Eksekusi script SUID tersebut, yang secara tidak langsung memiliki izin untuk membaca file terbatas.\nLangkah 4: Script tersebut akan mencetak flag: CTF{medium_4ycsadjn}.",
    "flag": "CTF{medium_4ycsadjn}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "server",
      "fileSystem": {
        "home": {
          "player": {
            "hint.txt": "Check /opt/script"
          }
        },
        "opt": {
          "script": "Executable binary that prints: CTF{medium_4ycsadjn}"
        }
      }
    }
  },
  {
    "id": 197,
    "title": "SQLi Login #97",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Bypass the login prompt. We know the admin username.",
    "hint": "' OR 1=1 --",
    "solution": "Langkah 1: Identifikasi form login yang rentan terhadap SQL Injection.\nLangkah 2: Masukkan username 'admin'.\nLangkah 3: Pada kolom password, masukkan payload injeksi: ' OR 1=1 --\nLangkah 4: Query di server akan menjadi TRUE dan mengizinkan login tanpa password, lalu sistem akan menampilkan flag: CTF{medium_uyo7nyuq}.",
    "flag": "CTF{medium_uyo7nyuq}",
    "requiresLab": false
  },
  {
    "id": 198,
    "title": "Directory Traversal #98",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Read the /etc/passwd file from the web server.",
    "hint": "../../../etc/passwd",
    "solution": "Langkah 1: Analisis URL atau parameter input yang mengambil file, misal ?file=gambar.png.\nLangkah 2: Ganti parameter file tersebut dengan payload traversal '../' untuk naik direktori.\nLangkah 3: Masukkan payload seperti '../../../../etc/passwd'.\nLangkah 4: Server akan merender isi file passwd yang di bagian akhirnya sengaja ditambahkan flag: CTF{medium_kzjtfvpg}.",
    "flag": "CTF{medium_kzjtfvpg}",
    "requiresLab": false
  },
  {
    "id": 199,
    "title": "RSA Basic #99",
    "category": "Networking",
    "difficulty": "Medium",
    "points": 60,
    "description": "Given N, e, and C. Find the plaintext.",
    "hint": "Factor N if it's small enough.",
    "solution": "Langkah 1: Soal memberikan nilai modulus (N), eksponen publik (e), dan ciphertext (C).\nLangkah 2: Karena nilai N kecil, gunakan alat online seperti FactorDB untuk mencari nilai prime p dan q.\nLangkah 3: Hitung private key (d) menggunakan p, q, dan e (dengan script Python atau RSACtfTool).\nLangkah 4: Dekripsi ciphertext C dengan private key d untuk mendapatkan: CTF{medium_7rzm6ofu}.",
    "flag": "CTF{medium_7rzm6ofu}",
    "requiresLab": false
  },
  {
    "id": 200,
    "title": "Buffer Overflow 1 #100",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Overwrite the variable to get the flag.",
    "hint": "Check the buffer size.",
    "solution": "Langkah 1: Siswa diberikan file biner ELF atau executable.\nLangkah 2: Lakukan analisis untuk mengetahui bahwa variabel buffer menampung 64 byte.\nLangkah 3: Kirim input string berisi 64 karakter sampah (contoh: 'A' * 64) diikuti dengan string kunci untuk memicu fungsi pembuka flag.\nLangkah 4: Setelah variabel tertimpa, program akan mencetak flag: CTF{medium_2bugh560}.",
    "flag": "CTF{medium_2bugh560}",
    "requiresLab": false
  },
  {
    "id": 201,
    "title": "Blind SQLi #1",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 110,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_wkir6i70}.",
    "flag": "CTF{hard_wkir6i70}",
    "requiresLab": false
  },
  {
    "id": 202,
    "title": "ROP Chain #2",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_sjcslhnp}.",
    "flag": "CTF{hard_sjcslhnp}",
    "requiresLab": false
  },
  {
    "id": 203,
    "title": "Custom Crypto #3",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 110,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_bbls7wuf}.",
    "flag": "CTF{hard_bbls7wuf}",
    "requiresLab": false
  },
  {
    "id": 204,
    "title": "Advanced Malware #4",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_tz7um86c}.",
    "flag": "CTF{hard_tz7um86c}",
    "requiresLab": false
  },
  {
    "id": 205,
    "title": "Heap Exploitation #5",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_ghrztfly}.",
    "flag": "CTF{hard_ghrztfly}",
    "requiresLab": false
  },
  {
    "id": 206,
    "title": "Privilege Escalation #6",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_gnjsnlmw}.",
    "flag": "CTF{hard_gnjsnlmw}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_gnjsnlmw}"
        }
      }
    }
  },
  {
    "id": 207,
    "title": "Blind SQLi #7",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_4eb8r3ly}.",
    "flag": "CTF{hard_4eb8r3ly}",
    "requiresLab": false
  },
  {
    "id": 208,
    "title": "ROP Chain #8",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_poehg4lg}.",
    "flag": "CTF{hard_poehg4lg}",
    "requiresLab": false
  },
  {
    "id": 209,
    "title": "Custom Crypto #9",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_uid0kdes}.",
    "flag": "CTF{hard_uid0kdes}",
    "requiresLab": false
  },
  {
    "id": 210,
    "title": "Advanced Malware #10",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 120,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_v7dem0uc}.",
    "flag": "CTF{hard_v7dem0uc}",
    "requiresLab": false
  },
  {
    "id": 211,
    "title": "Heap Exploitation #11",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_6uzgytg2}.",
    "flag": "CTF{hard_6uzgytg2}",
    "requiresLab": false
  },
  {
    "id": 212,
    "title": "Privilege Escalation #12",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 130,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_e5pll2of}.",
    "flag": "CTF{hard_e5pll2of}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_e5pll2of}"
        }
      }
    }
  },
  {
    "id": 213,
    "title": "Blind SQLi #13",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 110,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_fd49roho}.",
    "flag": "CTF{hard_fd49roho}",
    "requiresLab": false
  },
  {
    "id": 214,
    "title": "ROP Chain #14",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_3mqsm5kj}.",
    "flag": "CTF{hard_3mqsm5kj}",
    "requiresLab": false
  },
  {
    "id": 215,
    "title": "Custom Crypto #15",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 100,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_1ma0984b}.",
    "flag": "CTF{hard_1ma0984b}",
    "requiresLab": false
  },
  {
    "id": 216,
    "title": "Advanced Malware #16",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_klb6yty5}.",
    "flag": "CTF{hard_klb6yty5}",
    "requiresLab": false
  },
  {
    "id": 217,
    "title": "Heap Exploitation #17",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_w0m1cz6t}.",
    "flag": "CTF{hard_w0m1cz6t}",
    "requiresLab": false
  },
  {
    "id": 218,
    "title": "Privilege Escalation #18",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_met4hdbu}.",
    "flag": "CTF{hard_met4hdbu}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_met4hdbu}"
        }
      }
    }
  },
  {
    "id": 219,
    "title": "Blind SQLi #19",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 140,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_fc5ne11z}.",
    "flag": "CTF{hard_fc5ne11z}",
    "requiresLab": false
  },
  {
    "id": 220,
    "title": "ROP Chain #20",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 100,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_jmcstgv3}.",
    "flag": "CTF{hard_jmcstgv3}",
    "requiresLab": false
  },
  {
    "id": 221,
    "title": "Custom Crypto #21",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 100,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_7yca5i46}.",
    "flag": "CTF{hard_7yca5i46}",
    "requiresLab": false
  },
  {
    "id": 222,
    "title": "Advanced Malware #22",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_kmt92wbm}.",
    "flag": "CTF{hard_kmt92wbm}",
    "requiresLab": false
  },
  {
    "id": 223,
    "title": "Heap Exploitation #23",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_ux1ofy96}.",
    "flag": "CTF{hard_ux1ofy96}",
    "requiresLab": false
  },
  {
    "id": 224,
    "title": "Privilege Escalation #24",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_82hrd3kt}.",
    "flag": "CTF{hard_82hrd3kt}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_82hrd3kt}"
        }
      }
    }
  },
  {
    "id": 225,
    "title": "Blind SQLi #25",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 130,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_fq8v7ti1}.",
    "flag": "CTF{hard_fq8v7ti1}",
    "requiresLab": false
  },
  {
    "id": 226,
    "title": "ROP Chain #26",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_78tmxrpr}.",
    "flag": "CTF{hard_78tmxrpr}",
    "requiresLab": false
  },
  {
    "id": 227,
    "title": "Custom Crypto #27",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 140,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_rwmjv3q9}.",
    "flag": "CTF{hard_rwmjv3q9}",
    "requiresLab": false
  },
  {
    "id": 228,
    "title": "Advanced Malware #28",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_tutjd0re}.",
    "flag": "CTF{hard_tutjd0re}",
    "requiresLab": false
  },
  {
    "id": 229,
    "title": "Heap Exploitation #29",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_b3a9eca5}.",
    "flag": "CTF{hard_b3a9eca5}",
    "requiresLab": false
  },
  {
    "id": 230,
    "title": "Privilege Escalation #30",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_sbde8ytf}.",
    "flag": "CTF{hard_sbde8ytf}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_sbde8ytf}"
        }
      }
    }
  },
  {
    "id": 231,
    "title": "Blind SQLi #31",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_0sagku9m}.",
    "flag": "CTF{hard_0sagku9m}",
    "requiresLab": false
  },
  {
    "id": 232,
    "title": "ROP Chain #32",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 100,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_wa42iae7}.",
    "flag": "CTF{hard_wa42iae7}",
    "requiresLab": false
  },
  {
    "id": 233,
    "title": "Custom Crypto #33",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_smfk814v}.",
    "flag": "CTF{hard_smfk814v}",
    "requiresLab": false
  },
  {
    "id": 234,
    "title": "Advanced Malware #34",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 100,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_12w5fzrg}.",
    "flag": "CTF{hard_12w5fzrg}",
    "requiresLab": false
  },
  {
    "id": 235,
    "title": "Heap Exploitation #35",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_1y8rzh1s}.",
    "flag": "CTF{hard_1y8rzh1s}",
    "requiresLab": false
  },
  {
    "id": 236,
    "title": "Privilege Escalation #36",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_8fjtnmyp}.",
    "flag": "CTF{hard_8fjtnmyp}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_8fjtnmyp}"
        }
      }
    }
  },
  {
    "id": 237,
    "title": "Blind SQLi #37",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_cda0j8nb}.",
    "flag": "CTF{hard_cda0j8nb}",
    "requiresLab": false
  },
  {
    "id": 238,
    "title": "ROP Chain #38",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 110,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_bm3knb2u}.",
    "flag": "CTF{hard_bm3knb2u}",
    "requiresLab": false
  },
  {
    "id": 239,
    "title": "Custom Crypto #39",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_lneral5q}.",
    "flag": "CTF{hard_lneral5q}",
    "requiresLab": false
  },
  {
    "id": 240,
    "title": "Advanced Malware #40",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 110,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_7yd85s2j}.",
    "flag": "CTF{hard_7yd85s2j}",
    "requiresLab": false
  },
  {
    "id": 241,
    "title": "Heap Exploitation #41",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_ywm74rrp}.",
    "flag": "CTF{hard_ywm74rrp}",
    "requiresLab": false
  },
  {
    "id": 242,
    "title": "Privilege Escalation #42",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 130,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_nt70qfnq}.",
    "flag": "CTF{hard_nt70qfnq}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_nt70qfnq}"
        }
      }
    }
  },
  {
    "id": 243,
    "title": "Blind SQLi #43",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_wmicpwed}.",
    "flag": "CTF{hard_wmicpwed}",
    "requiresLab": false
  },
  {
    "id": 244,
    "title": "ROP Chain #44",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_v8p5bby6}.",
    "flag": "CTF{hard_v8p5bby6}",
    "requiresLab": false
  },
  {
    "id": 245,
    "title": "Custom Crypto #45",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 110,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_fzo403jb}.",
    "flag": "CTF{hard_fzo403jb}",
    "requiresLab": false
  },
  {
    "id": 246,
    "title": "Advanced Malware #46",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_zutdncp0}.",
    "flag": "CTF{hard_zutdncp0}",
    "requiresLab": false
  },
  {
    "id": 247,
    "title": "Heap Exploitation #47",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 130,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_953c4xx3}.",
    "flag": "CTF{hard_953c4xx3}",
    "requiresLab": false
  },
  {
    "id": 248,
    "title": "Privilege Escalation #48",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 130,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_1j0c7bl1}.",
    "flag": "CTF{hard_1j0c7bl1}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_1j0c7bl1}"
        }
      }
    }
  },
  {
    "id": 249,
    "title": "Blind SQLi #49",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_5qixkukt}.",
    "flag": "CTF{hard_5qixkukt}",
    "requiresLab": false
  },
  {
    "id": 250,
    "title": "ROP Chain #50",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_t3xypf8i}.",
    "flag": "CTF{hard_t3xypf8i}",
    "requiresLab": false
  },
  {
    "id": 251,
    "title": "Custom Crypto #51",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 140,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_p7pkkh57}.",
    "flag": "CTF{hard_p7pkkh57}",
    "requiresLab": false
  },
  {
    "id": 252,
    "title": "Advanced Malware #52",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_cwk4x8py}.",
    "flag": "CTF{hard_cwk4x8py}",
    "requiresLab": false
  },
  {
    "id": 253,
    "title": "Heap Exploitation #53",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_79i9mo2z}.",
    "flag": "CTF{hard_79i9mo2z}",
    "requiresLab": false
  },
  {
    "id": 254,
    "title": "Privilege Escalation #54",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 120,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_e2zmfuza}.",
    "flag": "CTF{hard_e2zmfuza}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_e2zmfuza}"
        }
      }
    }
  },
  {
    "id": 255,
    "title": "Blind SQLi #55",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_e6c1b9j5}.",
    "flag": "CTF{hard_e6c1b9j5}",
    "requiresLab": false
  },
  {
    "id": 256,
    "title": "ROP Chain #56",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 110,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_9o4zy0dt}.",
    "flag": "CTF{hard_9o4zy0dt}",
    "requiresLab": false
  },
  {
    "id": 257,
    "title": "Custom Crypto #57",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 140,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_0twllw8p}.",
    "flag": "CTF{hard_0twllw8p}",
    "requiresLab": false
  },
  {
    "id": 258,
    "title": "Advanced Malware #58",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 110,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_pi8hppe9}.",
    "flag": "CTF{hard_pi8hppe9}",
    "requiresLab": false
  },
  {
    "id": 259,
    "title": "Heap Exploitation #59",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_5fevku9i}.",
    "flag": "CTF{hard_5fevku9i}",
    "requiresLab": false
  },
  {
    "id": 260,
    "title": "Privilege Escalation #60",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_v3ksfzd8}.",
    "flag": "CTF{hard_v3ksfzd8}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_v3ksfzd8}"
        }
      }
    }
  },
  {
    "id": 261,
    "title": "Blind SQLi #61",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_z63l29ht}.",
    "flag": "CTF{hard_z63l29ht}",
    "requiresLab": false
  },
  {
    "id": 262,
    "title": "ROP Chain #62",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_lbsa0xwc}.",
    "flag": "CTF{hard_lbsa0xwc}",
    "requiresLab": false
  },
  {
    "id": 263,
    "title": "Custom Crypto #63",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_5tqszxfo}.",
    "flag": "CTF{hard_5tqszxfo}",
    "requiresLab": false
  },
  {
    "id": 264,
    "title": "Advanced Malware #64",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 120,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_hfp7p3r2}.",
    "flag": "CTF{hard_hfp7p3r2}",
    "requiresLab": false
  },
  {
    "id": 265,
    "title": "Heap Exploitation #65",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_6uobfvcc}.",
    "flag": "CTF{hard_6uobfvcc}",
    "requiresLab": false
  },
  {
    "id": 266,
    "title": "Privilege Escalation #66",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 110,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_sa71do1l}.",
    "flag": "CTF{hard_sa71do1l}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_sa71do1l}"
        }
      }
    }
  },
  {
    "id": 267,
    "title": "Blind SQLi #67",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 140,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_eoq4zxi3}.",
    "flag": "CTF{hard_eoq4zxi3}",
    "requiresLab": false
  },
  {
    "id": 268,
    "title": "ROP Chain #68",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 140,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_mkjvwpom}.",
    "flag": "CTF{hard_mkjvwpom}",
    "requiresLab": false
  },
  {
    "id": 269,
    "title": "Custom Crypto #69",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 130,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_ppi6kqcl}.",
    "flag": "CTF{hard_ppi6kqcl}",
    "requiresLab": false
  },
  {
    "id": 270,
    "title": "Advanced Malware #70",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_aenuakcx}.",
    "flag": "CTF{hard_aenuakcx}",
    "requiresLab": false
  },
  {
    "id": 271,
    "title": "Heap Exploitation #71",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 100,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_7aqn3ayq}.",
    "flag": "CTF{hard_7aqn3ayq}",
    "requiresLab": false
  },
  {
    "id": 272,
    "title": "Privilege Escalation #72",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 140,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_y7sp5iza}.",
    "flag": "CTF{hard_y7sp5iza}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_y7sp5iza}"
        }
      }
    }
  },
  {
    "id": 273,
    "title": "Blind SQLi #73",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 120,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_wcdn6uri}.",
    "flag": "CTF{hard_wcdn6uri}",
    "requiresLab": false
  },
  {
    "id": 274,
    "title": "ROP Chain #74",
    "category": "Networking",
    "difficulty": "Hard",
    "points": 100,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_nynz5lkt}.",
    "flag": "CTF{hard_nynz5lkt}",
    "requiresLab": false
  },
  {
    "id": 275,
    "title": "Custom Crypto #75",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_idyuilkn}.",
    "flag": "CTF{hard_idyuilkn}",
    "requiresLab": false
  },
  {
    "id": 276,
    "title": "Advanced Malware #76",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_xmpysww3}.",
    "flag": "CTF{hard_xmpysww3}",
    "requiresLab": false
  },
  {
    "id": 277,
    "title": "Heap Exploitation #77",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_0x8uuvw8}.",
    "flag": "CTF{hard_0x8uuvw8}",
    "requiresLab": false
  },
  {
    "id": 278,
    "title": "Privilege Escalation #78",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_kphnnnee}.",
    "flag": "CTF{hard_kphnnnee}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_kphnnnee}"
        }
      }
    }
  },
  {
    "id": 279,
    "title": "Blind SQLi #79",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 110,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_uyao2094}.",
    "flag": "CTF{hard_uyao2094}",
    "requiresLab": false
  },
  {
    "id": 280,
    "title": "ROP Chain #80",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_sgm9ioq1}.",
    "flag": "CTF{hard_sgm9ioq1}",
    "requiresLab": false
  },
  {
    "id": 281,
    "title": "Custom Crypto #81",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_0uyrw5tb}.",
    "flag": "CTF{hard_0uyrw5tb}",
    "requiresLab": false
  },
  {
    "id": 282,
    "title": "Advanced Malware #82",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 130,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_v825uh6d}.",
    "flag": "CTF{hard_v825uh6d}",
    "requiresLab": false
  },
  {
    "id": 283,
    "title": "Heap Exploitation #83",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_0diq7gui}.",
    "flag": "CTF{hard_0diq7gui}",
    "requiresLab": false
  },
  {
    "id": 284,
    "title": "Privilege Escalation #84",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_7e2a8xv1}.",
    "flag": "CTF{hard_7e2a8xv1}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_7e2a8xv1}"
        }
      }
    }
  },
  {
    "id": 285,
    "title": "Blind SQLi #85",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_b5yhqi81}.",
    "flag": "CTF{hard_b5yhqi81}",
    "requiresLab": false
  },
  {
    "id": 286,
    "title": "ROP Chain #86",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 130,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_7jgw96d5}.",
    "flag": "CTF{hard_7jgw96d5}",
    "requiresLab": false
  },
  {
    "id": 287,
    "title": "Custom Crypto #87",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 120,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_am49km66}.",
    "flag": "CTF{hard_am49km66}",
    "requiresLab": false
  },
  {
    "id": 288,
    "title": "Advanced Malware #88",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 110,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_8ydxbv4h}.",
    "flag": "CTF{hard_8ydxbv4h}",
    "requiresLab": false
  },
  {
    "id": 289,
    "title": "Heap Exploitation #89",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_s917ejpi}.",
    "flag": "CTF{hard_s917ejpi}",
    "requiresLab": false
  },
  {
    "id": 290,
    "title": "Privilege Escalation #90",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 140,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_9a96q0xr}.",
    "flag": "CTF{hard_9a96q0xr}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_9a96q0xr}"
        }
      }
    }
  },
  {
    "id": 291,
    "title": "Blind SQLi #91",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 130,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_cwk11m1e}.",
    "flag": "CTF{hard_cwk11m1e}",
    "requiresLab": false
  },
  {
    "id": 292,
    "title": "ROP Chain #92",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 110,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_k4u4diwi}.",
    "flag": "CTF{hard_k4u4diwi}",
    "requiresLab": false
  },
  {
    "id": 293,
    "title": "Custom Crypto #93",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 130,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_p725bxuh}.",
    "flag": "CTF{hard_p725bxuh}",
    "requiresLab": false
  },
  {
    "id": 294,
    "title": "Advanced Malware #94",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 100,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_t6dkpyim}.",
    "flag": "CTF{hard_t6dkpyim}",
    "requiresLab": false
  },
  {
    "id": 295,
    "title": "Heap Exploitation #95",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 130,
    "description": "Use a use-after-free vulnerability to get a shell.",
    "hint": "Understand the glibc heap implementation.",
    "solution": "Langkah 1: Analisis source code C program untuk menemukan pointer memori (heap) yang di-free namun masih digunakan kembali (Use-After-Free).\nLangkah 2: Alokasikan ukuran memori tertentu, free memori tersebut, lalu alokasikan kembali dengan objek yang datanya dapat Anda kontrol (Heap Grooming).\nLangkah 3: Timpa penunjuk fungsi (function pointer) di objek memori tersebut dengan alamat fungsi 'win' atau 'system'.\nLangkah 4: Picu objek tersebut untuk mengeksekusi shell. Baca file untuk mendapat: CTF{hard_28rzcocz}.",
    "flag": "CTF{hard_28rzcocz}",
    "requiresLab": false
  },
  {
    "id": 296,
    "title": "Privilege Escalation #96",
    "category": "Steganography",
    "difficulty": "Hard",
    "points": 110,
    "description": "Find a misconfigured cron job to become root.",
    "hint": "Check /etc/crontab.",
    "solution": "Langkah 1: Di dalam Terminal Virtual Lab, ketik 'cat /etc/crontab' untuk melihat jadwal eksekusi.\nLangkah 2: Terlihat ada script '/tmp/cleanup.sh' yang dieksekusi otomatis oleh user 'root' setiap menit.\nLangkah 3: File /tmp dapat diedit oleh siapa saja. Tulis perintah eksploitasi ke file tersebut: 'echo \"cat /root/flag.txt > /tmp/out.txt\" > /tmp/cleanup.sh'.\nLangkah 4: Tunggu 1 menit, lalu baca '/tmp/out.txt' untuk mendapatkan: CTF{hard_uxjhvlee}.",
    "flag": "CTF{hard_uxjhvlee}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "player",
      "hostname": "hard-box",
      "fileSystem": {
        "etc": {
          "crontab": "* * * * * root /tmp/cleanup.sh"
        },
        "tmp": {
          "out.txt": "Automated system read result: CTF{hard_uxjhvlee}"
        }
      }
    }
  },
  {
    "id": 297,
    "title": "Blind SQLi #97",
    "category": "Misc",
    "difficulty": "Hard",
    "points": 110,
    "description": "Extract the admin password character by character.",
    "hint": "Use time-based or boolean-based injection.",
    "solution": "Langkah 1: Identifikasi injeksi SQL yang tidak menampilkan error atau output di layar (Blind SQLi).\nLangkah 2: Tulis script Python menggunakan library 'requests'.\nLangkah 3: Lakukan injeksi berbasis boolean menggunakan query seperti 'AND SUBSTRING(password,1,1) = 'A'.\nLangkah 4: Script secara otomatis akan mengekstrak setiap karakter hingga mendapatkan flag utuh: CTF{hard_bg7zbsnc}.",
    "flag": "CTF{hard_bg7zbsnc}",
    "requiresLab": false
  },
  {
    "id": 298,
    "title": "ROP Chain #98",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Bypass NX and ASLR using Return Oriented Programming.",
    "hint": "Find gadgets in libc.",
    "solution": "Langkah 1: Analisis biner dan konfirmasi bahwa perlindungan NX dan ASLR aktif.\nLangkah 2: Temukan kerentanan buffer overflow untuk mengontrol Instruction Pointer (EIP/RIP).\nLangkah 3: Cari ROP gadgets ('pop rdi; ret') dan hitung offset memori ke system() dan string '/bin/sh' di dalam library libc.\nLangkah 4: Susun ROP chain untuk membuka shell dan ketik 'cat flag.txt' untuk mendapatkan: CTF{hard_rk9d1e6p}.",
    "flag": "CTF{hard_rk9d1e6p}",
    "requiresLab": false
  },
  {
    "id": 299,
    "title": "Custom Crypto #99",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "The author rolled their own crypto algorithm. Break it.",
    "hint": "Look for predictable PRNGs.",
    "solution": "Langkah 1: Unduh source code algoritma enkripsi Python (biasanya menggunakan random module yang tidak aman).\nLangkah 2: Identifikasi bahwa Pseudo-Random Number Generator (PRNG) di-seed dengan timestamp yang dapat ditebak (misal waktu file dibuat).\nLangkah 3: Tulis script untuk melakukan brute-force terhadap seed di rentang waktu tersebut.\nLangkah 4: Setelah seed yang benar ditemukan, dekripsi ciphertext untuk mendapatkan: CTF{hard_2iuaidws}.",
    "flag": "CTF{hard_2iuaidws}",
    "requiresLab": false
  },
  {
    "id": 300,
    "title": "Advanced Malware #100",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Deobfuscate this packed malware sample.",
    "hint": "Dump the memory after unpacking.",
    "solution": "Langkah 1: Jalankan malware (.exe) di dalam lingkungan aman (Sandbox/VM) dan tempelkan debugger (x64dbg).\nLangkah 2: Malware ini di-pack dengan teknik khusus (misal UPX yang dimodifikasi). Cari instruksi 'tail jump' yang mengarah ke Original Entry Point (OEP).\nLangkah 3: Dump memori ke disk tepat sebelum malware mengeksekusi payload utamanya.\nLangkah 4: Buka hasil dump dengan IDA/Ghidra dan temukan string flag yang telah terdekripsi di memori: CTF{hard_lsmruiz8}.",
    "flag": "CTF{hard_lsmruiz8}",
    "requiresLab": false
  },
  {
    "id": 301,
    "title": "Kernel Exploit #1",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_hcg70do8}.",
    "flag": "CTF{very hard_hcg70do8}",
    "requiresLab": false
  },
  {
    "id": 302,
    "title": "Browser 0-Day #2",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_h2g8vk5l}.",
    "flag": "CTF{very hard_h2g8vk5l}",
    "requiresLab": false
  },
  {
    "id": 303,
    "title": "Zero Knowledge Proofs #3",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_cpzafyx6}.",
    "flag": "CTF{very hard_cpzafyx6}",
    "requiresLab": false
  },
  {
    "id": 304,
    "title": "Hypervisor Escape #4",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_1r571ea5}.",
    "flag": "CTF{very hard_1r571ea5}",
    "requiresLab": false
  },
  {
    "id": 305,
    "title": "Hardware Reverse #5",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_mlr6bxor}.",
    "flag": "CTF{very hard_mlr6bxor}",
    "requiresLab": false
  },
  {
    "id": 306,
    "title": "Rootkit Analysis #6",
    "category": "Networking",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_2qjyjcrv}.",
    "flag": "CTF{very hard_2qjyjcrv}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_2qjyjcrv}"
        }
      }
    }
  },
  {
    "id": 307,
    "title": "Kernel Exploit #7",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_jokazw5d}.",
    "flag": "CTF{very hard_jokazw5d}",
    "requiresLab": false
  },
  {
    "id": 308,
    "title": "Browser 0-Day #8",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_exqifm82}.",
    "flag": "CTF{very hard_exqifm82}",
    "requiresLab": false
  },
  {
    "id": 309,
    "title": "Zero Knowledge Proofs #9",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_fjgumoyw}.",
    "flag": "CTF{very hard_fjgumoyw}",
    "requiresLab": false
  },
  {
    "id": 310,
    "title": "Hypervisor Escape #10",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_58vkxmay}.",
    "flag": "CTF{very hard_58vkxmay}",
    "requiresLab": false
  },
  {
    "id": 311,
    "title": "Hardware Reverse #11",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_t3cg3xo5}.",
    "flag": "CTF{very hard_t3cg3xo5}",
    "requiresLab": false
  },
  {
    "id": 312,
    "title": "Rootkit Analysis #12",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_pmx0td9g}.",
    "flag": "CTF{very hard_pmx0td9g}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_pmx0td9g}"
        }
      }
    }
  },
  {
    "id": 313,
    "title": "Kernel Exploit #13",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_okwv0mxo}.",
    "flag": "CTF{very hard_okwv0mxo}",
    "requiresLab": false
  },
  {
    "id": 314,
    "title": "Browser 0-Day #14",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_nekx62nc}.",
    "flag": "CTF{very hard_nekx62nc}",
    "requiresLab": false
  },
  {
    "id": 315,
    "title": "Zero Knowledge Proofs #15",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_hit611s1}.",
    "flag": "CTF{very hard_hit611s1}",
    "requiresLab": false
  },
  {
    "id": 316,
    "title": "Hypervisor Escape #16",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_10lkhxfk}.",
    "flag": "CTF{very hard_10lkhxfk}",
    "requiresLab": false
  },
  {
    "id": 317,
    "title": "Hardware Reverse #17",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_u00zzycj}.",
    "flag": "CTF{very hard_u00zzycj}",
    "requiresLab": false
  },
  {
    "id": 318,
    "title": "Rootkit Analysis #18",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_vczm78ur}.",
    "flag": "CTF{very hard_vczm78ur}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_vczm78ur}"
        }
      }
    }
  },
  {
    "id": 319,
    "title": "Kernel Exploit #19",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_rmxmp1fz}.",
    "flag": "CTF{very hard_rmxmp1fz}",
    "requiresLab": false
  },
  {
    "id": 320,
    "title": "Browser 0-Day #20",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_k947xo7y}.",
    "flag": "CTF{very hard_k947xo7y}",
    "requiresLab": false
  },
  {
    "id": 321,
    "title": "Zero Knowledge Proofs #21",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_aayiht67}.",
    "flag": "CTF{very hard_aayiht67}",
    "requiresLab": false
  },
  {
    "id": 322,
    "title": "Hypervisor Escape #22",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_zmm637al}.",
    "flag": "CTF{very hard_zmm637al}",
    "requiresLab": false
  },
  {
    "id": 323,
    "title": "Hardware Reverse #23",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_jeg373in}.",
    "flag": "CTF{very hard_jeg373in}",
    "requiresLab": false
  },
  {
    "id": 324,
    "title": "Rootkit Analysis #24",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_5s9k59g4}.",
    "flag": "CTF{very hard_5s9k59g4}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_5s9k59g4}"
        }
      }
    }
  },
  {
    "id": 325,
    "title": "Kernel Exploit #25",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_cwmbs8ro}.",
    "flag": "CTF{very hard_cwmbs8ro}",
    "requiresLab": false
  },
  {
    "id": 326,
    "title": "Browser 0-Day #26",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_22arpb1c}.",
    "flag": "CTF{very hard_22arpb1c}",
    "requiresLab": false
  },
  {
    "id": 327,
    "title": "Zero Knowledge Proofs #27",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_x3cz1v9c}.",
    "flag": "CTF{very hard_x3cz1v9c}",
    "requiresLab": false
  },
  {
    "id": 328,
    "title": "Hypervisor Escape #28",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_euhp96p7}.",
    "flag": "CTF{very hard_euhp96p7}",
    "requiresLab": false
  },
  {
    "id": 329,
    "title": "Hardware Reverse #29",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_e3syj8n2}.",
    "flag": "CTF{very hard_e3syj8n2}",
    "requiresLab": false
  },
  {
    "id": 330,
    "title": "Rootkit Analysis #30",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_u8qwo3a0}.",
    "flag": "CTF{very hard_u8qwo3a0}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_u8qwo3a0}"
        }
      }
    }
  },
  {
    "id": 331,
    "title": "Kernel Exploit #31",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_r6pax7x2}.",
    "flag": "CTF{very hard_r6pax7x2}",
    "requiresLab": false
  },
  {
    "id": 332,
    "title": "Browser 0-Day #32",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_exg7utcn}.",
    "flag": "CTF{very hard_exg7utcn}",
    "requiresLab": false
  },
  {
    "id": 333,
    "title": "Zero Knowledge Proofs #33",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_75jwuwwf}.",
    "flag": "CTF{very hard_75jwuwwf}",
    "requiresLab": false
  },
  {
    "id": 334,
    "title": "Hypervisor Escape #34",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_b89fvlxo}.",
    "flag": "CTF{very hard_b89fvlxo}",
    "requiresLab": false
  },
  {
    "id": 335,
    "title": "Hardware Reverse #35",
    "category": "Networking",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_2p436mp1}.",
    "flag": "CTF{very hard_2p436mp1}",
    "requiresLab": false
  },
  {
    "id": 336,
    "title": "Rootkit Analysis #36",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_js9cbykj}.",
    "flag": "CTF{very hard_js9cbykj}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_js9cbykj}"
        }
      }
    }
  },
  {
    "id": 337,
    "title": "Kernel Exploit #37",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_q56cdsdk}.",
    "flag": "CTF{very hard_q56cdsdk}",
    "requiresLab": false
  },
  {
    "id": 338,
    "title": "Browser 0-Day #38",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_wlej8pnz}.",
    "flag": "CTF{very hard_wlej8pnz}",
    "requiresLab": false
  },
  {
    "id": 339,
    "title": "Zero Knowledge Proofs #39",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_r2xml9h7}.",
    "flag": "CTF{very hard_r2xml9h7}",
    "requiresLab": false
  },
  {
    "id": 340,
    "title": "Hypervisor Escape #40",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_zcadifz6}.",
    "flag": "CTF{very hard_zcadifz6}",
    "requiresLab": false
  },
  {
    "id": 341,
    "title": "Hardware Reverse #41",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_1wagn3cp}.",
    "flag": "CTF{very hard_1wagn3cp}",
    "requiresLab": false
  },
  {
    "id": 342,
    "title": "Rootkit Analysis #42",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_ev7fk7c2}.",
    "flag": "CTF{very hard_ev7fk7c2}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_ev7fk7c2}"
        }
      }
    }
  },
  {
    "id": 343,
    "title": "Kernel Exploit #43",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_e53pnkt6}.",
    "flag": "CTF{very hard_e53pnkt6}",
    "requiresLab": false
  },
  {
    "id": 344,
    "title": "Browser 0-Day #44",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_8msiajpd}.",
    "flag": "CTF{very hard_8msiajpd}",
    "requiresLab": false
  },
  {
    "id": 345,
    "title": "Zero Knowledge Proofs #45",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_toio7y5b}.",
    "flag": "CTF{very hard_toio7y5b}",
    "requiresLab": false
  },
  {
    "id": 346,
    "title": "Hypervisor Escape #46",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_ccggdp33}.",
    "flag": "CTF{very hard_ccggdp33}",
    "requiresLab": false
  },
  {
    "id": 347,
    "title": "Hardware Reverse #47",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_j9612a5t}.",
    "flag": "CTF{very hard_j9612a5t}",
    "requiresLab": false
  },
  {
    "id": 348,
    "title": "Rootkit Analysis #48",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_14w57uj9}.",
    "flag": "CTF{very hard_14w57uj9}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_14w57uj9}"
        }
      }
    }
  },
  {
    "id": 349,
    "title": "Kernel Exploit #49",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_ccqw0yr4}.",
    "flag": "CTF{very hard_ccqw0yr4}",
    "requiresLab": false
  },
  {
    "id": 350,
    "title": "Browser 0-Day #50",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_7o6nbxng}.",
    "flag": "CTF{very hard_7o6nbxng}",
    "requiresLab": false
  },
  {
    "id": 351,
    "title": "Zero Knowledge Proofs #51",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_bxh9jvd9}.",
    "flag": "CTF{very hard_bxh9jvd9}",
    "requiresLab": false
  },
  {
    "id": 352,
    "title": "Hypervisor Escape #52",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_cgue1mtx}.",
    "flag": "CTF{very hard_cgue1mtx}",
    "requiresLab": false
  },
  {
    "id": 353,
    "title": "Hardware Reverse #53",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_kan0bomm}.",
    "flag": "CTF{very hard_kan0bomm}",
    "requiresLab": false
  },
  {
    "id": 354,
    "title": "Rootkit Analysis #54",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_sto6q1mw}.",
    "flag": "CTF{very hard_sto6q1mw}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_sto6q1mw}"
        }
      }
    }
  },
  {
    "id": 355,
    "title": "Kernel Exploit #55",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_3qs5nmtl}.",
    "flag": "CTF{very hard_3qs5nmtl}",
    "requiresLab": false
  },
  {
    "id": 356,
    "title": "Browser 0-Day #56",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_muzqlk4a}.",
    "flag": "CTF{very hard_muzqlk4a}",
    "requiresLab": false
  },
  {
    "id": 357,
    "title": "Zero Knowledge Proofs #57",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_xt61n55o}.",
    "flag": "CTF{very hard_xt61n55o}",
    "requiresLab": false
  },
  {
    "id": 358,
    "title": "Hypervisor Escape #58",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_m7ubwm0p}.",
    "flag": "CTF{very hard_m7ubwm0p}",
    "requiresLab": false
  },
  {
    "id": 359,
    "title": "Hardware Reverse #59",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_jgkz8raf}.",
    "flag": "CTF{very hard_jgkz8raf}",
    "requiresLab": false
  },
  {
    "id": 360,
    "title": "Rootkit Analysis #60",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_rgm18n8i}.",
    "flag": "CTF{very hard_rgm18n8i}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_rgm18n8i}"
        }
      }
    }
  },
  {
    "id": 361,
    "title": "Kernel Exploit #61",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_ie181qjo}.",
    "flag": "CTF{very hard_ie181qjo}",
    "requiresLab": false
  },
  {
    "id": 362,
    "title": "Browser 0-Day #62",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_bc1tzb3f}.",
    "flag": "CTF{very hard_bc1tzb3f}",
    "requiresLab": false
  },
  {
    "id": 363,
    "title": "Zero Knowledge Proofs #63",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_mdbc8jj5}.",
    "flag": "CTF{very hard_mdbc8jj5}",
    "requiresLab": false
  },
  {
    "id": 364,
    "title": "Hypervisor Escape #64",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_lwhyxrrq}.",
    "flag": "CTF{very hard_lwhyxrrq}",
    "requiresLab": false
  },
  {
    "id": 365,
    "title": "Hardware Reverse #65",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_xptc452q}.",
    "flag": "CTF{very hard_xptc452q}",
    "requiresLab": false
  },
  {
    "id": 366,
    "title": "Rootkit Analysis #66",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_dd74dwdn}.",
    "flag": "CTF{very hard_dd74dwdn}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_dd74dwdn}"
        }
      }
    }
  },
  {
    "id": 367,
    "title": "Kernel Exploit #67",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_ri2k918c}.",
    "flag": "CTF{very hard_ri2k918c}",
    "requiresLab": false
  },
  {
    "id": 368,
    "title": "Browser 0-Day #68",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_ljirwwlw}.",
    "flag": "CTF{very hard_ljirwwlw}",
    "requiresLab": false
  },
  {
    "id": 369,
    "title": "Zero Knowledge Proofs #69",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_q79dwioq}.",
    "flag": "CTF{very hard_q79dwioq}",
    "requiresLab": false
  },
  {
    "id": 370,
    "title": "Hypervisor Escape #70",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_0pdxiiu3}.",
    "flag": "CTF{very hard_0pdxiiu3}",
    "requiresLab": false
  },
  {
    "id": 371,
    "title": "Hardware Reverse #71",
    "category": "Networking",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_2sx4eio1}.",
    "flag": "CTF{very hard_2sx4eio1}",
    "requiresLab": false
  },
  {
    "id": 372,
    "title": "Rootkit Analysis #72",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_uhyci95o}.",
    "flag": "CTF{very hard_uhyci95o}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_uhyci95o}"
        }
      }
    }
  },
  {
    "id": 373,
    "title": "Kernel Exploit #73",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_x3ifsq6e}.",
    "flag": "CTF{very hard_x3ifsq6e}",
    "requiresLab": false
  },
  {
    "id": 374,
    "title": "Browser 0-Day #74",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_3pymo5uz}.",
    "flag": "CTF{very hard_3pymo5uz}",
    "requiresLab": false
  },
  {
    "id": 375,
    "title": "Zero Knowledge Proofs #75",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_4m2vsd89}.",
    "flag": "CTF{very hard_4m2vsd89}",
    "requiresLab": false
  },
  {
    "id": 376,
    "title": "Hypervisor Escape #76",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_hp4iumli}.",
    "flag": "CTF{very hard_hp4iumli}",
    "requiresLab": false
  },
  {
    "id": 377,
    "title": "Hardware Reverse #77",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_52m8hxag}.",
    "flag": "CTF{very hard_52m8hxag}",
    "requiresLab": false
  },
  {
    "id": 378,
    "title": "Rootkit Analysis #78",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_8wqjsltq}.",
    "flag": "CTF{very hard_8wqjsltq}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_8wqjsltq}"
        }
      }
    }
  },
  {
    "id": 379,
    "title": "Kernel Exploit #79",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_3fmy98hk}.",
    "flag": "CTF{very hard_3fmy98hk}",
    "requiresLab": false
  },
  {
    "id": 380,
    "title": "Browser 0-Day #80",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_5cal5aqk}.",
    "flag": "CTF{very hard_5cal5aqk}",
    "requiresLab": false
  },
  {
    "id": 381,
    "title": "Zero Knowledge Proofs #81",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_sirm7gyz}.",
    "flag": "CTF{very hard_sirm7gyz}",
    "requiresLab": false
  },
  {
    "id": 382,
    "title": "Hypervisor Escape #82",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_vogpxo11}.",
    "flag": "CTF{very hard_vogpxo11}",
    "requiresLab": false
  },
  {
    "id": 383,
    "title": "Hardware Reverse #83",
    "category": "Networking",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_6n8ep725}.",
    "flag": "CTF{very hard_6n8ep725}",
    "requiresLab": false
  },
  {
    "id": 384,
    "title": "Rootkit Analysis #84",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_ur2nkha9}.",
    "flag": "CTF{very hard_ur2nkha9}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_ur2nkha9}"
        }
      }
    }
  },
  {
    "id": 385,
    "title": "Kernel Exploit #85",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_l8m6blsi}.",
    "flag": "CTF{very hard_l8m6blsi}",
    "requiresLab": false
  },
  {
    "id": 386,
    "title": "Browser 0-Day #86",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_rraooz4e}.",
    "flag": "CTF{very hard_rraooz4e}",
    "requiresLab": false
  },
  {
    "id": 387,
    "title": "Zero Knowledge Proofs #87",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_etvdxuvq}.",
    "flag": "CTF{very hard_etvdxuvq}",
    "requiresLab": false
  },
  {
    "id": 388,
    "title": "Hypervisor Escape #88",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_wflv4xff}.",
    "flag": "CTF{very hard_wflv4xff}",
    "requiresLab": false
  },
  {
    "id": 389,
    "title": "Hardware Reverse #89",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_99475d7j}.",
    "flag": "CTF{very hard_99475d7j}",
    "requiresLab": false
  },
  {
    "id": 390,
    "title": "Rootkit Analysis #90",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_9ugzrtd0}.",
    "flag": "CTF{very hard_9ugzrtd0}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_9ugzrtd0}"
        }
      }
    }
  },
  {
    "id": 391,
    "title": "Kernel Exploit #91",
    "category": "Steganography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_j5ahbuho}.",
    "flag": "CTF{very hard_j5ahbuho}",
    "requiresLab": false
  },
  {
    "id": 392,
    "title": "Browser 0-Day #92",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_xthm87ut}.",
    "flag": "CTF{very hard_xthm87ut}",
    "requiresLab": false
  },
  {
    "id": 393,
    "title": "Zero Knowledge Proofs #93",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_dnavqhjs}.",
    "flag": "CTF{very hard_dnavqhjs}",
    "requiresLab": false
  },
  {
    "id": 394,
    "title": "Hypervisor Escape #94",
    "category": "Misc",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_nsgnay4d}.",
    "flag": "CTF{very hard_nsgnay4d}",
    "requiresLab": false
  },
  {
    "id": 395,
    "title": "Hardware Reverse #95",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Extract the firmware from this IoT device dump.",
    "hint": "Analyze the SPI flash layout.",
    "solution": "Langkah 1: Diberikan file dump memori mentah dari perangkat chip IoT (SPI Flash dump .bin).\nLangkah 2: Gunakan tool 'binwalk -e' untuk mengekstrak sistem file SquashFS atau JFFS2 yang ada di dalamnya.\nLangkah 3: Jika file terenkripsi, cari tabel dekripsi (AES key) yang mungkin di-hardcode dalam bootloader (U-Boot) di offset awal dump.\nLangkah 4: Mount filesystem hasil dekripsi, cari file '/etc/shadow' atau folder root untuk menemukan: CTF{very hard_0z063m5j}.",
    "flag": "CTF{very hard_0z063m5j}",
    "requiresLab": false
  },
  {
    "id": 396,
    "title": "Rootkit Analysis #96",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Analyze and remove a stealthy rootkit.",
    "hint": "Check system call hooks.",
    "solution": "Langkah 1: Di Terminal Virtual Lab, Anda menyadari file 'flag' hilang dan 'ls' tidak menampilkannya karena kernel rootkit menyembunyikan file tersebut.\nLangkah 2: Periksa System Call Table (sys_call_table) dan identifikasi bahwa fungsi 'sys_getdents' (yang digunakan 'ls' untuk membaca direktori) telah dibajak (hooked).\nLangkah 3: Muat modul kernel Anda sendiri (LKM) untuk mengembalikan (unhook) pointer sys_getdents ke alamat aslinya.\nLangkah 4: Setelah dikembalikan, ketik 'ls' kembali, file yang disembunyikan akan muncul. Baca dengan 'cat' untuk: CTF{very hard_89hq8t3m}.",
    "flag": "CTF{very hard_89hq8t3m}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "root",
      "hostname": "compromised",
      "fileSystem": {
        "root": {
          "investigation": "Hint: Use commands to list kernel modules, maybe rmmod the suspicious one.",
          ".hidden_rootkit_flag": "CTF{very hard_89hq8t3m}"
        }
      }
    }
  },
  {
    "id": 397,
    "title": "Kernel Exploit #97",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Exploit a heap overflow in a custom kernel module.",
    "hint": "Use unprivileged userfaultfd.",
    "solution": "Langkah 1: Analisis kernel driver (.ko) menggunakan Ghidra untuk menemukan kerentanan Heap Overflow pada fungsi copy_from_user.\nLangkah 2: Karena kernel memori kompleks, gunakan teknik 'userfaultfd' atau 'msg_msg' spray untuk menstabilkan alokasi struktur objek di kernel.\nLangkah 3: Timpa objek 'cred' (credentials) dari proses Anda sendiri di dalam ruang memori kernel menjadi nilai 0 (root UID).\nLangkah 4: Panggil fungsi escalasi, dan Anda akan mendapat root shell. Ketik 'cat flag' untuk mendapat: CTF{very hard_qqaahl48}.",
    "flag": "CTF{very hard_qqaahl48}",
    "requiresLab": false
  },
  {
    "id": 398,
    "title": "Browser 0-Day #98",
    "category": "Networking",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Write an exploit for a v8 JavaScript engine bug.",
    "hint": "Type confusion is key.",
    "solution": "Langkah 1: Analisis patch dif yang disediakan untuk mesin V8 JavaScript Google Chrome.\nLangkah 2: Celah ini adalah 'Type Confusion', di mana kompiler JIT (Just-In-Time) salah memprediksi tipe array.\nLangkah 3: Tulis eksploit JavaScript yang memanfaatkan kebingungan ini untuk mendapatkan primitif 'addrof' (address of) dan 'fakeobj' (fake object) untuk membaca dan menulis memori secara acak (Arbitrary Read/Write).\nLangkah 4: Eksekusi shellcode untuk bypass sandbox dan membuka kalkulator atau membaca file flag lokal: CTF{very hard_nfl0rtgc}.",
    "flag": "CTF{very hard_nfl0rtgc}",
    "requiresLab": false
  },
  {
    "id": 399,
    "title": "Zero Knowledge Proofs #99",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Break the implementation of a ZKP protocol.",
    "hint": "The Fiat-Shamir heuristic might be flawed.",
    "solution": "Langkah 1: Analisis spesifikasi protokol Zero-Knowledge Proof (ZKP) yang digunakan (contoh zk-SNARKs).\nLangkah 2: Identifikasi kelemahan pada implementasi transformasi Fiat-Shamir di mana tantangan hash (hash challenge) tidak mencakup seluruh transkrip publik.\nLangkah 3: Tulis script SageMath/Python untuk melakukan forgery (pemalsuan) proof tanpa mengetahui kunci rahasianya (witness).\nLangkah 4: Verifikator akan menerima proof palsu Anda dan memberikan reward berupa: CTF{very hard_c7yspmv5}.",
    "flag": "CTF{very hard_c7yspmv5}",
    "requiresLab": false
  },
  {
    "id": 400,
    "title": "Hypervisor Escape #100",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Escape the VM and execute code on the host.",
    "hint": "Look at the virtual network adapter.",
    "solution": "Langkah 1: Anda berada di dalam Virtual Machine (Guest). Anda harus menyerang emulator Host (misal QEMU/KVM).\nLangkah 2: Identifikasi kerentanan Out-of-Bounds (OOB) write pada perangkat jaringan virtual (seperti e1000 atau virtio-net) saat menangani paket yang rusak.\nLangkah 3: Susun payload packet-packet spesifik (DMA attack) untuk menimpa struktur memori emulator proses Host.\nLangkah 4: Redirect execution flow di Host untuk mengeksekusi reverse shell. Cari flag di root host: CTF{very hard_da29ldgy}.",
    "flag": "CTF{very hard_da29ldgy}",
    "requiresLab": false
  }
];