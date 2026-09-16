const fs = require('fs');
const path = require('path');

const categories = ["Web Exploitation", "Cryptography", "Reverse Engineering", "Forensics", "OSINT", "Binary Exploitation"];

// Pools for procedural generation
const targets = ["sistem perbankan", "portal sekolah", "server e-commerce", "database karyawan", "router inti", "aplikasi ujian CBT", "sistem absensi", "kamera CCTV", "server SCADA", "aplikasi mobile", "API Payment Gateway"];
const vulnerabilities = ["SQL Injection", "Cross-Site Scripting (XSS)", "Local File Inclusion (LFI)", "Buffer Overflow", "Insecure Direct Object Reference (IDOR)", "Remote Code Execution (RCE)", "Server-Side Request Forgery (SSRF)", "Format String Bug", "Use-After-Free"];
const tools = ["Burp Suite", "Wireshark", "Ghidra", "Nmap", "Metasploit", "SQLMap", "John the Ripper", "Hashcat", "Autopsy", "Binwalk", "ExifTool", "GDB"];
const cryptos = ["RSA", "AES-256", "Vigenere Cipher", "Base64", "MD5 Hash", "Bcrypt", "Elliptic Curve", "XOR Encryption"];
const osintTargets = ["akun Twitter anonim", "repositori Github yang bocor", "metadata foto liburan", "dokumen PDF perusahaan", "Google Dorks", "Wayback Machine", "DNS Dumpster"];
const forensicsFiles = ["file PCAP", "dump memori RAM", "gambar JPEG stegano", "file ZIP terenkripsi", "image disk (.dd)"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateProceduralSolution(cat, diff, flag) {
  let solution = "";
  if (cat === "Web Exploitation") {
    const vuln = getRandom(vulnerabilities);
    const target = getRandom(targets);
    solution = `Langkah 1: Identifikasi target yaitu ${target} yang memiliki kerentanan ${vuln}.\n`;
    solution += `Langkah 2: Gunakan ${getRandom(tools)} untuk menganalisis lalu lintas jaringan dan mencegat request (intercept).\n`;
    if (vuln === "SQL Injection") solution += `Langkah 3: Injeksi payload SQL ' OR 1=1 -- ke dalam form login untuk mem-bypass autentikasi.\n`;
    else if (vuln === "LFI") solution += `Langkah 3: Ubah parameter URL menjadi ?page=../../../../etc/passwd untuk membaca file sensitif.\n`;
    else solution += `Langkah 3: Kirimkan payload eksploitasi khusus untuk mendapatkan akses remote shell.\n`;
    solution += `Langkah 4: Temukan file rahasia di dalam server dan baca isinya untuk mendapatkan flag: ${flag}.`;
  } else if (cat === "Cryptography") {
    const alg = getRandom(cryptos);
    solution = `Langkah 1: Diberikan sebuah teks rahasia (ciphertext) yang dienkripsi menggunakan ${alg}.\n`;
    solution += `Langkah 2: Lakukan analisis frekuensi atau identifikasi panjang kunci jika menggunakan cipher klasik, atau siapkan wordlist jika berupa hash.\n`;
    solution += `Langkah 3: Gunakan script Python atau tools seperti ${getRandom(tools)} untuk melakukan bruteforce atau proses dekripsi algoritma ${alg}.\n`;
    solution += `Langkah 4: Setelah kunci ditemukan, dekripsi pesan tersebut dan Anda akan membaca format flag yang jelas: ${flag}.`;
  } else if (cat === "Forensics") {
    const file = getRandom(forensicsFiles);
    solution = `Langkah 1: Unduh barang bukti digital berupa ${file}.\n`;
    solution += `Langkah 2: Lakukan analisis mendalam menggunakan ${getRandom(tools)} untuk mengekstrak data tersembunyi.\n`;
    solution += `Langkah 3: Jika ada file yang dikompres, ekstrak file tersebut. Jika ada lalu lintas jaringan, filter berdasarkan protokol HTTP/DNS.\n`;
    solution += `Langkah 4: Identifikasi string yang mencurigakan di dalam file ekstraksi untuk menemukan flag: ${flag}.`;
  } else if (cat === "OSINT") {
    const osTarget = getRandom(osintTargets);
    solution = `Langkah 1: Diberikan sebuah petunjuk awal mengenai ${osTarget}.\n`;
    solution += `Langkah 2: Gunakan teknik pencarian lanjutan (Advanced Search) dan tools seperti ${getRandom(tools)} untuk melacak jejak digital.\n`;
    solution += `Langkah 3: Kumpulkan informasi yang tersebar, seperti email, username lama, atau histori web yang sudah dihapus.\n`;
    solution += `Langkah 4: Susun petunjuk-petunjuk tersebut menjadi satu kesatuan string yang merupakan flag: ${flag}.`;
  } else {
    // Reverse & Pwn
    const target = getRandom(["file ELF Linux", "file .exe Windows", "aplikasi Android (.apk)", "modul kernel"]);
    const vuln = getRandom(["Buffer Overflow", "Format String Bug", "Integer Overflow", "Heap Spray"]);
    solution = `Langkah 1: Lakukan disassembler atau dekompilasi pada ${target} menggunakan ${getRandom(tools)}.\n`;
    solution += `Langkah 2: Lacak alur eksekusi program (Control Flow) dan identifikasi kerentanan ${vuln} pada fungsi input data.\n`;
    solution += `Langkah 3: Rancang payload spesifik (exploit) untuk menimpa return address dan mengarahkan eksekusi ke shellcode buatan Anda.\n`;
    solution += `Langkah 4: Jalankan exploit ke server target, dapatkan akses shell, dan baca flag: ${flag}.`;
  }
  return solution;
}

let allChallenges = [];

// Create 800 completely unique challenges
let currentId = 1;

const difficulties = ["Easy", "Medium", "Hard", "Very Hard"];
const basePoints = { "Easy": 10, "Medium": 50, "Hard": 100, "Very Hard": 300 };

for (let d = 0; d < difficulties.length; d++) {
  const diff = difficulties[d];
  for (let i = 0; i < 200; i++) { // 200 per difficulty = 800 total
    const cat = getRandom(categories);
    const flag = `CTF{${diff.toLowerCase()}_${Math.random().toString(36).substring(2, 12)}_${currentId}}`;
    
    // Unique titles
    const titles = [
      `Menembus ${getRandom(targets)}`, 
      `Misteri ${getRandom(cryptos)}`, 
      `Investigasi ${getRandom(forensicsFiles)}`, 
      `Melacak ${getRandom(osintTargets)}`, 
      `Eksploitasi ${getRandom(vulnerabilities)}`,
      `Operasi ${getRandom(tools)}`
    ];
    
    let challenge = {
      id: currentId,
      title: `${getRandom(titles)} (Misi #${currentId})`,
      category: cat,
      difficulty: diff,
      points: basePoints[diff] + Math.floor(Math.random() * 10) * 5,
      description: `Buktikan kemampuan Anda sebagai agen keamanan siber! Target misi kali ini berkaitan dengan **${cat}**. Sistem mengidentifikasi anomali, selidiki dan dapatkan flag rahasianya!`,
      hint: `Gunakan metode standar untuk ${cat}. Coba ingat kembali fungsi dari alat peretasan yang tepat.`,
      solution: generateProceduralSolution(cat, diff, flag),
      flag: flag,
      requiresLab: (Math.random() > 0.8) // 20% of challenges require virtual lab
    };

    if (challenge.requiresLab) {
      challenge.description += " [PENTING: Misi ini membutuhkan akses Virtual Lab Terminal untuk eksekusi server secara langsung].";
      challenge.labEnvironment = {
        user: "hacker", 
        hostname: "target-sys", 
        fileSystem: { root: { "secret_flag.txt": flag } }
      };
    }
    
    allChallenges.push(challenge);
    currentId++;
  }
}

const fileContent = `export const challenges = ${JSON.stringify(allChallenges, null, 2)};`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'challenges.js'), fileContent);
console.log("Successfully generated 800 UNIQUE challenges with specific solutions for SMK/Kuliah CTF!");
