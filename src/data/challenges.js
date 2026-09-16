export const challenges = [
  {
    "id": 1,
    "title": "Investigasi dump memori RAM (Misi #1)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_vqad31ihxw_1}.",
    "flag": "CTF{easy_vqad31ihxw_1}",
    "requiresLab": false
  },
  {
    "id": 2,
    "title": "Investigasi file ZIP terenkripsi (Misi #2)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_5nn7aeb4q7_2}.",
    "flag": "CTF{easy_5nn7aeb4q7_2}",
    "requiresLab": false
  },
  {
    "id": 3,
    "title": "Operasi GDB (Misi #3)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_rg9qsad6az_3}.",
    "flag": "CTF{easy_rg9qsad6az_3}",
    "requiresLab": false
  },
  {
    "id": 4,
    "title": "Operasi Autopsy (Misi #4)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_w0c1ey5uo2_4}.",
    "flag": "CTF{easy_w0c1ey5uo2_4}",
    "requiresLab": false
  },
  {
    "id": 5,
    "title": "Menembus aplikasi mobile (Misi #5)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_eyq0wqlo4s_5}.",
    "flag": "CTF{easy_eyq0wqlo4s_5}",
    "requiresLab": false
  },
  {
    "id": 6,
    "title": "Eksploitasi Use-After-Free (Misi #6)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_8aq8lr9ja6_6}.",
    "flag": "CTF{easy_8aq8lr9ja6_6}",
    "requiresLab": false
  },
  {
    "id": 7,
    "title": "Menembus sistem absensi (Misi #7)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_gulfzutsf1_7}.",
    "flag": "CTF{easy_gulfzutsf1_7}",
    "requiresLab": false
  },
  {
    "id": 8,
    "title": "Investigasi file PCAP (Misi #8)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_vq8fqkhw7n_8}.",
    "flag": "CTF{easy_vq8fqkhw7n_8}",
    "requiresLab": false
  },
  {
    "id": 9,
    "title": "Melacak Wayback Machine (Misi #9)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_bbfioy5tu_9}.",
    "flag": "CTF{easy_bbfioy5tu_9}",
    "requiresLab": false
  },
  {
    "id": 10,
    "title": "Menembus sistem perbankan (Misi #10)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_n2lwvgvy3_10}.",
    "flag": "CTF{easy_n2lwvgvy3_10}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_n2lwvgvy3_10}"
        }
      }
    }
  },
  {
    "id": 11,
    "title": "Melacak metadata foto liburan (Misi #11)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_x20rzeb4lk_11}.",
    "flag": "CTF{easy_x20rzeb4lk_11}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_x20rzeb4lk_11}"
        }
      }
    }
  },
  {
    "id": 12,
    "title": "Operasi Ghidra (Misi #12)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_f5fb2gktfn_12}.",
    "flag": "CTF{easy_f5fb2gktfn_12}",
    "requiresLab": false
  },
  {
    "id": 13,
    "title": "Menembus sistem absensi (Misi #13)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_rvxy5ymnzy_13}.",
    "flag": "CTF{easy_rvxy5ymnzy_13}",
    "requiresLab": false
  },
  {
    "id": 14,
    "title": "Melacak akun Twitter anonim (Misi #14)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_1bmu5yefv3_14}.",
    "flag": "CTF{easy_1bmu5yefv3_14}",
    "requiresLab": false
  },
  {
    "id": 15,
    "title": "Investigasi file PCAP (Misi #15)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_a6cjkecwwv_15}.",
    "flag": "CTF{easy_a6cjkecwwv_15}",
    "requiresLab": false
  },
  {
    "id": 16,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #16)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ptbowlc4eb_16}.",
    "flag": "CTF{easy_ptbowlc4eb_16}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_ptbowlc4eb_16}"
        }
      }
    }
  },
  {
    "id": 17,
    "title": "Operasi John the Ripper (Misi #17)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_75ra9ghepv_17}.",
    "flag": "CTF{easy_75ra9ghepv_17}",
    "requiresLab": false
  },
  {
    "id": 18,
    "title": "Melacak DNS Dumpster (Misi #18)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_3daprgyt3v_18}.",
    "flag": "CTF{easy_3daprgyt3v_18}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_3daprgyt3v_18}"
        }
      }
    }
  },
  {
    "id": 19,
    "title": "Menembus API Payment Gateway (Misi #19)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_2bmlw3pkxv_19}.",
    "flag": "CTF{easy_2bmlw3pkxv_19}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_2bmlw3pkxv_19}"
        }
      }
    }
  },
  {
    "id": 20,
    "title": "Menembus server e-commerce (Misi #20)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_wzx37nr825_20}.",
    "flag": "CTF{easy_wzx37nr825_20}",
    "requiresLab": false
  },
  {
    "id": 21,
    "title": "Menembus aplikasi mobile (Misi #21)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_zdmiuy5f5u_21}.",
    "flag": "CTF{easy_zdmiuy5f5u_21}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_zdmiuy5f5u_21}"
        }
      }
    }
  },
  {
    "id": 22,
    "title": "Melacak repositori Github yang bocor (Misi #22)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_1ensmfg74s_22}.",
    "flag": "CTF{easy_1ensmfg74s_22}",
    "requiresLab": false
  },
  {
    "id": 23,
    "title": "Operasi ExifTool (Misi #23)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_dmfp7c2xaj_23}.",
    "flag": "CTF{easy_dmfp7c2xaj_23}",
    "requiresLab": false
  },
  {
    "id": 24,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #24)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_s8w1k524qu_24}.",
    "flag": "CTF{easy_s8w1k524qu_24}",
    "requiresLab": false
  },
  {
    "id": 25,
    "title": "Misteri MD5 Hash (Misi #25)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_massdl6snx_25}.",
    "flag": "CTF{easy_massdl6snx_25}",
    "requiresLab": false
  },
  {
    "id": 26,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #26)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_b6hngal43p_26}.",
    "flag": "CTF{easy_b6hngal43p_26}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_b6hngal43p_26}"
        }
      }
    }
  },
  {
    "id": 27,
    "title": "Menembus API Payment Gateway (Misi #27)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_k513sk5rf5_27}.",
    "flag": "CTF{easy_k513sk5rf5_27}",
    "requiresLab": false
  },
  {
    "id": 28,
    "title": "Menembus server e-commerce (Misi #28)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_vq0prc8hru_28}.",
    "flag": "CTF{easy_vq0prc8hru_28}",
    "requiresLab": false
  },
  {
    "id": 29,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #29)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_4o9nbc659g_29}.",
    "flag": "CTF{easy_4o9nbc659g_29}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_4o9nbc659g_29}"
        }
      }
    }
  },
  {
    "id": 30,
    "title": "Melacak DNS Dumpster (Misi #30)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_7vkpqer6kj_30}.",
    "flag": "CTF{easy_7vkpqer6kj_30}",
    "requiresLab": false
  },
  {
    "id": 31,
    "title": "Menembus aplikasi ujian CBT (Misi #31)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_hf3vkflgix_31}.",
    "flag": "CTF{easy_hf3vkflgix_31}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_hf3vkflgix_31}"
        }
      }
    }
  },
  {
    "id": 32,
    "title": "Melacak Wayback Machine (Misi #32)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti SQLMap untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_2ktu97a6y6_32}.",
    "flag": "CTF{easy_2ktu97a6y6_32}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_2ktu97a6y6_32}"
        }
      }
    }
  },
  {
    "id": 33,
    "title": "Melacak dokumen PDF perusahaan (Misi #33)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_pxg6t7n1ji_33}.",
    "flag": "CTF{easy_pxg6t7n1ji_33}",
    "requiresLab": false
  },
  {
    "id": 34,
    "title": "Misteri Elliptic Curve (Misi #34)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_yu7wmw2jdh_34}.",
    "flag": "CTF{easy_yu7wmw2jdh_34}",
    "requiresLab": false
  },
  {
    "id": 35,
    "title": "Operasi Metasploit (Misi #35)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_qwb60vm4ge_35}.",
    "flag": "CTF{easy_qwb60vm4ge_35}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_qwb60vm4ge_35}"
        }
      }
    }
  },
  {
    "id": 36,
    "title": "Investigasi gambar JPEG stegano (Misi #36)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_aq838d7s2v_36}.",
    "flag": "CTF{easy_aq838d7s2v_36}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_aq838d7s2v_36}"
        }
      }
    }
  },
  {
    "id": 37,
    "title": "Operasi SQLMap (Misi #37)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_275fn4b1y9_37}.",
    "flag": "CTF{easy_275fn4b1y9_37}",
    "requiresLab": false
  },
  {
    "id": 38,
    "title": "Melacak repositori Github yang bocor (Misi #38)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_5hi57aq7l4_38}.",
    "flag": "CTF{easy_5hi57aq7l4_38}",
    "requiresLab": false
  },
  {
    "id": 39,
    "title": "Misteri XOR Encryption (Misi #39)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_0j2fkqofdu_39}.",
    "flag": "CTF{easy_0j2fkqofdu_39}",
    "requiresLab": false
  },
  {
    "id": 40,
    "title": "Eksploitasi Use-After-Free (Misi #40)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_kld5lpmvik_40}.",
    "flag": "CTF{easy_kld5lpmvik_40}",
    "requiresLab": false
  },
  {
    "id": 41,
    "title": "Investigasi file ZIP terenkripsi (Misi #41)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_zm6edwhr7t_41}.",
    "flag": "CTF{easy_zm6edwhr7t_41}",
    "requiresLab": false
  },
  {
    "id": 42,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #42)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_u6mqpdzbtr_42}.",
    "flag": "CTF{easy_u6mqpdzbtr_42}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_u6mqpdzbtr_42}"
        }
      }
    }
  },
  {
    "id": 43,
    "title": "Melacak Wayback Machine (Misi #43)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_ry9o6ys9ow_43}.",
    "flag": "CTF{easy_ry9o6ys9ow_43}",
    "requiresLab": false
  },
  {
    "id": 44,
    "title": "Investigasi file ZIP terenkripsi (Misi #44)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_8fn3nm5w4i_44}.",
    "flag": "CTF{easy_8fn3nm5w4i_44}",
    "requiresLab": false
  },
  {
    "id": 45,
    "title": "Misteri XOR Encryption (Misi #45)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_79nhblga6d_45}.",
    "flag": "CTF{easy_79nhblga6d_45}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_79nhblga6d_45}"
        }
      }
    }
  },
  {
    "id": 46,
    "title": "Eksploitasi Use-After-Free (Misi #46)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_1bjn5pviak_46}.",
    "flag": "CTF{easy_1bjn5pviak_46}",
    "requiresLab": false
  },
  {
    "id": 47,
    "title": "Operasi Binwalk (Misi #47)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_9fen8646x5_47}.",
    "flag": "CTF{easy_9fen8646x5_47}",
    "requiresLab": false
  },
  {
    "id": 48,
    "title": "Menembus aplikasi mobile (Misi #48)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_7n7569pwlr_48}.",
    "flag": "CTF{easy_7n7569pwlr_48}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_7n7569pwlr_48}"
        }
      }
    }
  },
  {
    "id": 49,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #49)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_spsjzsbrsw_49}.",
    "flag": "CTF{easy_spsjzsbrsw_49}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_spsjzsbrsw_49}"
        }
      }
    }
  },
  {
    "id": 50,
    "title": "Eksploitasi SQL Injection (Misi #50)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_co9mqxs331_50}.",
    "flag": "CTF{easy_co9mqxs331_50}",
    "requiresLab": false
  },
  {
    "id": 51,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #51)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_26pkojsams_51}.",
    "flag": "CTF{easy_26pkojsams_51}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_26pkojsams_51}"
        }
      }
    }
  },
  {
    "id": 52,
    "title": "Menembus server SCADA (Misi #52)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_ge275g9jxi_52}.",
    "flag": "CTF{easy_ge275g9jxi_52}",
    "requiresLab": false
  },
  {
    "id": 53,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #53)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_czof6yu757_53}.",
    "flag": "CTF{easy_czof6yu757_53}",
    "requiresLab": false
  },
  {
    "id": 54,
    "title": "Melacak akun Twitter anonim (Misi #54)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_bx59xco3e7_54}.",
    "flag": "CTF{easy_bx59xco3e7_54}",
    "requiresLab": false
  },
  {
    "id": 55,
    "title": "Menembus API Payment Gateway (Misi #55)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_kweh0vk5uj_55}.",
    "flag": "CTF{easy_kweh0vk5uj_55}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_kweh0vk5uj_55}"
        }
      }
    }
  },
  {
    "id": 56,
    "title": "Misteri MD5 Hash (Misi #56)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_f81ak6um28_56}.",
    "flag": "CTF{easy_f81ak6um28_56}",
    "requiresLab": false
  },
  {
    "id": 57,
    "title": "Melacak repositori Github yang bocor (Misi #57)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_pun84x78s6_57}.",
    "flag": "CTF{easy_pun84x78s6_57}",
    "requiresLab": false
  },
  {
    "id": 58,
    "title": "Menembus API Payment Gateway (Misi #58)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_oq6yflcfy4_58}.",
    "flag": "CTF{easy_oq6yflcfy4_58}",
    "requiresLab": false
  },
  {
    "id": 59,
    "title": "Eksploitasi Format String Bug (Misi #59)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_efuzi45zt7_59}.",
    "flag": "CTF{easy_efuzi45zt7_59}",
    "requiresLab": false
  },
  {
    "id": 60,
    "title": "Investigasi image disk (.dd) (Misi #60)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_xf0oc22ur5_60}.",
    "flag": "CTF{easy_xf0oc22ur5_60}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_xf0oc22ur5_60}"
        }
      }
    }
  },
  {
    "id": 61,
    "title": "Eksploitasi SQL Injection (Misi #61)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_yrlhoygrqw_61}.",
    "flag": "CTF{easy_yrlhoygrqw_61}",
    "requiresLab": false
  },
  {
    "id": 62,
    "title": "Operasi GDB (Misi #62)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_2zaxpdr6pu_62}.",
    "flag": "CTF{easy_2zaxpdr6pu_62}",
    "requiresLab": false
  },
  {
    "id": 63,
    "title": "Eksploitasi Buffer Overflow (Misi #63)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_efe4i7hxhv_63}.",
    "flag": "CTF{easy_efe4i7hxhv_63}",
    "requiresLab": false
  },
  {
    "id": 64,
    "title": "Misteri Vigenere Cipher (Misi #64)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_eicetlmed5_64}.",
    "flag": "CTF{easy_eicetlmed5_64}",
    "requiresLab": false
  },
  {
    "id": 65,
    "title": "Operasi GDB (Misi #65)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_h3ahplwuv3_65}.",
    "flag": "CTF{easy_h3ahplwuv3_65}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_h3ahplwuv3_65}"
        }
      }
    }
  },
  {
    "id": 66,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #66)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_us99kdxhzv_66}.",
    "flag": "CTF{easy_us99kdxhzv_66}",
    "requiresLab": false
  },
  {
    "id": 67,
    "title": "Misteri RSA (Misi #67)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_b21bk6vlst_67}.",
    "flag": "CTF{easy_b21bk6vlst_67}",
    "requiresLab": false
  },
  {
    "id": 68,
    "title": "Operasi Ghidra (Misi #68)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_rl3yaykhpg_68}.",
    "flag": "CTF{easy_rl3yaykhpg_68}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_rl3yaykhpg_68}"
        }
      }
    }
  },
  {
    "id": 69,
    "title": "Melacak dokumen PDF perusahaan (Misi #69)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_yhghawamiq_69}.",
    "flag": "CTF{easy_yhghawamiq_69}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_yhghawamiq_69}"
        }
      }
    }
  },
  {
    "id": 70,
    "title": "Misteri Vigenere Cipher (Misi #70)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_9ci3c6ianb_70}.",
    "flag": "CTF{easy_9ci3c6ianb_70}",
    "requiresLab": false
  },
  {
    "id": 71,
    "title": "Menembus aplikasi mobile (Misi #71)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_6id8pyplo8_71}.",
    "flag": "CTF{easy_6id8pyplo8_71}",
    "requiresLab": false
  },
  {
    "id": 72,
    "title": "Melacak dokumen PDF perusahaan (Misi #72)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_ylf7o4gqya_72}.",
    "flag": "CTF{easy_ylf7o4gqya_72}",
    "requiresLab": false
  },
  {
    "id": 73,
    "title": "Investigasi file ZIP terenkripsi (Misi #73)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_y9hpb4er1v_73}.",
    "flag": "CTF{easy_y9hpb4er1v_73}",
    "requiresLab": false
  },
  {
    "id": 74,
    "title": "Melacak Wayback Machine (Misi #74)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_zurqabzati_74}.",
    "flag": "CTF{easy_zurqabzati_74}",
    "requiresLab": false
  },
  {
    "id": 75,
    "title": "Misteri Bcrypt (Misi #75)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_4nmhhxyrzz_75}.",
    "flag": "CTF{easy_4nmhhxyrzz_75}",
    "requiresLab": false
  },
  {
    "id": 76,
    "title": "Eksploitasi Buffer Overflow (Misi #76)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_6ubfprrhmx_76}.",
    "flag": "CTF{easy_6ubfprrhmx_76}",
    "requiresLab": false
  },
  {
    "id": 77,
    "title": "Operasi Metasploit (Misi #77)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_vrn3p1su02_77}.",
    "flag": "CTF{easy_vrn3p1su02_77}",
    "requiresLab": false
  },
  {
    "id": 78,
    "title": "Operasi GDB (Misi #78)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_48lxsnfu57_78}.",
    "flag": "CTF{easy_48lxsnfu57_78}",
    "requiresLab": false
  },
  {
    "id": 79,
    "title": "Menembus server SCADA (Misi #79)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_73pbyay0hu_79}.",
    "flag": "CTF{easy_73pbyay0hu_79}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_73pbyay0hu_79}"
        }
      }
    }
  },
  {
    "id": 80,
    "title": "Misteri Vigenere Cipher (Misi #80)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_kzgh9jnca5_80}.",
    "flag": "CTF{easy_kzgh9jnca5_80}",
    "requiresLab": false
  },
  {
    "id": 81,
    "title": "Investigasi image disk (.dd) (Misi #81)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_540aduh5rd_81}.",
    "flag": "CTF{easy_540aduh5rd_81}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_540aduh5rd_81}"
        }
      }
    }
  },
  {
    "id": 82,
    "title": "Melacak dokumen PDF perusahaan (Misi #82)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_60w3sj44t9_82}.",
    "flag": "CTF{easy_60w3sj44t9_82}",
    "requiresLab": false
  },
  {
    "id": 83,
    "title": "Menembus kamera CCTV (Misi #83)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_7k7jpn6bqr_83}.",
    "flag": "CTF{easy_7k7jpn6bqr_83}",
    "requiresLab": false
  },
  {
    "id": 84,
    "title": "Operasi ExifTool (Misi #84)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_ulzrn8vic7_84}.",
    "flag": "CTF{easy_ulzrn8vic7_84}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_ulzrn8vic7_84}"
        }
      }
    }
  },
  {
    "id": 85,
    "title": "Eksploitasi Format String Bug (Misi #85)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_jv0s18bf64_85}.",
    "flag": "CTF{easy_jv0s18bf64_85}",
    "requiresLab": false
  },
  {
    "id": 86,
    "title": "Melacak akun Twitter anonim (Misi #86)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Nmap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_xgdhn7q0a8_86}.",
    "flag": "CTF{easy_xgdhn7q0a8_86}",
    "requiresLab": false
  },
  {
    "id": 87,
    "title": "Eksploitasi Buffer Overflow (Misi #87)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ikol4mtnj6_87}.",
    "flag": "CTF{easy_ikol4mtnj6_87}",
    "requiresLab": false
  },
  {
    "id": 88,
    "title": "Investigasi file ZIP terenkripsi (Misi #88)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_37y3ww7cx3_88}.",
    "flag": "CTF{easy_37y3ww7cx3_88}",
    "requiresLab": false
  },
  {
    "id": 89,
    "title": "Eksploitasi Format String Bug (Misi #89)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_3g8reugss9_89}.",
    "flag": "CTF{easy_3g8reugss9_89}",
    "requiresLab": false
  },
  {
    "id": 90,
    "title": "Operasi John the Ripper (Misi #90)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_zetvmj3tgw_90}.",
    "flag": "CTF{easy_zetvmj3tgw_90}",
    "requiresLab": false
  },
  {
    "id": 91,
    "title": "Misteri Elliptic Curve (Misi #91)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ggpqtew06p_91}.",
    "flag": "CTF{easy_ggpqtew06p_91}",
    "requiresLab": false
  },
  {
    "id": 92,
    "title": "Melacak dokumen PDF perusahaan (Misi #92)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_sgag6a5j9m_92}.",
    "flag": "CTF{easy_sgag6a5j9m_92}",
    "requiresLab": false
  },
  {
    "id": 93,
    "title": "Menembus sistem absensi (Misi #93)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_wvwp7pinha_93}.",
    "flag": "CTF{easy_wvwp7pinha_93}",
    "requiresLab": false
  },
  {
    "id": 94,
    "title": "Operasi Nmap (Misi #94)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_jrfe58q66h_94}.",
    "flag": "CTF{easy_jrfe58q66h_94}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_jrfe58q66h_94}"
        }
      }
    }
  },
  {
    "id": 95,
    "title": "Menembus database karyawan (Misi #95)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_fdbvqob56t_95}.",
    "flag": "CTF{easy_fdbvqob56t_95}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_fdbvqob56t_95}"
        }
      }
    }
  },
  {
    "id": 96,
    "title": "Melacak dokumen PDF perusahaan (Misi #96)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_s2c31xoffa_96}.",
    "flag": "CTF{easy_s2c31xoffa_96}",
    "requiresLab": false
  },
  {
    "id": 97,
    "title": "Menembus aplikasi ujian CBT (Misi #97)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_u3dk8d6wrr_97}.",
    "flag": "CTF{easy_u3dk8d6wrr_97}",
    "requiresLab": false
  },
  {
    "id": 98,
    "title": "Menembus kamera CCTV (Misi #98)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_7tzvirjzpj_98}.",
    "flag": "CTF{easy_7tzvirjzpj_98}",
    "requiresLab": false
  },
  {
    "id": 99,
    "title": "Operasi Wireshark (Misi #99)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_0ncj5cka6s_99}.",
    "flag": "CTF{easy_0ncj5cka6s_99}",
    "requiresLab": false
  },
  {
    "id": 100,
    "title": "Eksploitasi SQL Injection (Misi #100)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_xigu9pa4r7_100}.",
    "flag": "CTF{easy_xigu9pa4r7_100}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_xigu9pa4r7_100}"
        }
      }
    }
  },
  {
    "id": 101,
    "title": "Investigasi gambar JPEG stegano (Misi #101)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_66lc1cm8vk_101}.",
    "flag": "CTF{easy_66lc1cm8vk_101}",
    "requiresLab": false
  },
  {
    "id": 102,
    "title": "Menembus aplikasi mobile (Misi #102)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_fjzkmvpov8_102}.",
    "flag": "CTF{easy_fjzkmvpov8_102}",
    "requiresLab": false
  },
  {
    "id": 103,
    "title": "Operasi SQLMap (Misi #103)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_y2jr26rom_103}.",
    "flag": "CTF{easy_y2jr26rom_103}",
    "requiresLab": false
  },
  {
    "id": 104,
    "title": "Investigasi gambar JPEG stegano (Misi #104)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_d7pjar4d6e_104}.",
    "flag": "CTF{easy_d7pjar4d6e_104}",
    "requiresLab": false
  },
  {
    "id": 105,
    "title": "Misteri MD5 Hash (Misi #105)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_r4wa8s0jh4_105}.",
    "flag": "CTF{easy_r4wa8s0jh4_105}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_r4wa8s0jh4_105}"
        }
      }
    }
  },
  {
    "id": 106,
    "title": "Menembus server SCADA (Misi #106)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_r0bjh1lbcf_106}.",
    "flag": "CTF{easy_r0bjh1lbcf_106}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_r0bjh1lbcf_106}"
        }
      }
    }
  },
  {
    "id": 107,
    "title": "Operasi Autopsy (Misi #107)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_nke60m6a25_107}.",
    "flag": "CTF{easy_nke60m6a25_107}",
    "requiresLab": false
  },
  {
    "id": 108,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #108)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ckzdlys3j8_108}.",
    "flag": "CTF{easy_ckzdlys3j8_108}",
    "requiresLab": false
  },
  {
    "id": 109,
    "title": "Investigasi gambar JPEG stegano (Misi #109)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_xa05wjreuw_109}.",
    "flag": "CTF{easy_xa05wjreuw_109}",
    "requiresLab": false
  },
  {
    "id": 110,
    "title": "Menembus server SCADA (Misi #110)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_1gggkovkec_110}.",
    "flag": "CTF{easy_1gggkovkec_110}",
    "requiresLab": false
  },
  {
    "id": 111,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #111)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_tware87bgy_111}.",
    "flag": "CTF{easy_tware87bgy_111}",
    "requiresLab": false
  },
  {
    "id": 112,
    "title": "Menembus server SCADA (Misi #112)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_wb4qfyjlqs_112}.",
    "flag": "CTF{easy_wb4qfyjlqs_112}",
    "requiresLab": false
  },
  {
    "id": 113,
    "title": "Investigasi file ZIP terenkripsi (Misi #113)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_jnk7hs1vm9_113}.",
    "flag": "CTF{easy_jnk7hs1vm9_113}",
    "requiresLab": false
  },
  {
    "id": 114,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #114)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_olbohr8kwm_114}.",
    "flag": "CTF{easy_olbohr8kwm_114}",
    "requiresLab": false
  },
  {
    "id": 115,
    "title": "Misteri RSA (Misi #115)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_47woh6swho_115}.",
    "flag": "CTF{easy_47woh6swho_115}",
    "requiresLab": false
  },
  {
    "id": 116,
    "title": "Investigasi gambar JPEG stegano (Misi #116)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_eeq0m58vkr_116}.",
    "flag": "CTF{easy_eeq0m58vkr_116}",
    "requiresLab": false
  },
  {
    "id": 117,
    "title": "Operasi ExifTool (Misi #117)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_3dkcai39wx_117}.",
    "flag": "CTF{easy_3dkcai39wx_117}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_3dkcai39wx_117}"
        }
      }
    }
  },
  {
    "id": 118,
    "title": "Investigasi gambar JPEG stegano (Misi #118)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_k447ujdkhk_118}.",
    "flag": "CTF{easy_k447ujdkhk_118}",
    "requiresLab": false
  },
  {
    "id": 119,
    "title": "Misteri Base64 (Misi #119)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_ew7y03zix6_119}.",
    "flag": "CTF{easy_ew7y03zix6_119}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_ew7y03zix6_119}"
        }
      }
    }
  },
  {
    "id": 120,
    "title": "Misteri XOR Encryption (Misi #120)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_uwcm0tq8e0_120}.",
    "flag": "CTF{easy_uwcm0tq8e0_120}",
    "requiresLab": false
  },
  {
    "id": 121,
    "title": "Melacak akun Twitter anonim (Misi #121)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_g35i2fziks_121}.",
    "flag": "CTF{easy_g35i2fziks_121}",
    "requiresLab": false
  },
  {
    "id": 122,
    "title": "Operasi Wireshark (Misi #122)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_2ksd5gh64x_122}.",
    "flag": "CTF{easy_2ksd5gh64x_122}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_2ksd5gh64x_122}"
        }
      }
    }
  },
  {
    "id": 123,
    "title": "Menembus aplikasi ujian CBT (Misi #123)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_dhcgkm23p9_123}.",
    "flag": "CTF{easy_dhcgkm23p9_123}",
    "requiresLab": false
  },
  {
    "id": 124,
    "title": "Melacak dokumen PDF perusahaan (Misi #124)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_dj1oq1proa_124}.",
    "flag": "CTF{easy_dj1oq1proa_124}",
    "requiresLab": false
  },
  {
    "id": 125,
    "title": "Menembus aplikasi ujian CBT (Misi #125)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_pp5405hfoj_125}.",
    "flag": "CTF{easy_pp5405hfoj_125}",
    "requiresLab": false
  },
  {
    "id": 126,
    "title": "Melacak Google Dorks (Misi #126)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_eoiuzjpzhj_126}.",
    "flag": "CTF{easy_eoiuzjpzhj_126}",
    "requiresLab": false
  },
  {
    "id": 127,
    "title": "Investigasi dump memori RAM (Misi #127)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_1nmv9prkzk_127}.",
    "flag": "CTF{easy_1nmv9prkzk_127}",
    "requiresLab": false
  },
  {
    "id": 128,
    "title": "Misteri Bcrypt (Misi #128)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_aq4ies196x_128}.",
    "flag": "CTF{easy_aq4ies196x_128}",
    "requiresLab": false
  },
  {
    "id": 129,
    "title": "Eksploitasi Buffer Overflow (Misi #129)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_8a6ymas267_129}.",
    "flag": "CTF{easy_8a6ymas267_129}",
    "requiresLab": false
  },
  {
    "id": 130,
    "title": "Operasi Metasploit (Misi #130)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_adfdtoy1pf_130}.",
    "flag": "CTF{easy_adfdtoy1pf_130}",
    "requiresLab": false
  },
  {
    "id": 131,
    "title": "Investigasi file PCAP (Misi #131)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_0qffre4hba_131}.",
    "flag": "CTF{easy_0qffre4hba_131}",
    "requiresLab": false
  },
  {
    "id": 132,
    "title": "Investigasi image disk (.dd) (Misi #132)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_7df1ze0cm4_132}.",
    "flag": "CTF{easy_7df1ze0cm4_132}",
    "requiresLab": false
  },
  {
    "id": 133,
    "title": "Investigasi image disk (.dd) (Misi #133)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_o333xmsfn2_133}.",
    "flag": "CTF{easy_o333xmsfn2_133}",
    "requiresLab": false
  },
  {
    "id": 134,
    "title": "Operasi SQLMap (Misi #134)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_ofnmr8rm6o_134}.",
    "flag": "CTF{easy_ofnmr8rm6o_134}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_ofnmr8rm6o_134}"
        }
      }
    }
  },
  {
    "id": 135,
    "title": "Misteri Elliptic Curve (Misi #135)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_ceeymzqwvl_135}.",
    "flag": "CTF{easy_ceeymzqwvl_135}",
    "requiresLab": false
  },
  {
    "id": 136,
    "title": "Operasi John the Ripper (Misi #136)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_z96ubvvhad_136}.",
    "flag": "CTF{easy_z96ubvvhad_136}",
    "requiresLab": false
  },
  {
    "id": 137,
    "title": "Melacak akun Twitter anonim (Misi #137)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ni3onlcp4z_137}.",
    "flag": "CTF{easy_ni3onlcp4z_137}",
    "requiresLab": false
  },
  {
    "id": 138,
    "title": "Misteri Bcrypt (Misi #138)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_wcfnigut9x_138}.",
    "flag": "CTF{easy_wcfnigut9x_138}",
    "requiresLab": false
  },
  {
    "id": 139,
    "title": "Melacak DNS Dumpster (Misi #139)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_wqxaad7ibi_139}.",
    "flag": "CTF{easy_wqxaad7ibi_139}",
    "requiresLab": false
  },
  {
    "id": 140,
    "title": "Investigasi file PCAP (Misi #140)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_vyhsene069_140}.",
    "flag": "CTF{easy_vyhsene069_140}",
    "requiresLab": false
  },
  {
    "id": 141,
    "title": "Investigasi dump memori RAM (Misi #141)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_qfaro7ptnv_141}.",
    "flag": "CTF{easy_qfaro7ptnv_141}",
    "requiresLab": false
  },
  {
    "id": 142,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #142)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_krtta1rocu_142}.",
    "flag": "CTF{easy_krtta1rocu_142}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_krtta1rocu_142}"
        }
      }
    }
  },
  {
    "id": 143,
    "title": "Misteri Elliptic Curve (Misi #143)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_juihe3ksfi_143}.",
    "flag": "CTF{easy_juihe3ksfi_143}",
    "requiresLab": false
  },
  {
    "id": 144,
    "title": "Misteri Bcrypt (Misi #144)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_iyqen1n3l3_144}.",
    "flag": "CTF{easy_iyqen1n3l3_144}",
    "requiresLab": false
  },
  {
    "id": 145,
    "title": "Melacak DNS Dumpster (Misi #145)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_7ag8dyx4w4_145}.",
    "flag": "CTF{easy_7ag8dyx4w4_145}",
    "requiresLab": false
  },
  {
    "id": 146,
    "title": "Eksploitasi SQL Injection (Misi #146)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_o0ut3fudo7_146}.",
    "flag": "CTF{easy_o0ut3fudo7_146}",
    "requiresLab": false
  },
  {
    "id": 147,
    "title": "Misteri AES-256 (Misi #147)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_kgz9rpjygm_147}.",
    "flag": "CTF{easy_kgz9rpjygm_147}",
    "requiresLab": false
  },
  {
    "id": 148,
    "title": "Menembus portal sekolah (Misi #148)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_c3whytnet7_148}.",
    "flag": "CTF{easy_c3whytnet7_148}",
    "requiresLab": false
  },
  {
    "id": 149,
    "title": "Melacak metadata foto liburan (Misi #149)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_qyhwecz0ys_149}.",
    "flag": "CTF{easy_qyhwecz0ys_149}",
    "requiresLab": false
  },
  {
    "id": 150,
    "title": "Misteri RSA (Misi #150)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_2rrti4f0mo_150}.",
    "flag": "CTF{easy_2rrti4f0mo_150}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_2rrti4f0mo_150}"
        }
      }
    }
  },
  {
    "id": 151,
    "title": "Menembus aplikasi ujian CBT (Misi #151)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_y5vnp4i9th_151}.",
    "flag": "CTF{easy_y5vnp4i9th_151}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_y5vnp4i9th_151}"
        }
      }
    }
  },
  {
    "id": 152,
    "title": "Investigasi image disk (.dd) (Misi #152)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_xf2fvlt92c_152}.",
    "flag": "CTF{easy_xf2fvlt92c_152}",
    "requiresLab": false
  },
  {
    "id": 153,
    "title": "Melacak Google Dorks (Misi #153)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_ffk0q1pra6_153}.",
    "flag": "CTF{easy_ffk0q1pra6_153}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_ffk0q1pra6_153}"
        }
      }
    }
  },
  {
    "id": 154,
    "title": "Misteri XOR Encryption (Misi #154)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ecq4aj9ek2_154}.",
    "flag": "CTF{easy_ecq4aj9ek2_154}",
    "requiresLab": false
  },
  {
    "id": 155,
    "title": "Operasi John the Ripper (Misi #155)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_ofnbxtqej0_155}.",
    "flag": "CTF{easy_ofnbxtqej0_155}",
    "requiresLab": false
  },
  {
    "id": 156,
    "title": "Menembus sistem perbankan (Misi #156)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_hsow2x47jl_156}.",
    "flag": "CTF{easy_hsow2x47jl_156}",
    "requiresLab": false
  },
  {
    "id": 157,
    "title": "Investigasi file PCAP (Misi #157)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_k40ve895d0_157}.",
    "flag": "CTF{easy_k40ve895d0_157}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_k40ve895d0_157}"
        }
      }
    }
  },
  {
    "id": 158,
    "title": "Operasi ExifTool (Misi #158)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_nn5s8r4ser_158}.",
    "flag": "CTF{easy_nn5s8r4ser_158}",
    "requiresLab": false
  },
  {
    "id": 159,
    "title": "Eksploitasi Buffer Overflow (Misi #159)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_5lgwjqnnhs_159}.",
    "flag": "CTF{easy_5lgwjqnnhs_159}",
    "requiresLab": false
  },
  {
    "id": 160,
    "title": "Menembus sistem absensi (Misi #160)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_uk15tpsbdv_160}.",
    "flag": "CTF{easy_uk15tpsbdv_160}",
    "requiresLab": false
  },
  {
    "id": 161,
    "title": "Investigasi dump memori RAM (Misi #161)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_21u1t3myry_161}.",
    "flag": "CTF{easy_21u1t3myry_161}",
    "requiresLab": false
  },
  {
    "id": 162,
    "title": "Melacak Wayback Machine (Misi #162)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_1bxdqz8p7e_162}.",
    "flag": "CTF{easy_1bxdqz8p7e_162}",
    "requiresLab": false
  },
  {
    "id": 163,
    "title": "Misteri MD5 Hash (Misi #163)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_8o5p8yxsm4_163}.",
    "flag": "CTF{easy_8o5p8yxsm4_163}",
    "requiresLab": false
  },
  {
    "id": 164,
    "title": "Investigasi image disk (.dd) (Misi #164)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_hqqznxjx6u_164}.",
    "flag": "CTF{easy_hqqznxjx6u_164}",
    "requiresLab": false
  },
  {
    "id": 165,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #165)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_iwzdyy0b16_165}.",
    "flag": "CTF{easy_iwzdyy0b16_165}",
    "requiresLab": false
  },
  {
    "id": 166,
    "title": "Menembus kamera CCTV (Misi #166)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_l94qkssp51_166}.",
    "flag": "CTF{easy_l94qkssp51_166}",
    "requiresLab": false
  },
  {
    "id": 167,
    "title": "Operasi GDB (Misi #167)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 20,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_pnlm7qdilt_167}.",
    "flag": "CTF{easy_pnlm7qdilt_167}",
    "requiresLab": false
  },
  {
    "id": 168,
    "title": "Melacak dokumen PDF perusahaan (Misi #168)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_1hscn4jnzw_168}.",
    "flag": "CTF{easy_1hscn4jnzw_168}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_1hscn4jnzw_168}"
        }
      }
    }
  },
  {
    "id": 169,
    "title": "Menembus database karyawan (Misi #169)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_ugtsmnhdkj_169}.",
    "flag": "CTF{easy_ugtsmnhdkj_169}",
    "requiresLab": false
  },
  {
    "id": 170,
    "title": "Investigasi image disk (.dd) (Misi #170)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_nedk7cr319_170}.",
    "flag": "CTF{easy_nedk7cr319_170}",
    "requiresLab": false
  },
  {
    "id": 171,
    "title": "Investigasi image disk (.dd) (Misi #171)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_77ts741bw4_171}.",
    "flag": "CTF{easy_77ts741bw4_171}",
    "requiresLab": false
  },
  {
    "id": 172,
    "title": "Eksploitasi Use-After-Free (Misi #172)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_3vekafcrtp_172}.",
    "flag": "CTF{easy_3vekafcrtp_172}",
    "requiresLab": false
  },
  {
    "id": 173,
    "title": "Melacak repositori Github yang bocor (Misi #173)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_ugin2nrxuq_173}.",
    "flag": "CTF{easy_ugin2nrxuq_173}",
    "requiresLab": false
  },
  {
    "id": 174,
    "title": "Misteri Vigenere Cipher (Misi #174)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_p4x0rvmca5_174}.",
    "flag": "CTF{easy_p4x0rvmca5_174}",
    "requiresLab": false
  },
  {
    "id": 175,
    "title": "Operasi ExifTool (Misi #175)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_g8jauixos1_175}.",
    "flag": "CTF{easy_g8jauixos1_175}",
    "requiresLab": false
  },
  {
    "id": 176,
    "title": "Investigasi file ZIP terenkripsi (Misi #176)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_vddna4kupg_176}.",
    "flag": "CTF{easy_vddna4kupg_176}",
    "requiresLab": false
  },
  {
    "id": 177,
    "title": "Operasi SQLMap (Misi #177)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_b1nezxz16n_177}.",
    "flag": "CTF{easy_b1nezxz16n_177}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_b1nezxz16n_177}"
        }
      }
    }
  },
  {
    "id": 178,
    "title": "Misteri Elliptic Curve (Misi #178)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_1a5zkq1unm_178}.",
    "flag": "CTF{easy_1a5zkq1unm_178}",
    "requiresLab": false
  },
  {
    "id": 179,
    "title": "Melacak DNS Dumpster (Misi #179)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_egnqieeccs_179}.",
    "flag": "CTF{easy_egnqieeccs_179}",
    "requiresLab": false
  },
  {
    "id": 180,
    "title": "Melacak Google Dorks (Misi #180)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_m86zhbdoc1_180}.",
    "flag": "CTF{easy_m86zhbdoc1_180}",
    "requiresLab": false
  },
  {
    "id": 181,
    "title": "Menembus kamera CCTV (Misi #181)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_b7t9gz30e5_181}.",
    "flag": "CTF{easy_b7t9gz30e5_181}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_b7t9gz30e5_181}"
        }
      }
    }
  },
  {
    "id": 182,
    "title": "Investigasi file ZIP terenkripsi (Misi #182)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_9s8vucahr5_182}.",
    "flag": "CTF{easy_9s8vucahr5_182}",
    "requiresLab": false
  },
  {
    "id": 183,
    "title": "Menembus portal sekolah (Misi #183)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_biats838o7_183}.",
    "flag": "CTF{easy_biats838o7_183}",
    "requiresLab": false
  },
  {
    "id": 184,
    "title": "Misteri AES-256 (Misi #184)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_kpv8yu8e2m_184}.",
    "flag": "CTF{easy_kpv8yu8e2m_184}",
    "requiresLab": false
  },
  {
    "id": 185,
    "title": "Melacak metadata foto liburan (Misi #185)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_uspqsto62v_185}.",
    "flag": "CTF{easy_uspqsto62v_185}",
    "requiresLab": false
  },
  {
    "id": 186,
    "title": "Operasi Nmap (Misi #186)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_6h8xxo5i75_186}.",
    "flag": "CTF{easy_6h8xxo5i75_186}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_6h8xxo5i75_186}"
        }
      }
    }
  },
  {
    "id": 187,
    "title": "Melacak Wayback Machine (Misi #187)",
    "category": "Binary Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_xyincs7hhn_187}.",
    "flag": "CTF{easy_xyincs7hhn_187}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_xyincs7hhn_187}"
        }
      }
    }
  },
  {
    "id": 188,
    "title": "Menembus aplikasi mobile (Misi #188)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_bhty0nq8mt_188}.",
    "flag": "CTF{easy_bhty0nq8mt_188}",
    "requiresLab": false
  },
  {
    "id": 189,
    "title": "Misteri Elliptic Curve (Misi #189)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_ax47finwm8_189}.",
    "flag": "CTF{easy_ax47finwm8_189}",
    "requiresLab": false
  },
  {
    "id": 190,
    "title": "Eksploitasi Format String Bug (Misi #190)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_o86hv1fxtg_190}.",
    "flag": "CTF{easy_o86hv1fxtg_190}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_o86hv1fxtg_190}"
        }
      }
    }
  },
  {
    "id": 191,
    "title": "Misteri MD5 Hash (Misi #191)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_7cim4tke4l_191}.",
    "flag": "CTF{easy_7cim4tke4l_191}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_7cim4tke4l_191}"
        }
      }
    }
  },
  {
    "id": 192,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #192)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 45,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_dapxt19usx_192}.",
    "flag": "CTF{easy_dapxt19usx_192}",
    "requiresLab": false
  },
  {
    "id": 193,
    "title": "Misteri AES-256 (Misi #193)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 15,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_tiqnk6mlon_193}.",
    "flag": "CTF{easy_tiqnk6mlon_193}",
    "requiresLab": false
  },
  {
    "id": 194,
    "title": "Operasi Binwalk (Misi #194)",
    "category": "Cryptography",
    "difficulty": "Easy",
    "points": 35,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti SQLMap untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{easy_opjyzs9wtp_194}.",
    "flag": "CTF{easy_opjyzs9wtp_194}",
    "requiresLab": false
  },
  {
    "id": 195,
    "title": "Melacak Wayback Machine (Misi #195)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 30,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_64k81aljkb_195}.",
    "flag": "CTF{easy_64k81aljkb_195}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_64k81aljkb_195}"
        }
      }
    }
  },
  {
    "id": 196,
    "title": "Eksploitasi Format String Bug (Misi #196)",
    "category": "OSINT",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{easy_egofrbnjjn_196}.",
    "flag": "CTF{easy_egofrbnjjn_196}",
    "requiresLab": false
  },
  {
    "id": 197,
    "title": "Investigasi image disk (.dd) (Misi #197)",
    "category": "Forensics",
    "difficulty": "Easy",
    "points": 40,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{easy_83v111f6gl_197}.",
    "flag": "CTF{easy_83v111f6gl_197}",
    "requiresLab": false
  },
  {
    "id": 198,
    "title": "Investigasi dump memori RAM (Misi #198)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_qcgle4snwm_198}.",
    "flag": "CTF{easy_qcgle4snwm_198}",
    "requiresLab": false
  },
  {
    "id": 199,
    "title": "Menembus portal sekolah (Misi #199)",
    "category": "Reverse Engineering",
    "difficulty": "Easy",
    "points": 25,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{easy_rsvm7pcv3e_199}.",
    "flag": "CTF{easy_rsvm7pcv3e_199}",
    "requiresLab": false
  },
  {
    "id": 200,
    "title": "Misteri MD5 Hash (Misi #200)",
    "category": "Web Exploitation",
    "difficulty": "Easy",
    "points": 10,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{easy_c99ofsm45n_200}.",
    "flag": "CTF{easy_c99ofsm45n_200}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{easy_c99ofsm45n_200}"
        }
      }
    }
  },
  {
    "id": 201,
    "title": "Menembus kamera CCTV (Misi #201)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_d52jjv77d5_201}.",
    "flag": "CTF{medium_d52jjv77d5_201}",
    "requiresLab": false
  },
  {
    "id": 202,
    "title": "Misteri XOR Encryption (Misi #202)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_c0zfyuweul_202}.",
    "flag": "CTF{medium_c0zfyuweul_202}",
    "requiresLab": false
  },
  {
    "id": 203,
    "title": "Investigasi image disk (.dd) (Misi #203)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_43fxrardfh_203}.",
    "flag": "CTF{medium_43fxrardfh_203}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_43fxrardfh_203}"
        }
      }
    }
  },
  {
    "id": 204,
    "title": "Operasi SQLMap (Misi #204)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_vqib6r2drr_204}.",
    "flag": "CTF{medium_vqib6r2drr_204}",
    "requiresLab": false
  },
  {
    "id": 205,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #205)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_makmn3iwcc_205}.",
    "flag": "CTF{medium_makmn3iwcc_205}",
    "requiresLab": false
  },
  {
    "id": 206,
    "title": "Menembus database karyawan (Misi #206)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_brnxx522rq_206}.",
    "flag": "CTF{medium_brnxx522rq_206}",
    "requiresLab": false
  },
  {
    "id": 207,
    "title": "Operasi Binwalk (Misi #207)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_vp5xwzgdmt_207}.",
    "flag": "CTF{medium_vp5xwzgdmt_207}",
    "requiresLab": false
  },
  {
    "id": 208,
    "title": "Investigasi file PCAP (Misi #208)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_lvurglbt2y_208}.",
    "flag": "CTF{medium_lvurglbt2y_208}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_lvurglbt2y_208}"
        }
      }
    }
  },
  {
    "id": 209,
    "title": "Operasi Hashcat (Misi #209)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_ct0e79wfst_209}.",
    "flag": "CTF{medium_ct0e79wfst_209}",
    "requiresLab": false
  },
  {
    "id": 210,
    "title": "Eksploitasi Use-After-Free (Misi #210)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_3vgypizu7e_210}.",
    "flag": "CTF{medium_3vgypizu7e_210}",
    "requiresLab": false
  },
  {
    "id": 211,
    "title": "Investigasi file ZIP terenkripsi (Misi #211)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_q9izzirhql_211}.",
    "flag": "CTF{medium_q9izzirhql_211}",
    "requiresLab": false
  },
  {
    "id": 212,
    "title": "Operasi Binwalk (Misi #212)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_q6kjsiv0w6_212}.",
    "flag": "CTF{medium_q6kjsiv0w6_212}",
    "requiresLab": false
  },
  {
    "id": 213,
    "title": "Eksploitasi Buffer Overflow (Misi #213)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_8vvynwrdlx_213}.",
    "flag": "CTF{medium_8vvynwrdlx_213}",
    "requiresLab": false
  },
  {
    "id": 214,
    "title": "Operasi Autopsy (Misi #214)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_wtxb5qw5ui_214}.",
    "flag": "CTF{medium_wtxb5qw5ui_214}",
    "requiresLab": false
  },
  {
    "id": 215,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #215)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_hiy8i8cd78_215}.",
    "flag": "CTF{medium_hiy8i8cd78_215}",
    "requiresLab": false
  },
  {
    "id": 216,
    "title": "Investigasi file PCAP (Misi #216)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_rn2dg9zejr_216}.",
    "flag": "CTF{medium_rn2dg9zejr_216}",
    "requiresLab": false
  },
  {
    "id": 217,
    "title": "Melacak akun Twitter anonim (Misi #217)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_1dv54locjg_217}.",
    "flag": "CTF{medium_1dv54locjg_217}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_1dv54locjg_217}"
        }
      }
    }
  },
  {
    "id": 218,
    "title": "Investigasi dump memori RAM (Misi #218)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_z2uk32db6g_218}.",
    "flag": "CTF{medium_z2uk32db6g_218}",
    "requiresLab": false
  },
  {
    "id": 219,
    "title": "Menembus sistem perbankan (Misi #219)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_eghs9k927e_219}.",
    "flag": "CTF{medium_eghs9k927e_219}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_eghs9k927e_219}"
        }
      }
    }
  },
  {
    "id": 220,
    "title": "Melacak metadata foto liburan (Misi #220)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_un2atgnwfu_220}.",
    "flag": "CTF{medium_un2atgnwfu_220}",
    "requiresLab": false
  },
  {
    "id": 221,
    "title": "Operasi Hashcat (Misi #221)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_jdn3ncjevp_221}.",
    "flag": "CTF{medium_jdn3ncjevp_221}",
    "requiresLab": false
  },
  {
    "id": 222,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #222)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_tcot9b4k0m_222}.",
    "flag": "CTF{medium_tcot9b4k0m_222}",
    "requiresLab": false
  },
  {
    "id": 223,
    "title": "Investigasi dump memori RAM (Misi #223)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_qaj2dpo4e0_223}.",
    "flag": "CTF{medium_qaj2dpo4e0_223}",
    "requiresLab": false
  },
  {
    "id": 224,
    "title": "Menembus aplikasi mobile (Misi #224)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_o9jdf01l41_224}.",
    "flag": "CTF{medium_o9jdf01l41_224}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_o9jdf01l41_224}"
        }
      }
    }
  },
  {
    "id": 225,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #225)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_huslnlmjnw_225}.",
    "flag": "CTF{medium_huslnlmjnw_225}",
    "requiresLab": false
  },
  {
    "id": 226,
    "title": "Misteri Base64 (Misi #226)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_6pgmd3c57t_226}.",
    "flag": "CTF{medium_6pgmd3c57t_226}",
    "requiresLab": false
  },
  {
    "id": 227,
    "title": "Menembus router inti (Misi #227)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_ayo0z7l4l9_227}.",
    "flag": "CTF{medium_ayo0z7l4l9_227}",
    "requiresLab": false
  },
  {
    "id": 228,
    "title": "Misteri Bcrypt (Misi #228)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_5ogtmv487a_228}.",
    "flag": "CTF{medium_5ogtmv487a_228}",
    "requiresLab": false
  },
  {
    "id": 229,
    "title": "Operasi Ghidra (Misi #229)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_sw32gmjmhl_229}.",
    "flag": "CTF{medium_sw32gmjmhl_229}",
    "requiresLab": false
  },
  {
    "id": 230,
    "title": "Operasi Hashcat (Misi #230)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_acnj1dtncd_230}.",
    "flag": "CTF{medium_acnj1dtncd_230}",
    "requiresLab": false
  },
  {
    "id": 231,
    "title": "Menembus sistem absensi (Misi #231)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_dv1n4oglzm_231}.",
    "flag": "CTF{medium_dv1n4oglzm_231}",
    "requiresLab": false
  },
  {
    "id": 232,
    "title": "Operasi Ghidra (Misi #232)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_tqegfvrlp5_232}.",
    "flag": "CTF{medium_tqegfvrlp5_232}",
    "requiresLab": false
  },
  {
    "id": 233,
    "title": "Melacak DNS Dumpster (Misi #233)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_18r9q4b7p9_233}.",
    "flag": "CTF{medium_18r9q4b7p9_233}",
    "requiresLab": false
  },
  {
    "id": 234,
    "title": "Menembus portal sekolah (Misi #234)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_p9wjs593aa_234}.",
    "flag": "CTF{medium_p9wjs593aa_234}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_p9wjs593aa_234}"
        }
      }
    }
  },
  {
    "id": 235,
    "title": "Investigasi file ZIP terenkripsi (Misi #235)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_rogpf5bja4_235}.",
    "flag": "CTF{medium_rogpf5bja4_235}",
    "requiresLab": false
  },
  {
    "id": 236,
    "title": "Eksploitasi Buffer Overflow (Misi #236)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_rqazmxdb29_236}.",
    "flag": "CTF{medium_rqazmxdb29_236}",
    "requiresLab": false
  },
  {
    "id": 237,
    "title": "Melacak akun Twitter anonim (Misi #237)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_2fvw8xf9jt_237}.",
    "flag": "CTF{medium_2fvw8xf9jt_237}",
    "requiresLab": false
  },
  {
    "id": 238,
    "title": "Eksploitasi Buffer Overflow (Misi #238)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_w2xzinhn65_238}.",
    "flag": "CTF{medium_w2xzinhn65_238}",
    "requiresLab": false
  },
  {
    "id": 239,
    "title": "Operasi Nmap (Misi #239)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_4z36ktnaad_239}.",
    "flag": "CTF{medium_4z36ktnaad_239}",
    "requiresLab": false
  },
  {
    "id": 240,
    "title": "Melacak DNS Dumpster (Misi #240)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_gxmjydzq8y_240}.",
    "flag": "CTF{medium_gxmjydzq8y_240}",
    "requiresLab": false
  },
  {
    "id": 241,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #241)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_2vz1opkigd_241}.",
    "flag": "CTF{medium_2vz1opkigd_241}",
    "requiresLab": false
  },
  {
    "id": 242,
    "title": "Melacak metadata foto liburan (Misi #242)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_vva301z7a5_242}.",
    "flag": "CTF{medium_vva301z7a5_242}",
    "requiresLab": false
  },
  {
    "id": 243,
    "title": "Menembus sistem perbankan (Misi #243)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_pjhjfewmqx_243}.",
    "flag": "CTF{medium_pjhjfewmqx_243}",
    "requiresLab": false
  },
  {
    "id": 244,
    "title": "Misteri Bcrypt (Misi #244)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_1nzpx50m1l_244}.",
    "flag": "CTF{medium_1nzpx50m1l_244}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_1nzpx50m1l_244}"
        }
      }
    }
  },
  {
    "id": 245,
    "title": "Menembus server SCADA (Misi #245)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_h5xu4wvd1u_245}.",
    "flag": "CTF{medium_h5xu4wvd1u_245}",
    "requiresLab": false
  },
  {
    "id": 246,
    "title": "Eksploitasi Use-After-Free (Misi #246)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_p4s9n3wdyl_246}.",
    "flag": "CTF{medium_p4s9n3wdyl_246}",
    "requiresLab": false
  },
  {
    "id": 247,
    "title": "Operasi Ghidra (Misi #247)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_gqc7r47beg_247}.",
    "flag": "CTF{medium_gqc7r47beg_247}",
    "requiresLab": false
  },
  {
    "id": 248,
    "title": "Investigasi dump memori RAM (Misi #248)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_13g8z46tm0_248}.",
    "flag": "CTF{medium_13g8z46tm0_248}",
    "requiresLab": false
  },
  {
    "id": 249,
    "title": "Menembus server SCADA (Misi #249)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_yue95cd3wl_249}.",
    "flag": "CTF{medium_yue95cd3wl_249}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_yue95cd3wl_249}"
        }
      }
    }
  },
  {
    "id": 250,
    "title": "Investigasi image disk (.dd) (Misi #250)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_e40ia6irw4_250}.",
    "flag": "CTF{medium_e40ia6irw4_250}",
    "requiresLab": false
  },
  {
    "id": 251,
    "title": "Misteri MD5 Hash (Misi #251)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_c6dzhpe56q_251}.",
    "flag": "CTF{medium_c6dzhpe56q_251}",
    "requiresLab": false
  },
  {
    "id": 252,
    "title": "Investigasi image disk (.dd) (Misi #252)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_ji5r7b0t9v_252}.",
    "flag": "CTF{medium_ji5r7b0t9v_252}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_ji5r7b0t9v_252}"
        }
      }
    }
  },
  {
    "id": 253,
    "title": "Operasi ExifTool (Misi #253)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_2j97qmdpdp_253}.",
    "flag": "CTF{medium_2j97qmdpdp_253}",
    "requiresLab": false
  },
  {
    "id": 254,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #254)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_ic84r5gkhx_254}.",
    "flag": "CTF{medium_ic84r5gkhx_254}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_ic84r5gkhx_254}"
        }
      }
    }
  },
  {
    "id": 255,
    "title": "Menembus sistem perbankan (Misi #255)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_bbuscnawwu_255}.",
    "flag": "CTF{medium_bbuscnawwu_255}",
    "requiresLab": false
  },
  {
    "id": 256,
    "title": "Operasi John the Ripper (Misi #256)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_bn2863hq3y_256}.",
    "flag": "CTF{medium_bn2863hq3y_256}",
    "requiresLab": false
  },
  {
    "id": 257,
    "title": "Operasi SQLMap (Misi #257)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti John the Ripper untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_48bl1yqj9y_257}.",
    "flag": "CTF{medium_48bl1yqj9y_257}",
    "requiresLab": false
  },
  {
    "id": 258,
    "title": "Operasi GDB (Misi #258)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_yl2l0rlphw_258}.",
    "flag": "CTF{medium_yl2l0rlphw_258}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_yl2l0rlphw_258}"
        }
      }
    }
  },
  {
    "id": 259,
    "title": "Melacak metadata foto liburan (Misi #259)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_xzs8dky1hi_259}.",
    "flag": "CTF{medium_xzs8dky1hi_259}",
    "requiresLab": false
  },
  {
    "id": 260,
    "title": "Misteri RSA (Misi #260)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_ysqmhdi114_260}.",
    "flag": "CTF{medium_ysqmhdi114_260}",
    "requiresLab": false
  },
  {
    "id": 261,
    "title": "Misteri AES-256 (Misi #261)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_n1m7xiu16x_261}.",
    "flag": "CTF{medium_n1m7xiu16x_261}",
    "requiresLab": false
  },
  {
    "id": 262,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #262)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_9pl7iacrzp_262}.",
    "flag": "CTF{medium_9pl7iacrzp_262}",
    "requiresLab": false
  },
  {
    "id": 263,
    "title": "Melacak repositori Github yang bocor (Misi #263)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_0avoqj14n6_263}.",
    "flag": "CTF{medium_0avoqj14n6_263}",
    "requiresLab": false
  },
  {
    "id": 264,
    "title": "Operasi Ghidra (Misi #264)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_xze18oathg_264}.",
    "flag": "CTF{medium_xze18oathg_264}",
    "requiresLab": false
  },
  {
    "id": 265,
    "title": "Operasi Autopsy (Misi #265)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_w7cn1366yj_265}.",
    "flag": "CTF{medium_w7cn1366yj_265}",
    "requiresLab": false
  },
  {
    "id": 266,
    "title": "Menembus server e-commerce (Misi #266)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti John the Ripper untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_azdrvd7hif_266}.",
    "flag": "CTF{medium_azdrvd7hif_266}",
    "requiresLab": false
  },
  {
    "id": 267,
    "title": "Misteri RSA (Misi #267)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_cp63bzlvus_267}.",
    "flag": "CTF{medium_cp63bzlvus_267}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_cp63bzlvus_267}"
        }
      }
    }
  },
  {
    "id": 268,
    "title": "Melacak Google Dorks (Misi #268)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_8jggdje6b6_268}.",
    "flag": "CTF{medium_8jggdje6b6_268}",
    "requiresLab": false
  },
  {
    "id": 269,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #269)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_1robnb483n_269}.",
    "flag": "CTF{medium_1robnb483n_269}",
    "requiresLab": false
  },
  {
    "id": 270,
    "title": "Misteri AES-256 (Misi #270)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_hwrysut3mn_270}.",
    "flag": "CTF{medium_hwrysut3mn_270}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_hwrysut3mn_270}"
        }
      }
    }
  },
  {
    "id": 271,
    "title": "Investigasi file PCAP (Misi #271)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_nlzp6dgajm_271}.",
    "flag": "CTF{medium_nlzp6dgajm_271}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_nlzp6dgajm_271}"
        }
      }
    }
  },
  {
    "id": 272,
    "title": "Investigasi file PCAP (Misi #272)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_228mmejt66_272}.",
    "flag": "CTF{medium_228mmejt66_272}",
    "requiresLab": false
  },
  {
    "id": 273,
    "title": "Misteri RSA (Misi #273)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_fnreo98rwy_273}.",
    "flag": "CTF{medium_fnreo98rwy_273}",
    "requiresLab": false
  },
  {
    "id": 274,
    "title": "Investigasi dump memori RAM (Misi #274)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Nmap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_b1hhfgarz4_274}.",
    "flag": "CTF{medium_b1hhfgarz4_274}",
    "requiresLab": false
  },
  {
    "id": 275,
    "title": "Melacak repositori Github yang bocor (Misi #275)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti SQLMap untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_pd6jkgslpe_275}.",
    "flag": "CTF{medium_pd6jkgslpe_275}",
    "requiresLab": false
  },
  {
    "id": 276,
    "title": "Eksploitasi Buffer Overflow (Misi #276)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_yg0fg63x4j_276}.",
    "flag": "CTF{medium_yg0fg63x4j_276}",
    "requiresLab": false
  },
  {
    "id": 277,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #277)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_0lukf6buq9_277}.",
    "flag": "CTF{medium_0lukf6buq9_277}",
    "requiresLab": false
  },
  {
    "id": 278,
    "title": "Menembus portal sekolah (Misi #278)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_gab3p2yp2u_278}.",
    "flag": "CTF{medium_gab3p2yp2u_278}",
    "requiresLab": false
  },
  {
    "id": 279,
    "title": "Misteri Base64 (Misi #279)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_qke8mq6ob2_279}.",
    "flag": "CTF{medium_qke8mq6ob2_279}",
    "requiresLab": false
  },
  {
    "id": 280,
    "title": "Operasi Ghidra (Misi #280)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_q2u8oqwcaa_280}.",
    "flag": "CTF{medium_q2u8oqwcaa_280}",
    "requiresLab": false
  },
  {
    "id": 281,
    "title": "Investigasi file PCAP (Misi #281)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_c0g2nwikbn_281}.",
    "flag": "CTF{medium_c0g2nwikbn_281}",
    "requiresLab": false
  },
  {
    "id": 282,
    "title": "Misteri MD5 Hash (Misi #282)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_qe71b7w02i_282}.",
    "flag": "CTF{medium_qe71b7w02i_282}",
    "requiresLab": false
  },
  {
    "id": 283,
    "title": "Melacak repositori Github yang bocor (Misi #283)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_36xq7qdw0a_283}.",
    "flag": "CTF{medium_36xq7qdw0a_283}",
    "requiresLab": false
  },
  {
    "id": 284,
    "title": "Operasi Hashcat (Misi #284)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_xju0uy0761_284}.",
    "flag": "CTF{medium_xju0uy0761_284}",
    "requiresLab": false
  },
  {
    "id": 285,
    "title": "Eksploitasi Format String Bug (Misi #285)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_kwe4hd32ow_285}.",
    "flag": "CTF{medium_kwe4hd32ow_285}",
    "requiresLab": false
  },
  {
    "id": 286,
    "title": "Menembus database karyawan (Misi #286)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_0fiadbq7z3_286}.",
    "flag": "CTF{medium_0fiadbq7z3_286}",
    "requiresLab": false
  },
  {
    "id": 287,
    "title": "Operasi Ghidra (Misi #287)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_pazrraz8yk_287}.",
    "flag": "CTF{medium_pazrraz8yk_287}",
    "requiresLab": false
  },
  {
    "id": 288,
    "title": "Operasi Burp Suite (Misi #288)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_l4cc59wlvs_288}.",
    "flag": "CTF{medium_l4cc59wlvs_288}",
    "requiresLab": false
  },
  {
    "id": 289,
    "title": "Investigasi image disk (.dd) (Misi #289)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_4rryq4r9hu_289}.",
    "flag": "CTF{medium_4rryq4r9hu_289}",
    "requiresLab": false
  },
  {
    "id": 290,
    "title": "Misteri RSA (Misi #290)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_byal80vsvo_290}.",
    "flag": "CTF{medium_byal80vsvo_290}",
    "requiresLab": false
  },
  {
    "id": 291,
    "title": "Investigasi file ZIP terenkripsi (Misi #291)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_usme30f6vn_291}.",
    "flag": "CTF{medium_usme30f6vn_291}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_usme30f6vn_291}"
        }
      }
    }
  },
  {
    "id": 292,
    "title": "Eksploitasi Format String Bug (Misi #292)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_nu8tzla0qp_292}.",
    "flag": "CTF{medium_nu8tzla0qp_292}",
    "requiresLab": false
  },
  {
    "id": 293,
    "title": "Misteri Vigenere Cipher (Misi #293)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_1tw64wkdrt_293}.",
    "flag": "CTF{medium_1tw64wkdrt_293}",
    "requiresLab": false
  },
  {
    "id": 294,
    "title": "Misteri Vigenere Cipher (Misi #294)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_wmmfah00g7_294}.",
    "flag": "CTF{medium_wmmfah00g7_294}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_wmmfah00g7_294}"
        }
      }
    }
  },
  {
    "id": 295,
    "title": "Operasi Hashcat (Misi #295)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_icdw6dqmp5_295}.",
    "flag": "CTF{medium_icdw6dqmp5_295}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_icdw6dqmp5_295}"
        }
      }
    }
  },
  {
    "id": 296,
    "title": "Misteri Bcrypt (Misi #296)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_q8h8s8l12o_296}.",
    "flag": "CTF{medium_q8h8s8l12o_296}",
    "requiresLab": false
  },
  {
    "id": 297,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #297)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_5so7h990ww_297}.",
    "flag": "CTF{medium_5so7h990ww_297}",
    "requiresLab": false
  },
  {
    "id": 298,
    "title": "Operasi GDB (Misi #298)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_yozarl6v1z_298}.",
    "flag": "CTF{medium_yozarl6v1z_298}",
    "requiresLab": false
  },
  {
    "id": 299,
    "title": "Investigasi file ZIP terenkripsi (Misi #299)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_qcvcel4i1o_299}.",
    "flag": "CTF{medium_qcvcel4i1o_299}",
    "requiresLab": false
  },
  {
    "id": 300,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #300)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_4sd8v9bndo_300}.",
    "flag": "CTF{medium_4sd8v9bndo_300}",
    "requiresLab": false
  },
  {
    "id": 301,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #301)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_kjufgecp2_301}.",
    "flag": "CTF{medium_kjufgecp2_301}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_kjufgecp2_301}"
        }
      }
    }
  },
  {
    "id": 302,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #302)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_ukdgv0lsr6_302}.",
    "flag": "CTF{medium_ukdgv0lsr6_302}",
    "requiresLab": false
  },
  {
    "id": 303,
    "title": "Menembus sistem perbankan (Misi #303)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_wwxcx29obf_303}.",
    "flag": "CTF{medium_wwxcx29obf_303}",
    "requiresLab": false
  },
  {
    "id": 304,
    "title": "Investigasi file PCAP (Misi #304)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_d7tqyu6bs5_304}.",
    "flag": "CTF{medium_d7tqyu6bs5_304}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_d7tqyu6bs5_304}"
        }
      }
    }
  },
  {
    "id": 305,
    "title": "Operasi GDB (Misi #305)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_8msl8feb2d_305}.",
    "flag": "CTF{medium_8msl8feb2d_305}",
    "requiresLab": false
  },
  {
    "id": 306,
    "title": "Menembus portal sekolah (Misi #306)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_dvo19dvfp3_306}.",
    "flag": "CTF{medium_dvo19dvfp3_306}",
    "requiresLab": false
  },
  {
    "id": 307,
    "title": "Investigasi file ZIP terenkripsi (Misi #307)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_0dp1aetmeg_307}.",
    "flag": "CTF{medium_0dp1aetmeg_307}",
    "requiresLab": false
  },
  {
    "id": 308,
    "title": "Operasi Hashcat (Misi #308)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_htw3vkhz2w_308}.",
    "flag": "CTF{medium_htw3vkhz2w_308}",
    "requiresLab": false
  },
  {
    "id": 309,
    "title": "Investigasi dump memori RAM (Misi #309)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_ihsxtgu4h2_309}.",
    "flag": "CTF{medium_ihsxtgu4h2_309}",
    "requiresLab": false
  },
  {
    "id": 310,
    "title": "Misteri XOR Encryption (Misi #310)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_szjkip16wz_310}.",
    "flag": "CTF{medium_szjkip16wz_310}",
    "requiresLab": false
  },
  {
    "id": 311,
    "title": "Misteri Elliptic Curve (Misi #311)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_roe5de8yke_311}.",
    "flag": "CTF{medium_roe5de8yke_311}",
    "requiresLab": false
  },
  {
    "id": 312,
    "title": "Operasi Autopsy (Misi #312)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_1gxgr2rn09_312}.",
    "flag": "CTF{medium_1gxgr2rn09_312}",
    "requiresLab": false
  },
  {
    "id": 313,
    "title": "Investigasi gambar JPEG stegano (Misi #313)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_n6lsj4vs6i_313}.",
    "flag": "CTF{medium_n6lsj4vs6i_313}",
    "requiresLab": false
  },
  {
    "id": 314,
    "title": "Investigasi dump memori RAM (Misi #314)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_7rpgff00br_314}.",
    "flag": "CTF{medium_7rpgff00br_314}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_7rpgff00br_314}"
        }
      }
    }
  },
  {
    "id": 315,
    "title": "Melacak DNS Dumpster (Misi #315)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_c5lkmohchz_315}.",
    "flag": "CTF{medium_c5lkmohchz_315}",
    "requiresLab": false
  },
  {
    "id": 316,
    "title": "Menembus router inti (Misi #316)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_27r3bejaho_316}.",
    "flag": "CTF{medium_27r3bejaho_316}",
    "requiresLab": false
  },
  {
    "id": 317,
    "title": "Investigasi gambar JPEG stegano (Misi #317)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_69d237olit_317}.",
    "flag": "CTF{medium_69d237olit_317}",
    "requiresLab": false
  },
  {
    "id": 318,
    "title": "Menembus aplikasi mobile (Misi #318)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_oz8855p9tx_318}.",
    "flag": "CTF{medium_oz8855p9tx_318}",
    "requiresLab": false
  },
  {
    "id": 319,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #319)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_2jq9cdyrtn_319}.",
    "flag": "CTF{medium_2jq9cdyrtn_319}",
    "requiresLab": false
  },
  {
    "id": 320,
    "title": "Eksploitasi SQL Injection (Misi #320)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_jamyucbm7d_320}.",
    "flag": "CTF{medium_jamyucbm7d_320}",
    "requiresLab": false
  },
  {
    "id": 321,
    "title": "Investigasi gambar JPEG stegano (Misi #321)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_c88cpwaslb_321}.",
    "flag": "CTF{medium_c88cpwaslb_321}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_c88cpwaslb_321}"
        }
      }
    }
  },
  {
    "id": 322,
    "title": "Investigasi file ZIP terenkripsi (Misi #322)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_e5m3ew1tas_322}.",
    "flag": "CTF{medium_e5m3ew1tas_322}",
    "requiresLab": false
  },
  {
    "id": 323,
    "title": "Melacak akun Twitter anonim (Misi #323)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_qzbwikegh9_323}.",
    "flag": "CTF{medium_qzbwikegh9_323}",
    "requiresLab": false
  },
  {
    "id": 324,
    "title": "Menembus aplikasi ujian CBT (Misi #324)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_uxg83zavr1_324}.",
    "flag": "CTF{medium_uxg83zavr1_324}",
    "requiresLab": false
  },
  {
    "id": 325,
    "title": "Menembus sistem absensi (Misi #325)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_yg0ixg01b2_325}.",
    "flag": "CTF{medium_yg0ixg01b2_325}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_yg0ixg01b2_325}"
        }
      }
    }
  },
  {
    "id": 326,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #326)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_13k7t913a8_326}.",
    "flag": "CTF{medium_13k7t913a8_326}",
    "requiresLab": false
  },
  {
    "id": 327,
    "title": "Melacak Wayback Machine (Misi #327)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti John the Ripper untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_u5djmpy9mi_327}.",
    "flag": "CTF{medium_u5djmpy9mi_327}",
    "requiresLab": false
  },
  {
    "id": 328,
    "title": "Investigasi image disk (.dd) (Misi #328)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_d3gt86e8og_328}.",
    "flag": "CTF{medium_d3gt86e8og_328}",
    "requiresLab": false
  },
  {
    "id": 329,
    "title": "Misteri Base64 (Misi #329)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_xyaa90fano_329}.",
    "flag": "CTF{medium_xyaa90fano_329}",
    "requiresLab": false
  },
  {
    "id": 330,
    "title": "Misteri XOR Encryption (Misi #330)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_3nlco3jcg5_330}.",
    "flag": "CTF{medium_3nlco3jcg5_330}",
    "requiresLab": false
  },
  {
    "id": 331,
    "title": "Operasi ExifTool (Misi #331)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_jzlxv2d8pp_331}.",
    "flag": "CTF{medium_jzlxv2d8pp_331}",
    "requiresLab": false
  },
  {
    "id": 332,
    "title": "Investigasi dump memori RAM (Misi #332)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_4mthrsrjul_332}.",
    "flag": "CTF{medium_4mthrsrjul_332}",
    "requiresLab": false
  },
  {
    "id": 333,
    "title": "Operasi Binwalk (Misi #333)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_edsf9v43c0_333}.",
    "flag": "CTF{medium_edsf9v43c0_333}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_edsf9v43c0_333}"
        }
      }
    }
  },
  {
    "id": 334,
    "title": "Menembus server e-commerce (Misi #334)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_wqv7yjkqli_334}.",
    "flag": "CTF{medium_wqv7yjkqli_334}",
    "requiresLab": false
  },
  {
    "id": 335,
    "title": "Misteri XOR Encryption (Misi #335)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_fom3rh879t_335}.",
    "flag": "CTF{medium_fom3rh879t_335}",
    "requiresLab": false
  },
  {
    "id": 336,
    "title": "Misteri RSA (Misi #336)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_ufvxwo9ehr_336}.",
    "flag": "CTF{medium_ufvxwo9ehr_336}",
    "requiresLab": false
  },
  {
    "id": 337,
    "title": "Operasi Burp Suite (Misi #337)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_9jv1igjiw7_337}.",
    "flag": "CTF{medium_9jv1igjiw7_337}",
    "requiresLab": false
  },
  {
    "id": 338,
    "title": "Operasi Nmap (Misi #338)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_dxgovjx6j3_338}.",
    "flag": "CTF{medium_dxgovjx6j3_338}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_dxgovjx6j3_338}"
        }
      }
    }
  },
  {
    "id": 339,
    "title": "Menembus database karyawan (Misi #339)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti SQLMap untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_182w7ithv7_339}.",
    "flag": "CTF{medium_182w7ithv7_339}",
    "requiresLab": false
  },
  {
    "id": 340,
    "title": "Misteri Bcrypt (Misi #340)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_i4kar11cu8_340}.",
    "flag": "CTF{medium_i4kar11cu8_340}",
    "requiresLab": false
  },
  {
    "id": 341,
    "title": "Menembus sistem absensi (Misi #341)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_73d449l0od_341}.",
    "flag": "CTF{medium_73d449l0od_341}",
    "requiresLab": false
  },
  {
    "id": 342,
    "title": "Investigasi dump memori RAM (Misi #342)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_mwnh8s6fa4_342}.",
    "flag": "CTF{medium_mwnh8s6fa4_342}",
    "requiresLab": false
  },
  {
    "id": 343,
    "title": "Menembus kamera CCTV (Misi #343)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_lix9glebap_343}.",
    "flag": "CTF{medium_lix9glebap_343}",
    "requiresLab": false
  },
  {
    "id": 344,
    "title": "Investigasi file ZIP terenkripsi (Misi #344)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_rv5vfar4jj_344}.",
    "flag": "CTF{medium_rv5vfar4jj_344}",
    "requiresLab": false
  },
  {
    "id": 345,
    "title": "Investigasi image disk (.dd) (Misi #345)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_kvnpllnb0w_345}.",
    "flag": "CTF{medium_kvnpllnb0w_345}",
    "requiresLab": false
  },
  {
    "id": 346,
    "title": "Investigasi gambar JPEG stegano (Misi #346)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_lrwx96nlxx_346}.",
    "flag": "CTF{medium_lrwx96nlxx_346}",
    "requiresLab": false
  },
  {
    "id": 347,
    "title": "Misteri Base64 (Misi #347)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_w4t49dq809_347}.",
    "flag": "CTF{medium_w4t49dq809_347}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_w4t49dq809_347}"
        }
      }
    }
  },
  {
    "id": 348,
    "title": "Menembus sistem perbankan (Misi #348)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_i0y4v8jtyq_348}.",
    "flag": "CTF{medium_i0y4v8jtyq_348}",
    "requiresLab": false
  },
  {
    "id": 349,
    "title": "Operasi SQLMap (Misi #349)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_lfg5gv26vi_349}.",
    "flag": "CTF{medium_lfg5gv26vi_349}",
    "requiresLab": false
  },
  {
    "id": 350,
    "title": "Investigasi file ZIP terenkripsi (Misi #350)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_0nhxjder9q_350}.",
    "flag": "CTF{medium_0nhxjder9q_350}",
    "requiresLab": false
  },
  {
    "id": 351,
    "title": "Investigasi image disk (.dd) (Misi #351)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_gj41p4qgx0_351}.",
    "flag": "CTF{medium_gj41p4qgx0_351}",
    "requiresLab": false
  },
  {
    "id": 352,
    "title": "Melacak metadata foto liburan (Misi #352)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_7t2hwit28g_352}.",
    "flag": "CTF{medium_7t2hwit28g_352}",
    "requiresLab": false
  },
  {
    "id": 353,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #353)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_9hu1lp7zgr_353}.",
    "flag": "CTF{medium_9hu1lp7zgr_353}",
    "requiresLab": false
  },
  {
    "id": 354,
    "title": "Melacak Google Dorks (Misi #354)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_4otemwuqmv_354}.",
    "flag": "CTF{medium_4otemwuqmv_354}",
    "requiresLab": false
  },
  {
    "id": 355,
    "title": "Investigasi file ZIP terenkripsi (Misi #355)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_ycbrzk8t6d_355}.",
    "flag": "CTF{medium_ycbrzk8t6d_355}",
    "requiresLab": false
  },
  {
    "id": 356,
    "title": "Eksploitasi Buffer Overflow (Misi #356)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_uf2o3yynt5_356}.",
    "flag": "CTF{medium_uf2o3yynt5_356}",
    "requiresLab": false
  },
  {
    "id": 357,
    "title": "Misteri XOR Encryption (Misi #357)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_7unf5kglzw_357}.",
    "flag": "CTF{medium_7unf5kglzw_357}",
    "requiresLab": false
  },
  {
    "id": 358,
    "title": "Melacak Google Dorks (Misi #358)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_ve3jvxqb38_358}.",
    "flag": "CTF{medium_ve3jvxqb38_358}",
    "requiresLab": false
  },
  {
    "id": 359,
    "title": "Investigasi image disk (.dd) (Misi #359)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_9y5thgarvi_359}.",
    "flag": "CTF{medium_9y5thgarvi_359}",
    "requiresLab": false
  },
  {
    "id": 360,
    "title": "Investigasi file PCAP (Misi #360)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_af7mgrodnp_360}.",
    "flag": "CTF{medium_af7mgrodnp_360}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_af7mgrodnp_360}"
        }
      }
    }
  },
  {
    "id": 361,
    "title": "Eksploitasi Use-After-Free (Misi #361)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_yu6t6m330q_361}.",
    "flag": "CTF{medium_yu6t6m330q_361}",
    "requiresLab": false
  },
  {
    "id": 362,
    "title": "Misteri RSA (Misi #362)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_f0larflkl7_362}.",
    "flag": "CTF{medium_f0larflkl7_362}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_f0larflkl7_362}"
        }
      }
    }
  },
  {
    "id": 363,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #363)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_1ee9ya4la7_363}.",
    "flag": "CTF{medium_1ee9ya4la7_363}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_1ee9ya4la7_363}"
        }
      }
    }
  },
  {
    "id": 364,
    "title": "Misteri AES-256 (Misi #364)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_ei23890brr_364}.",
    "flag": "CTF{medium_ei23890brr_364}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_ei23890brr_364}"
        }
      }
    }
  },
  {
    "id": 365,
    "title": "Menembus sistem perbankan (Misi #365)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_6ib87vq0s3_365}.",
    "flag": "CTF{medium_6ib87vq0s3_365}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_6ib87vq0s3_365}"
        }
      }
    }
  },
  {
    "id": 366,
    "title": "Melacak repositori Github yang bocor (Misi #366)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_uzqeuco4n5_366}.",
    "flag": "CTF{medium_uzqeuco4n5_366}",
    "requiresLab": false
  },
  {
    "id": 367,
    "title": "Menembus server SCADA (Misi #367)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_nkchy22qt2_367}.",
    "flag": "CTF{medium_nkchy22qt2_367}",
    "requiresLab": false
  },
  {
    "id": 368,
    "title": "Misteri Base64 (Misi #368)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_b3c9w1j9ud_368}.",
    "flag": "CTF{medium_b3c9w1j9ud_368}",
    "requiresLab": false
  },
  {
    "id": 369,
    "title": "Misteri Vigenere Cipher (Misi #369)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 65,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_xmewvpn58x_369}.",
    "flag": "CTF{medium_xmewvpn58x_369}",
    "requiresLab": false
  },
  {
    "id": 370,
    "title": "Menembus portal sekolah (Misi #370)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_ctwdv9mxlb_370}.",
    "flag": "CTF{medium_ctwdv9mxlb_370}",
    "requiresLab": false
  },
  {
    "id": 371,
    "title": "Operasi Burp Suite (Misi #371)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_p0os24himj_371}.",
    "flag": "CTF{medium_p0os24himj_371}",
    "requiresLab": false
  },
  {
    "id": 372,
    "title": "Eksploitasi Format String Bug (Misi #372)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_r8cales2bl_372}.",
    "flag": "CTF{medium_r8cales2bl_372}",
    "requiresLab": false
  },
  {
    "id": 373,
    "title": "Misteri Elliptic Curve (Misi #373)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_k3kta0u92w_373}.",
    "flag": "CTF{medium_k3kta0u92w_373}",
    "requiresLab": false
  },
  {
    "id": 374,
    "title": "Menembus aplikasi mobile (Misi #374)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_90xddxmr5k_374}.",
    "flag": "CTF{medium_90xddxmr5k_374}",
    "requiresLab": false
  },
  {
    "id": 375,
    "title": "Operasi John the Ripper (Misi #375)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_how0aps0ch_375}.",
    "flag": "CTF{medium_how0aps0ch_375}",
    "requiresLab": false
  },
  {
    "id": 376,
    "title": "Investigasi file ZIP terenkripsi (Misi #376)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_uhjdnz9u9h_376}.",
    "flag": "CTF{medium_uhjdnz9u9h_376}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_uhjdnz9u9h_376}"
        }
      }
    }
  },
  {
    "id": 377,
    "title": "Operasi Burp Suite (Misi #377)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_7w0ogk5vet_377}.",
    "flag": "CTF{medium_7w0ogk5vet_377}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_7w0ogk5vet_377}"
        }
      }
    }
  },
  {
    "id": 378,
    "title": "Misteri Elliptic Curve (Misi #378)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_u8yhniwvl3_378}.",
    "flag": "CTF{medium_u8yhniwvl3_378}",
    "requiresLab": false
  },
  {
    "id": 379,
    "title": "Operasi Binwalk (Misi #379)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_4p8sjgwbo7_379}.",
    "flag": "CTF{medium_4p8sjgwbo7_379}",
    "requiresLab": false
  },
  {
    "id": 380,
    "title": "Melacak DNS Dumpster (Misi #380)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_owtw9wl0wn_380}.",
    "flag": "CTF{medium_owtw9wl0wn_380}",
    "requiresLab": false
  },
  {
    "id": 381,
    "title": "Investigasi file PCAP (Misi #381)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_r96e8q0z94_381}.",
    "flag": "CTF{medium_r96e8q0z94_381}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_r96e8q0z94_381}"
        }
      }
    }
  },
  {
    "id": 382,
    "title": "Eksploitasi Format String Bug (Misi #382)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_yp7wrjtks5_382}.",
    "flag": "CTF{medium_yp7wrjtks5_382}",
    "requiresLab": false
  },
  {
    "id": 383,
    "title": "Investigasi file PCAP (Misi #383)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_oardvwc1s4_383}.",
    "flag": "CTF{medium_oardvwc1s4_383}",
    "requiresLab": false
  },
  {
    "id": 384,
    "title": "Eksploitasi SQL Injection (Misi #384)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_h7jd48qjnm_384}.",
    "flag": "CTF{medium_h7jd48qjnm_384}",
    "requiresLab": false
  },
  {
    "id": 385,
    "title": "Misteri XOR Encryption (Misi #385)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_44qoz7pk3i_385}.",
    "flag": "CTF{medium_44qoz7pk3i_385}",
    "requiresLab": false
  },
  {
    "id": 386,
    "title": "Misteri MD5 Hash (Misi #386)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 95,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_06wwdgjrr7_386}.",
    "flag": "CTF{medium_06wwdgjrr7_386}",
    "requiresLab": false
  },
  {
    "id": 387,
    "title": "Menembus API Payment Gateway (Misi #387)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 90,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_thmx606dfk_387}.",
    "flag": "CTF{medium_thmx606dfk_387}",
    "requiresLab": false
  },
  {
    "id": 388,
    "title": "Menembus server SCADA (Misi #388)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_t30sghq257_388}.",
    "flag": "CTF{medium_t30sghq257_388}",
    "requiresLab": false
  },
  {
    "id": 389,
    "title": "Operasi Hashcat (Misi #389)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_s9brurkgsn_389}.",
    "flag": "CTF{medium_s9brurkgsn_389}",
    "requiresLab": false
  },
  {
    "id": 390,
    "title": "Melacak dokumen PDF perusahaan (Misi #390)",
    "category": "Reverse Engineering",
    "difficulty": "Medium",
    "points": 85,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_qrvscj8v1i_390}.",
    "flag": "CTF{medium_qrvscj8v1i_390}",
    "requiresLab": false
  },
  {
    "id": 391,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #391)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_358mrjmatp_391}.",
    "flag": "CTF{medium_358mrjmatp_391}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{medium_358mrjmatp_391}"
        }
      }
    }
  },
  {
    "id": 392,
    "title": "Eksploitasi SQL Injection (Misi #392)",
    "category": "OSINT",
    "difficulty": "Medium",
    "points": 75,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Nmap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{medium_6sef1z7qpa_392}.",
    "flag": "CTF{medium_6sef1z7qpa_392}",
    "requiresLab": false
  },
  {
    "id": 393,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #393)",
    "category": "Web Exploitation",
    "difficulty": "Medium",
    "points": 60,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{medium_ftjtgttjg9_393}.",
    "flag": "CTF{medium_ftjtgttjg9_393}",
    "requiresLab": false
  },
  {
    "id": 394,
    "title": "Menembus kamera CCTV (Misi #394)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_73kewei55g_394}.",
    "flag": "CTF{medium_73kewei55g_394}",
    "requiresLab": false
  },
  {
    "id": 395,
    "title": "Operasi Wireshark (Misi #395)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_jfcsatg43t_395}.",
    "flag": "CTF{medium_jfcsatg43t_395}",
    "requiresLab": false
  },
  {
    "id": 396,
    "title": "Misteri Elliptic Curve (Misi #396)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti John the Ripper untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_83yvbfstq0_396}.",
    "flag": "CTF{medium_83yvbfstq0_396}",
    "requiresLab": false
  },
  {
    "id": 397,
    "title": "Menembus server e-commerce (Misi #397)",
    "category": "Forensics",
    "difficulty": "Medium",
    "points": 55,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{medium_th9c1pjnj1_397}.",
    "flag": "CTF{medium_th9c1pjnj1_397}",
    "requiresLab": false
  },
  {
    "id": 398,
    "title": "Eksploitasi SQL Injection (Misi #398)",
    "category": "Cryptography",
    "difficulty": "Medium",
    "points": 70,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{medium_v9vq1v01yy_398}.",
    "flag": "CTF{medium_v9vq1v01yy_398}",
    "requiresLab": false
  },
  {
    "id": 399,
    "title": "Operasi SQLMap (Misi #399)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 80,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_qszij6q0dx_399}.",
    "flag": "CTF{medium_qszij6q0dx_399}",
    "requiresLab": false
  },
  {
    "id": 400,
    "title": "Eksploitasi Use-After-Free (Misi #400)",
    "category": "Binary Exploitation",
    "difficulty": "Medium",
    "points": 50,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{medium_xtw3qe36c5_400}.",
    "flag": "CTF{medium_xtw3qe36c5_400}",
    "requiresLab": false
  },
  {
    "id": 401,
    "title": "Melacak Wayback Machine (Misi #401)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_ckzgp7ybf5_401}.",
    "flag": "CTF{hard_ckzgp7ybf5_401}",
    "requiresLab": false
  },
  {
    "id": 402,
    "title": "Eksploitasi Format String Bug (Misi #402)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_0k6b101bd2_402}.",
    "flag": "CTF{hard_0k6b101bd2_402}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_0k6b101bd2_402}"
        }
      }
    }
  },
  {
    "id": 403,
    "title": "Misteri Vigenere Cipher (Misi #403)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_245f5bq4gu_403}.",
    "flag": "CTF{hard_245f5bq4gu_403}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_245f5bq4gu_403}"
        }
      }
    }
  },
  {
    "id": 404,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #404)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_2hq9rw2voq_404}.",
    "flag": "CTF{hard_2hq9rw2voq_404}",
    "requiresLab": false
  },
  {
    "id": 405,
    "title": "Investigasi file PCAP (Misi #405)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_o6atfk4ukq_405}.",
    "flag": "CTF{hard_o6atfk4ukq_405}",
    "requiresLab": false
  },
  {
    "id": 406,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #406)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_qe1y7gkpg0_406}.",
    "flag": "CTF{hard_qe1y7gkpg0_406}",
    "requiresLab": false
  },
  {
    "id": 407,
    "title": "Investigasi image disk (.dd) (Misi #407)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_t3zx9ja6vi_407}.",
    "flag": "CTF{hard_t3zx9ja6vi_407}",
    "requiresLab": false
  },
  {
    "id": 408,
    "title": "Misteri Bcrypt (Misi #408)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_6nkdnzt1sq_408}.",
    "flag": "CTF{hard_6nkdnzt1sq_408}",
    "requiresLab": false
  },
  {
    "id": 409,
    "title": "Misteri XOR Encryption (Misi #409)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_udvvqgx1gr_409}.",
    "flag": "CTF{hard_udvvqgx1gr_409}",
    "requiresLab": false
  },
  {
    "id": 410,
    "title": "Melacak Wayback Machine (Misi #410)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_zq4v6shqmg_410}.",
    "flag": "CTF{hard_zq4v6shqmg_410}",
    "requiresLab": false
  },
  {
    "id": 411,
    "title": "Investigasi dump memori RAM (Misi #411)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_60stkkuve2_411}.",
    "flag": "CTF{hard_60stkkuve2_411}",
    "requiresLab": false
  },
  {
    "id": 412,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #412)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_m1aucho16a_412}.",
    "flag": "CTF{hard_m1aucho16a_412}",
    "requiresLab": false
  },
  {
    "id": 413,
    "title": "Melacak Wayback Machine (Misi #413)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_8032a17kjz_413}.",
    "flag": "CTF{hard_8032a17kjz_413}",
    "requiresLab": false
  },
  {
    "id": 414,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #414)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_9r2gmgjfn3_414}.",
    "flag": "CTF{hard_9r2gmgjfn3_414}",
    "requiresLab": false
  },
  {
    "id": 415,
    "title": "Operasi John the Ripper (Misi #415)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_7ufd643tg0_415}.",
    "flag": "CTF{hard_7ufd643tg0_415}",
    "requiresLab": false
  },
  {
    "id": 416,
    "title": "Misteri Vigenere Cipher (Misi #416)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_ba1z9adh5j_416}.",
    "flag": "CTF{hard_ba1z9adh5j_416}",
    "requiresLab": false
  },
  {
    "id": 417,
    "title": "Misteri Base64 (Misi #417)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_8tqbbkakn4_417}.",
    "flag": "CTF{hard_8tqbbkakn4_417}",
    "requiresLab": false
  },
  {
    "id": 418,
    "title": "Melacak akun Twitter anonim (Misi #418)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_ffkuosjwna_418}.",
    "flag": "CTF{hard_ffkuosjwna_418}",
    "requiresLab": false
  },
  {
    "id": 419,
    "title": "Menembus sistem perbankan (Misi #419)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_xitzofbzc8_419}.",
    "flag": "CTF{hard_xitzofbzc8_419}",
    "requiresLab": false
  },
  {
    "id": 420,
    "title": "Menembus sistem absensi (Misi #420)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_hpjytjoivx_420}.",
    "flag": "CTF{hard_hpjytjoivx_420}",
    "requiresLab": false
  },
  {
    "id": 421,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #421)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_7qa3wobmvc_421}.",
    "flag": "CTF{hard_7qa3wobmvc_421}",
    "requiresLab": false
  },
  {
    "id": 422,
    "title": "Menembus server e-commerce (Misi #422)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_j79cur3ake_422}.",
    "flag": "CTF{hard_j79cur3ake_422}",
    "requiresLab": false
  },
  {
    "id": 423,
    "title": "Melacak repositori Github yang bocor (Misi #423)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_e8d6eyp2ik_423}.",
    "flag": "CTF{hard_e8d6eyp2ik_423}",
    "requiresLab": false
  },
  {
    "id": 424,
    "title": "Menembus kamera CCTV (Misi #424)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_ti76yxae47_424}.",
    "flag": "CTF{hard_ti76yxae47_424}",
    "requiresLab": false
  },
  {
    "id": 425,
    "title": "Operasi Autopsy (Misi #425)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_x2ahipznp5_425}.",
    "flag": "CTF{hard_x2ahipznp5_425}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_x2ahipznp5_425}"
        }
      }
    }
  },
  {
    "id": 426,
    "title": "Misteri Elliptic Curve (Misi #426)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_9d9gxb1vye_426}.",
    "flag": "CTF{hard_9d9gxb1vye_426}",
    "requiresLab": false
  },
  {
    "id": 427,
    "title": "Menembus database karyawan (Misi #427)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_q2dxv3lv0t_427}.",
    "flag": "CTF{hard_q2dxv3lv0t_427}",
    "requiresLab": false
  },
  {
    "id": 428,
    "title": "Operasi Binwalk (Misi #428)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_madoc8l7ag_428}.",
    "flag": "CTF{hard_madoc8l7ag_428}",
    "requiresLab": false
  },
  {
    "id": 429,
    "title": "Melacak Wayback Machine (Misi #429)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_z91wbtj5hf_429}.",
    "flag": "CTF{hard_z91wbtj5hf_429}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_z91wbtj5hf_429}"
        }
      }
    }
  },
  {
    "id": 430,
    "title": "Investigasi image disk (.dd) (Misi #430)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_i13p8i2hvm_430}.",
    "flag": "CTF{hard_i13p8i2hvm_430}",
    "requiresLab": false
  },
  {
    "id": 431,
    "title": "Menembus portal sekolah (Misi #431)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_0wadj33o93_431}.",
    "flag": "CTF{hard_0wadj33o93_431}",
    "requiresLab": false
  },
  {
    "id": 432,
    "title": "Investigasi gambar JPEG stegano (Misi #432)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_dizrb9q0qh_432}.",
    "flag": "CTF{hard_dizrb9q0qh_432}",
    "requiresLab": false
  },
  {
    "id": 433,
    "title": "Misteri MD5 Hash (Misi #433)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_g07gbyvziy_433}.",
    "flag": "CTF{hard_g07gbyvziy_433}",
    "requiresLab": false
  },
  {
    "id": 434,
    "title": "Misteri Bcrypt (Misi #434)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_izvta81qr7_434}.",
    "flag": "CTF{hard_izvta81qr7_434}",
    "requiresLab": false
  },
  {
    "id": 435,
    "title": "Misteri Base64 (Misi #435)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_n2o5c2giwb_435}.",
    "flag": "CTF{hard_n2o5c2giwb_435}",
    "requiresLab": false
  },
  {
    "id": 436,
    "title": "Investigasi dump memori RAM (Misi #436)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_cecpvkl6s4_436}.",
    "flag": "CTF{hard_cecpvkl6s4_436}",
    "requiresLab": false
  },
  {
    "id": 437,
    "title": "Menembus router inti (Misi #437)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_8716ir58qj_437}.",
    "flag": "CTF{hard_8716ir58qj_437}",
    "requiresLab": false
  },
  {
    "id": 438,
    "title": "Menembus server SCADA (Misi #438)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_4gvi203ypr_438}.",
    "flag": "CTF{hard_4gvi203ypr_438}",
    "requiresLab": false
  },
  {
    "id": 439,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #439)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_dgctwuz2jo_439}.",
    "flag": "CTF{hard_dgctwuz2jo_439}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_dgctwuz2jo_439}"
        }
      }
    }
  },
  {
    "id": 440,
    "title": "Misteri Elliptic Curve (Misi #440)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti John the Ripper untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_ym0lzrb5u4_440}.",
    "flag": "CTF{hard_ym0lzrb5u4_440}",
    "requiresLab": false
  },
  {
    "id": 441,
    "title": "Menembus server e-commerce (Misi #441)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_kn1wheaz5h_441}.",
    "flag": "CTF{hard_kn1wheaz5h_441}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_kn1wheaz5h_441}"
        }
      }
    }
  },
  {
    "id": 442,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #442)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_3pcvrx7l5s_442}.",
    "flag": "CTF{hard_3pcvrx7l5s_442}",
    "requiresLab": false
  },
  {
    "id": 443,
    "title": "Melacak metadata foto liburan (Misi #443)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_h26exl2awf_443}.",
    "flag": "CTF{hard_h26exl2awf_443}",
    "requiresLab": false
  },
  {
    "id": 444,
    "title": "Operasi Autopsy (Misi #444)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_aavxgno6i_444}.",
    "flag": "CTF{hard_aavxgno6i_444}",
    "requiresLab": false
  },
  {
    "id": 445,
    "title": "Investigasi gambar JPEG stegano (Misi #445)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_g4ipf28di6_445}.",
    "flag": "CTF{hard_g4ipf28di6_445}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_g4ipf28di6_445}"
        }
      }
    }
  },
  {
    "id": 446,
    "title": "Operasi Ghidra (Misi #446)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_fgmlg65c0n_446}.",
    "flag": "CTF{hard_fgmlg65c0n_446}",
    "requiresLab": false
  },
  {
    "id": 447,
    "title": "Investigasi dump memori RAM (Misi #447)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_9w7ccyojuo_447}.",
    "flag": "CTF{hard_9w7ccyojuo_447}",
    "requiresLab": false
  },
  {
    "id": 448,
    "title": "Misteri Base64 (Misi #448)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_zn93x2lprp_448}.",
    "flag": "CTF{hard_zn93x2lprp_448}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_zn93x2lprp_448}"
        }
      }
    }
  },
  {
    "id": 449,
    "title": "Melacak metadata foto liburan (Misi #449)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_zk3qke5zvy_449}.",
    "flag": "CTF{hard_zk3qke5zvy_449}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_zk3qke5zvy_449}"
        }
      }
    }
  },
  {
    "id": 450,
    "title": "Investigasi file PCAP (Misi #450)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_036dmf94fj_450}.",
    "flag": "CTF{hard_036dmf94fj_450}",
    "requiresLab": false
  },
  {
    "id": 451,
    "title": "Investigasi file ZIP terenkripsi (Misi #451)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_n51dk4kas4_451}.",
    "flag": "CTF{hard_n51dk4kas4_451}",
    "requiresLab": false
  },
  {
    "id": 452,
    "title": "Menembus aplikasi mobile (Misi #452)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_otd9y4osih_452}.",
    "flag": "CTF{hard_otd9y4osih_452}",
    "requiresLab": false
  },
  {
    "id": 453,
    "title": "Operasi Ghidra (Misi #453)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_eaj9o9vo97_453}.",
    "flag": "CTF{hard_eaj9o9vo97_453}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_eaj9o9vo97_453}"
        }
      }
    }
  },
  {
    "id": 454,
    "title": "Misteri Elliptic Curve (Misi #454)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_gasmm0hq3k_454}.",
    "flag": "CTF{hard_gasmm0hq3k_454}",
    "requiresLab": false
  },
  {
    "id": 455,
    "title": "Investigasi file ZIP terenkripsi (Misi #455)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_8ehj6wxaic_455}.",
    "flag": "CTF{hard_8ehj6wxaic_455}",
    "requiresLab": false
  },
  {
    "id": 456,
    "title": "Menembus API Payment Gateway (Misi #456)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_olqhzci238_456}.",
    "flag": "CTF{hard_olqhzci238_456}",
    "requiresLab": false
  },
  {
    "id": 457,
    "title": "Operasi John the Ripper (Misi #457)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_xzxyc3kafj_457}.",
    "flag": "CTF{hard_xzxyc3kafj_457}",
    "requiresLab": false
  },
  {
    "id": 458,
    "title": "Menembus sistem perbankan (Misi #458)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_xp99eb1t1n_458}.",
    "flag": "CTF{hard_xp99eb1t1n_458}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_xp99eb1t1n_458}"
        }
      }
    }
  },
  {
    "id": 459,
    "title": "Investigasi file ZIP terenkripsi (Misi #459)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_11umvegvjm_459}.",
    "flag": "CTF{hard_11umvegvjm_459}",
    "requiresLab": false
  },
  {
    "id": 460,
    "title": "Misteri Elliptic Curve (Misi #460)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_b6gqzlo5kz_460}.",
    "flag": "CTF{hard_b6gqzlo5kz_460}",
    "requiresLab": false
  },
  {
    "id": 461,
    "title": "Melacak DNS Dumpster (Misi #461)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_ndynz2p9t9_461}.",
    "flag": "CTF{hard_ndynz2p9t9_461}",
    "requiresLab": false
  },
  {
    "id": 462,
    "title": "Investigasi image disk (.dd) (Misi #462)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_oojp5u62qc_462}.",
    "flag": "CTF{hard_oojp5u62qc_462}",
    "requiresLab": false
  },
  {
    "id": 463,
    "title": "Operasi Hashcat (Misi #463)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_cvwcb9gev4_463}.",
    "flag": "CTF{hard_cvwcb9gev4_463}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_cvwcb9gev4_463}"
        }
      }
    }
  },
  {
    "id": 464,
    "title": "Melacak repositori Github yang bocor (Misi #464)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_zprtls7xl8_464}.",
    "flag": "CTF{hard_zprtls7xl8_464}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_zprtls7xl8_464}"
        }
      }
    }
  },
  {
    "id": 465,
    "title": "Melacak Google Dorks (Misi #465)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_ja68npjycv_465}.",
    "flag": "CTF{hard_ja68npjycv_465}",
    "requiresLab": false
  },
  {
    "id": 466,
    "title": "Investigasi file PCAP (Misi #466)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_jt78n5f16i_466}.",
    "flag": "CTF{hard_jt78n5f16i_466}",
    "requiresLab": false
  },
  {
    "id": 467,
    "title": "Operasi ExifTool (Misi #467)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_6pyb7ew6t9_467}.",
    "flag": "CTF{hard_6pyb7ew6t9_467}",
    "requiresLab": false
  },
  {
    "id": 468,
    "title": "Operasi Binwalk (Misi #468)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_le7pjqq6bh_468}.",
    "flag": "CTF{hard_le7pjqq6bh_468}",
    "requiresLab": false
  },
  {
    "id": 469,
    "title": "Melacak Wayback Machine (Misi #469)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_u2phaewaom_469}.",
    "flag": "CTF{hard_u2phaewaom_469}",
    "requiresLab": false
  },
  {
    "id": 470,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #470)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_78vftdq8p4_470}.",
    "flag": "CTF{hard_78vftdq8p4_470}",
    "requiresLab": false
  },
  {
    "id": 471,
    "title": "Melacak DNS Dumpster (Misi #471)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_78s3illvvq_471}.",
    "flag": "CTF{hard_78s3illvvq_471}",
    "requiresLab": false
  },
  {
    "id": 472,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #472)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_3bdup9o22u_472}.",
    "flag": "CTF{hard_3bdup9o22u_472}",
    "requiresLab": false
  },
  {
    "id": 473,
    "title": "Investigasi dump memori RAM (Misi #473)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_5ga5sxyiun_473}.",
    "flag": "CTF{hard_5ga5sxyiun_473}",
    "requiresLab": false
  },
  {
    "id": 474,
    "title": "Misteri Base64 (Misi #474)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_nnd6e4f2lw_474}.",
    "flag": "CTF{hard_nnd6e4f2lw_474}",
    "requiresLab": false
  },
  {
    "id": 475,
    "title": "Investigasi image disk (.dd) (Misi #475)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti John the Ripper untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_w7882km9x6_475}.",
    "flag": "CTF{hard_w7882km9x6_475}",
    "requiresLab": false
  },
  {
    "id": 476,
    "title": "Eksploitasi Buffer Overflow (Misi #476)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_qijx2f8d0f_476}.",
    "flag": "CTF{hard_qijx2f8d0f_476}",
    "requiresLab": false
  },
  {
    "id": 477,
    "title": "Operasi Nmap (Misi #477)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_bpkc1wdbmm_477}.",
    "flag": "CTF{hard_bpkc1wdbmm_477}",
    "requiresLab": false
  },
  {
    "id": 478,
    "title": "Menembus kamera CCTV (Misi #478)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_6orvb6tyyd_478}.",
    "flag": "CTF{hard_6orvb6tyyd_478}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_6orvb6tyyd_478}"
        }
      }
    }
  },
  {
    "id": 479,
    "title": "Melacak akun Twitter anonim (Misi #479)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_upnq74sj24_479}.",
    "flag": "CTF{hard_upnq74sj24_479}",
    "requiresLab": false
  },
  {
    "id": 480,
    "title": "Melacak repositori Github yang bocor (Misi #480)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_vightx4i52_480}.",
    "flag": "CTF{hard_vightx4i52_480}",
    "requiresLab": false
  },
  {
    "id": 481,
    "title": "Operasi GDB (Misi #481)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_9id05fqtjt_481}.",
    "flag": "CTF{hard_9id05fqtjt_481}",
    "requiresLab": false
  },
  {
    "id": 482,
    "title": "Investigasi image disk (.dd) (Misi #482)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_7j34at01km_482}.",
    "flag": "CTF{hard_7j34at01km_482}",
    "requiresLab": false
  },
  {
    "id": 483,
    "title": "Investigasi gambar JPEG stegano (Misi #483)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_zgenutsxo7_483}.",
    "flag": "CTF{hard_zgenutsxo7_483}",
    "requiresLab": false
  },
  {
    "id": 484,
    "title": "Eksploitasi Buffer Overflow (Misi #484)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_xf05rro11x_484}.",
    "flag": "CTF{hard_xf05rro11x_484}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_xf05rro11x_484}"
        }
      }
    }
  },
  {
    "id": 485,
    "title": "Melacak akun Twitter anonim (Misi #485)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_ilbz87xbun_485}.",
    "flag": "CTF{hard_ilbz87xbun_485}",
    "requiresLab": false
  },
  {
    "id": 486,
    "title": "Menembus aplikasi mobile (Misi #486)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_lpc5u40f96_486}.",
    "flag": "CTF{hard_lpc5u40f96_486}",
    "requiresLab": false
  },
  {
    "id": 487,
    "title": "Melacak Wayback Machine (Misi #487)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_jzjly555r9_487}.",
    "flag": "CTF{hard_jzjly555r9_487}",
    "requiresLab": false
  },
  {
    "id": 488,
    "title": "Misteri Elliptic Curve (Misi #488)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_zstphwmlzb_488}.",
    "flag": "CTF{hard_zstphwmlzb_488}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_zstphwmlzb_488}"
        }
      }
    }
  },
  {
    "id": 489,
    "title": "Menembus API Payment Gateway (Misi #489)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_llmai78fj2_489}.",
    "flag": "CTF{hard_llmai78fj2_489}",
    "requiresLab": false
  },
  {
    "id": 490,
    "title": "Misteri MD5 Hash (Misi #490)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_j0holfn0da_490}.",
    "flag": "CTF{hard_j0holfn0da_490}",
    "requiresLab": false
  },
  {
    "id": 491,
    "title": "Misteri AES-256 (Misi #491)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_3ruce2gjvq_491}.",
    "flag": "CTF{hard_3ruce2gjvq_491}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_3ruce2gjvq_491}"
        }
      }
    }
  },
  {
    "id": 492,
    "title": "Operasi ExifTool (Misi #492)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_hyck829qid_492}.",
    "flag": "CTF{hard_hyck829qid_492}",
    "requiresLab": false
  },
  {
    "id": 493,
    "title": "Melacak DNS Dumpster (Misi #493)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_5gwyafygwo_493}.",
    "flag": "CTF{hard_5gwyafygwo_493}",
    "requiresLab": false
  },
  {
    "id": 494,
    "title": "Operasi Wireshark (Misi #494)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_jzbj25dohy_494}.",
    "flag": "CTF{hard_jzbj25dohy_494}",
    "requiresLab": false
  },
  {
    "id": 495,
    "title": "Operasi ExifTool (Misi #495)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_4l6c6ibebf_495}.",
    "flag": "CTF{hard_4l6c6ibebf_495}",
    "requiresLab": false
  },
  {
    "id": 496,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #496)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_ez826qdb3q_496}.",
    "flag": "CTF{hard_ez826qdb3q_496}",
    "requiresLab": false
  },
  {
    "id": 497,
    "title": "Eksploitasi SQL Injection (Misi #497)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_dzfwldzflb_497}.",
    "flag": "CTF{hard_dzfwldzflb_497}",
    "requiresLab": false
  },
  {
    "id": 498,
    "title": "Menembus router inti (Misi #498)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_xnbmt2laiy_498}.",
    "flag": "CTF{hard_xnbmt2laiy_498}",
    "requiresLab": false
  },
  {
    "id": 499,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #499)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_s7gtwumnnb_499}.",
    "flag": "CTF{hard_s7gtwumnnb_499}",
    "requiresLab": false
  },
  {
    "id": 500,
    "title": "Menembus API Payment Gateway (Misi #500)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_c7t478l9kh_500}.",
    "flag": "CTF{hard_c7t478l9kh_500}",
    "requiresLab": false
  },
  {
    "id": 501,
    "title": "Investigasi file PCAP (Misi #501)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_b94kft5yhe_501}.",
    "flag": "CTF{hard_b94kft5yhe_501}",
    "requiresLab": false
  },
  {
    "id": 502,
    "title": "Operasi Nmap (Misi #502)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_i2n5x9lwq6_502}.",
    "flag": "CTF{hard_i2n5x9lwq6_502}",
    "requiresLab": false
  },
  {
    "id": 503,
    "title": "Investigasi gambar JPEG stegano (Misi #503)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_8jj3xre7m8_503}.",
    "flag": "CTF{hard_8jj3xre7m8_503}",
    "requiresLab": false
  },
  {
    "id": 504,
    "title": "Operasi Ghidra (Misi #504)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_pen9f18nni_504}.",
    "flag": "CTF{hard_pen9f18nni_504}",
    "requiresLab": false
  },
  {
    "id": 505,
    "title": "Melacak DNS Dumpster (Misi #505)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_f99fgsgxz5_505}.",
    "flag": "CTF{hard_f99fgsgxz5_505}",
    "requiresLab": false
  },
  {
    "id": 506,
    "title": "Melacak Wayback Machine (Misi #506)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_4o6agblse6_506}.",
    "flag": "CTF{hard_4o6agblse6_506}",
    "requiresLab": false
  },
  {
    "id": 507,
    "title": "Misteri Vigenere Cipher (Misi #507)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_kz0t0yodyo_507}.",
    "flag": "CTF{hard_kz0t0yodyo_507}",
    "requiresLab": false
  },
  {
    "id": 508,
    "title": "Operasi GDB (Misi #508)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_nxuz2p3bpt_508}.",
    "flag": "CTF{hard_nxuz2p3bpt_508}",
    "requiresLab": false
  },
  {
    "id": 509,
    "title": "Menembus API Payment Gateway (Misi #509)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_oh08awx7yp_509}.",
    "flag": "CTF{hard_oh08awx7yp_509}",
    "requiresLab": false
  },
  {
    "id": 510,
    "title": "Misteri Base64 (Misi #510)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_nsigbaawa3_510}.",
    "flag": "CTF{hard_nsigbaawa3_510}",
    "requiresLab": false
  },
  {
    "id": 511,
    "title": "Investigasi file ZIP terenkripsi (Misi #511)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_17k9yjvb6y_511}.",
    "flag": "CTF{hard_17k9yjvb6y_511}",
    "requiresLab": false
  },
  {
    "id": 512,
    "title": "Menembus database karyawan (Misi #512)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_sic5gtvyt9_512}.",
    "flag": "CTF{hard_sic5gtvyt9_512}",
    "requiresLab": false
  },
  {
    "id": 513,
    "title": "Misteri MD5 Hash (Misi #513)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_qf70ephrsq_513}.",
    "flag": "CTF{hard_qf70ephrsq_513}",
    "requiresLab": false
  },
  {
    "id": 514,
    "title": "Investigasi file ZIP terenkripsi (Misi #514)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_a6hmv6ykzy_514}.",
    "flag": "CTF{hard_a6hmv6ykzy_514}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_a6hmv6ykzy_514}"
        }
      }
    }
  },
  {
    "id": 515,
    "title": "Operasi Nmap (Misi #515)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_nro0cfp7l3_515}.",
    "flag": "CTF{hard_nro0cfp7l3_515}",
    "requiresLab": false
  },
  {
    "id": 516,
    "title": "Investigasi dump memori RAM (Misi #516)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_bn58g7pvvj_516}.",
    "flag": "CTF{hard_bn58g7pvvj_516}",
    "requiresLab": false
  },
  {
    "id": 517,
    "title": "Investigasi file PCAP (Misi #517)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_jap85w4nxz_517}.",
    "flag": "CTF{hard_jap85w4nxz_517}",
    "requiresLab": false
  },
  {
    "id": 518,
    "title": "Operasi Burp Suite (Misi #518)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_2pyr34kr1n_518}.",
    "flag": "CTF{hard_2pyr34kr1n_518}",
    "requiresLab": false
  },
  {
    "id": 519,
    "title": "Menembus aplikasi ujian CBT (Misi #519)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_006gebz7gg_519}.",
    "flag": "CTF{hard_006gebz7gg_519}",
    "requiresLab": false
  },
  {
    "id": 520,
    "title": "Eksploitasi Use-After-Free (Misi #520)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_szb6g8pjnv_520}.",
    "flag": "CTF{hard_szb6g8pjnv_520}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_szb6g8pjnv_520}"
        }
      }
    }
  },
  {
    "id": 521,
    "title": "Investigasi file ZIP terenkripsi (Misi #521)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_a0r8hn7q1d_521}.",
    "flag": "CTF{hard_a0r8hn7q1d_521}",
    "requiresLab": false
  },
  {
    "id": 522,
    "title": "Misteri Elliptic Curve (Misi #522)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_3p5a0t7vkj_522}.",
    "flag": "CTF{hard_3p5a0t7vkj_522}",
    "requiresLab": false
  },
  {
    "id": 523,
    "title": "Menembus router inti (Misi #523)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_xgrubi0wrw_523}.",
    "flag": "CTF{hard_xgrubi0wrw_523}",
    "requiresLab": false
  },
  {
    "id": 524,
    "title": "Melacak metadata foto liburan (Misi #524)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti SQLMap untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_a65lazbfkw_524}.",
    "flag": "CTF{hard_a65lazbfkw_524}",
    "requiresLab": false
  },
  {
    "id": 525,
    "title": "Menembus aplikasi ujian CBT (Misi #525)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_z0somkl5ai_525}.",
    "flag": "CTF{hard_z0somkl5ai_525}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_z0somkl5ai_525}"
        }
      }
    }
  },
  {
    "id": 526,
    "title": "Melacak metadata foto liburan (Misi #526)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_3lpue3rctu_526}.",
    "flag": "CTF{hard_3lpue3rctu_526}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_3lpue3rctu_526}"
        }
      }
    }
  },
  {
    "id": 527,
    "title": "Melacak Google Dorks (Misi #527)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan ExifTool untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_arao9ly2e3_527}.",
    "flag": "CTF{hard_arao9ly2e3_527}",
    "requiresLab": false
  },
  {
    "id": 528,
    "title": "Operasi Hashcat (Misi #528)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_z3hz9k9j9n_528}.",
    "flag": "CTF{hard_z3hz9k9j9n_528}",
    "requiresLab": false
  },
  {
    "id": 529,
    "title": "Investigasi dump memori RAM (Misi #529)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_u3h8nx80vs_529}.",
    "flag": "CTF{hard_u3h8nx80vs_529}",
    "requiresLab": false
  },
  {
    "id": 530,
    "title": "Menembus server SCADA (Misi #530)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_11db1anly9_530}.",
    "flag": "CTF{hard_11db1anly9_530}",
    "requiresLab": false
  },
  {
    "id": 531,
    "title": "Menembus aplikasi ujian CBT (Misi #531)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_xz5stas797_531}.",
    "flag": "CTF{hard_xz5stas797_531}",
    "requiresLab": false
  },
  {
    "id": 532,
    "title": "Melacak dokumen PDF perusahaan (Misi #532)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_279erfhcj6_532}.",
    "flag": "CTF{hard_279erfhcj6_532}",
    "requiresLab": false
  },
  {
    "id": 533,
    "title": "Investigasi image disk (.dd) (Misi #533)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_n6itngan3p_533}.",
    "flag": "CTF{hard_n6itngan3p_533}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_n6itngan3p_533}"
        }
      }
    }
  },
  {
    "id": 534,
    "title": "Melacak repositori Github yang bocor (Misi #534)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_0mqkni2unf_534}.",
    "flag": "CTF{hard_0mqkni2unf_534}",
    "requiresLab": false
  },
  {
    "id": 535,
    "title": "Misteri Bcrypt (Misi #535)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_ilhh9lp3yt_535}.",
    "flag": "CTF{hard_ilhh9lp3yt_535}",
    "requiresLab": false
  },
  {
    "id": 536,
    "title": "Investigasi file ZIP terenkripsi (Misi #536)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_h3y8m7gg7i_536}.",
    "flag": "CTF{hard_h3y8m7gg7i_536}",
    "requiresLab": false
  },
  {
    "id": 537,
    "title": "Melacak DNS Dumpster (Misi #537)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_v9f0uuscor_537}.",
    "flag": "CTF{hard_v9f0uuscor_537}",
    "requiresLab": false
  },
  {
    "id": 538,
    "title": "Misteri XOR Encryption (Misi #538)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_tt80zib6t4_538}.",
    "flag": "CTF{hard_tt80zib6t4_538}",
    "requiresLab": false
  },
  {
    "id": 539,
    "title": "Melacak Wayback Machine (Misi #539)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_5tqf76ekn7_539}.",
    "flag": "CTF{hard_5tqf76ekn7_539}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_5tqf76ekn7_539}"
        }
      }
    }
  },
  {
    "id": 540,
    "title": "Eksploitasi Buffer Overflow (Misi #540)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_hbr6zyji0m_540}.",
    "flag": "CTF{hard_hbr6zyji0m_540}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_hbr6zyji0m_540}"
        }
      }
    }
  },
  {
    "id": 541,
    "title": "Misteri Bcrypt (Misi #541)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_kc2klgitpq_541}.",
    "flag": "CTF{hard_kc2klgitpq_541}",
    "requiresLab": false
  },
  {
    "id": 542,
    "title": "Menembus server SCADA (Misi #542)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_mfxq7y0vlu_542}.",
    "flag": "CTF{hard_mfxq7y0vlu_542}",
    "requiresLab": false
  },
  {
    "id": 543,
    "title": "Melacak Google Dorks (Misi #543)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_6ozxe5cjqx_543}.",
    "flag": "CTF{hard_6ozxe5cjqx_543}",
    "requiresLab": false
  },
  {
    "id": 544,
    "title": "Operasi Wireshark (Misi #544)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_rz8l8lk6mw_544}.",
    "flag": "CTF{hard_rz8l8lk6mw_544}",
    "requiresLab": false
  },
  {
    "id": 545,
    "title": "Operasi ExifTool (Misi #545)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_71lnqnf4b3_545}.",
    "flag": "CTF{hard_71lnqnf4b3_545}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_71lnqnf4b3_545}"
        }
      }
    }
  },
  {
    "id": 546,
    "title": "Misteri RSA (Misi #546)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_hu11me6lp7_546}.",
    "flag": "CTF{hard_hu11me6lp7_546}",
    "requiresLab": false
  },
  {
    "id": 547,
    "title": "Eksploitasi SQL Injection (Misi #547)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_ewbn7vl47u_547}.",
    "flag": "CTF{hard_ewbn7vl47u_547}",
    "requiresLab": false
  },
  {
    "id": 548,
    "title": "Investigasi image disk (.dd) (Misi #548)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_3jpojh1na3_548}.",
    "flag": "CTF{hard_3jpojh1na3_548}",
    "requiresLab": false
  },
  {
    "id": 549,
    "title": "Menembus server e-commerce (Misi #549)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_9jiph41zm4_549}.",
    "flag": "CTF{hard_9jiph41zm4_549}",
    "requiresLab": false
  },
  {
    "id": 550,
    "title": "Menembus kamera CCTV (Misi #550)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_m3hmaprdvy_550}.",
    "flag": "CTF{hard_m3hmaprdvy_550}",
    "requiresLab": false
  },
  {
    "id": 551,
    "title": "Investigasi file PCAP (Misi #551)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_m2d172dkv2_551}.",
    "flag": "CTF{hard_m2d172dkv2_551}",
    "requiresLab": false
  },
  {
    "id": 552,
    "title": "Investigasi dump memori RAM (Misi #552)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_1u4435hf2k_552}.",
    "flag": "CTF{hard_1u4435hf2k_552}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_1u4435hf2k_552}"
        }
      }
    }
  },
  {
    "id": 553,
    "title": "Operasi Wireshark (Misi #553)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_h6fy32d2w3_553}.",
    "flag": "CTF{hard_h6fy32d2w3_553}",
    "requiresLab": false
  },
  {
    "id": 554,
    "title": "Operasi Nmap (Misi #554)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_nvj1rymdqv_554}.",
    "flag": "CTF{hard_nvj1rymdqv_554}",
    "requiresLab": false
  },
  {
    "id": 555,
    "title": "Eksploitasi Local File Inclusion (LFI) (Misi #555)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_asokoyfhmx_555}.",
    "flag": "CTF{hard_asokoyfhmx_555}",
    "requiresLab": false
  },
  {
    "id": 556,
    "title": "Melacak DNS Dumpster (Misi #556)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_0oad5kosjt_556}.",
    "flag": "CTF{hard_0oad5kosjt_556}",
    "requiresLab": false
  },
  {
    "id": 557,
    "title": "Menembus API Payment Gateway (Misi #557)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_0adiqf282g_557}.",
    "flag": "CTF{hard_0adiqf282g_557}",
    "requiresLab": false
  },
  {
    "id": 558,
    "title": "Investigasi gambar JPEG stegano (Misi #558)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_3ayy1i8yvs_558}.",
    "flag": "CTF{hard_3ayy1i8yvs_558}",
    "requiresLab": false
  },
  {
    "id": 559,
    "title": "Misteri Bcrypt (Misi #559)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti SQLMap untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_ql81luzo7b_559}.",
    "flag": "CTF{hard_ql81luzo7b_559}",
    "requiresLab": false
  },
  {
    "id": 560,
    "title": "Melacak akun Twitter anonim (Misi #560)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_mr3dmsqpym_560}.",
    "flag": "CTF{hard_mr3dmsqpym_560}",
    "requiresLab": false
  },
  {
    "id": 561,
    "title": "Melacak Wayback Machine (Misi #561)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_n1dn2kx1f4_561}.",
    "flag": "CTF{hard_n1dn2kx1f4_561}",
    "requiresLab": false
  },
  {
    "id": 562,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #562)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_a7kxs6a6vb_562}.",
    "flag": "CTF{hard_a7kxs6a6vb_562}",
    "requiresLab": false
  },
  {
    "id": 563,
    "title": "Melacak DNS Dumpster (Misi #563)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_7kz980c4ei_563}.",
    "flag": "CTF{hard_7kz980c4ei_563}",
    "requiresLab": false
  },
  {
    "id": 564,
    "title": "Operasi Ghidra (Misi #564)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_9oof6uheac_564}.",
    "flag": "CTF{hard_9oof6uheac_564}",
    "requiresLab": false
  },
  {
    "id": 565,
    "title": "Menembus kamera CCTV (Misi #565)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_m8e3gfdbv9_565}.",
    "flag": "CTF{hard_m8e3gfdbv9_565}",
    "requiresLab": false
  },
  {
    "id": 566,
    "title": "Operasi Ghidra (Misi #566)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_bao8hyw77q_566}.",
    "flag": "CTF{hard_bao8hyw77q_566}",
    "requiresLab": false
  },
  {
    "id": 567,
    "title": "Menembus portal sekolah (Misi #567)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_w8nypntuzl_567}.",
    "flag": "CTF{hard_w8nypntuzl_567}",
    "requiresLab": false
  },
  {
    "id": 568,
    "title": "Melacak DNS Dumpster (Misi #568)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_81ggporfxc_568}.",
    "flag": "CTF{hard_81ggporfxc_568}",
    "requiresLab": false
  },
  {
    "id": 569,
    "title": "Operasi Autopsy (Misi #569)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_q6laijmc6f_569}.",
    "flag": "CTF{hard_q6laijmc6f_569}",
    "requiresLab": false
  },
  {
    "id": 570,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #570)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Remote Code Execution (RCE).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_1ao3zl1gfr_570}.",
    "flag": "CTF{hard_1ao3zl1gfr_570}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_1ao3zl1gfr_570}"
        }
      }
    }
  },
  {
    "id": 571,
    "title": "Operasi ExifTool (Misi #571)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_l23ju7jogo_571}.",
    "flag": "CTF{hard_l23ju7jogo_571}",
    "requiresLab": false
  },
  {
    "id": 572,
    "title": "Investigasi file ZIP terenkripsi (Misi #572)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_ts32tkdo12_572}.",
    "flag": "CTF{hard_ts32tkdo12_572}",
    "requiresLab": false
  },
  {
    "id": 573,
    "title": "Melacak Wayback Machine (Misi #573)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Binwalk untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_8gmztk7ak3_573}.",
    "flag": "CTF{hard_8gmztk7ak3_573}",
    "requiresLab": false
  },
  {
    "id": 574,
    "title": "Melacak metadata foto liburan (Misi #574)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_7wvnmqon6o_574}.",
    "flag": "CTF{hard_7wvnmqon6o_574}",
    "requiresLab": false
  },
  {
    "id": 575,
    "title": "Misteri AES-256 (Misi #575)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_yrbphwzm3c_575}.",
    "flag": "CTF{hard_yrbphwzm3c_575}",
    "requiresLab": false
  },
  {
    "id": 576,
    "title": "Operasi SQLMap (Misi #576)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_y1uya5hz82_576}.",
    "flag": "CTF{hard_y1uya5hz82_576}",
    "requiresLab": false
  },
  {
    "id": 577,
    "title": "Operasi Nmap (Misi #577)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 125,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_c0qtvu9c5n_577}.",
    "flag": "CTF{hard_c0qtvu9c5n_577}",
    "requiresLab": false
  },
  {
    "id": 578,
    "title": "Operasi Burp Suite (Misi #578)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_4pn9l9n9ut_578}.",
    "flag": "CTF{hard_4pn9l9n9ut_578}",
    "requiresLab": false
  },
  {
    "id": 579,
    "title": "Investigasi file PCAP (Misi #579)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_m27zubgnqr_579}.",
    "flag": "CTF{hard_m27zubgnqr_579}",
    "requiresLab": false
  },
  {
    "id": 580,
    "title": "Investigasi dump memori RAM (Misi #580)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_zqwgvdb9im_580}.",
    "flag": "CTF{hard_zqwgvdb9im_580}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_zqwgvdb9im_580}"
        }
      }
    }
  },
  {
    "id": 581,
    "title": "Misteri Base64 (Misi #581)",
    "category": "Cryptography",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{hard_zcravk26wp_581}.",
    "flag": "CTF{hard_zcravk26wp_581}",
    "requiresLab": false
  },
  {
    "id": 582,
    "title": "Menembus sistem absensi (Misi #582)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file ZIP terenkripsi.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_l5cf0gzfz8_582}.",
    "flag": "CTF{hard_l5cf0gzfz8_582}",
    "requiresLab": false
  },
  {
    "id": 583,
    "title": "Investigasi image disk (.dd) (Misi #583)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_q7g7k9vhj4_583}.",
    "flag": "CTF{hard_q7g7k9vhj4_583}",
    "requiresLab": false
  },
  {
    "id": 584,
    "title": "Investigasi dump memori RAM (Misi #584)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 130,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_woc1s007cd_584}.",
    "flag": "CTF{hard_woc1s007cd_584}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_woc1s007cd_584}"
        }
      }
    }
  },
  {
    "id": 585,
    "title": "Operasi Metasploit (Misi #585)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_ym76eg5fk9_585}.",
    "flag": "CTF{hard_ym76eg5fk9_585}",
    "requiresLab": false
  },
  {
    "id": 586,
    "title": "Menembus router inti (Misi #586)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_fxummpe9ii_586}.",
    "flag": "CTF{hard_fxummpe9ii_586}",
    "requiresLab": false
  },
  {
    "id": 587,
    "title": "Misteri MD5 Hash (Misi #587)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 110,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_29s673ysx5_587}.",
    "flag": "CTF{hard_29s673ysx5_587}",
    "requiresLab": false
  },
  {
    "id": 588,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #588)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 120,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_5frcq10w97_588}.",
    "flag": "CTF{hard_5frcq10w97_588}",
    "requiresLab": false
  },
  {
    "id": 589,
    "title": "Melacak Wayback Machine (Misi #589)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_5hihh9ayzu_589}.",
    "flag": "CTF{hard_5hihh9ayzu_589}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_5hihh9ayzu_589}"
        }
      }
    }
  },
  {
    "id": 590,
    "title": "Menembus sistem absensi (Misi #590)",
    "category": "Reverse Engineering",
    "difficulty": "Hard",
    "points": 145,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_a01bfs98bg_590}.",
    "flag": "CTF{hard_a01bfs98bg_590}",
    "requiresLab": false
  },
  {
    "id": 591,
    "title": "Eksploitasi Buffer Overflow (Misi #591)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 140,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_nioz92xlwi_591}.",
    "flag": "CTF{hard_nioz92xlwi_591}",
    "requiresLab": false
  },
  {
    "id": 592,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #592)",
    "category": "Binary Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{hard_lp51tts3ch_592}.",
    "flag": "CTF{hard_lp51tts3ch_592}",
    "requiresLab": false
  },
  {
    "id": 593,
    "title": "Melacak Google Dorks (Misi #593)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 105,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_3bhgk49mv4_593}.",
    "flag": "CTF{hard_3bhgk49mv4_593}",
    "requiresLab": false
  },
  {
    "id": 594,
    "title": "Menembus database karyawan (Misi #594)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_rd2vg8cugf_594}.",
    "flag": "CTF{hard_rd2vg8cugf_594}",
    "requiresLab": false
  },
  {
    "id": 595,
    "title": "Eksploitasi Buffer Overflow (Misi #595)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_99xq9s4k77_595}.",
    "flag": "CTF{hard_99xq9s4k77_595}",
    "requiresLab": false
  },
  {
    "id": 596,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #596)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti GDB untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_0mn22b85az_596}.",
    "flag": "CTF{hard_0mn22b85az_596}",
    "requiresLab": false
  },
  {
    "id": 597,
    "title": "Melacak metadata foto liburan (Misi #597)",
    "category": "Web Exploitation",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{hard_51ry8bsnwc_597}.",
    "flag": "CTF{hard_51ry8bsnwc_597}",
    "requiresLab": false
  },
  {
    "id": 598,
    "title": "Menembus server SCADA (Misi #598)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 115,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_09yc1folrw_598}.",
    "flag": "CTF{hard_09yc1folrw_598}",
    "requiresLab": false
  },
  {
    "id": 599,
    "title": "Melacak dokumen PDF perusahaan (Misi #599)",
    "category": "Forensics",
    "difficulty": "Hard",
    "points": 100,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{hard_tf2emjgdru_599}.",
    "flag": "CTF{hard_tf2emjgdru_599}",
    "requiresLab": false
  },
  {
    "id": 600,
    "title": "Menembus database karyawan (Misi #600)",
    "category": "OSINT",
    "difficulty": "Hard",
    "points": 135,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{hard_k1di5nm646_600}.",
    "flag": "CTF{hard_k1di5nm646_600}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{hard_k1di5nm646_600}"
        }
      }
    }
  },
  {
    "id": 601,
    "title": "Investigasi image disk (.dd) (Misi #601)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_ly2jslt6iv_601}.",
    "flag": "CTF{very hard_ly2jslt6iv_601}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_ly2jslt6iv_601}"
        }
      }
    }
  },
  {
    "id": 602,
    "title": "Investigasi image disk (.dd) (Misi #602)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan SQLMap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_6g40gzo2bz_602}.",
    "flag": "CTF{very hard_6g40gzo2bz_602}",
    "requiresLab": false
  },
  {
    "id": 603,
    "title": "Misteri AES-256 (Misi #603)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_dcvbsb2ssn_603}.",
    "flag": "CTF{very hard_dcvbsb2ssn_603}",
    "requiresLab": false
  },
  {
    "id": 604,
    "title": "Investigasi gambar JPEG stegano (Misi #604)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_pymhdjy8px_604}.",
    "flag": "CTF{very hard_pymhdjy8px_604}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_pymhdjy8px_604}"
        }
      }
    }
  },
  {
    "id": 605,
    "title": "Menembus sistem perbankan (Misi #605)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_wnkztzybla_605}.",
    "flag": "CTF{very hard_wnkztzybla_605}",
    "requiresLab": false
  },
  {
    "id": 606,
    "title": "Operasi Nmap (Misi #606)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_wqxluw1r9p_606}.",
    "flag": "CTF{very hard_wqxluw1r9p_606}",
    "requiresLab": false
  },
  {
    "id": 607,
    "title": "Menembus server SCADA (Misi #607)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_sox9tlg9a7_607}.",
    "flag": "CTF{very hard_sox9tlg9a7_607}",
    "requiresLab": false
  },
  {
    "id": 608,
    "title": "Menembus router inti (Misi #608)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_o1y9o7mz30_608}.",
    "flag": "CTF{very hard_o1y9o7mz30_608}",
    "requiresLab": false
  },
  {
    "id": 609,
    "title": "Investigasi file PCAP (Misi #609)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_zgp6mxfrtt_609}.",
    "flag": "CTF{very hard_zgp6mxfrtt_609}",
    "requiresLab": false
  },
  {
    "id": 610,
    "title": "Misteri Base64 (Misi #610)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_fsz9vgrhpb_610}.",
    "flag": "CTF{very hard_fsz9vgrhpb_610}",
    "requiresLab": false
  },
  {
    "id": 611,
    "title": "Menembus sistem absensi (Misi #611)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_z5v3cr7rip_611}.",
    "flag": "CTF{very hard_z5v3cr7rip_611}",
    "requiresLab": false
  },
  {
    "id": 612,
    "title": "Menembus sistem perbankan (Misi #612)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_nx3apb8tso_612}.",
    "flag": "CTF{very hard_nx3apb8tso_612}",
    "requiresLab": false
  },
  {
    "id": 613,
    "title": "Menembus aplikasi mobile (Misi #613)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_diiiuzyso7_613}.",
    "flag": "CTF{very hard_diiiuzyso7_613}",
    "requiresLab": false
  },
  {
    "id": 614,
    "title": "Melacak Google Dorks (Misi #614)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_zt6k2coygk_614}.",
    "flag": "CTF{very hard_zt6k2coygk_614}",
    "requiresLab": false
  },
  {
    "id": 615,
    "title": "Operasi John the Ripper (Misi #615)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_6yhm50b8dn_615}.",
    "flag": "CTF{very hard_6yhm50b8dn_615}",
    "requiresLab": false
  },
  {
    "id": 616,
    "title": "Melacak metadata foto liburan (Misi #616)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_v4f6hlgny1_616}.",
    "flag": "CTF{very hard_v4f6hlgny1_616}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_v4f6hlgny1_616}"
        }
      }
    }
  },
  {
    "id": 617,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #617)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_m7pxzxk6dr_617}.",
    "flag": "CTF{very hard_m7pxzxk6dr_617}",
    "requiresLab": false
  },
  {
    "id": 618,
    "title": "Misteri MD5 Hash (Misi #618)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_hq60fqevxy_618}.",
    "flag": "CTF{very hard_hq60fqevxy_618}",
    "requiresLab": false
  },
  {
    "id": 619,
    "title": "Operasi SQLMap (Misi #619)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_bl1xgppzyj_619}.",
    "flag": "CTF{very hard_bl1xgppzyj_619}",
    "requiresLab": false
  },
  {
    "id": 620,
    "title": "Menembus aplikasi mobile (Misi #620)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_l1amvmstiq_620}.",
    "flag": "CTF{very hard_l1amvmstiq_620}",
    "requiresLab": false
  },
  {
    "id": 621,
    "title": "Investigasi dump memori RAM (Misi #621)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_3lukz06bl3_621}.",
    "flag": "CTF{very hard_3lukz06bl3_621}",
    "requiresLab": false
  },
  {
    "id": 622,
    "title": "Investigasi gambar JPEG stegano (Misi #622)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_h6bft0t0os_622}.",
    "flag": "CTF{very hard_h6bft0t0os_622}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_h6bft0t0os_622}"
        }
      }
    }
  },
  {
    "id": 623,
    "title": "Investigasi file ZIP terenkripsi (Misi #623)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_pk4vnef98t_623}.",
    "flag": "CTF{very hard_pk4vnef98t_623}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_pk4vnef98t_623}"
        }
      }
    }
  },
  {
    "id": 624,
    "title": "Operasi GDB (Misi #624)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_osgkx9lceo_624}.",
    "flag": "CTF{very hard_osgkx9lceo_624}",
    "requiresLab": false
  },
  {
    "id": 625,
    "title": "Menembus server SCADA (Misi #625)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_c6gjne4s1b_625}.",
    "flag": "CTF{very hard_c6gjne4s1b_625}",
    "requiresLab": false
  },
  {
    "id": 626,
    "title": "Operasi Binwalk (Misi #626)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_smqk7pksg9_626}.",
    "flag": "CTF{very hard_smqk7pksg9_626}",
    "requiresLab": false
  },
  {
    "id": 627,
    "title": "Eksploitasi SQL Injection (Misi #627)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_5pa4dega34_627}.",
    "flag": "CTF{very hard_5pa4dega34_627}",
    "requiresLab": false
  },
  {
    "id": 628,
    "title": "Operasi John the Ripper (Misi #628)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_li1ij0q1i9_628}.",
    "flag": "CTF{very hard_li1ij0q1i9_628}",
    "requiresLab": false
  },
  {
    "id": 629,
    "title": "Menembus portal sekolah (Misi #629)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_zb1r866yod_629}.",
    "flag": "CTF{very hard_zb1r866yod_629}",
    "requiresLab": false
  },
  {
    "id": 630,
    "title": "Melacak akun Twitter anonim (Misi #630)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_ufa98d3nbu_630}.",
    "flag": "CTF{very hard_ufa98d3nbu_630}",
    "requiresLab": false
  },
  {
    "id": 631,
    "title": "Misteri Bcrypt (Misi #631)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_penuzwih13_631}.",
    "flag": "CTF{very hard_penuzwih13_631}",
    "requiresLab": false
  },
  {
    "id": 632,
    "title": "Melacak dokumen PDF perusahaan (Misi #632)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_udteh4u43l_632}.",
    "flag": "CTF{very hard_udteh4u43l_632}",
    "requiresLab": false
  },
  {
    "id": 633,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #633)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_o61sgurk1z_633}.",
    "flag": "CTF{very hard_o61sgurk1z_633}",
    "requiresLab": false
  },
  {
    "id": 634,
    "title": "Investigasi file PCAP (Misi #634)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_jvdmz0sxx6_634}.",
    "flag": "CTF{very hard_jvdmz0sxx6_634}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_jvdmz0sxx6_634}"
        }
      }
    }
  },
  {
    "id": 635,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #635)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Use-After-Free.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_pyq9dm7zoi_635}.",
    "flag": "CTF{very hard_pyq9dm7zoi_635}",
    "requiresLab": false
  },
  {
    "id": 636,
    "title": "Menembus sistem absensi (Misi #636)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_ni0uftfzpx_636}.",
    "flag": "CTF{very hard_ni0uftfzpx_636}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_ni0uftfzpx_636}"
        }
      }
    }
  },
  {
    "id": 637,
    "title": "Melacak DNS Dumpster (Misi #637)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_ep8xvca1b4_637}.",
    "flag": "CTF{very hard_ep8xvca1b4_637}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_ep8xvca1b4_637}"
        }
      }
    }
  },
  {
    "id": 638,
    "title": "Misteri Vigenere Cipher (Misi #638)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_5vrp7o5r2p_638}.",
    "flag": "CTF{very hard_5vrp7o5r2p_638}",
    "requiresLab": false
  },
  {
    "id": 639,
    "title": "Investigasi file ZIP terenkripsi (Misi #639)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_49o442cr2w_639}.",
    "flag": "CTF{very hard_49o442cr2w_639}",
    "requiresLab": false
  },
  {
    "id": 640,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #640)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_t46dp1reck_640}.",
    "flag": "CTF{very hard_t46dp1reck_640}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_t46dp1reck_640}"
        }
      }
    }
  },
  {
    "id": 641,
    "title": "Melacak repositori Github yang bocor (Misi #641)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_60rlbcmayj_641}.",
    "flag": "CTF{very hard_60rlbcmayj_641}",
    "requiresLab": false
  },
  {
    "id": 642,
    "title": "Misteri Bcrypt (Misi #642)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Binwalk untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_5mwbi5uavx_642}.",
    "flag": "CTF{very hard_5mwbi5uavx_642}",
    "requiresLab": false
  },
  {
    "id": 643,
    "title": "Investigasi image disk (.dd) (Misi #643)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_g4tx3cpg43_643}.",
    "flag": "CTF{very hard_g4tx3cpg43_643}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_g4tx3cpg43_643}"
        }
      }
    }
  },
  {
    "id": 644,
    "title": "Operasi ExifTool (Misi #644)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_w7eo507dwk_644}.",
    "flag": "CTF{very hard_w7eo507dwk_644}",
    "requiresLab": false
  },
  {
    "id": 645,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #645)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_yxzzx2dcax_645}.",
    "flag": "CTF{very hard_yxzzx2dcax_645}",
    "requiresLab": false
  },
  {
    "id": 646,
    "title": "Menembus sistem absensi (Misi #646)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_xzlo5o6f72_646}.",
    "flag": "CTF{very hard_xzlo5o6f72_646}",
    "requiresLab": false
  },
  {
    "id": 647,
    "title": "Eksploitasi Use-After-Free (Misi #647)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu API Payment Gateway yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_sq2q5yfwne_647}.",
    "flag": "CTF{very hard_sq2q5yfwne_647}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_sq2q5yfwne_647}"
        }
      }
    }
  },
  {
    "id": 648,
    "title": "Misteri Base64 (Misi #648)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_awjpsr4f2g_648}.",
    "flag": "CTF{very hard_awjpsr4f2g_648}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_awjpsr4f2g_648}"
        }
      }
    }
  },
  {
    "id": 649,
    "title": "Misteri AES-256 (Misi #649)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_of3wvtdjph_649}.",
    "flag": "CTF{very hard_of3wvtdjph_649}",
    "requiresLab": false
  },
  {
    "id": 650,
    "title": "Investigasi gambar JPEG stegano (Misi #650)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_ku48c8btv6_650}.",
    "flag": "CTF{very hard_ku48c8btv6_650}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_ku48c8btv6_650}"
        }
      }
    }
  },
  {
    "id": 651,
    "title": "Melacak repositori Github yang bocor (Misi #651)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_zk43d3ck32_651}.",
    "flag": "CTF{very hard_zk43d3ck32_651}",
    "requiresLab": false
  },
  {
    "id": 652,
    "title": "Investigasi file ZIP terenkripsi (Misi #652)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_83aay44b3d_652}.",
    "flag": "CTF{very hard_83aay44b3d_652}",
    "requiresLab": false
  },
  {
    "id": 653,
    "title": "Eksploitasi SQL Injection (Misi #653)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_fpnpha3rmo_653}.",
    "flag": "CTF{very hard_fpnpha3rmo_653}",
    "requiresLab": false
  },
  {
    "id": 654,
    "title": "Misteri MD5 Hash (Misi #654)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Autopsy untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_nl19xhx4w8_654}.",
    "flag": "CTF{very hard_nl19xhx4w8_654}",
    "requiresLab": false
  },
  {
    "id": 655,
    "title": "Eksploitasi Format String Bug (Misi #655)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_3ag9o67awe_655}.",
    "flag": "CTF{very hard_3ag9o67awe_655}",
    "requiresLab": false
  },
  {
    "id": 656,
    "title": "Menembus portal sekolah (Misi #656)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_8y8t4vy2gg_656}.",
    "flag": "CTF{very hard_8y8t4vy2gg_656}",
    "requiresLab": false
  },
  {
    "id": 657,
    "title": "Melacak repositori Github yang bocor (Misi #657)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_0drdk2m677_657}.",
    "flag": "CTF{very hard_0drdk2m677_657}",
    "requiresLab": false
  },
  {
    "id": 658,
    "title": "Melacak Google Dorks (Misi #658)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_fgfluqin7i_658}.",
    "flag": "CTF{very hard_fgfluqin7i_658}",
    "requiresLab": false
  },
  {
    "id": 659,
    "title": "Menembus router inti (Misi #659)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Hashcat untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_9w8bjl5u77_659}.",
    "flag": "CTF{very hard_9w8bjl5u77_659}",
    "requiresLab": false
  },
  {
    "id": 660,
    "title": "Menembus sistem absensi (Misi #660)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_0vdkhtnbvv_660}.",
    "flag": "CTF{very hard_0vdkhtnbvv_660}",
    "requiresLab": false
  },
  {
    "id": 661,
    "title": "Investigasi gambar JPEG stegano (Misi #661)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_i4k5gnxxtf_661}.",
    "flag": "CTF{very hard_i4k5gnxxtf_661}",
    "requiresLab": false
  },
  {
    "id": 662,
    "title": "Investigasi gambar JPEG stegano (Misi #662)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_i9c0fjfdq3_662}.",
    "flag": "CTF{very hard_i9c0fjfdq3_662}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_i9c0fjfdq3_662}"
        }
      }
    }
  },
  {
    "id": 663,
    "title": "Misteri AES-256 (Misi #663)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_u6jeamwtdx_663}.",
    "flag": "CTF{very hard_u6jeamwtdx_663}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_u6jeamwtdx_663}"
        }
      }
    }
  },
  {
    "id": 664,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #664)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Burp Suite untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_mo3tn6boiw_664}.",
    "flag": "CTF{very hard_mo3tn6boiw_664}",
    "requiresLab": false
  },
  {
    "id": 665,
    "title": "Melacak repositori Github yang bocor (Misi #665)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Nmap untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_3revstoldl_665}.",
    "flag": "CTF{very hard_3revstoldl_665}",
    "requiresLab": false
  },
  {
    "id": 666,
    "title": "Operasi Wireshark (Misi #666)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_hpofygtkv9_666}.",
    "flag": "CTF{very hard_hpofygtkv9_666}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_hpofygtkv9_666}"
        }
      }
    }
  },
  {
    "id": 667,
    "title": "Menembus sistem perbankan (Misi #667)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_g0r0l97oe5_667}.",
    "flag": "CTF{very hard_g0r0l97oe5_667}",
    "requiresLab": false
  },
  {
    "id": 668,
    "title": "Melacak metadata foto liburan (Misi #668)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_8pe6fsyjth_668}.",
    "flag": "CTF{very hard_8pe6fsyjth_668}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_8pe6fsyjth_668}"
        }
      }
    }
  },
  {
    "id": 669,
    "title": "Menembus aplikasi mobile (Misi #669)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_wfxsa0bveq_669}.",
    "flag": "CTF{very hard_wfxsa0bveq_669}",
    "requiresLab": false
  },
  {
    "id": 670,
    "title": "Investigasi image disk (.dd) (Misi #670)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu kamera CCTV yang memiliki kerentanan Insecure Direct Object Reference (IDOR).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_coqposnc52_670}.",
    "flag": "CTF{very hard_coqposnc52_670}",
    "requiresLab": false
  },
  {
    "id": 671,
    "title": "Melacak metadata foto liburan (Misi #671)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_7tu6sumg5l_671}.",
    "flag": "CTF{very hard_7tu6sumg5l_671}",
    "requiresLab": false
  },
  {
    "id": 672,
    "title": "Melacak Google Dorks (Misi #672)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_jirx7xo719_672}.",
    "flag": "CTF{very hard_jirx7xo719_672}",
    "requiresLab": false
  },
  {
    "id": 673,
    "title": "Menembus portal sekolah (Misi #673)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_n9vupx7816_673}.",
    "flag": "CTF{very hard_n9vupx7816_673}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_n9vupx7816_673}"
        }
      }
    }
  },
  {
    "id": 674,
    "title": "Menembus database karyawan (Misi #674)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_k7rs41kxnd_674}.",
    "flag": "CTF{very hard_k7rs41kxnd_674}",
    "requiresLab": false
  },
  {
    "id": 675,
    "title": "Misteri RSA (Misi #675)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_s8hwoaeij7_675}.",
    "flag": "CTF{very hard_s8hwoaeij7_675}",
    "requiresLab": false
  },
  {
    "id": 676,
    "title": "Investigasi file ZIP terenkripsi (Misi #676)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_75gghadsk2_676}.",
    "flag": "CTF{very hard_75gghadsk2_676}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_75gghadsk2_676}"
        }
      }
    }
  },
  {
    "id": 677,
    "title": "Eksploitasi Format String Bug (Misi #677)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_u041hhh8d6_677}.",
    "flag": "CTF{very hard_u041hhh8d6_677}",
    "requiresLab": false
  },
  {
    "id": 678,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #678)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_qt9wlodi5z_678}.",
    "flag": "CTF{very hard_qt9wlodi5z_678}",
    "requiresLab": false
  },
  {
    "id": 679,
    "title": "Operasi Autopsy (Misi #679)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_76k890cxcc_679}.",
    "flag": "CTF{very hard_76k890cxcc_679}",
    "requiresLab": false
  },
  {
    "id": 680,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #680)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_265yotg7ku_680}.",
    "flag": "CTF{very hard_265yotg7ku_680}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_265yotg7ku_680}"
        }
      }
    }
  },
  {
    "id": 681,
    "title": "Operasi Ghidra (Misi #681)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_iqat2eragm_681}.",
    "flag": "CTF{very hard_iqat2eragm_681}",
    "requiresLab": false
  },
  {
    "id": 682,
    "title": "Melacak Google Dorks (Misi #682)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server e-commerce yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_revuw2rwad_682}.",
    "flag": "CTF{very hard_revuw2rwad_682}",
    "requiresLab": false
  },
  {
    "id": 683,
    "title": "Menembus sistem perbankan (Misi #683)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_99bsii9v7x_683}.",
    "flag": "CTF{very hard_99bsii9v7x_683}",
    "requiresLab": false
  },
  {
    "id": 684,
    "title": "Eksploitasi SQL Injection (Misi #684)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Metasploit untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_37mkg9c4q0_684}.",
    "flag": "CTF{very hard_37mkg9c4q0_684}",
    "requiresLab": false
  },
  {
    "id": 685,
    "title": "Menembus server SCADA (Misi #685)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_m35h4d3dx1_685}.",
    "flag": "CTF{very hard_m35h4d3dx1_685}",
    "requiresLab": false
  },
  {
    "id": 686,
    "title": "Eksploitasi Buffer Overflow (Misi #686)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_uccp5pl211_686}.",
    "flag": "CTF{very hard_uccp5pl211_686}",
    "requiresLab": false
  },
  {
    "id": 687,
    "title": "Misteri Bcrypt (Misi #687)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_x9hy19lbni_687}.",
    "flag": "CTF{very hard_x9hy19lbni_687}",
    "requiresLab": false
  },
  {
    "id": 688,
    "title": "Menembus server e-commerce (Misi #688)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Binwalk untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_4k9243zxan_688}.",
    "flag": "CTF{very hard_4k9243zxan_688}",
    "requiresLab": false
  },
  {
    "id": 689,
    "title": "Misteri Elliptic Curve (Misi #689)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_4u6jio134a_689}.",
    "flag": "CTF{very hard_4u6jio134a_689}",
    "requiresLab": false
  },
  {
    "id": 690,
    "title": "Misteri RSA (Misi #690)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_6amj193q01_690}.",
    "flag": "CTF{very hard_6amj193q01_690}",
    "requiresLab": false
  },
  {
    "id": 691,
    "title": "Misteri XOR Encryption (Misi #691)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_2y37n0jzg7_691}.",
    "flag": "CTF{very hard_2y37n0jzg7_691}",
    "requiresLab": false
  },
  {
    "id": 692,
    "title": "Menembus aplikasi mobile (Misi #692)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_g8lh0tdvpa_692}.",
    "flag": "CTF{very hard_g8lh0tdvpa_692}",
    "requiresLab": false
  },
  {
    "id": 693,
    "title": "Menembus server e-commerce (Misi #693)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Format String Bug.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_2vo9rfji8k_693}.",
    "flag": "CTF{very hard_2vo9rfji8k_693}",
    "requiresLab": false
  },
  {
    "id": 694,
    "title": "Eksploitasi Buffer Overflow (Misi #694)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_s392ojerzo_694}.",
    "flag": "CTF{very hard_s392ojerzo_694}",
    "requiresLab": false
  },
  {
    "id": 695,
    "title": "Investigasi file ZIP terenkripsi (Misi #695)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_wb8vp36grp_695}.",
    "flag": "CTF{very hard_wb8vp36grp_695}",
    "requiresLab": false
  },
  {
    "id": 696,
    "title": "Menembus API Payment Gateway (Misi #696)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_6sp0p1q80g_696}.",
    "flag": "CTF{very hard_6sp0p1q80g_696}",
    "requiresLab": false
  },
  {
    "id": 697,
    "title": "Investigasi file ZIP terenkripsi (Misi #697)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_xapels7x2h_697}.",
    "flag": "CTF{very hard_xapels7x2h_697}",
    "requiresLab": false
  },
  {
    "id": 698,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #698)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan SQLMap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_mmktu78wvc_698}.",
    "flag": "CTF{very hard_mmktu78wvc_698}",
    "requiresLab": false
  },
  {
    "id": 699,
    "title": "Melacak akun Twitter anonim (Misi #699)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_fgym86xsdr_699}.",
    "flag": "CTF{very hard_fgym86xsdr_699}",
    "requiresLab": false
  },
  {
    "id": 700,
    "title": "Investigasi gambar JPEG stegano (Misi #700)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_cbaimha97g_700}.",
    "flag": "CTF{very hard_cbaimha97g_700}",
    "requiresLab": false
  },
  {
    "id": 701,
    "title": "Investigasi image disk (.dd) (Misi #701)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai metadata foto liburan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Metasploit untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_yv4qyqji59_701}.",
    "flag": "CTF{very hard_yv4qyqji59_701}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_yv4qyqji59_701}"
        }
      }
    }
  },
  {
    "id": 702,
    "title": "Menembus kamera CCTV (Misi #702)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan John the Ripper untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_0mzy3hndw7_702}.",
    "flag": "CTF{very hard_0mzy3hndw7_702}",
    "requiresLab": false
  },
  {
    "id": 703,
    "title": "Investigasi file ZIP terenkripsi (Misi #703)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_6ft6vw1aep_703}.",
    "flag": "CTF{very hard_6ft6vw1aep_703}",
    "requiresLab": false
  },
  {
    "id": 704,
    "title": "Misteri Bcrypt (Misi #704)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_4ewediyml2_704}.",
    "flag": "CTF{very hard_4ewediyml2_704}",
    "requiresLab": false
  },
  {
    "id": 705,
    "title": "Menembus portal sekolah (Misi #705)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Vigenere Cipher.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Binwalk untuk melakukan bruteforce atau proses dekripsi algoritma Vigenere Cipher.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_6hxqetzqoe_705}.",
    "flag": "CTF{very hard_6hxqetzqoe_705}",
    "requiresLab": false
  },
  {
    "id": 706,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #706)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_ckztgtzs07_706}.",
    "flag": "CTF{very hard_ckztgtzs07_706}",
    "requiresLab": false
  },
  {
    "id": 707,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #707)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_bfn7zs2dkf_707}.",
    "flag": "CTF{very hard_bfn7zs2dkf_707}",
    "requiresLab": false
  },
  {
    "id": 708,
    "title": "Operasi SQLMap (Misi #708)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_d13342nvpt_708}.",
    "flag": "CTF{very hard_d13342nvpt_708}",
    "requiresLab": false
  },
  {
    "id": 709,
    "title": "Eksploitasi Format String Bug (Misi #709)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_hyrovuve78_709}.",
    "flag": "CTF{very hard_hyrovuve78_709}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_hyrovuve78_709}"
        }
      }
    }
  },
  {
    "id": 710,
    "title": "Menembus kamera CCTV (Misi #710)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem absensi yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Hashcat untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_a0bmf2vz5h_710}.",
    "flag": "CTF{very hard_a0bmf2vz5h_710}",
    "requiresLab": false
  },
  {
    "id": 711,
    "title": "Menembus portal sekolah (Misi #711)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_1nb7wwgd34_711}.",
    "flag": "CTF{very hard_1nb7wwgd34_711}",
    "requiresLab": false
  },
  {
    "id": 712,
    "title": "Misteri Elliptic Curve (Misi #712)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_vxhxwklimd_712}.",
    "flag": "CTF{very hard_vxhxwklimd_712}",
    "requiresLab": false
  },
  {
    "id": 713,
    "title": "Misteri Base64 (Misi #713)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_8ggmqtm4j5_713}.",
    "flag": "CTF{very hard_8ggmqtm4j5_713}",
    "requiresLab": false
  },
  {
    "id": 714,
    "title": "Investigasi dump memori RAM (Misi #714)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_2qsqvm7d5a_714}.",
    "flag": "CTF{very hard_2qsqvm7d5a_714}",
    "requiresLab": false
  },
  {
    "id": 715,
    "title": "Melacak dokumen PDF perusahaan (Misi #715)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_9tgg8i28c8_715}.",
    "flag": "CTF{very hard_9tgg8i28c8_715}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_9tgg8i28c8_715}"
        }
      }
    }
  },
  {
    "id": 716,
    "title": "Investigasi image disk (.dd) (Misi #716)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa gambar JPEG stegano.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_3ix27nw025_716}.",
    "flag": "CTF{very hard_3ix27nw025_716}",
    "requiresLab": false
  },
  {
    "id": 717,
    "title": "Melacak Google Dorks (Misi #717)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_v4lt9cmil0_717}.",
    "flag": "CTF{very hard_v4lt9cmil0_717}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_v4lt9cmil0_717}"
        }
      }
    }
  },
  {
    "id": 718,
    "title": "Misteri Base64 (Misi #718)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_tao7i0srke_718}.",
    "flag": "CTF{very hard_tao7i0srke_718}",
    "requiresLab": false
  },
  {
    "id": 719,
    "title": "Operasi Autopsy (Misi #719)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_wx3r1bl0wy_719}.",
    "flag": "CTF{very hard_wx3r1bl0wy_719}",
    "requiresLab": false
  },
  {
    "id": 720,
    "title": "Eksploitasi Format String Bug (Misi #720)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Nmap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_bv10btl5xn_720}.",
    "flag": "CTF{very hard_bv10btl5xn_720}",
    "requiresLab": false
  },
  {
    "id": 721,
    "title": "Menembus server SCADA (Misi #721)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi ujian CBT yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Autopsy untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_8igsuclusp_721}.",
    "flag": "CTF{very hard_8igsuclusp_721}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_8igsuclusp_721}"
        }
      }
    }
  },
  {
    "id": 722,
    "title": "Eksploitasi SQL Injection (Misi #722)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_dbg8lxppgy_722}.",
    "flag": "CTF{very hard_dbg8lxppgy_722}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_dbg8lxppgy_722}"
        }
      }
    }
  },
  {
    "id": 723,
    "title": "Eksploitasi Server-Side Request Forgery (SSRF) (Misi #723)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_tzjfdgy6x6_723}.",
    "flag": "CTF{very hard_tzjfdgy6x6_723}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_tzjfdgy6x6_723}"
        }
      }
    }
  },
  {
    "id": 724,
    "title": "Melacak DNS Dumpster (Misi #724)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_s02kmb5e6d_724}.",
    "flag": "CTF{very hard_s02kmb5e6d_724}",
    "requiresLab": false
  },
  {
    "id": 725,
    "title": "Melacak Google Dorks (Misi #725)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_iz85llbhl1_725}.",
    "flag": "CTF{very hard_iz85llbhl1_725}",
    "requiresLab": false
  },
  {
    "id": 726,
    "title": "Operasi Hashcat (Misi #726)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_joz9ppdrc5_726}.",
    "flag": "CTF{very hard_joz9ppdrc5_726}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_joz9ppdrc5_726}"
        }
      }
    }
  },
  {
    "id": 727,
    "title": "Investigasi gambar JPEG stegano (Misi #727)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_mclrp7ujd1_727}.",
    "flag": "CTF{very hard_mclrp7ujd1_727}",
    "requiresLab": false
  },
  {
    "id": 728,
    "title": "Melacak Google Dorks (Misi #728)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_8eo6vad6fa_728}.",
    "flag": "CTF{very hard_8eo6vad6fa_728}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_8eo6vad6fa_728}"
        }
      }
    }
  },
  {
    "id": 729,
    "title": "Menembus database karyawan (Misi #729)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_3kw7qvltl9_729}.",
    "flag": "CTF{very hard_3kw7qvltl9_729}",
    "requiresLab": false
  },
  {
    "id": 730,
    "title": "Operasi Binwalk (Misi #730)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_ilg5opd541_730}.",
    "flag": "CTF{very hard_ilg5opd541_730}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_ilg5opd541_730}"
        }
      }
    }
  },
  {
    "id": 731,
    "title": "Misteri RSA (Misi #731)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_fxa6shm4du_731}.",
    "flag": "CTF{very hard_fxa6shm4du_731}",
    "requiresLab": false
  },
  {
    "id": 732,
    "title": "Misteri Elliptic Curve (Misi #732)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_eatal0ml88_732}.",
    "flag": "CTF{very hard_eatal0ml88_732}",
    "requiresLab": false
  },
  {
    "id": 733,
    "title": "Melacak DNS Dumpster (Misi #733)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_ob6gu15rfb_733}.",
    "flag": "CTF{very hard_ob6gu15rfb_733}",
    "requiresLab": false
  },
  {
    "id": 734,
    "title": "Menembus router inti (Misi #734)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_xwuuhwu0vp_734}.",
    "flag": "CTF{very hard_xwuuhwu0vp_734}",
    "requiresLab": false
  },
  {
    "id": 735,
    "title": "Melacak DNS Dumpster (Misi #735)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Nmap untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_nrb28uyqnp_735}.",
    "flag": "CTF{very hard_nrb28uyqnp_735}",
    "requiresLab": false
  },
  {
    "id": 736,
    "title": "Eksploitasi Buffer Overflow (Misi #736)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu aplikasi mobile yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Wireshark untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_a9c38ht4gf_736}.",
    "flag": "CTF{very hard_a9c38ht4gf_736}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_a9c38ht4gf_736}"
        }
      }
    }
  },
  {
    "id": 737,
    "title": "Melacak dokumen PDF perusahaan (Misi #737)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_menea1s0av_737}.",
    "flag": "CTF{very hard_menea1s0av_737}",
    "requiresLab": false
  },
  {
    "id": 738,
    "title": "Misteri Bcrypt (Misi #738)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu server SCADA yang memiliki kerentanan Server-Side Request Forgery (SSRF).\nLangkah 2: Gunakan John the Ripper untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_uk5y3086v5_738}.",
    "flag": "CTF{very hard_uk5y3086v5_738}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_uk5y3086v5_738}"
        }
      }
    }
  },
  {
    "id": 739,
    "title": "Misteri RSA (Misi #739)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan RSA.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Autopsy untuk melakukan bruteforce atau proses dekripsi algoritma RSA.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_kzcezdf34f_739}.",
    "flag": "CTF{very hard_kzcezdf34f_739}",
    "requiresLab": false
  },
  {
    "id": 740,
    "title": "Melacak akun Twitter anonim (Misi #740)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Ghidra.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_mo4ao538qv_740}.",
    "flag": "CTF{very hard_mo4ao538qv_740}",
    "requiresLab": false
  },
  {
    "id": 741,
    "title": "Investigasi file ZIP terenkripsi (Misi #741)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti ExifTool untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_jjf9ijc551_741}.",
    "flag": "CTF{very hard_jjf9ijc551_741}",
    "requiresLab": false
  },
  {
    "id": 742,
    "title": "Investigasi file PCAP (Misi #742)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Nmap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_lbwl5k6ynq_742}.",
    "flag": "CTF{very hard_lbwl5k6ynq_742}",
    "requiresLab": false
  },
  {
    "id": 743,
    "title": "Menembus server e-commerce (Misi #743)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_e2g1k03r44_743}.",
    "flag": "CTF{very hard_e2g1k03r44_743}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_e2g1k03r44_743}"
        }
      }
    }
  },
  {
    "id": 744,
    "title": "Melacak Wayback Machine (Misi #744)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_79l0hbbgqn_744}.",
    "flag": "CTF{very hard_79l0hbbgqn_744}",
    "requiresLab": false
  },
  {
    "id": 745,
    "title": "Operasi Burp Suite (Misi #745)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Metasploit untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_hi3cwck0p1_745}.",
    "flag": "CTF{very hard_hi3cwck0p1_745}",
    "requiresLab": false
  },
  {
    "id": 746,
    "title": "Melacak Google Dorks (Misi #746)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_97bqm2854q_746}.",
    "flag": "CTF{very hard_97bqm2854q_746}",
    "requiresLab": false
  },
  {
    "id": 747,
    "title": "Misteri Base64 (Misi #747)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan Burp Suite untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_f6o6kboue5_747}.",
    "flag": "CTF{very hard_f6o6kboue5_747}",
    "requiresLab": false
  },
  {
    "id": 748,
    "title": "Menembus aplikasi mobile (Misi #748)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_n8m6v0im52_748}.",
    "flag": "CTF{very hard_n8m6v0im52_748}",
    "requiresLab": false
  },
  {
    "id": 749,
    "title": "Operasi SQLMap (Misi #749)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Google Dorks.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_iwnlr4kra6_749}.",
    "flag": "CTF{very hard_iwnlr4kra6_749}",
    "requiresLab": false
  },
  {
    "id": 750,
    "title": "Melacak dokumen PDF perusahaan (Misi #750)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_ddq5v6pvuy_750}.",
    "flag": "CTF{very hard_ddq5v6pvuy_750}",
    "requiresLab": false
  },
  {
    "id": 751,
    "title": "Operasi Autopsy (Misi #751)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_31jzf0qiqn_751}.",
    "flag": "CTF{very hard_31jzf0qiqn_751}",
    "requiresLab": false
  },
  {
    "id": 752,
    "title": "Operasi Metasploit (Misi #752)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu database karyawan yang memiliki kerentanan SQL Injection.\nLangkah 2: Gunakan Metasploit untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_7ejjf35eaz_752}.",
    "flag": "CTF{very hard_7ejjf35eaz_752}",
    "requiresLab": false
  },
  {
    "id": 753,
    "title": "Melacak akun Twitter anonim (Misi #753)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Hashcat.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_zqerk7ea0m_753}.",
    "flag": "CTF{very hard_zqerk7ea0m_753}",
    "requiresLab": false
  },
  {
    "id": 754,
    "title": "Eksploitasi SQL Injection (Misi #754)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_a6vmzpmm0e_754}.",
    "flag": "CTF{very hard_a6vmzpmm0e_754}",
    "requiresLab": false
  },
  {
    "id": 755,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #755)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu sistem perbankan yang memiliki kerentanan Cross-Site Scripting (XSS).\nLangkah 2: Gunakan Ghidra untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_zojvgpx47g_755}.",
    "flag": "CTF{very hard_zojvgpx47g_755}",
    "requiresLab": false
  },
  {
    "id": 756,
    "title": "Eksploitasi SQL Injection (Misi #756)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_0o1mjzcp3w_756}.",
    "flag": "CTF{very hard_0o1mjzcp3w_756}",
    "requiresLab": false
  },
  {
    "id": 757,
    "title": "Melacak repositori Github yang bocor (Misi #757)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan XOR Encryption.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma XOR Encryption.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_m9v3gr36tf_757}.",
    "flag": "CTF{very hard_m9v3gr36tf_757}",
    "requiresLab": false
  },
  {
    "id": 758,
    "title": "Eksploitasi SQL Injection (Misi #758)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Elliptic Curve.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Nmap untuk melakukan bruteforce atau proses dekripsi algoritma Elliptic Curve.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_kh5cn0j7uk_758}.",
    "flag": "CTF{very hard_kh5cn0j7uk_758}",
    "requiresLab": false
  },
  {
    "id": 759,
    "title": "Operasi Metasploit (Misi #759)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Autopsy untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_y5l2jta4_759}.",
    "flag": "CTF{very hard_y5l2jta4_759}",
    "requiresLab": false
  },
  {
    "id": 760,
    "title": "Menembus portal sekolah (Misi #760)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_zfnronqp78_760}.",
    "flag": "CTF{very hard_zfnronqp78_760}",
    "requiresLab": false
  },
  {
    "id": 761,
    "title": "Menembus router inti (Misi #761)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu router inti yang memiliki kerentanan Buffer Overflow.\nLangkah 2: Gunakan GDB untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_1sxmqibxaf_761}.",
    "flag": "CTF{very hard_1sxmqibxaf_761}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_1sxmqibxaf_761}"
        }
      }
    }
  },
  {
    "id": 762,
    "title": "Melacak DNS Dumpster (Misi #762)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_t0xyj8pqov_762}.",
    "flag": "CTF{very hard_t0xyj8pqov_762}",
    "requiresLab": false
  },
  {
    "id": 763,
    "title": "Investigasi file ZIP terenkripsi (Misi #763)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_mhz7u8h9fq_763}.",
    "flag": "CTF{very hard_mhz7u8h9fq_763}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_mhz7u8h9fq_763}"
        }
      }
    }
  },
  {
    "id": 764,
    "title": "Menembus API Payment Gateway (Misi #764)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti SQLMap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_ozr1261fas_764}.",
    "flag": "CTF{very hard_ozr1261fas_764}",
    "requiresLab": false
  },
  {
    "id": 765,
    "title": "Melacak Google Dorks (Misi #765)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_vw314i2lx9_765}.",
    "flag": "CTF{very hard_vw314i2lx9_765}",
    "requiresLab": false
  },
  {
    "id": 766,
    "title": "Menembus kamera CCTV (Misi #766)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan ExifTool.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_mgh4jgggo0_766}.",
    "flag": "CTF{very hard_mgh4jgggo0_766}",
    "requiresLab": false
  },
  {
    "id": 767,
    "title": "Menembus aplikasi mobile (Misi #767)",
    "category": "Web Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Web Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Web Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Identifikasi target yaitu portal sekolah yang memiliki kerentanan Local File Inclusion (LFI).\nLangkah 2: Gunakan Burp Suite untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\nLangkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\nLangkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: CTF{very hard_jppszwi5bv_767}.",
    "flag": "CTF{very hard_jppszwi5bv_767}",
    "requiresLab": false
  },
  {
    "id": 768,
    "title": "Operasi Binwalk (Misi #768)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa dump memori RAM.\nLangkah 2: Lakukan analisis mendalam menggunakan ExifTool untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_pw6hwjro3n_768}.",
    "flag": "CTF{very hard_pw6hwjro3n_768}",
    "requiresLab": false
  },
  {
    "id": 769,
    "title": "Melacak dokumen PDF perusahaan (Misi #769)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan GDB untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_lb5kcguz57_769}.",
    "flag": "CTF{very hard_lb5kcguz57_769}",
    "requiresLab": false
  },
  {
    "id": 770,
    "title": "Misteri Base64 (Misi #770)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Hashcat untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_ykqk290c49_770}.",
    "flag": "CTF{very hard_ykqk290c49_770}",
    "requiresLab": false
  },
  {
    "id": 771,
    "title": "Melacak Wayback Machine (Misi #771)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan MD5 Hash.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Ghidra untuk melakukan bruteforce atau proses dekripsi algoritma MD5 Hash.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_gv27zbgooi_771}.",
    "flag": "CTF{very hard_gv27zbgooi_771}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_gv27zbgooi_771}"
        }
      }
    }
  },
  {
    "id": 772,
    "title": "Operasi ExifTool (Misi #772)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_z9duk8ize2_772}.",
    "flag": "CTF{very hard_z9duk8ize2_772}",
    "requiresLab": false
  },
  {
    "id": 773,
    "title": "Operasi GDB (Misi #773)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan Wireshark.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_25cqo19hrt_773}.",
    "flag": "CTF{very hard_25cqo19hrt_773}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_25cqo19hrt_773}"
        }
      }
    }
  },
  {
    "id": 774,
    "title": "Menembus portal sekolah (Misi #774)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai akun Twitter anonim.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Wireshark untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_ll90g1hrqc_774}.",
    "flag": "CTF{very hard_ll90g1hrqc_774}",
    "requiresLab": false
  },
  {
    "id": 775,
    "title": "Eksploitasi Insecure Direct Object Reference (IDOR) (Misi #775)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_wmkq1o0gmc_775}.",
    "flag": "CTF{very hard_wmkq1o0gmc_775}",
    "requiresLab": false
  },
  {
    "id": 776,
    "title": "Investigasi image disk (.dd) (Misi #776)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan John the Ripper.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_rsifigehla_776}.",
    "flag": "CTF{very hard_rsifigehla_776}",
    "requiresLab": false
  },
  {
    "id": 777,
    "title": "Eksploitasi Remote Code Execution (RCE) (Misi #777)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 310,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_l59kc06gei_777}.",
    "flag": "CTF{very hard_l59kc06gei_777}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_l59kc06gei_777}"
        }
      }
    }
  },
  {
    "id": 778,
    "title": "Misteri Bcrypt (Misi #778)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Nmap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_d1nzhpij23_778}.",
    "flag": "CTF{very hard_d1nzhpij23_778}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_d1nzhpij23_778}"
        }
      }
    }
  },
  {
    "id": 779,
    "title": "Melacak akun Twitter anonim (Misi #779)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 335,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_h9t0cqhbky_779}.",
    "flag": "CTF{very hard_h9t0cqhbky_779}",
    "requiresLab": false
  },
  {
    "id": 780,
    "title": "Melacak Wayback Machine (Misi #780)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Bcrypt.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Wireshark untuk melakukan bruteforce atau proses dekripsi algoritma Bcrypt.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_8fkc0jkx4h_780}.",
    "flag": "CTF{very hard_8fkc0jkx4h_780}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_8fkc0jkx4h_780}"
        }
      }
    }
  },
  {
    "id": 781,
    "title": "Misteri Vigenere Cipher (Misi #781)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 315,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_z60iiu3qr3_781}.",
    "flag": "CTF{very hard_z60iiu3qr3_781}",
    "requiresLab": false
  },
  {
    "id": 782,
    "title": "Melacak repositori Github yang bocor (Misi #782)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa image disk (.dd).\nLangkah 2: Lakukan analisis mendalam menggunakan Hashcat untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_aljj0imztx_782}.",
    "flag": "CTF{very hard_aljj0imztx_782}",
    "requiresLab": false
  },
  {
    "id": 783,
    "title": "Investigasi dump memori RAM (Misi #783)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai repositori Github yang bocor.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_iv16wflgg9_783}.",
    "flag": "CTF{very hard_iv16wflgg9_783}",
    "requiresLab": false
  },
  {
    "id": 784,
    "title": "Investigasi dump memori RAM (Misi #784)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan SQLMap.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_0cvvf3uwyh_784}.",
    "flag": "CTF{very hard_0cvvf3uwyh_784}",
    "requiresLab": false
  },
  {
    "id": 785,
    "title": "Investigasi image disk (.dd) (Misi #785)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ExifTool untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_rq3sp3cc43_785}.",
    "flag": "CTF{very hard_rq3sp3cc43_785}",
    "requiresLab": false
  },
  {
    "id": 786,
    "title": "Misteri RSA (Misi #786)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai DNS Dumpster.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti John the Ripper untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_mee9cfk9qc_786}.",
    "flag": "CTF{very hard_mee9cfk9qc_786}",
    "requiresLab": false
  },
  {
    "id": 787,
    "title": "Eksploitasi Use-After-Free (Misi #787)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_qfbedzsth8_787}.",
    "flag": "CTF{very hard_qfbedzsth8_787}",
    "requiresLab": false
  },
  {
    "id": 788,
    "title": "Operasi John the Ripper (Misi #788)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 340,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan Base64.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti GDB untuk melakukan bruteforce atau proses dekripsi algoritma Base64.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_5gzcvb3yhf_788}.",
    "flag": "CTF{very hard_5gzcvb3yhf_788}",
    "requiresLab": false
  },
  {
    "id": 789,
    "title": "Misteri AES-256 (Misi #789)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Nmap untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_hh2d16lg7f_789}.",
    "flag": "CTF{very hard_hh2d16lg7f_789}",
    "requiresLab": false
  },
  {
    "id": 790,
    "title": "Eksploitasi SQL Injection (Misi #790)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 300,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file .exe Windows menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_pqit142v2g_790}.",
    "flag": "CTF{very hard_pqit142v2g_790}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_pqit142v2g_790}"
        }
      }
    }
  },
  {
    "id": 791,
    "title": "Investigasi gambar JPEG stegano (Misi #791)",
    "category": "Cryptography",
    "difficulty": "Very Hard",
    "points": 330,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Cryptography**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Cryptography. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan AES-256.\nLangkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\nLangkah 3: Gunakan script Python atau tools seperti Burp Suite untuk melakukan bruteforce atau proses dekripsi algoritma AES-256.\nLangkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: CTF{very hard_3yr580y5yq_791}.",
    "flag": "CTF{very hard_3yr580y5yq_791}",
    "requiresLab": false
  },
  {
    "id": 792,
    "title": "Misteri Elliptic Curve (Misi #792)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Autopsy.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Buffer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_8fz16r3yli_792}.",
    "flag": "CTF{very hard_8fz16r3yli_792}",
    "requiresLab": false
  },
  {
    "id": 793,
    "title": "Menembus server SCADA (Misi #793)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada aplikasi Android (.apk) menggunakan Metasploit.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Format String Bug pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_4eh5pm74b3_793}.",
    "flag": "CTF{very hard_4eh5pm74b3_793}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_4eh5pm74b3_793}"
        }
      }
    }
  },
  {
    "id": 794,
    "title": "Operasi Metasploit (Misi #794)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 345,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Ghidra untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_yiz16w4l5r_794}.",
    "flag": "CTF{very hard_yiz16w4l5r_794}",
    "requiresLab": false
  },
  {
    "id": 795,
    "title": "Investigasi file PCAP (Misi #795)",
    "category": "Forensics",
    "difficulty": "Very Hard",
    "points": 320,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Forensics**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Forensics. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Unduh barang bukti digital berupa file PCAP.\nLangkah 2: Lakukan analisis mendalam menggunakan Wireshark untuk mengekstrak data tersembunyi.\nLangkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\nLangkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: CTF{very hard_9nplbta16q_795}.",
    "flag": "CTF{very hard_9nplbta16q_795}",
    "requiresLab": false
  },
  {
    "id": 796,
    "title": "Eksploitasi Cross-Site Scripting (XSS) (Misi #796)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 325,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan GDB.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Heap Spray pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_bumxqfr7fs_796}.",
    "flag": "CTF{very hard_bumxqfr7fs_796}",
    "requiresLab": false
  },
  {
    "id": 797,
    "title": "Misteri XOR Encryption (Misi #797)",
    "category": "Binary Exploitation",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Binary Exploitation**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Binary Exploitation. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada modul kernel menggunakan Binwalk.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_q163vkq18o_797}.",
    "flag": "CTF{very hard_q163vkq18o_797}",
    "requiresLab": false
  },
  {
    "id": 798,
    "title": "Misteri Base64 (Misi #798)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya! [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai dokumen PDF perusahaan.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_wfdrkmi54n_798}.",
    "flag": "CTF{very hard_wfdrkmi54n_798}",
    "requiresLab": true,
    "labEnvironment": {
      "user": "hacker",
      "hostname": "target-sys",
      "fileSystem": {
        "root": {
          "secret_flag.txt": "CTF{very hard_wfdrkmi54n_798}"
        }
      }
    }
  },
  {
    "id": 799,
    "title": "Melacak repositori Github yang bocor (Misi #799)",
    "category": "Reverse Engineering",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **Reverse Engineering**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk Reverse Engineering. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Lakukan disassembler atau dekompilasi pada file ELF Linux menggunakan Burp Suite.\nLangkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan Integer Overflow pada fungsi input data.\nLangkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\nLangkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: CTF{very hard_j0qyqjptpz_799}.",
    "flag": "CTF{very hard_j0qyqjptpz_799}",
    "requiresLab": false
  },
  {
    "id": 800,
    "title": "Melacak Wayback Machine (Misi #800)",
    "category": "OSINT",
    "difficulty": "Very Hard",
    "points": 305,
    "description": "Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **OSINT**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!",
    "hint": "Gunakan metode standar untuk OSINT. Coba ingat kembali fungsi dari alat peretasan yang tepat.",
    "solution": "Langkah 1: Diberikan sebuah petunjuk awal mengenai Wayback Machine.\nLangkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti Ghidra untuk melacak jejak digital.\nLangkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\nLangkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: CTF{very hard_0fzwc8ir7v_800}.",
    "flag": "CTF{very hard_0fzwc8ir7v_800}",
    "requiresLab": false
  }
];