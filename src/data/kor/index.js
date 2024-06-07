import { Badung } from "./badung";
import { Bali } from "./bali";
import { Bangli } from "./bangli";
import { Buleleng } from "./buleleng";
import { Denpasar } from "./denpasar";
import { Gianyar } from "./gianyar";
import { Jembrana } from "./jembrana";
import { Karangasem } from "./karangasem";
import { Klungkung } from "./klungkung";
import { Tabanan } from "./tabanan";

export * from "./tujuan2";

export const dataGroupBarChartKor = [
  // Provinsi Bali
  Bali,
  Badung,
  Bangli,
  Buleleng,
  Denpasar,
  Gianyar,
  Jembrana,
  Karangasem,
  Klungkung,
  Tabanan,
];

export const dataSpiderChartKor = [
  // Provinsi Bali
  {
    // Nama Daerah
    region: "Provinsi Bali",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "orang Tua"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      // Variabel Pertama
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.131 },
            { axis: "Peninggalan Sejarah", value: 0.112 },
            { axis: "Tradisi Lisan", value: 0.168 },
            { axis: "Bahasa Daerah", value: 0.575 },
            { axis: "Upacara Adat", value: 0.272 },
            { axis: "Permainan Rakyat", value: 0.384 },
            { axis: "Produk Tradisional", value: 0.537 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.069 },
            { axis: "Peninggalan Sejarah", value: 0.076 },
            { axis: "Tradisi Lisan", value: 0.272 },
            { axis: "Bahasa Daerah", value: 0.64 },
            { axis: "Upacara Adat", value: 0.387 },
            { axis: "Permainan Rakyat", value: 0.729 },
            { axis: "Produk Tradisional", value: 0.566 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      // Variabel Pertama
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.132 },
            { axis: "Peninggalan Sejarah", value: 0.116 },
            { axis: "Tradisi Lisan", value: 0.142 },
            { axis: "Bahasa Daerah", value: 0.705 },
            { axis: "Upacara Adat", value: 0.358 },
            { axis: "Permainan Rakyat", value: 0.112 },
            { axis: "Produk Tradisional", value: 0.59 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.083 },
            { axis: "Peninggalan Sejarah", value: 0.077 },
            { axis: "Tradisi Lisan", value: 0.286 },
            { axis: "Bahasa Daerah", value: 0.688 },
            { axis: "Upacara Adat", value: 0.486 },
            { axis: "Permainan Rakyat", value: 0.674 },
            { axis: "Produk Tradisional", value: 0.637 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Badung
  {
    // Nama Daerah
    region: "Kabupaten Badung",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      // Variabel Pertama
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.143 },
            { axis: "Peninggalan Sejarah", value: 0.139 },
            { axis: "Tradisi Lisan", value: 0.194 },
            { axis: "Bahasa Daerah", value: 0.616 },
            { axis: "Upacara Adat", value: 0.308 },
            { axis: "Permainan Rakyat", value: 0.354 },
            { axis: "Produk Tradisional", value: 0.57 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.072 },
            { axis: "Peninggalan Sejarah", value: 0.07 },
            { axis: "Tradisi Lisan", value: 0.295 },
            { axis: "Bahasa Daerah", value: 0.671 },
            { axis: "Upacara Adat", value: 0.476 },
            { axis: "Permainan Rakyat", value: 0.693 },
            { axis: "Produk Tradisional", value: 0.608 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.151 },
            { axis: "Peninggalan Sejarah", value: 0.124 },
            { axis: "Tradisi Lisan", value: 0.158 },
            { axis: "Bahasa Daerah", value: 0.632 },
            { axis: "Upacara Adat", value: 0.418 },
            { axis: "Permainan Rakyat", value: 0.144 },
            { axis: "Produk Tradisional", value: 0.592 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.083 },
            { axis: "Peninggalan Sejarah", value: 0.077 },
            { axis: "Tradisi Lisan", value: 0.286 },
            { axis: "Bahasa Daerah", value: 0.688 },
            { axis: "Upacara Adat", value: 0.486 },
            { axis: "Permainan Rakyat", value: 0.674 },
            { axis: "Produk Tradisional", value: 0.637 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Bangli
  {
    // Nama Daerah
    region: "Kabupaten Bangli",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      // Variabel Pertama
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.171 },
            { axis: "Peninggalan Sejarah", value: 0.11 },
            { axis: "Tradisi Lisan", value: 0.169 },
            { axis: "Bahasa Daerah", value: 0.715 },
            { axis: "Upacara Adat", value: 0.346 },
            { axis: "Permainan Rakyat", value: 0.355 },
            { axis: "Produk Tradisional", value: 0.63 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.077 },
            { axis: "Peninggalan Sejarah", value: 0.066 },
            { axis: "Tradisi Lisan", value: 0.247 },
            { axis: "Bahasa Daerah", value: 0.732 },
            { axis: "Upacara Adat", value: 0.455 },
            { axis: "Permainan Rakyat", value: 0.73 },
            { axis: "Produk Tradisional", value: 0.626 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.132 },
            { axis: "Peninggalan Sejarah", value: 0.116 },
            { axis: "Tradisi Lisan", value: 0.142 },
            { axis: "Bahasa Daerah", value: 0.705 },
            { axis: "Upacara Adat", value: 0.358 },
            { axis: "Permainan Rakyat", value: 0.112 },
            { axis: "Produk Tradisional", value: 0.59 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.083 },
            { axis: "Peninggalan Sejarah", value: 0.077 },
            { axis: "Tradisi Lisan", value: 0.286 },
            { axis: "Bahasa Daerah", value: 0.688 },
            { axis: "Upacara Adat", value: 0.486 },
            { axis: "Permainan Rakyat", value: 0.674 },
            { axis: "Produk Tradisional", value: 0.637 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Buleleng
  {
    // Nama Daerah
    region: "Kabupaten Buleleng",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      // Variabel Pertama
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.106 },
            { axis: "Peninggalan Sejarah", value: 0.083 },
            { axis: "Tradisi Lisan", value: 0.179 },
            { axis: "Bahasa Daerah", value: 0.555 },
            { axis: "Upacara Adat", value: 0.237 },
            { axis: "Permainan Rakyat", value: 0.423 },
            { axis: "Produk Tradisional", value: 0.514 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.05 },
            { axis: "Peninggalan Sejarah", value: 0.07 },
            { axis: "Tradisi Lisan", value: 0.275 },
            { axis: "Bahasa Daerah", value: 0.593 },
            { axis: "Upacara Adat", value: 0.348 },
            { axis: "Permainan Rakyat", value: 0.739 },
            { axis: "Produk Tradisional", value: 0.506 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.116 },
            { axis: "Peninggalan Sejarah", value: 0.108 },
            { axis: "Tradisi Lisan", value: 0.189 },
            { axis: "Bahasa Daerah", value: 0.55 },
            { axis: "Upacara Adat", value: 0.286 },
            { axis: "Permainan Rakyat", value: 0.172 },
            { axis: "Produk Tradisional", value: 0.518 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.059 },
            { axis: "Peninggalan Sejarah", value: 0.082 },
            { axis: "Tradisi Lisan", value: 0.262 },
            { axis: "Bahasa Daerah", value: 0.592 },
            { axis: "Upacara Adat", value: 0.347 },
            { axis: "Permainan Rakyat", value: 0.715 },
            { axis: "Produk Tradisional", value: 0.56 },
          ],
        ],
      },
    ],
  },
  // Kota Denpasar
  {
    // Nama Daerah
    region: "Kota Denpasar",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.122 },
            { axis: "Peninggalan Sejarah", value: 0.101 },
            { axis: "Tradisi Lisan", value: 0.167 },
            { axis: "Bahasa Daerah", value: 0.324 },
            { axis: "Upacara Adat", value: 0.229 },
            { axis: "Permainan Rakyat", value: 0.31 },
            { axis: "Produk Tradisional", value: 0.496 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.082 },
            { axis: "Peninggalan Sejarah", value: 0.091 },
            { axis: "Tradisi Lisan", value: 0.281 },
            { axis: "Bahasa Daerah", value: 0.466 },
            { axis: "Upacara Adat", value: 0.321 },
            { axis: "Permainan Rakyat", value: 0.798 },
            { axis: "Produk Tradisional", value: 0.521 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      // Variabel Pertama
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.12 },
            { axis: "Peninggalan Sejarah", value: 0.114 },
            { axis: "Tradisi Lisan", value: 0.162 },
            { axis: "Bahasa Daerah", value: 0.389 },
            { axis: "Upacara Adat", value: 0.271 },
            { axis: "Permainan Rakyat", value: 0.084 },
            { axis: "Produk Tradisional", value: 0.468 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.081 },
            { axis: "Peninggalan Sejarah", value: 0.098 },
            { axis: "Tradisi Lisan", value: 0.328 },
            { axis: "Bahasa Daerah", value: 0.489 },
            { axis: "Upacara Adat", value: 0.365 },
            { axis: "Permainan Rakyat", value: 0.756 },
            { axis: "Produk Tradisional", value: 0.598 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Gianyar
  {
    // Nama Daerah
    region: "Kabupaten Gianyar",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.156 },
            { axis: "Peninggalan Sejarah", value: 0.128 },
            { axis: "Tradisi Lisan", value: 0.163 },
            { axis: "Bahasa Daerah", value: 0.639 },
            { axis: "Upacara Adat", value: 0.316 },
            { axis: "Permainan Rakyat", value: 0.396 },
            { axis: "Produk Tradisional", value: 0.667 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.105 },
            { axis: "Peninggalan Sejarah", value: 0.093 },
            { axis: "Tradisi Lisan", value: 0.299 },
            { axis: "Bahasa Daerah", value: 0.68 },
            { axis: "Upacara Adat", value: 0.404 },
            { axis: "Permainan Rakyat", value: 0.728 },
            { axis: "Produk Tradisional", value: 0.655 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.158 },
            { axis: "Peninggalan Sejarah", value: 0.124 },
            { axis: "Tradisi Lisan", value: 0.149 },
            { axis: "Bahasa Daerah", value: 0.638 },
            { axis: "Upacara Adat", value: 0.347 },
            { axis: "Permainan Rakyat", value: 0.151 },
            { axis: "Produk Tradisional", value: 0.623 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.086 },
            { axis: "Peninggalan Sejarah", value: 0.085 },
            { axis: "Tradisi Lisan", value: 0.266 },
            { axis: "Bahasa Daerah", value: 0.683 },
            { axis: "Upacara Adat", value: 0.413 },
            { axis: "Permainan Rakyat", value: 0.67 },
            { axis: "Produk Tradisional", value: 0.65 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Jembrana
  {
    // Nama Daerah
    region: "Kabupaten Jembrana",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.1 },
            { axis: "Peninggalan Sejarah", value: 0.054 },
            { axis: "Tradisi Lisan", value: 0.163 },
            { axis: "Bahasa Daerah", value: 0.581 },
            { axis: "Upacara Adat", value: 0.195 },
            { axis: "Permainan Rakyat", value: 0.418 },
            { axis: "Produk Tradisional", value: 0.397 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.038 },
            { axis: "Peninggalan Sejarah", value: 0.03 },
            { axis: "Tradisi Lisan", value: 0.291 },
            { axis: "Bahasa Daerah", value: 0.625 },
            { axis: "Upacara Adat", value: 0.328 },
            { axis: "Permainan Rakyat", value: 0.697 },
            { axis: "Produk Tradisional", value: 0.5 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.098 },
            { axis: "Peninggalan Sejarah", value: 0.059 },
            { axis: "Tradisi Lisan", value: 0.165 },
            { axis: "Bahasa Daerah", value: 0.591 },
            { axis: "Upacara Adat", value: 0.227 },
            { axis: "Permainan Rakyat", value: 0.131 },
            { axis: "Produk Tradisional", value: 0.298 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.027 },
            { axis: "Peninggalan Sejarah", value: 0.033 },
            { axis: "Tradisi Lisan", value: 0.276 },
            { axis: "Bahasa Daerah", value: 0.612 },
            { axis: "Upacara Adat", value: 0.313 },
            { axis: "Permainan Rakyat", value: 0.664 },
            { axis: "Produk Tradisional", value: 0.463 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Karangasem
  {
    // Nama Daerah
    region: "Kabupaten Karangasem",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      {
        title: "Skor Gen Z Anak & Orang Tua di",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.108 },
            { axis: "Peninggalan Sejarah", value: 0.128 },
            { axis: "Tradisi Lisan", value: 0.163 },
            { axis: "Bahasa Daerah", value: 0.572 },
            { axis: "Upacara Adat", value: 0.271 },
            { axis: "Permainan Rakyat", value: 0.438 },
            { axis: "Produk Tradisional", value: 0.525 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.057 },
            { axis: "Peninggalan Sejarah", value: 0.085 },
            { axis: "Tradisi Lisan", value: 0.232 },
            { axis: "Bahasa Daerah", value: 0.647 },
            { axis: "Upacara Adat", value: 0.374 },
            { axis: "Permainan Rakyat", value: 0.692 },
            { axis: "Produk Tradisional", value: 0.553 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.097 },
            { axis: "Peninggalan Sejarah", value: 0.14 },
            { axis: "Tradisi Lisan", value: 0.162 },
            { axis: "Bahasa Daerah", value: 0.623 },
            { axis: "Upacara Adat", value: 0.338 },
            { axis: "Permainan Rakyat", value: 0.189 },
            { axis: "Produk Tradisional", value: 0.467 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.053 },
            { axis: "Peninggalan Sejarah", value: 0.1 },
            { axis: "Tradisi Lisan", value: 0.239 },
            { axis: "Bahasa Daerah", value: 0.643 },
            { axis: "Upacara Adat", value: 0.365 },
            { axis: "Permainan Rakyat", value: 0.684 },
            { axis: "Produk Tradisional", value: 0.575 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Klungkung
  {
    // Nama Daerah
    region: "Kabupaten Klungkung",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      {
        title: "Skor Gen Z Anak & Orang Tua di ",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.126 },
            { axis: "Peninggalan Sejarah", value: 0.147 },
            { axis: "Tradisi Lisan", value: 0.16 },
            { axis: "Bahasa Daerah", value: 0.545 },
            { axis: "Upacara Adat", value: 0.308 },
            { axis: "Permainan Rakyat", value: 0.348 },
            { axis: "Produk Tradisional", value: 0.563 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.071 },
            { axis: "Peninggalan Sejarah", value: 0.088 },
            { axis: "Tradisi Lisan", value: 0.236 },
            { axis: "Bahasa Daerah", value: 0.641 },
            { axis: "Upacara Adat", value: 0.442 },
            { axis: "Permainan Rakyat", value: 0.756 },
            { axis: "Produk Tradisional", value: 0.578 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.107 },
            { axis: "Peninggalan Sejarah", value: 0.131 },
            { axis: "Tradisi Lisan", value: 0.151 },
            { axis: "Bahasa Daerah", value: 0.594 },
            { axis: "Upacara Adat", value: 0.32 },
            { axis: "Permainan Rakyat", value: 0.116 },
            { axis: "Produk Tradisional", value: 0.494 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.086 },
            { axis: "Peninggalan Sejarah", value: 0.096 },
            { axis: "Tradisi Lisan", value: 0.216 },
            { axis: "Bahasa Daerah", value: 0.674 },
            { axis: "Upacara Adat", value: 0.436 },
            { axis: "Permainan Rakyat", value: 0.714 },
            { axis: "Produk Tradisional", value: 0.587 },
          ],
        ],
      },
    ],
  },
  // Kabupaten Tabanan
  {
    // Nama Daerah
    region: "Kabupaten Tabanan",
    // Kategori untuk Filter Checkbox
    categories: ["Gen Z Anak", "Gen Z Dewasa"],
    // Data Gen Z Anak Beserta Orang Tua
    anak: [
      {
        title: "Skor Gen Z Anak & Orang Tua di",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Anak", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.155 },
            { axis: "Peninggalan Sejarah", value: 0.131 },
            { axis: "Tradisi Lisan", value: 0.158 },
            { axis: "Bahasa Daerah", value: 0.56 },
            { axis: "Upacara Adat", value: 0.236 },
            { axis: "Permainan Rakyat", value: 0.37 },
            { axis: "Produk Tradisional", value: 0.47 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.081 },
            { axis: "Peninggalan Sejarah", value: 0.1 },
            { axis: "Tradisi Lisan", value: 0.313 },
            { axis: "Bahasa Daerah", value: 0.663 },
            { axis: "Upacara Adat", value: 0.344 },
            { axis: "Permainan Rakyat", value: 0.748 },
            { axis: "Produk Tradisional", value: 0.558 },
          ],
        ],
      },
    ],
    // Data Gen Z Dewasa Beserta Orang Tua
    dewasa: [
      {
        title: "Skor Gen Z Dewasa & Orang Tua di",
        interpretasi:
          "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
        categories: ["Skor GenZ Dewasa", "Skor Orang Tua"],
        warna: ["#FFC837", "#6497B1"],
        isPercentage: false,
        data: [
          [
            { axis: "Pertunjukan Seni", value: 0.145 },
            { axis: "Peninggalan Sejarah", value: 0.148 },
            { axis: "Tradisi Lisan", value: 0.152 },
            { axis: "Bahasa Daerah", value: 0.563 },
            { axis: "Upacara Adat", value: 0.306 },
            { axis: "Permainan Rakyat", value: 0.142 },
            { axis: "Produk Tradisional", value: 0.452 },
          ],
          [
            { axis: "Pertunjukan Seni", value: 0.071 },
            { axis: "Peninggalan Sejarah", value: 0.091 },
            { axis: "Tradisi Lisan", value: 0.282 },
            { axis: "Bahasa Daerah", value: 0.654 },
            { axis: "Upacara Adat", value: 0.348 },
            { axis: "Permainan Rakyat", value: 0.746 },
            { axis: "Produk Tradisional", value: 0.522 },
          ],
        ],
      },
    ],
  },
];

