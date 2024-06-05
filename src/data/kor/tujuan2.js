export const kategori = [
  {
    name: "GenZ anak",
    value: "anak",
  },
  {
    name: "GenZ Dewasa",
    value: "dewasa",
  },
  {
    name: "Orang Tua",
    value: "ortu",
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
    name: "Berpartisipasi aktif Upacara Adat",
    value: 1,
  },
  {
    name: "Menggunakan bahasa daerah",
    value: 2,
  },
];

// Data Visualisasi
export const groupBarChart1 = [
  {
    title: "Jumlah Pemilih Tetap Berdasarkan Jenis KelaminProvinsi DKI Jakarta",
    interpretasi:
      "Data mengenai jumlah pemilih tetap berdasarkan jenis kelaminProvinsi DKI Jakarta menunjukkan variasi yang signifikan.Jakarta Barat, pemilih laki-laki berjumlah 427, sementara perempuan hanya 258, menunjukkan dominasi laki-laki. Hal serupa terlihat11-15 buah dengan laki-laki 357 dan perempuan 257, sertaKepulauan Seribu dengan laki-laki 341 dan perempuan 269. Namun,1-5 buah dan 6-10 buah, jumlah pemilih perempuan sedikit lebih tinggi dengan masing-masing 339 perempuan dibandingkan 402 laki-laki1-5 buah, dan 426 perempuan dibandingkan 361 laki-laki6-10 buah.>= 16 buah, jumlah pemilih hampir seimbang dengan 356 laki-laki dan 350 perempuan. Secara keseluruhan, data ini menunjukkan variasi yang cukup beragam dengan beberapa wilayah mendominasi oleh pemilih laki-laki sementara yang lain menunjukkan keseimbangan atau dominasi perempuan.",
    label: ["Gen Z Anak", "Gen Z Dewasa", "Orang Tua"],
    warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
    isPercentage: true,
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
    warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
    isPercentage: true,
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
    warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
    isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
        warna: ["#FFBF00", "#FFDF1B", "#FFED46"],
        isPercentage: true,
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
