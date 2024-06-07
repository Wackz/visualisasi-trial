export const kategori = [
  {
    name: "GenZ anak",
    value: "anak",
  },
  {
    name: "Orang Tua Anak",
    value: "ortu_anak",
  },
  {
    name: "GenZ Dewasa",
    value: "dewasa",
  },
  {
    name: "Orang Tua Dewasa",
    value: "ortu_dewasa",
  },
];

export const wilayah = [
  {
    name: "Badung",
    value: 0,
  },
  {
    name: "Bangli",
    value: 1,
  },
  {
    name: "Buleleng",
    value: 2,
  },
  {
    name: "Denpasar",
    value: 3,
  },
  {
    name: "Gianyar",
    value: 4,
  },
  {
    name: "Jembrana",
    value: 5,
  },
  {
    name: "Karangasem",
    value: 6,
  },
  {
    name: "Klungkung",
    value: 7,
  },
  {
    name: "Tabanan",
    value: 8,
  },
  {
    name: "Provinsi",
    value: 10,
  },
];

export const pilihanData = [
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

// Data Visualisasi
export const groupBarChart1 = [
  {
    title: "Jumlah Pemilih Tetap Berdasarkan Jenis KelaminProvinsi DKI Jakarta",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 3.4 },
        { label: "1-5 buah", value: 62.6 },
        { label: "6-10 buah", value: 26.5 },
        { label: "11-15 buah", value: 5.9 },
        { label: ">= 16 buah", value: 1.7 },
      ],
      [
        { label: "0 buah", value: 2.7 },
        { label: "1-5 buah", value: 52.5 },
        { label: "6-10 buah", value: 33.6 },
        { label: "11-15 buah", value: 5.4 },
        { label: ">= 16 buah", value: 5.8 },
      ],
      [
        { label: "0 buah", value: 8.9 },
        { label: "1-5 buah", value: 45.1 },
        { label: "6-10 buah", value: 22.8 },
        { label: "11-15 buah", value: 5.9 },
        { label: ">= 16 buah", value: 6.3 },
      ],
    ],
  },
  {
    title: "Jumlah Pemilih Baru Berdasarkan Jenis KelaminProvinsi DKI Jakarta",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 3.4 },
        { label: "1-5 buah", value: 62.6 },
        { label: "6-10 buah", value: 26.5 },
        { label: "11-15 buah", value: 5.9 },
        { label: ">= 16 buah", value: 1.7 },
      ],
      [
        { label: "0 buah", value: 2.7 },
        { label: "1-5 buah", value: 52.5 },
        { label: "6-10 buah", value: 33.6 },
        { label: "11-15 buah", value: 5.4 },
        { label: ">= 16 buah", value: 5.8 },
      ],
      [
        { label: "0 buah", value: 8.9 },
        { label: "1-5 buah", value: 45.1 },
        { label: "6-10 buah", value: 22.8 },
        { label: "11-15 buah", value: 5.9 },
        { label: ">= 16 buah", value: 6.3 },
      ],
    ],
  },
  {
    title: "Pemilih Tidak Tetap Berdasarkan Jenis KelaminProvinsi DKI Jakarta",
    interpretasi:
      "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 3.4 },
        { label: "1-5 buah", value: 62.6 },
        { label: "6-10 buah", value: 26.5 },
        { label: "11-15 buah", value: 5.9 },
        { label: ">= 16 buah", value: 1.7 },
      ],
      [
        { label: "0 buah", value: 2.7 },
        { label: "1-5 buah", value: 52.5 },
        { label: "6-10 buah", value: 33.6 },
        { label: "11-15 buah", value: 5.4 },
        { label: ">= 16 buah", value: 5.8 },
      ],
      [
        { label: "0 buah", value: 8.9 },
        { label: "1-5 buah", value: 45.1 },
        { label: "6-10 buah", value: 22.8 },
        { label: "11-15 buah", value: 5.9 },
        { label: ">= 16 buah", value: 6.3 },
      ],
    ],
  },
];