export const listDaerah = [
  { name: "Bali" },
  {
    name: "Badung",
  },
  {
    name: "Bangli",
  },
  {
    name: "Buleleng",
  },
  {
    name: "Denpasar",
  },
  {
    name: "Gianyar",
  },
  {
    name: "Jembrana",
  },
  {
    name: "Karangasem",
  },
  {
    name: "Klungkung",
  },
  {
    name: "Tabanan",
  },
];

export const listVariabel = [
  {
    name: "Menghadiri Upacara Adat",
    value: 0,
  },
  {
    name: "Berpartisipasi aktif dalam Upacara Adat",
    value: 1,
  },
  {
    name: "Menggunakan Bahasa Daerah di Rumah",
    value: 2,
  },
  {
    name: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan",
    value: 3,
  },
  {
    name: "Menggunakan Bahasa Daerah di Media Sosial",
    value: 4,
  },
  {
    name: "Jumlah Dongeng Diketahui",
    value: 5,
  },
  {
    name: "Kunjungan Langsung ke Tempat Bersejarah",
    value: 6,
  },
  {
    name: "Kunjungan Tidak Langsung ke Tempat Bersejarah",
    value: 7,
  },
  {
    name: "Menonton Pertunjukan Seni secara Langsung",
    value: 8,
  },
  {
    name: "Menonton Pertunjukan Seni secara Tidak Langsung",
    value: 9,
  },
  {
    name: "Berperan sebagai Pemeran Pertunjukan Seni",
    value: 10,
  },
  {
    name: "Berperan dalam produksi Pertunjukan Seni",
    value: 11,
  },
  {
    name: "Penggunaan Produk Tradisional",
    value: 12,
  },
  {
    name: "Frekuensi melakukan Permainan Rakyat",
    value: 13,
  },
  {
    name: "Skor Budaya",
    value: 14,
  },
];