export const dataGroupBarChart1 = [
  // PROVINSI BALI
  {
    region: "Provinsi Bali",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin di",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelamin  menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelamin  menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)  menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN BADUNG
  {
    region: "Kabupaten Badung",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN BANGLI
  {
    region: "Kabupaten Bangli",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN BULELENG
  {
    region: "Kabupaten Buleleng",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KOTA DENPASAR
  {
    region: "Kota Denpasar",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN GIANYAR
  {
    region: "Kabupaten Gianyar",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN JEMBRANA
  {
    region: "Kabupaten Jembrana",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN KARANGASEM
  {
    region: "Kabupaten Karangasem",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN KLUNGKUNG
  {
    region: "Kabupaten Klungkung",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN TABANAN
  {
    region: "Kabupaten Tabanan",
    data: [
      {
        title: "Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Jumlah Pemilih Baru Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
      {
        title: "Pemilih Tidak Tetap Berdasarkan Jenis Kelamin",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS)Provinsi DKI Jakarta menunjukkan variasi yang signifikanantara wilayah-wilayah yang berbeda.Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. 1-5 buah memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan 6-10 buah mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan.11-15 buah, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara>= 16 buah terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-lakihampir semua wilayah, dengan 6-10 buah memiliki jumlah TPS tertinggi untuk laki-laki dan 1-5 buah menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        isPercentage: false,
        data: [
          [
            { label: "0 buah", value: 3.4 },
            { label: "1-5 buah", value: 62.6 },
            { label: "6-10 buah", value: 26.5 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 1.7 },
          ],
          [
            { label: "0 buah", value: 2.7 },
            { label: "1-5 buah", value: 52.5 },
            { label: "6-10 buah", value: 33.6 },
            { label: "11-15 buah", value: 5.4 },
            { label: ">= 16 buah", value: 5.8 },
          ],
          [
            { label: "0 buah", value: 8.9 },
            { label: "1-5 buah", value: 45.1 },
            { label: "6-10 buah", value: 22.8 },
            { label: "11-15 buah", value: 5.9 },
            { label: ">= 16 buah", value: 6.3 },
          ],
        ],
      },
    ],
  },
];

export const dataSpiderChart1 = [
  // PROVINSI BALI
  {
    region: "Provinsi Bali",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN BADUNG
  {
    region: "Kabupaten Badung",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN BANGLI
  {
    region: "Kabupaten Bangli",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN BULELENG
  {
    region: "Kabupaten Buleleng",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KOTA DENPASAR
  {
    region: "Kota Denpasar",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN GIANYAR
  {
    region: "Kabupaten Gianyar",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN JEMBRANA
  {
    region: "Kabupaten Jembrana",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN KARANGASEM
  {
    region: "Kabupaten Karangasem",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN KLUNGKUNG
  {
    region: "Kabupaten Klungkung",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
  // KABUPATEN TABANAN
  {
    region: "Kabupaten Tabanan",
    data: [
      {
        title:
          "Indikator Pemilu Berdasarkan Jenis Kelamin di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
      {
        title: "Indikator Pemilu Berdasarkan Generasi di Provinsi DKI Jakarta",
        interpretasi:
          "Data mengenai jumlah tempat pemungutan suara (TPS) di Provinsi DKI Jakarta menunjukkan variasi yang signifikan di antara wilayah-wilayah yang berbeda. Di Jakarta Barat, terdapat 527 TPS untuk pemilih laki-laki dan 258 TPS untuk pemilih perempuan, menunjukkan konsentrasi yang lebih tinggi untuk pemilih laki-laki. Jakarta Selatan memiliki 502 TPS untuk laki-laki dan 339 TPS untuk perempuan, sedangkan Jakarta Timur mencatat jumlah tertinggi dengan 561 TPS untuk laki-laki dan 226 TPS untuk perempuan. Di Jakarta Utara, terdapat 557 TPS untuk laki-laki dan 257 TPS untuk perempuan, sementara di Jakarta Pusat terdapat 556 TPS untuk laki-laki dan 250 TPS untuk perempuan. Kepulauan Seribu menunjukkan pola yang serupa dengan 541 TPS untuk laki-laki dan 269 TPS untuk perempuan. Data ini mengindikasikan bahwa jumlah TPS cenderung lebih banyak dialokasikan untuk pemilih laki-laki di hampir semua wilayah, dengan Jakarta Timur memiliki jumlah TPS tertinggi untuk laki-laki dan Jakarta Selatan menunjukkan distribusi yang lebih seimbang antara laki-laki dan perempuan.",
        label: ["Gen X", "Milenial", "Gen Z"],
        warna: ["#FFC837", "#6497B1", "#FA8295"],
        data: [
          [
            // Orang Tua
            { axis: "Langsung", value: 0.625, group: 0 },
            { axis: "Umum", value: 0.591, group: 0 },
            { axis: "Bersih", value: 0.697, group: 0 },
            { axis: "Rahasia", value: 0.738, group: 0 },
            { axis: "Jujur", value: 0.65, group: 0 },
            { axis: "Adil", value: 0.73, group: 0 },
          ],
          [
            // Gen Z Anak
            { axis: "Langsung", value: 0.581, group: 1 },
            { axis: "Umum", value: 0.463, group: 1 },
            { axis: "Bersih", value: 0.418, group: 1 },
            { axis: "Rahasia", value: 0.41, group: 1 },
            { axis: "Jujur", value: 0.45, group: 1 },
            { axis: "Adil", value: 0.54, group: 1 },
          ],
          [
            // Gen Z Dewasa
            { axis: "Langsung", value: 0.381, group: 2 },
            { axis: "Umum", value: 0.363, group: 2 },
            { axis: "Bersih", value: 0.418, group: 2 },
            { axis: "Rahasia", value: 0.42, group: 2 },
            { axis: "Jujur", value: 0.35, group: 2 },
            { axis: "Adil", value: 0.394, group: 2 },
          ],
        ],
      },
    ],
  },
];

// Data Variabel Visualisai
export const listVariabelGroupBarChart1 = [
  { name: "Jumlah Pemilih Tetap" },
  { name: "Jumlah Pemilih Tetap Baru" },
  { name: "Jumlah Tempat Pemungutan Suara" },
];

export const listVariabelSpiderChart1 = [
  { name: "Jumlah Pemilih Tetap" },
  { name: "Jumlah Pemilih Tetap Baru" },
  { name: "Jumlah Tempat Pemungutan Suara" },
];

// Data Daerah Visualisasi
export const listDaerahChart = [
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

export const skorData = [
  {
    title: "Skor Provinsi",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.127 },
        { axis: "Peninggalan Sejarah", value: 0.119 },
        { axis: "Tradisi Lisan", value: 0.159 },
        { axis: "Bahasa Daerah", value: 0.594 },
        { axis: "Upacara Adat", value: 0.324 },
        { axis: "Permainan Rakyat", value: 0.14 },
        { axis: "Produk Tradisional", value: 0.51 },
      ],
      [
        { axis: "Pertunjukan Seni", value: 0.069 },
        { axis: "Peninggalan Sejarah", value: 0.076 },
        { axis: "Tradisi Lisan", value: 0.272 },
        { axis: "Bahasa Daerah", value: 0.64 },
        { axis: "Upacara Adat", value: 0.387 },
        { axis: "Permainan Rakyat", value: 0.729 },
        { axis: "Produk Tradisional", value: 0.56 },
      ],
    ],
  },
  {
    title: "Skor Badung",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.151 },
        { axis: "Peninggalan Sejarah", value: 0.124 },
        { axis: "Tradisi Lisan", value: 0.158 },
        { axis: "Bahasa Daerah", value: 0.632 },
        { axis: "Upacara Adat", value: 0.418 },
        { axis: "Permainan Rakyat", value: 0.144 },
        { axis: "Produk Tradisional", value: 0.592 },
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
  {
    title: "Skor Bangli",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.132 },
        { axis: "Peninggalan Sejarah", value: 0.116 },
        { axis: "Tradisi Lisan", value: 0.142 },
        { axis: "Bahasa Daerah", value: 0.705 },
        { axis: "Upacara Adat", value: 0.358 },
        { axis: "Permainan Rakyat", value: 0.112 },
        { axis: "Produk Tradisional", value: 0.59 },
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
  {
    title: "Skor Buleleng",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.108 },
        { axis: "Peninggalan Sejarah", value: 0.189 },
        { axis: "Tradisi Lisan", value: 0.55 },
        { axis: "Bahasa Daerah", value: 0.286 },
        { axis: "Upacara Adat", value: 0.172 },
        { axis: "Permainan Rakyat", value: 0.518 },
        { axis: "Produk Tradisional", value: 0.277 },
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
  {
    title: "Skor Denpasar",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.12 },
        { axis: "Peninggalan Sejarah", value: 0.114 },
        { axis: "Tradisi Lisan", value: 0.162 },
        { axis: "Bahasa Daerah", value: 0.389 },
        { axis: "Upacara Adat", value: 0.271 },
        { axis: "Permainan Rakyat", value: 0.084 },
        { axis: "Produk Tradisional", value: 0.468 },
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
  {
    title: "Skor Gianyar",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.158 },
        { axis: "Peninggalan Sejarah", value: 0.124 },
        { axis: "Tradisi Lisan", value: 0.149 },
        { axis: "Bahasa Daerah", value: 0.638 },
        { axis: "Upacara Adat", value: 0.347 },
        { axis: "Permainan Rakyat", value: 0.151 },
        { axis: "Produk Tradisional", value: 0.623 },
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
  {
    title: "Skor Jembrana",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.098 },
        { axis: "Peninggalan Sejarah", value: 0.059 },
        { axis: "Tradisi Lisan", value: 0.165 },
        { axis: "Bahasa Daerah", value: 0.591 },
        { axis: "Upacara Adat", value: 0.227 },
        { axis: "Permainan Rakyat", value: 0.131 },
        { axis: "Produk Tradisional", value: 0.298 },
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
  {
    title: "Skor Karangasem",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.097 },
        { axis: "Peninggalan Sejarah", value: 0.14 },
        { axis: "Tradisi Lisan", value: 0.162 },
        { axis: "Bahasa Daerah", value: 0.623 },
        { axis: "Upacara Adat", value: 0.338 },
        { axis: "Permainan Rakyat", value: 0.189 },
        { axis: "Produk Tradisional", value: 0.467 },
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
  {
    title: "Skor Klungkung",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.107 },
        { axis: "Peninggalan Sejarah", value: 0.131 },
        { axis: "Tradisi Lisan", value: 0.151 },
        { axis: "Bahasa Daerah", value: 0.594 },
        { axis: "Upacara Adat", value: 0.32 },
        { axis: "Permainan Rakyat", value: 0.116 },
        { axis: "Produk Tradisional", value: 0.494 },
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
  {
    title: "Skor Tabanan",
    interpretasi:
      "secara umum rata-rata nilai perilaku pelestarian budaya di Provinsi Bali dengan skenario 1 (isian tidak ingat diberi nilai 0) untuk orang tua ketika berumur 11-27 tahun lebih tinggi di hampir semua dimensi dibandingkan Gen Z. Gen Z memiliki skor yang lebih unggul hanya dalam dimensi peninggalan sejarah dan pertunjukkan seni. Pada dimensi permainan rakyat, terdapat gap yang besar antara orang tua (0,76) dan gen Z (0,43). Hal ini dapat disebabkan oleh kemajuan teknologi yang mengakibatkan pergeseran budaya bermain pada gen Z.",
    label: ["Skor GenZ Anak", "Skor GenZ Dewasa", "Skor Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
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
        { axis: "Pertunjukan Seni", value: 0.145 },
        { axis: "Peninggalan Sejarah", value: 0.148 },
        { axis: "Tradisi Lisan", value: 0.152 },
        { axis: "Bahasa Daerah", value: 0.563 },
        { axis: "Upacara Adat", value: 0.306 },
        { axis: "Permainan Rakyat", value: 0.142 },
        { axis: "Produk Tradisional", value: 0.452 },
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
];

export const permainanRakyat = [
  {
    title: "Total Permainan Rakyat Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 844 },
        { label: "Jarang", value: 896 },
        { label: "Kadang-kadang", value: 368 },
        { label: "Sering", value: 383 },
        { label: "Selalu", value: 406 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1665 },
        { label: "Jarang", value: 525 },
        { label: "Kadang-kadang", value: 155 },
        { label: "Sering", value: 87 },
        { label: "Selalu", value: 78 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 243 },
        { label: "Jarang", value: 291 },
        { label: "Kadang-kadang", value: 276 },
        { label: "Sering", value: 774 },
        { label: "Selalu", value: 1285 },
        { label: "Tidak Ingat", value: 27 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 83 },
        { label: "Jarang", value: 92 },
        { label: "Kadang-kadang", value: 40 },
        { label: "Sering", value: 32 },
        { label: "Selalu", value: 27 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 228 },
        { label: "Jarang", value: 79 },
        { label: "Kadang-kadang", value: 17 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 17 },
        { label: "Jarang", value: 36 },
        { label: "Kadang-kadang", value: 48 },
        { label: "Sering", value: 79 },
        { label: "Selalu", value: 91 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 123 },
        { label: "Jarang", value: 11 },
        { label: "Kadang-kadang", value: 51 },
        { label: "Sering", value: 45 },
        { label: "Selalu", value: 46 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 201 },
        { label: "Jarang", value: 57 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 40 },
        { label: "Jarang", value: 43 },
        { label: "Kadang-kadang", value: 30 },
        { label: "Sering", value: 68 },
        { label: "Selalu", value: 190 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 97 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 47 },
        { label: "Sering", value: 55 },
        { label: "Selalu", value: 64 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 164 },
        { label: "Jarang", value: 54 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 17 },
        { label: "Selalu", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 39 },
        { label: "Jarang", value: 27 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 116 },
        { label: "Selalu", value: 169 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 84 },
        { label: "Jarang", value: 80 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 30 },
        { label: "Selalu", value: 19 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 168 },
        { label: "Jarang", value: 45 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 14 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 84 },
        { label: "Selalu", value: 104 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 74 },
        { label: "Jarang", value: 95 },
        { label: "Kadang-kadang", value: 35 },
        { label: "Sering", value: 44 },
        { label: "Selalu", value: 40 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 217 },
        { label: "Jarang", value: 65 },
        { label: "Kadang-kadang", value: 24 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 35 },
        { label: "Kadang-kadang", value: 27 },
        { label: "Sering", value: 64 },
        { label: "Selalu", value: 140 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 78 },
        { label: "Jarang", value: 108 },
        { label: "Kadang-kadang", value: 62 },
        { label: "Sering", value: 42 },
        { label: "Selalu", value: 64 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 158 },
        { label: "Jarang", value: 55 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 15 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 27 },
        { label: "Jarang", value: 37 },
        { label: "Kadang-kadang", value: 48 },
        { label: "Sering", value: 105 },
        { label: "Selalu", value: 134 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 90 },
        { label: "Jarang", value: 124 },
        { label: "Kadang-kadang", value: 44 },
        { label: "Sering", value: 54 },
        { label: "Selalu", value: 66 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 157 },
        { label: "Jarang", value: 77 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 50 },
        { label: "Jarang", value: 34 },
        { label: "Kadang-kadang", value: 29 },
        { label: "Sering", value: 83 },
        { label: "Selalu", value: 179 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 118 },
        { label: "Jarang", value: 94 },
        { label: "Kadang-kadang", value: 39 },
        { label: "Sering", value: 47 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 202 },
        { label: "Jarang", value: 42 },
        { label: "Kadang-kadang", value: 21 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 23 },
        { label: "Jarang", value: 28 },
        { label: "Kadang-kadang", value: 26 },
        { label: "Sering", value: 104 },
        { label: "Selalu", value: 151 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Permainan Rakyat Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 97 },
        { label: "Jarang", value: 81 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 34 },
        { label: "Selalu", value: 42 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 170 },
        { label: "Jarang", value: 51 },
        { label: "Kadang-kadang", value: 21 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 12 },
        { label: "Jarang", value: 37 },
        { label: "Kadang-kadang", value: 30 },
        { label: "Sering", value: 71 },
        { label: "Selalu", value: 127 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
];

export const produkTradisional = [
  {
    title: "Total Penggunaan Produk Tradisional Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 466 },
        { label: "Jarang", value: 686 },
        { label: "Kadang-kadang", value: 424 },
        { label: "Sering", value: 670 },
        { label: "Selalu", value: 651 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 400 },
        { label: "Jarang", value: 667 },
        { label: "Kadang-kadang", value: 451 },
        { label: "Sering", value: 497 },
        { label: "Selalu", value: 495 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 217 },
        { label: "Jarang", value: 774 },
        { label: "Kadang-kadang", value: 563 },
        { label: "Sering", value: 661 },
        { label: "Selalu", value: 653 },
        { label: "Tidak Ingat", value: 28 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 27 },
        { label: "Jarang", value: 55 },
        { label: "Kadang-kadang", value: 59 },
        { label: "Sering", value: 73 },
        { label: "Selalu", value: 60 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 25 },
        { label: "Jarang", value: 75 },
        { label: "Kadang-kadang", value: 81 },
        { label: "Sering", value: 92 },
        { label: "Selalu", value: 72 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 16 },
        { label: "Jarang", value: 54 },
        { label: "Kadang-kadang", value: 56 },
        { label: "Sering", value: 77 },
        { label: "Selalu", value: 64 },
        { label: "Tidak Ingat", value: 8 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 24 },
        { label: "Jarang", value: 88 },
        { label: "Kadang-kadang", value: 65 },
        { label: "Sering", value: 84 },
        { label: "Selalu", value: 114 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 16 },
        { label: "Jarang", value: 78 },
        { label: "Kadang-kadang", value: 59 },
        { label: "Sering", value: 55 },
        { label: "Selalu", value: 75 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 15 },
        { label: "Jarang", value: 89 },
        { label: "Kadang-kadang", value: 77 },
        { label: "Sering", value: 71 },
        { label: "Selalu", value: 121 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 51 },
        { label: "Jarang", value: 59 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 65 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 30 },
        { label: "Jarang", value: 66 },
        { label: "Kadang-kadang", value: 51 },
        { label: "Sering", value: 50 },
        { label: "Selalu", value: 26 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 38 },
        { label: "Jarang", value: 119 },
        { label: "Kadang-kadang", value: 72 },
        { label: "Sering", value: 78 },
        { label: "Selalu", value: 65 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 51 },
        { label: "Jarang", value: 59 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 65 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 30 },
        { label: "Jarang", value: 66 },
        { label: "Kadang-kadang", value: 51 },
        { label: "Sering", value: 50 },
        { label: "Selalu", value: 26 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 16 },
        { label: "Jarang", value: 79 },
        { label: "Kadang-kadang", value: 44 },
        { label: "Sering", value: 60 },
        { label: "Selalu", value: 33 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 18 },
        { label: "Jarang", value: 64 },
        { label: "Kadang-kadang", value: 39 },
        { label: "Sering", value: 54 },
        { label: "Selalu", value: 113 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 24 },
        { label: "Jarang", value: 83 },
        { label: "Kadang-kadang", value: 45 },
        { label: "Sering", value: 68 },
        { label: "Selalu", value: 108 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 11 },
        { label: "Jarang", value: 74 },
        { label: "Kadang-kadang", value: 41 },
        { label: "Sering", value: 57 },
        { label: "Selalu", value: 105 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 94 },
        { label: "Jarang", value: 101 },
        { label: "Kadang-kadang", value: 47 },
        { label: "Sering", value: 76 },
        { label: "Selalu", value: 36 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 100 },
        { label: "Jarang", value: 67 },
        { label: "Kadang-kadang", value: 39 },
        { label: "Sering", value: 28 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 43 },
        { label: "Jarang", value: 97 },
        { label: "Kadang-kadang", value: 74 },
        { label: "Sering", value: 88 },
        { label: "Selalu", value: 49 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 60 },
        { label: "Jarang", value: 98 },
        { label: "Kadang-kadang", value: 52 },
        { label: "Sering", value: 74 },
        { label: "Selalu", value: 94 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 58 },
        { label: "Jarang", value: 76 },
        { label: "Kadang-kadang", value: 47 },
        { label: "Sering", value: 49 },
        { label: "Selalu", value: 51 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 30 },
        { label: "Jarang", value: 104 },
        { label: "Kadang-kadang", value: 83 },
        { label: "Sering", value: 73 },
        { label: "Selalu", value: 81 },
        { label: "Tidak Ingat", value: 7 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 63 },
        { label: "Jarang", value: 59 },
        { label: "Kadang-kadang", value: 52 },
        { label: "Sering", value: 84 },
        { label: "Selalu", value: 78 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 55 },
        { label: "Jarang", value: 69 },
        { label: "Kadang-kadang", value: 49 },
        { label: "Sering", value: 63 },
        { label: "Selalu", value: 45 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 34 },
        { label: "Jarang", value: 65 },
        { label: "Kadang-kadang", value: 63 },
        { label: "Sering", value: 100 },
        { label: "Selalu", value: 73 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Penggunaan Produk Tradisional Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 45 },
        { label: "Jarang", value: 87 },
        { label: "Kadang-kadang", value: 50 },
        { label: "Sering", value: 56 },
        { label: "Selalu", value: 41 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 38 },
        { label: "Jarang", value: 99 },
        { label: "Kadang-kadang", value: 41 },
        { label: "Sering", value: 36 },
        { label: "Selalu", value: 44 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 93 },
        { label: "Kadang-kadang", value: 53 },
        { label: "Sering", value: 57 },
        { label: "Selalu", value: 62 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
];

export const pemeranSeni = [
  {
    title: "Total Pemeran Pertunjukan Seni Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 1979 },
        { label: "Jarang", value: 707 },
        { label: "Kadang-kadang", value: 110 },
        { label: "Sering", value: 72 },
        { label: "Selalu", value: 29 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1993 },
        { label: "Jarang", value: 359 },
        { label: "Kadang-kadang", value: 83 },
        { label: "Sering", value: 48 },
        { label: "Selalu", value: 27 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1979 },
        { label: "Jarang", value: 576 },
        { label: "Kadang-kadang", value: 131 },
        { label: "Sering", value: 100 },
        { label: "Selalu", value: 52 },
        { label: "Tidak Ingat", value: 58 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 173 },
        { label: "Jarang", value: 69 },
        { label: "Kadang-kadang", value: 19 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 233 },
        { label: "Jarang", value: 70 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 12 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 164 },
        { label: "Jarang", value: 71 },
        { label: "Kadang-kadang", value: 16 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 7 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 237 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 234 },
        { label: "Jarang", value: 39 },
        { label: "Kadang-kadang", value: 5 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 243 },
        { label: "Jarang", value: 89 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 270 },
        { label: "Jarang", value: 77 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 215 },
        { label: "Jarang", value: 25 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 280 },
        { label: "Jarang", value: 63 },
        { label: "Kadang-kadang", value: 17 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 170 },
        { label: "Jarang", value: 58 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 185 },
        { label: "Jarang", value: 27 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 161 },
        { label: "Jarang", value: 44 },
        { label: "Kadang-kadang", value: 12 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 8 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 192 },
        { label: "Jarang", value: 71 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 260 },
        { label: "Jarang", value: 53 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 172 },
        { label: "Jarang", value: 71 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 165 },
        { label: "Jarang", value: 119 },
        { label: "Kadang-kadang", value: 46 },
        { label: "Sering", value: 22 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 96 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 27 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 88 },
        { label: "Jarang", value: 158 },
        { label: "Kadang-kadang", value: 48 },
        { label: "Sering", value: 37 },
        { label: "Selalu", value: 13 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 291 },
        { label: "Jarang", value: 66 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 228 },
        { label: "Jarang", value: 38 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 287 },
        { label: "Jarang", value: 56 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 215 },
        { label: "Jarang", value: 92 },
        { label: "Kadang-kadang", value: 19 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 222 },
        { label: "Jarang", value: 40 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 217 },
        { label: "Jarang", value: 72 },
        { label: "Kadang-kadang", value: 19 },
        { label: "Sering", value: 16 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 9 },
      ],
    ],
  },
  {
    title: "Total Pemeran Pertunjukan Seni Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 178 },
        { label: "Jarang", value: 77 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 196 },
        { label: "Jarang", value: 42 },
        { label: "Kadang-kadang", value: 12 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 181 },
        { label: "Jarang", value: 64 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
];

export const produksiSeni = [
  {
    title: "Total Produksi Pertunjukan Seni Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 2648 },
        { label: "Jarang", value: 174 },
        { label: "Kadang-kadang", value: 28 },
        { label: "Sering", value: 33 },
        { label: "Selalu", value: 14 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 2249 },
        { label: "Jarang", value: 182 },
        { label: "Kadang-kadang", value: 39 },
        { label: "Sering", value: 20 },
        { label: "Selalu", value: 20 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 2608 },
        { label: "Jarang", value: 147 },
        { label: "Kadang-kadang", value: 34 },
        { label: "Sering", value: 31 },
        { label: "Selalu", value: 21 },
        { label: "Tidak Ingat", value: 55 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 240 },
        { label: "Jarang", value: 28 },
        { label: "Kadang-kadang", value: 1 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 303 },
        { label: "Jarang", value: 27 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 233 },
        { label: "Jarang", value: 22 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 6 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 325 },
        { label: "Jarang", value: 37 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 254 },
        { label: "Jarang", value: 25 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 319 },
        { label: "Jarang", value: 27 },
        { label: "Kadang-kadang", value: 7 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 11 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 344 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 3 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 233 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 349 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 217 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 1 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 198 },
        { label: "Jarang", value: 19 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 212 },
        { label: "Jarang", value: 9 },
        { label: "Kadang-kadang", value: 5 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 8 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 267 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 281 },
        { label: "Jarang", value: 31 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 260 },
        { label: "Jarang", value: 14 },
        { label: "Kadang-kadang", value: 1 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 270 },
        { label: "Jarang", value: 53 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 208 },
        { label: "Jarang", value: 21 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 293 },
        { label: "Jarang", value: 25 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 359 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 1 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 258 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 3 },
        { label: "Sering", value: 0 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 352 },
        { label: "Jarang", value: 13 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 314 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 5 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 264 },
        { label: "Jarang", value: 12 },
        { label: "Kadang-kadang", value: 3 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 314 },
        { label: "Jarang", value: 8 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 8 },
      ],
    ],
  },
  {
    title: "Total Produksi Pertunjukan Seni Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 248 },
        { label: "Jarang", value: 16 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 223 },
        { label: "Jarang", value: 21 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 242 },
        { label: "Jarang", value: 24 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
];

export const tontonLangsungSeni = [
  {
    title: "Total Menonton Langsung Pertunjukan Seni Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 1070 },
        { label: "Jarang", value: 1111 },
        { label: "Kadang-kadang", value: 443 },
        { label: "Sering", value: 173 },
        { label: "Selalu", value: 100 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 924 },
        { label: "Jarang", value: 988 },
        { label: "Kadang-kadang", value: 362 },
        { label: "Sering", value: 146 },
        { label: "Selalu", value: 90 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 555 },
        { label: "Jarang", value: 1266 },
        { label: "Kadang-kadang", value: 463 },
        { label: "Sering", value: 366 },
        { label: "Selalu", value: 190 },
        { label: "Tidak Ingat", value: 56 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 87 },
        { label: "Jarang", value: 102 },
        { label: "Kadang-kadang", value: 51 },
        { label: "Sering", value: 21 },
        { label: "Selalu", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 122 },
        { label: "Jarang", value: 126 },
        { label: "Kadang-kadang", value: 59 },
        { label: "Sering", value: 20 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 41 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 56 },
        { label: "Sering", value: 44 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 103 },
        { label: "Jarang", value: 162 },
        { label: "Kadang-kadang", value: 62 },
        { label: "Sering", value: 24 },
        { label: "Selalu", value: 24 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 82 },
        { label: "Jarang", value: 139 },
        { label: "Kadang-kadang", value: 41 },
        { label: "Sering", value: 12 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 58 },
        { label: "Jarang", value: 174 },
        { label: "Kadang-kadang", value: 54 },
        { label: "Sering", value: 42 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 9 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 182 },
        { label: "Jarang", value: 128 },
        { label: "Kadang-kadang", value: 40 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 119 },
        { label: "Jarang", value: 75 },
        { label: "Kadang-kadang", value: 30 },
        { label: "Sering", value: 25 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 99 },
        { label: "Jarang", value: 144 },
        { label: "Kadang-kadang", value: 60 },
        { label: "Sering", value: 45 },
        { label: "Selalu", value: 25 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 85 },
        { label: "Jarang", value: 101 },
        { label: "Kadang-kadang", value: 30 },
        { label: "Sering", value: 18 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 80 },
        { label: "Jarang", value: 88 },
        { label: "Kadang-kadang", value: 37 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 43 },
        { label: "Jarang", value: 108 },
        { label: "Kadang-kadang", value: 36 },
        { label: "Sering", value: 33 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 86 },
        { label: "Jarang", value: 117 },
        { label: "Kadang-kadang", value: 56 },
        { label: "Sering", value: 19 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 101 },
        { label: "Jarang", value: 142 },
        { label: "Kadang-kadang", value: 45 },
        { label: "Sering", value: 19 },
        { label: "Selalu", value: 21 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 45 },
        { label: "Jarang", value: 138 },
        { label: "Kadang-kadang", value: 44 },
        { label: "Sering", value: 26 },
        { label: "Selalu", value: 30 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 165 },
        { label: "Jarang", value: 119 },
        { label: "Kadang-kadang", value: 46 },
        { label: "Sering", value: 22 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 96 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 27 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 88 },
        { label: "Jarang", value: 158 },
        { label: "Kadang-kadang", value: 48 },
        { label: "Sering", value: 37 },
        { label: "Selalu", value: 13 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 144 },
        { label: "Jarang", value: 179 },
        { label: "Kadang-kadang", value: 26 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 108 },
        { label: "Jarang", value: 124 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 26 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 114 },
        { label: "Jarang", value: 177 },
        { label: "Kadang-kadang", value: 31 },
        { label: "Sering", value: 25 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 13 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 120 },
        { label: "Jarang", value: 117 },
        { label: "Kadang-kadang", value: 64 },
        { label: "Sering", value: 22 },
        { label: "Selalu", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 113 },
        { label: "Jarang", value: 95 },
        { label: "Kadang-kadang", value: 50 },
        { label: "Sering", value: 15 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 63 },
        { label: "Jarang", value: 126 },
        { label: "Kadang-kadang", value: 59 },
        { label: "Sering", value: 69 },
        { label: "Selalu", value: 14 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title: "Total Menonton Langsung Pertunjukan Seni Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 94 },
        { label: "Jarang", value: 116 },
        { label: "Kadang-kadang", value: 42 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 14 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 87 },
        { label: "Jarang", value: 110 },
        { label: "Kadang-kadang", value: 35 },
        { label: "Sering", value: 18 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 31 },
        { label: "Jarang", value: 149 },
        { label: "Kadang-kadang", value: 45 },
        { label: "Sering", value: 31 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
];

export const tontonTidakLangsungSeni = [
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 2197 },
        { label: "Jarang", value: 337 },
        { label: "Kadang-kadang", value: 155 },
        { label: "Sering", value: 94 },
        { label: "Selalu", value: 114 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1936 },
        { label: "Jarang", value: 230 },
        { label: "Kadang-kadang", value: 119 },
        { label: "Sering", value: 102 },
        { label: "Selalu", value: 123 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 2552 },
        { label: "Jarang", value: 134 },
        { label: "Kadang-kadang", value: 73 },
        { label: "Sering", value: 44 },
        { label: "Selalu", value: 53 },
        { label: "Tidak Ingat", value: 40 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 211 },
        { label: "Jarang", value: 31 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 255 },
        { label: "Jarang", value: 47 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 20 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 231 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 228 },
        { label: "Jarang", value: 57 },
        { label: "Kadang-kadang", value: 37 },
        { label: "Sering", value: 19 },
        { label: "Selalu", value: 34 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 185 },
        { label: "Jarang", value: 35 },
        { label: "Kadang-kadang", value: 26 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 29 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 326 },
        { label: "Jarang", value: 19 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 15 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 312 },
        { label: "Jarang", value: 40 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 217 },
        { label: "Jarang", value: 23 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 342 },
        { label: "Jarang", value: 13 },
        { label: "Kadang-kadang", value: 12 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 186 },
        { label: "Jarang", value: 27 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 175 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 12 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 216 },
        { label: "Jarang", value: 10 },
        { label: "Kadang-kadang", value: 3 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 203 },
        { label: "Jarang", value: 28 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 28 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 233 },
        { label: "Jarang", value: 20 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 15 },
        { label: "Selalu", value: 42 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 259 },
        { label: "Jarang", value: 8 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 270 },
        { label: "Jarang", value: 53 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 208 },
        { label: "Jarang", value: 21 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 293 },
        { label: "Jarang", value: 25 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 349 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 257 },
        { label: "Jarang", value: 13 },
        { label: "Kadang-kadang", value: 3 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 357 },
        { label: "Jarang", value: 8 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 278 },
        { label: "Jarang", value: 29 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 234 },
        { label: "Jarang", value: 20 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 15 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 326 },
        { label: "Jarang", value: 3 },
        { label: "Kadang-kadang", value: 3 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menonton Tidak Langsung Pertunjukan Seni Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 203 },
        { label: "Jarang", value: 37 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 17 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 197 },
        { label: "Jarang", value: 22 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 219 },
        { label: "Jarang", value: 24 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 14 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
];

export const tontonLangsungSejarah = [
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 1350 },
        { label: "Jarang", value: 1231 },
        { label: "Kadang-kadang", value: 190 },
        { label: "Sering", value: 70 },
        { label: "Selalu", value: 56 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1145 },
        { label: "Jarang", value: 1026 },
        { label: "Kadang-kadang", value: 184 },
        { label: "Sering", value: 98 },
        { label: "Selalu", value: 57 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 821 },
        { label: "Jarang", value: 1439 },
        { label: "Kadang-kadang", value: 273 },
        { label: "Sering", value: 176 },
        { label: "Selalu", value: 95 },
        { label: "Tidak Ingat", value: 92 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 96 },
        { label: "Jarang", value: 139 },
        { label: "Kadang-kadang", value: 29 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 141 },
        { label: "Jarang", value: 114 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 60 },
        { label: "Jarang", value: 144 },
        { label: "Kadang-kadang", value: 32 },
        { label: "Sering", value: 22 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 13 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 195 },
        { label: "Jarang", value: 148 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 141 },
        { label: "Jarang", value: 114 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 113 },
        { label: "Jarang", value: 203 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 11 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 249 },
        { label: "Jarang", value: 103 },
        { label: "Kadang-kadang", value: 16 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 150 },
        { label: "Jarang", value: 81 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 149 },
        { label: "Jarang", value: 160 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 99 },
        { label: "Jarang", value: 123 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 93 },
        { label: "Jarang", value: 98 },
        { label: "Kadang-kadang", value: 22 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 63 },
        { label: "Jarang", value: 107 },
        { label: "Kadang-kadang", value: 27 },
        { label: "Sering", value: 27 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 7 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 104 },
        { label: "Jarang", value: 149 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 120 },
        { label: "Jarang", value: 160 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 70 },
        { label: "Jarang", value: 154 },
        { label: "Kadang-kadang", value: 31 },
        { label: "Sering", value: 15 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 6 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 255 },
        { label: "Jarang", value: 90 },
        { label: "Kadang-kadang", value: 7 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 176 },
        { label: "Jarang", value: 63 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 129 },
        { label: "Jarang", value: 171 },
        { label: "Kadang-kadang", value: 25 },
        { label: "Sering", value: 12 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 13 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 144 },
        { label: "Jarang", value: 179 },
        { label: "Kadang-kadang", value: 26 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 108 },
        { label: "Jarang", value: 124 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 26 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 114 },
        { label: "Jarang", value: 177 },
        { label: "Kadang-kadang", value: 31 },
        { label: "Sering", value: 25 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 13 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 92 },
        { label: "Jarang", value: 171 },
        { label: "Kadang-kadang", value: 49 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 108 },
        { label: "Jarang", value: 114 },
        { label: "Kadang-kadang", value: 38 },
        { label: "Sering", value: 14 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 71 },
        { label: "Jarang", value: 157 },
        { label: "Kadang-kadang", value: 49 },
        { label: "Sering", value: 35 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 13 },
      ],
    ],
  },
  {
    title: "Total Kunjungan ke Tempat Bersejarah Langsung Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 116 },
        { label: "Jarang", value: 129 },
        { label: "Kadang-kadang", value: 17 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 98 },
        { label: "Jarang", value: 128 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 51 },
        { label: "Jarang", value: 166 },
        { label: "Kadang-kadang", value: 35 },
        { label: "Sering", value: 12 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 6 },
      ],
    ],
  },
];

export const tontonTidakLangsungSejarah = [
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 2624 },
        { label: "Jarang", value: 150 },
        { label: "Kadang-kadang", value: 59 },
        { label: "Sering", value: 42 },
        { label: "Selalu", value: 22 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 2275 },
        { label: "Jarang", value: 125 },
        { label: "Kadang-kadang", value: 49 },
        { label: "Sering", value: 34 },
        { label: "Selalu", value: 27 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 2757 },
        { label: "Jarang", value: 71 },
        { label: "Kadang-kadang", value: 37 },
        { label: "Sering", value: 15 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 237 },
        { label: "Jarang", value: 21 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 314 },
        { label: "Jarang", value: 13 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 263 },
        { label: "Jarang", value: 6 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 332 },
        { label: "Jarang", value: 19 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 8 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 252 },
        { label: "Jarang", value: 113 },
        { label: "Kadang-kadang", value: 5 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 356 },
        { label: "Jarang", value: 11 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 330 },
        { label: "Jarang", value: 25 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 224 },
        { label: "Jarang", value: 19 },
        { label: "Kadang-kadang", value: 7 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 352 },
        { label: "Jarang", value: 11 },
        { label: "Kadang-kadang", value: 7 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 229 },
        { label: "Jarang", value: 6 },
        { label: "Kadang-kadang", value: 1 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 199 },
        { label: "Jarang", value: 14 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 228 },
        { label: "Jarang", value: 1 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 263 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 311 },
        { label: "Jarang", value: 9 },
        { label: "Kadang-kadang", value: 5 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 285 },
        { label: "Jarang", value: 2 },
        { label: "Kadang-kadang", value: 1 },
        { label: "Sering", value: 0 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 329 },
        { label: "Jarang", value: 16 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 238 },
        { label: "Jarang", value: 9 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 1 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 336 },
        { label: "Jarang", value: 9 },
        { label: "Kadang-kadang", value: 5 },
        { label: "Sering", value: 2 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 311 },
        { label: "Jarang", value: 12 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 258 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 328 },
        { label: "Jarang", value: 6 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 0 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 311 },
        { label: "Jarang", value: 12 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 258 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 328 },
        { label: "Jarang", value: 6 },
        { label: "Kadang-kadang", value: 2 },
        { label: "Sering", value: 0 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Mengunjungi Tidak Langsung Tempat Bersejarah Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 244 },
        { label: "Jarang", value: 21 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 222 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 252 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 7 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
];

export const jumlahDongeng = [
  {
    title: "Total Dongeng Diketahui Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 246 },
        { label: "1-5 buah", value: 1652 },
        { label: "6-10 buah", value: 780 },
        { label: "11-15 buah", value: 147 },
        { label: ">= 16 buah", value: 72 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 180 },
        { label: "1-5 buah", value: 1349 },
        { label: "6-10 buah", value: 729 },
        { label: "11-15 buah", value: 172 },
        { label: ">= 16 buah", value: 80 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 416 },
        { label: "1-5 buah", value: 1235 },
        { label: "6-10 buah", value: 733 },
        { label: "11-15 buah", value: 200 },
        { label: ">= 16 buah", value: 142 },
        { label: "Tidak Ingat", value: 170 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 19 },
        { label: "1-5 buah", value: 137 },
        { label: "6-10 buah", value: 88 },
        { label: "11-15 buah", value: 23 },
        { label: ">= 16 buah", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 26 },
        { label: "1-5 buah", value: 180 },
        { label: "6-10 buah", value: 102 },
        { label: "11-15 buah", value: 27 },
        { label: ">= 16 buah", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 27 },
        { label: "1-5 buah", value: 111 },
        { label: "6-10 buah", value: 81 },
        { label: "11-15 buah", value: 22 },
        { label: ">= 16 buah", value: 10 },
        { label: "Tidak Ingat", value: 24 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 37 },
        { label: "1-5 buah", value: 210 },
        { label: "6-10 buah", value: 100 },
        { label: "11-15 buah", value: 15 },
        { label: ">= 16 buah", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 27 },
        { label: "1-5 buah", value: 157 },
        { label: "6-10 buah", value: 80 },
        { label: "11-15 buah", value: 12 },
        { label: ">= 16 buah", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 71 },
        { label: "1-5 buah", value: 154 },
        { label: "6-10 buah", value: 77 },
        { label: "11-15 buah", value: 18 },
        { label: ">= 16 buah", value: 20 },
        { label: "Tidak Ingat", value: 35 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Buleleng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 35 },
        { label: "1-5 buah", value: 186 },
        { label: "6-10 buah", value: 121 },
        { label: "11-15 buah", value: 20 },
        { label: ">= 16 buah", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 20 },
        { label: "1-5 buah", value: 122 },
        { label: "6-10 buah", value: 81 },
        { label: "11-15 buah", value: 23 },
        { label: ">= 16 buah", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 68 },
        { label: "1-5 buah", value: 133 },
        { label: "6-10 buah", value: 99 },
        { label: "11-15 buah", value: 33 },
        { label: ">= 16 buah", value: 25 },
        { label: "Tidak Ingat", value: 16 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 8 },
        { label: "1-5 buah", value: 149 },
        { label: "6-10 buah", value: 63 },
        { label: "11-15 buah", value: 14 },
        { label: ">= 16 buah", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 6 },
        { label: "1-5 buah", value: 117 },
        { label: "6-10 buah", value: 75 },
        { label: "11-15 buah", value: 12 },
        { label: ">= 16 buah", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 21 },
        { label: "1-5 buah", value: 107 },
        { label: "6-10 buah", value: 54 },
        { label: "11-15 buah", value: 26 },
        { label: ">= 16 buah", value: 14 },
        { label: "Tidak Ingat", value: 15 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 26 },
        { label: "1-5 buah", value: 168 },
        { label: "6-10 buah", value: 78 },
        { label: "11-15 buah", value: 11 },
        { label: ">= 16 buah", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 23 },
        { label: "1-5 buah", value: 192 },
        { label: "6-10 buah", value: 90 },
        { label: "11-15 buah", value: 18 },
        { label: ">= 16 buah", value: 5 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 28 },
        { label: "1-5 buah", value: 133 },
        { label: "6-10 buah", value: 86 },
        { label: "11-15 buah", value: 19 },
        { label: ">= 16 buah", value: 15 },
        { label: "Tidak Ingat", value: 7 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 27 },
        { label: "1-5 buah", value: 237 },
        { label: "6-10 buah", value: 72 },
        { label: "11-15 buah", value: 11 },
        { label: ">= 16 buah", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 14 },
        { label: "1-5 buah", value: 149 },
        { label: "6-10 buah", value: 71 },
        { label: "11-15 buah", value: 12 },
        { label: ">= 16 buah", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 44 },
        { label: "1-5 buah", value: 173 },
        { label: "6-10 buah", value: 95 },
        { label: "11-15 buah", value: 15 },
        { label: ">= 16 buah", value: 7 },
        { label: "Tidak Ingat", value: 20 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 38 },
        { label: "1-5 buah", value: 210 },
        { label: "6-10 buah", value: 98 },
        { label: "11-15 buah", value: 21 },
        { label: ">= 16 buah", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 22 },
        { label: "1-5 buah", value: 140 },
        { label: "6-10 buah", value: 80 },
        { label: "11-15 buah", value: 28 },
        { label: ">= 16 buah", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 86 },
        { label: "1-5 buah", value: 160 },
        { label: "6-10 buah", value: 76 },
        { label: "11-15 buah", value: 23 },
        { label: ">= 16 buah", value: 16 },
        { label: "Tidak Ingat", value: 17 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 25 },
        { label: "1-5 buah", value: 191 },
        { label: "6-10 buah", value: 89 },
        { label: "11-15 buah", value: 22 },
        { label: ">= 16 buah", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 22 },
        { label: "1-5 buah", value: 146 },
        { label: "6-10 buah", value: 81 },
        { label: "11-15 buah", value: 23 },
        { label: ">= 16 buah", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 48 },
        { label: "1-5 buah", value: 155 },
        { label: "6-10 buah", value: 73 },
        { label: "11-15 buah", value: 19 },
        { label: ">= 16 buah", value: 15 },
        { label: "Tidak Ingat", value: 26 },
      ],
    ],
  },
  {
    title: "Total Dongeng Diketahui Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "0 buah", value: 31 },
        { label: "1-5 buah", value: 164 },
        { label: "6-10 buah", value: 71 },
        { label: "11-15 buah", value: 10 },
        { label: ">= 16 buah", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 20 },
        { label: "1-5 buah", value: 146 },
        { label: "6-10 buah", value: 69 },
        { label: "11-15 buah", value: 17 },
        { label: ">= 16 buah", value: 6 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "0 buah", value: 23 },
        { label: "1-5 buah", value: 109 },
        { label: "6-10 buah", value: 92 },
        { label: "11-15 buah", value: 25 },
        { label: ">= 16 buah", value: 20 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
];

export const menghadiriUpacara = [
  {
    title: "Total Menghadiri Upacara Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 308 },
        { label: "Jarang", value: 1192 },
        { label: "Kadang-kadang", value: 589 },
        { label: "Sering", value: 443 },
        { label: "Selalu", value: 365 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 194 },
        { label: "Jarang", value: 896 },
        { label: "Kadang-kadang", value: 563 },
        { label: "Sering", value: 455 },
        { label: "Selalu", value: 402 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 203 },
        { label: "Jarang", value: 855 },
        { label: "Kadang-kadang", value: 577 },
        { label: "Sering", value: 647 },
        { label: "Selalu", value: 582 },
        { label: "Tidak Ingat", value: 32 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 16 },
        { label: "Jarang", value: 98 },
        { label: "Kadang-kadang", value: 57 },
        { label: "Sering", value: 52 },
        { label: "Selalu", value: 51 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 10 },
        { label: "Jarang", value: 79 },
        { label: "Kadang-kadang", value: 95 },
        { label: "Sering", value: 84 },
        { label: "Selalu", value: 77 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 65 },
        { label: "Kadang-kadang", value: 58 },
        { label: "Sering", value: 66 },
        { label: "Selalu", value: 68 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 22 },
        { label: "Jarang", value: 136 },
        { label: "Kadang-kadang", value: 84 },
        { label: "Sering", value: 56 },
        { label: "Selalu", value: 77 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 17 },
        { label: "Jarang", value: 100 },
        { label: "Kadang-kadang", value: 65 },
        { label: "Sering", value: 44 },
        { label: "Selalu", value: 57 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 92 },
        { label: "Kadang-kadang", value: 82 },
        { label: "Sering", value: 64 },
        { label: "Selalu", value: 113 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 55 },
        { label: "Jarang", value: 159 },
        { label: "Kadang-kadang", value: 65 },
        { label: "Sering", value: 60 },
        { label: "Selalu", value: 36 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 34 },
        { label: "Jarang", value: 92 },
        { label: "Kadang-kadang", value: 46 },
        { label: "Sering", value: 49 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 110 },
        { label: "Kadang-kadang", value: 61 },
        { label: "Sering", value: 101 },
        { label: "Selalu", value: 72 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 49 },
        { label: "Jarang", value: 97 },
        { label: "Kadang-kadang", value: 39 },
        { label: "Sering", value: 37 },
        { label: "Selalu", value: 16 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 29 },
        { label: "Jarang", value: 95 },
        { label: "Kadang-kadang", value: 48 },
        { label: "Sering", value: 39 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 79 },
        { label: "Kadang-kadang", value: 43 },
        { label: "Sering", value: 63 },
        { label: "Selalu", value: 27 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 15 },
        { label: "Jarang", value: 117 },
        { label: "Kadang-kadang", value: 61 },
        { label: "Sering", value: 48 },
        { label: "Selalu", value: 47 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 18 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 81 },
        { label: "Sering", value: 46 },
        { label: "Selalu", value: 71 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 9 },
        { label: "Jarang", value: 87 },
        { label: "Kadang-kadang", value: 63 },
        { label: "Sering", value: 58 },
        { label: "Selalu", value: 70 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 58 },
        { label: "Jarang", value: 178 },
        { label: "Kadang-kadang", value: 64 },
        { label: "Sering", value: 36 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 25 },
        { label: "Jarang", value: 129 },
        { label: "Kadang-kadang", value: 46 },
        { label: "Sering", value: 38 },
        { label: "Selalu", value: 14 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 25 },
        { label: "Jarang", value: 111 },
        { label: "Kadang-kadang", value: 94 },
        { label: "Sering", value: 92 },
        { label: "Selalu", value: 29 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 36 },
        { label: "Jarang", value: 141 },
        { label: "Kadang-kadang", value: 80 },
        { label: "Sering", value: 70 },
        { label: "Selalu", value: 51 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 23 },
        { label: "Jarang", value: 93 },
        { label: "Kadang-kadang", value: 55 },
        { label: "Sering", value: 57 },
        { label: "Selalu", value: 53 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 40 },
        { label: "Jarang", value: 100 },
        { label: "Kadang-kadang", value: 69 },
        { label: "Sering", value: 66 },
        { label: "Selalu", value: 92 },
        { label: "Tidak Ingat", value: 11 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 34 },
        { label: "Jarang", value: 113 },
        { label: "Kadang-kadang", value: 83 },
        { label: "Sering", value: 54 },
        { label: "Selalu", value: 52 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 18 },
        { label: "Jarang", value: 84 },
        { label: "Kadang-kadang", value: 73 },
        { label: "Sering", value: 60 },
        { label: "Selalu", value: 46 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 94 },
        { label: "Kadang-kadang", value: 47 },
        { label: "Sering", value: 88 },
        { label: "Selalu", value: 78 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menghadiri Upacara Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 23 },
        { label: "Jarang", value: 153 },
        { label: "Kadang-kadang", value: 56 },
        { label: "Sering", value: 30 },
        { label: "Selalu", value: 17 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 20 },
        { label: "Jarang", value: 112 },
        { label: "Kadang-kadang", value: 54 },
        { label: "Sering", value: 38 },
        { label: "Selalu", value: 34 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 17 },
        { label: "Jarang", value: 117 },
        { label: "Kadang-kadang", value: 60 },
        { label: "Sering", value: 49 },
        { label: "Selalu", value: 33 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
];

export const partisipasiAktifUpacara = [
  {
    title: "Total Berpartisipasi Aktif Upacara Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 2177 },
        { label: "Jarang", value: 520 },
        { label: "Kadang-kadang", value: 106 },
        { label: "Sering", value: 59 },
        { label: "Selalu", value: 35 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1647 },
        { label: "Jarang", value: 567 },
        { label: "Kadang-kadang", value: 132 },
        { label: "Sering", value: 104 },
        { label: "Selalu", value: 60 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1590 },
        { label: "Jarang", value: 729 },
        { label: "Kadang-kadang", value: 197 },
        { label: "Sering", value: 198 },
        { label: "Selalu", value: 163 },
        { label: "Tidak Ingat", value: 19 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 198 },
        { label: "Jarang", value: 48 },
        { label: "Kadang-kadang", value: 16 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 186 },
        { label: "Jarang", value: 82 },
        { label: "Kadang-kadang", value: 40 },
        { label: "Sering", value: 26 },
        { label: "Selalu", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 131 },
        { label: "Jarang", value: 72 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 25 },
        { label: "Selalu", value: 24 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 228 },
        { label: "Jarang", value: 108 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 12 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 160 },
        { label: "Jarang", value: 78 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 203 },
        { label: "Jarang", value: 76 },
        { label: "Kadang-kadang", value: 27 },
        { label: "Sering", value: 30 },
        { label: "Selalu", value: 36 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 319 },
        { label: "Jarang", value: 45 },
        { label: "Kadang-kadang", value: 4 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 193 },
        { label: "Jarang", value: 45 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 207 },
        { label: "Jarang", value: 102 },
        { label: "Kadang-kadang", value: 27 },
        { label: "Sering", value: 23 },
        { label: "Selalu", value: 14 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 187 },
        { label: "Jarang", value: 35 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 163 },
        { label: "Jarang", value: 37 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 147 },
        { label: "Jarang", value: 45 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 7 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 184 },
        { label: "Jarang", value: 81 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 3 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 184 },
        { label: "Jarang", value: 109 },
        { label: "Kadang-kadang", value: 16 },
        { label: "Sering", value: 12 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 128 },
        { label: "Jarang", value: 90 },
        { label: "Kadang-kadang", value: 22 },
        { label: "Sering", value: 29 },
        { label: "Selalu", value: 17 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 307 },
        { label: "Jarang", value: 36 },
        { label: "Kadang-kadang", value: 8 },
        { label: "Sering", value: 3 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 200 },
        { label: "Jarang", value: 41 },
        { label: "Kadang-kadang", value: 7 },
        { label: "Sering", value: 4 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 212 },
        { label: "Jarang", value: 95 },
        { label: "Kadang-kadang", value: 21 },
        { label: "Sering", value: 18 },
        { label: "Selalu", value: 6 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 300 },
        { label: "Jarang", value: 54 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 1 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 188 },
        { label: "Jarang", value: 62 },
        { label: "Kadang-kadang", value: 12 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 221 },
        { label: "Jarang", value: 99 },
        { label: "Kadang-kadang", value: 19 },
        { label: "Sering", value: 16 },
        { label: "Selalu", value: 18 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 254 },
        { label: "Jarang", value: 48 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 6 },
        { label: "Selalu", value: 15 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 207 },
        { label: "Jarang", value: 44 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 11 },
        { label: "Selalu", value: 9 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 181 },
        { label: "Jarang", value: 69 },
        { label: "Kadang-kadang", value: 28 },
        { label: "Sering", value: 27 },
        { label: "Selalu", value: 30 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Berpartisipasi Aktif Upacara Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 200 },
        { label: "Jarang", value: 65 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 5 },
        { label: "Selalu", value: 0 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 166 },
        { label: "Jarang", value: 69 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 10 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 160 },
        { label: "Jarang", value: 81 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 9 },
        { label: "Selalu", value: 11 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
];

export const bahasaRumah = [
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 249 },
        { label: "Jarang", value: 311 },
        { label: "Kadang-kadang", value: 183 },
        { label: "Sering", value: 748 },
        { label: "Selalu", value: 1406 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 129 },
        { label: "Jarang", value: 173 },
        { label: "Kadang-kadang", value: 155 },
        { label: "Sering", value: 711 },
        { label: "Selalu", value: 1342 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 180 },
        { label: "Jarang", value: 57 },
        { label: "Kadang-kadang", value: 98 },
        { label: "Sering", value: 602 },
        { label: "Selalu", value: 1946 },
        { label: "Tidak Ingat", value: 13 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 11 },
        { label: "Jarang", value: 16 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 99 },
        { label: "Selalu", value: 134 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 5 },
        { label: "Jarang", value: 10 },
        { label: "Kadang-kadang", value: 22 },
        { label: "Sering", value: 103 },
        { label: "Selalu", value: 205 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 15 },
        { label: "Jarang", value: 6 },
        { label: "Kadang-kadang", value: 11 },
        { label: "Sering", value: 43 },
        { label: "Selalu", value: 198 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 7 },
        { label: "Jarang", value: 7 },
        { label: "Kadang-kadang", value: 14 },
        { label: "Sering", value: 74 },
        { label: "Selalu", value: 243 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1 },
        { label: "Jarang", value: 3 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 36 },
        { label: "Selalu", value: 224 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 2 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 48 },
        { label: "Selalu", value: 295 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 45 },
        { label: "Jarang", value: 47 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 90 },
        { label: "Selalu", value: 173 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 25 },
        { label: "Jarang", value: 31 },
        { label: "Kadang-kadang", value: 19 },
        { label: "Sering", value: 61 },
        { label: "Selalu", value: 123 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 9 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 91 },
        { label: "Selalu", value: 235 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 56 },
        { label: "Jarang", value: 78 },
        { label: "Kadang-kadang", value: 24 },
        { label: "Sering", value: 42 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 34 },
        { label: "Jarang", value: 56 },
        { label: "Kadang-kadang", value: 30 },
        { label: "Sering", value: 61 },
        { label: "Selalu", value: 42 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 18 },
        { label: "Jarang", value: 11 },
        { label: "Kadang-kadang", value: 18 },
        { label: "Sering", value: 66 },
        { label: "Selalu", value: 123 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 16 },
        { label: "Sering", value: 94 },
        { label: "Selalu", value: 149 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 7 },
        { label: "Jarang", value: 8 },
        { label: "Kadang-kadang", value: 16 },
        { label: "Sering", value: 113 },
        { label: "Selalu", value: 184 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 10 },
        { label: "Jarang", value: 3 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 77 },
        { label: "Selalu", value: 192 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 38 },
        { label: "Jarang", value: 23 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 88 },
        { label: "Selalu", value: 185 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 9 },
        { label: "Sering", value: 52 },
        { label: "Selalu", value: 159 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 25 },
        { label: "Jarang", value: 10 },
        { label: "Kadang-kadang", value: 6 },
        { label: "Sering", value: 82 },
        { label: "Selalu", value: 229 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 47 },
        { label: "Kadang-kadang", value: 30 },
        { label: "Sering", value: 92 },
        { label: "Selalu", value: 181 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 13 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 20 },
        { label: "Sering", value: 82 },
        { label: "Selalu", value: 148 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 23 },
        { label: "Jarang", value: 4 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 87 },
        { label: "Selalu", value: 250 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 42 },
        { label: "Kadang-kadang", value: 24 },
        { label: "Sering", value: 98 },
        { label: "Selalu", value: 144 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 11 },
        { label: "Jarang", value: 9 },
        { label: "Kadang-kadang", value: 19 },
        { label: "Sering", value: 82 },
        { label: "Selalu", value: 160 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 22 },
        { label: "Jarang", value: 10 },
        { label: "Kadang-kadang", value: 15 },
        { label: "Sering", value: 58 },
        { label: "Selalu", value: 228 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Rumah Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 22 },
        { label: "Jarang", value: 36 },
        { label: "Kadang-kadang", value: 21 },
        { label: "Sering", value: 71 },
        { label: "Selalu", value: 129 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 19 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 10 },
        { label: "Sering", value: 78 },
        { label: "Selalu", value: 134 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 18 },
        { label: "Jarang", value: 2 },
        { label: "Kadang-kadang", value: 13 },
        { label: "Sering", value: 50 },
        { label: "Selalu", value: 196 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
];

export const bahasaLingkungan = [
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 292 },
        { label: "Jarang", value: 486 },
        { label: "Kadang-kadang", value: 645 },
        { label: "Sering", value: 1046 },
        { label: "Selalu", value: 428 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 193 },
        { label: "Jarang", value: 515 },
        { label: "Kadang-kadang", value: 670 },
        { label: "Sering", value: 786 },
        { label: "Selalu", value: 346 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 188 },
        { label: "Jarang", value: 161 },
        { label: "Kadang-kadang", value: 401 },
        { label: "Sering", value: 911 },
        { label: "Selalu", value: 1225 },
        { label: "Tidak Ingat", value: 10 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 13 },
        { label: "Jarang", value: 36 },
        { label: "Kadang-kadang", value: 62 },
        { label: "Sering", value: 131 },
        { label: "Selalu", value: 32 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 65 },
        { label: "Kadang-kadang", value: 110 },
        { label: "Sering", value: 112 },
        { label: "Selalu", value: 44 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 15 },
        { label: "Jarang", value: 25 },
        { label: "Kadang-kadang", value: 44 },
        { label: "Sering", value: 71 },
        { label: "Selalu", value: 118 },
        { label: "Tidak Ingat", value: 2 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 9 },
        { label: "Jarang", value: 20 },
        { label: "Kadang-kadang", value: 70 },
        { label: "Sering", value: 196 },
        { label: "Selalu", value: 80 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 7 },
        { label: "Jarang", value: 37 },
        { label: "Kadang-kadang", value: 68 },
        { label: "Sering", value: 104 },
        { label: "Selalu", value: 67 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 10 },
        { label: "Kadang-kadang", value: 33 },
        { label: "Sering", value: 116 },
        { label: "Selalu", value: 192 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 47 },
        { label: "Jarang", value: 73 },
        { label: "Kadang-kadang", value: 62 },
        { label: "Sering", value: 138 },
        { label: "Selalu", value: 55 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 57 },
        { label: "Kadang-kadang", value: 47 },
        { label: "Sering", value: 94 },
        { label: "Selalu", value: 33 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 28 },
        { label: "Jarang", value: 20 },
        { label: "Kadang-kadang", value: 46 },
        { label: "Sering", value: 135 },
        { label: "Selalu", value: 144 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 72 },
        { label: "Jarang", value: 78 },
        { label: "Kadang-kadang", value: 40 },
        { label: "Sering", value: 35 },
        { label: "Selalu", value: 13 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 42 },
        { label: "Jarang", value: 87 },
        { label: "Kadang-kadang", value: 53 },
        { label: "Sering", value: 33 },
        { label: "Selalu", value: 8 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 22 },
        { label: "Jarang", value: 26 },
        { label: "Kadang-kadang", value: 31 },
        { label: "Sering", value: 73 },
        { label: "Selalu", value: 84 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 38 },
        { label: "Kadang-kadang", value: 74 },
        { label: "Sering", value: 116 },
        { label: "Selalu", value: 46 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 16 },
        { label: "Jarang", value: 61 },
        { label: "Kadang-kadang", value: 94 },
        { label: "Sering", value: 119 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 11 },
        { label: "Jarang", value: 15 },
        { label: "Kadang-kadang", value: 32 },
        { label: "Sering", value: 118 },
        { label: "Selalu", value: 112 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 40 },
        { label: "Jarang", value: 50 },
        { label: "Kadang-kadang", value: 85 },
        { label: "Sering", value: 133 },
        { label: "Selalu", value: 46 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 22 },
        { label: "Jarang", value: 40 },
        { label: "Kadang-kadang", value: 59 },
        { label: "Sering", value: 103 },
        { label: "Selalu", value: 28 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 26 },
        { label: "Jarang", value: 18 },
        { label: "Kadang-kadang", value: 53 },
        { label: "Sering", value: 122 },
        { label: "Selalu", value: 134 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 29 },
        { label: "Jarang", value: 77 },
        { label: "Kadang-kadang", value: 98 },
        { label: "Sering", value: 113 },
        { label: "Selalu", value: 61 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 59 },
        { label: "Kadang-kadang", value: 72 },
        { label: "Sering", value: 85 },
        { label: "Selalu", value: 44 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 23 },
        { label: "Jarang", value: 11 },
        { label: "Kadang-kadang", value: 66 },
        { label: "Sering", value: 122 },
        { label: "Selalu", value: 155 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 36 },
        { label: "Jarang", value: 64 },
        { label: "Kadang-kadang", value: 96 },
        { label: "Sering", value: 88 },
        { label: "Selalu", value: 52 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 18 },
        { label: "Jarang", value: 54 },
        { label: "Kadang-kadang", value: 95 },
        { label: "Sering", value: 68 },
        { label: "Selalu", value: 46 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 22 },
        { label: "Jarang", value: 17 },
        { label: "Kadang-kadang", value: 50 },
        { label: "Sering", value: 87 },
        { label: "Selalu", value: 159 },
        { label: "Tidak Ingat", value: 1 },
      ],
    ],
  },
  {
    title: "Total Menggunakan Bahasa Dearah di Lingkungan Pergaulan Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 32 },
        { label: "Jarang", value: 50 },
        { label: "Kadang-kadang", value: 58 },
        { label: "Sering", value: 96 },
        { label: "Selalu", value: 43 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 25 },
        { label: "Jarang", value: 55 },
        { label: "Kadang-kadang", value: 72 },
        { label: "Sering", value: 68 },
        { label: "Selalu", value: 38 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 20 },
        { label: "Jarang", value: 19 },
        { label: "Kadang-kadang", value: 46 },
        { label: "Sering", value: 67 },
        { label: "Selalu", value: 127 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
];

export const bahasaTidakLangsung = [
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Bali",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 546 },
        { label: "Jarang", value: 910 },
        { label: "Kadang-kadang", value: 584 },
        { label: "Sering", value: 628 },
        { label: "Selalu", value: 229 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 361 },
        { label: "Jarang", value: 829 },
        { label: "Kadang-kadang", value: 634 },
        { label: "Sering", value: 523 },
        { label: "Selalu", value: 163 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 1234 },
        { label: "Jarang", value: 403 },
        { label: "Kadang-kadang", value: 327 },
        { label: "Sering", value: 436 },
        { label: "Selalu", value: 462 },
        { label: "Tidak Ingat", value: 34 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Badung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 35 },
        { label: "Jarang", value: 93 },
        { label: "Kadang-kadang", value: 64 },
        { label: "Sering", value: 67 },
        { label: "Selalu", value: 15 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 36 },
        { label: "Jarang", value: 114 },
        { label: "Kadang-kadang", value: 105 },
        { label: "Sering", value: 71 },
        { label: "Selalu", value: 19 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 106 },
        { label: "Jarang", value: 41 },
        { label: "Kadang-kadang", value: 39 },
        { label: "Sering", value: 36 },
        { label: "Selalu", value: 48 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Bangli",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 24 },
        { label: "Jarang", value: 89 },
        { label: "Kadang-kadang", value: 98 },
        { label: "Sering", value: 108 },
        { label: "Selalu", value: 56 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 14 },
        { label: "Jarang", value: 77 },
        { label: "Kadang-kadang", value: 77 },
        { label: "Sering", value: 78 },
        { label: "Selalu", value: 37 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 179 },
        { label: "Jarang", value: 46 },
        { label: "Kadang-kadang", value: 40 },
        { label: "Sering", value: 41 },
        { label: "Selalu", value: 68 },
        { label: "Tidak Ingat", value: 4 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Bulelelng",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 81 },
        { label: "Jarang", value: 114 },
        { label: "Kadang-kadang", value: 51 },
        { label: "Sering", value: 99 },
        { label: "Selalu", value: 30 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 54 },
        { label: "Jarang", value: 93 },
        { label: "Kadang-kadang", value: 35 },
        { label: "Sering", value: 70 },
        { label: "Selalu", value: 7 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 169 },
        { label: "Jarang", value: 48 },
        { label: "Kadang-kadang", value: 37 },
        { label: "Sering", value: 71 },
        { label: "Selalu", value: 46 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Denpasar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 98 },
        { label: "Jarang", value: 92 },
        { label: "Kadang-kadang", value: 26 },
        { label: "Sering", value: 20 },
        { label: "Selalu", value: 2 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 75 },
        { label: "Jarang", value: 97 },
        { label: "Kadang-kadang", value: 34 },
        { label: "Sering", value: 13 },
        { label: "Selalu", value: 4 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 87 },
        { label: "Jarang", value: 47 },
        { label: "Kadang-kadang", value: 32 },
        { label: "Sering", value: 45 },
        { label: "Selalu", value: 23 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Gianyar",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 29 },
        { label: "Jarang", value: 94 },
        { label: "Kadang-kadang", value: 64 },
        { label: "Sering", value: 72 },
        { label: "Selalu", value: 29 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 21 },
        { label: "Jarang", value: 111 },
        { label: "Kadang-kadang", value: 87 },
        { label: "Sering", value: 85 },
        { label: "Selalu", value: 24 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 104 },
        { label: "Jarang", value: 29 },
        { label: "Kadang-kadang", value: 33 },
        { label: "Sering", value: 63 },
        { label: "Selalu", value: 54 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Jembrana",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 83 },
        { label: "Jarang", value: 87 },
        { label: "Kadang-kadang", value: 85 },
        { label: "Sering", value: 75 },
        { label: "Selalu", value: 24 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 39 },
        { label: "Jarang", value: 67 },
        { label: "Kadang-kadang", value: 88 },
        { label: "Sering", value: 48 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 158 },
        { label: "Jarang", value: 42 },
        { label: "Kadang-kadang", value: 26 },
        { label: "Sering", value: 63 },
        { label: "Selalu", value: 62 },
        { label: "Tidak Ingat", value: 3 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Karangasem",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 65 },
        { label: "Jarang", value: 129 },
        { label: "Kadang-kadang", value: 78 },
        { label: "Sering", value: 79 },
        { label: "Selalu", value: 27 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 32 },
        { label: "Jarang", value: 86 },
        { label: "Kadang-kadang", value: 78 },
        { label: "Sering", value: 62 },
        { label: "Selalu", value: 23 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 181 },
        { label: "Jarang", value: 49 },
        { label: "Kadang-kadang", value: 47 },
        { label: "Sering", value: 48 },
        { label: "Selalu", value: 48 },
        { label: "Tidak Ingat", value: 5 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Klungkung",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 79 },
        { label: "Jarang", value: 118 },
        { label: "Kadang-kadang", value: 61 },
        { label: "Sering", value: 47 },
        { label: "Selalu", value: 31 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 42 },
        { label: "Jarang", value: 96 },
        { label: "Kadang-kadang", value: 75 },
        { label: "Sering", value: 39 },
        { label: "Selalu", value: 29 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 145 },
        { label: "Jarang", value: 50 },
        { label: "Kadang-kadang", value: 32 },
        { label: "Sering", value: 34 },
        { label: "Selalu", value: 69 },
        { label: "Tidak Ingat", value: 6 },
      ],
    ],
  },
  {
    title:
      "Total Menggunakan Bahasa Dearah pada Komunikasi Tidak Langsung Tabanan",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFC837", "#6497B1", "#FA8295"],
    isPercentage: false,
    data: [
      [
        { label: "Tidak Pernah", value: 52 },
        { label: "Jarang", value: 94 },
        { label: "Kadang-kadang", value: 57 },
        { label: "Sering", value: 61 },
        { label: "Selalu", value: 15 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 48 },
        { label: "Jarang", value: 88 },
        { label: "Kadang-kadang", value: 55 },
        { label: "Sering", value: 57 },
        { label: "Selalu", value: 10 },
        { label: "Tidak Ingat", value: 0 },
      ],
      [
        { label: "Tidak Pernah", value: 108 },
        { label: "Jarang", value: 51 },
        { label: "Kadang-kadang", value: 41 },
        { label: "Sering", value: 35 },
        { label: "Selalu", value: 44 },
        { label: "Tidak Ingat", value: 0 },
      ],
    ],
  },
];

export const allKor2 = [
  menghadiriUpacara,
  partisipasiAktifUpacara,
  bahasaRumah,
  bahasaLingkungan,
  bahasaTidakLangsung,
  jumlahDongeng,
  tontonLangsungSejarah,
  tontonTidakLangsungSejarah,
  tontonLangsungSeni,
  tontonTidakLangsungSeni,
  pemeranSeni,
  produksiSeni,
  produkTradisional,
  permainanRakyat,
  skorData,
];
