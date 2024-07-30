export const Bangli = {
  region: "Kabupaten Bangli", // Nama Daerah
  // Kategori untuk Filter Checkbox
  categories: ["Gen Z Anak", "Gen Z Dewasa"],
  // Data Gen Z Anak Beserta Orang Tua
  anak: [
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menghadiri Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kehadiran dalam upacara adat antara Gen Z (anak dan dewasa) dengan orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z anak jarang menghadiri upacara adat, sedangkan mayoritas orang tuanya dalam rentang usia yang sama selalu menghadiri upacara adat. Pada Gen Z dewasa dan  orang tuanya dalam rentang usia yang sama mayoritas jarang menghadiri upacara adat. Persentase orang tua yang sering dan selalu menghadiri upacara adat lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan adanya penurunan keaktifan dalam menghadiri upacara adat pada Gen Z dibandingkan orang tua mereka saat berada pada rentang usia yang sama (11-27 tahun) di Kabupaten Bangli.",
      // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", value: 25, percentage: 9.33 },
          { label: "Jarang", value: 144, percentage: 49.6 },
          { label: "Kadang-kadang", value: 83, percentage: 32.27 },
          { label: "Sering", value: 49, percentage: 5.33 },
          { label: "Selalu", value: 79, percentage: 3.47 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 16, percentage: 18.99 },
          { label: "Jarang", value: 94, percentage: 37.15 },
          { label: "Kadang-kadang", value: 77, percentage: 27.65 },
          { label: "Sering", value: 60, percentage: 9.22 },
          { label: "Selalu", value: 114, percentage: 6.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan partisipasi aktif dalam upacara adat antara Gen Z (anak dan dewasa) dengan orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tidak pernah berpartisipasi aktif dalam upacara adat. Persentase orang tua yang sering dan selalu berpartisipasi aktif dalam upacara adat lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan adanya penurunan keaktifan dalam menghadiri upacara adat pada Gen Z dibandingkan orang tua mereka saat berada pada rentang usia yang sama (11-27 tahun) di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 52.42, value: 236 },
          { label: "Jarang", percentage: 39.78, value: 104 },
          { label: "Kadang-kadang", percentage: 3.76, value: 14 },
          { label: "Sering", percentage: 1.88, value: 15 },
          { label: "Selalu", percentage: 2.15, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 194 },
          { label: "Jarang", percentage: 55.77, value: 81 },
          { label: "Kadang-kadang", percentage: 4.95, value: 23 },
          { label: "Sering", percentage: 3.85, value: 27 },
          { label: "Selalu", percentage: 4.40, value: 37 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di rumah, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah di rumah. Namun, persentase orang tua yang selalu menggunakan bahasa daerah di rumah masih lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan, pada kategori yang lebih rendah (sering, kadang-kadang, jarang), persentase gen Z lebih tinggi dibandingkan orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di rumah oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 88.53, value: 7 },
          { label: "Jarang", percentage: 5.07, value: 9 },
          { label: "Kadang-kadang", percentage: 2.67, value: 13 },
          { label: "Sering", percentage: 2.13, value: 77 },
          { label: "Selalu", percentage: 1.60, value: 274 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 21 },
          { label: "Jarang", percentage: 2.94, value: 2 },
          { label: "Kadang-kadang", percentage: 0.53, value: 5 },
          { label: "Sering", percentage: 0.27, value: 53 },
          { label: "Selalu", percentage: 1.07, value: 281 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di pergaulan, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak sering menggunakan bahasa daerah di pergaulan, sedangkan mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Pada Gen Z dewasa, mayoritas sering menggunakan bahasa daerah di pergaulan, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Persentase orang tua yang selalu menggunakan bahasa daerah di pergaulan lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di pergaulan oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 52.42, value: 9 },
          { label: "Jarang", percentage: 39.78, value: 22 },
          { label: "Kadang-kadang", percentage: 3.76, value: 69 },
          { label: "Sering", percentage: 1.88, value: 198 },
          { label: "Selalu", percentage: 2.15, value: 82 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 35 },
          { label: "Jarang", percentage: 55.77, value: 20 },
          { label: "Kadang-kadang", percentage: 4.95, value: 50 },
          { label: "Sering", percentage: 3.85, value: 188 },
          { label: "Selalu", percentage: 4.40, value: 301 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan penggunaan bahasa daerah secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak sering menggunakan bahasa daerah secara tidak langsung, sedangkan mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Pada Gen Z dewasa, mayoritas jarang menggunakan bahasa daerah secara tidak langsung, sementara mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Persentase orang tua pada kategori jarang sampai sering menggunakan bahasa daerah secara tidak langsung lebih rendah daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam menggunakan bahasa daerah secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan intensitas gen Z anak dalam menggunakan bahasa daerah secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama pada Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 88.53, value: 26 },
          { label: "Jarang", percentage: 5.07, value: 87 },
          { label: "Kadang-kadang", percentage: 2.67, value: 104 },
          { label: "Sering", percentage: 2.13, value: 107 },
          { label: "Selalu", percentage: 1.60, value: 56 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 284 },
          { label: "Jarang", percentage: 2.94, value: 75 },
          { label: "Kadang-kadang", percentage: 0.53, value: 66 },
          { label: "Sering", percentage: 0.27, value: 61 },
          { label: "Selalu", percentage: 1.07, value: 102 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan jumlah dongeng/cerita rakyat yang diketahui, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z yang mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z yang tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z anak dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen Z.",
      // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "0 buah", value: 42, percentage: 9.33 },
          { label: "1-5 buah", value: 108, percentage: 49.6 },
          { label: "6-10 buah", value: 106, percentage: 32.27 },
          { label: "11-15 buah", value: 14, percentage: 5.33 },
          { label: ">= 16 buah", value: 10, percentage: 3.47 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 72, percentage: 18.99 },
          { label: "1-5 buah", value: 147, percentage: 37.15 },
          { label: "6-10 buah", value: 71, percentage: 27.65 },
          { label: "11-15 buah", value: 20, percentage: 9.22 },
          { label: ">= 16 buah", value: 21, percentage: 6.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak dan dewasa) tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung, sedangkan orang tuanya dalam rentang usia yang sama jarang mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang hingga sering melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 52.42, value: 202 },
          { label: "Jarang", percentage: 39.78, value: 145 },
          { label: "Kadang-kadang", percentage: 3.76, value: 17 },
          { label: "Sering", percentage: 1.88, value: 8 },
          { label: "Selalu", percentage: 2.15, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 105 },
          { label: "Jarang", percentage: 55.77, value: 201 },
          { label: "Kadang-kadang", percentage: 4.95, value: 18 },
          { label: "Sering", percentage: 3.85, value: 14 },
          { label: "Selalu", percentage: 4.40, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara tidak langsung. Persentase orang tua yang tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 88.53, value: 341 },
          { label: "Jarang", percentage: 5.07, value: 19 },
          { label: "Kadang-kadang", percentage: 2.67, value: 10 },
          { label: "Sering", percentage: 2.13, value: 6 },
          { label: "Selalu", percentage: 1.60, value: 4 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 339 },
          { label: "Jarang", percentage: 2.94, value: 11 },
          { label: "Kadang-kadang", percentage: 0.53, value: 1 },
          { label: "Sering", percentage: 0.27, value: 1 },
          { label: "Selalu", percentage: 1.07, value: 3 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan menonton/menikmati pertunjukkan atau pameran seni secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama jarang menonton/menikmati pertunjukkan atau pameran seni secara langsung. Persentase orang tua yang tidak pernah menonton/menikmati pertunjukan atau pameran seni secara langsung lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk menonton/menikmati pertunjukan atau pameran seni secara langsung lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z menonton/menikmati pertunjukan atau pameran seni secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 52.42, value: 109 },
          { label: "Jarang", percentage: 39.78, value: 159 },
          { label: "Kadang-kadang", percentage: 3.76, value: 63 },
          { label: "Sering", percentage: 1.88, value: 24 },
          { label: "Selalu", percentage: 2.15, value: 25 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 57 },
          { label: "Jarang", percentage: 55.77, value: 167 },
          { label: "Kadang-kadang", percentage: 4.95, value: 56 },
          { label: "Sering", percentage: 3.85, value: 38 },
          { label: "Selalu", percentage: 4.40, value: 37 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan menonton/menikmati pertunjukkan atau pameran seni secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah menonton/menikmati pertunjukan atau pameran seni secara tidak langsung. Persentase orang tua pada kategori jarang sampai selalu menonton/menikmati pertunjukan atau pameran seni secara tidak langsung lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk menonton/menikmati pertunjukan atau pameran seni secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z menonton/menikmati pertunjukan atau pameran seni secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 88.53, value: 248 },
          { label: "Jarang", percentage: 5.07, value: 56 },
          { label: "Kadang-kadang", percentage: 2.67, value: 31 },
          { label: "Sering", percentage: 2.13, value: 13 },
          { label: "Selalu", percentage: 1.60, value: 32 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 316 },
          { label: "Jarang", percentage: 2.94, value: 20 },
          { label: "Kadang-kadang", percentage: 0.53, value: 8 },
          { label: "Sering", percentage: 0.27, value: 3 },
          { label: "Selalu", percentage: 1.07, value: 15 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Produksi Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam pertunjukkan atau pameran seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah terlibat pertunjukan atau pameran seni. Persentase orang tua yang tidak pernah terlibat pertunjukan atau pameran seni lebih tinggi dibandingkan dengan gen Z anak. Sedangkan persentase orang tua yang tidak pernah terlibat pertunjukan atau pameran seni lebih rendah dibandingkan dengan gen Z dewasa. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z anak dan penurunan keaktifan gen Z dewasa dalam keterlibatan pertunjukan atau pameran seni dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 52.42, value: 334 },
          { label: "Jarang", percentage: 39.78, value: 36 },
          { label: "Kadang-kadang", percentage: 3.76, value: 6 },
          { label: "Sering", percentage: 1.88, value: 3 },
          { label: "Selalu", percentage: 2.15, value: 1 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 311 },
          { label: "Jarang", percentage: 55.77, value: 28 },
          { label: "Kadang-kadang", percentage: 4.95, value: 7 },
          { label: "Sering", percentage: 3.85, value: 4 },
          { label: "Selalu", percentage: 4.40, value: 5 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan membeli/menggunakan dan/atau menjual produk tradisional Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z dan orang tuanya dalam rentang usia yang sama selalu membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Pada Gen Z dewasa, mayoritas jarang membeli/menggunakan dan/atau menjual produk tradisional Indonesia, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Persentase orang tua saat berusia sama pada kategori selalu lebih tinggi daripada gen Z dalam membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Hal ini menggambarkan bahwa frekuensi gen Z membeli/menggunakan dan/atau menjual produk tradisional Indonesia lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z untuk membeli/menggunakan dan/atau menjual produk tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 88.53, value: 29 },
          { label: "Jarang", percentage: 5.07, value: 92 },
          { label: "Kadang-kadang", percentage: 2.67, value: 62 },
          { label: "Sering", percentage: 2.13, value: 83 },
          { label: "Selalu", percentage: 1.60, value: 114 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 15 },
          { label: "Jarang", percentage: 2.94, value: 94 },
          { label: "Kadang-kadang", percentage: 0.53, value: 66 },
          { label: "Sering", percentage: 0.27, value: 68 },
          { label: "Selalu", percentage: 1.07, value: 119 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam mengikuti kegiatan permainan rakyat/olahraga tradisional dalam setahun terakhir, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z (baik anak maupun dewasa) tidak pernah mengikuti kegiatan permainan rakyat/olahraga tradisional, sedangkan orang tuanya dalam rentang usia yang sama selalu mengikuti kegiatan permainan rakyat/olahraga tradisional. Persentase orang tua saat berusia sama pada kategori sering dan selalu mengikuti kegiatan permainan rakyat/olahraga tradisional lebih tinggi daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam mengikuti kegiatan permainan rakyat/olahraga tradisional lebih rendah dibandingkan orang tua saat pada rentang usia yang sama. Kondisi ini menunjukkan adanya penurunan intensitas gen Z untuk mengikuti kegiatan permainan rakyat/olahraga tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.",
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 44.57, value: 128 },
          { label: "Jarang", percentage: 3.99, value: 108 },
          { label: "Kadang-kadang", percentage: 18.48, value: 52 },
          { label: "Sering", percentage: 16.30, value: 44 },
          { label: "Selalu", percentage: 16.67, value: 48 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 10.78, value: 39 },
          { label: "Jarang", percentage: 11.59, value: 36 },
          { label: "Kadang-kadang", percentage: 8.09, value: 30 },
          { label: "Sering", percentage: 18.33, value: 71 },
          { label: "Selalu", percentage: 51.21, value: 184 },
        ],
      ],
    },
  ],
  dewasa: [
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menghadiri Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kehadiran dalam upacara adat antara Gen Z (anak dan dewasa) dengan orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z anak jarang menghadiri upacara adat, sedangkan mayoritas orang tuanya dalam rentang usia yang sama sering menghadiri upacara adat. Pada Gen Z dewasa, mayoritas kadang-kadang menghadiri upacara adat, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu menghadiri upacara adat. Persentase orang tua yang sering dan selalu menghadiri upacara adat lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan adanya penurunan keaktifan dalam menghadiri upacara adat pada Gen Z dibandingkan orang tua mereka saat berada pada rentang usia yang sama (11-27 tahun) di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 9.54, value: 12 },
          { label: "Jarang", percentage: 55.48, value: 79 },
          { label: "Kadang-kadang", percentage: 28.27, value: 89 },
          { label: "Sering", percentage: 4.24, value: 81 },
          { label: "Selalu", percentage: 2.47, value: 72 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 10, percentage: 24.71 },
          { label: "Jarang", value: 49, percentage: 47.06 },
          { label: "Kadang-kadang", value: 64, percentage: 19.22 },
          { label: "Sering", value: 52, percentage: 47.06 },
          { label: "Selalu", value: 79, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan partisipasi aktif dalam upacara adat antara Gen Z (anak dan dewasa) dengan orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tidak pernah berpartisipasi aktif dalam upacara adat. Persentase orang tua yang sering dan selalu berpartisipasi aktif dalam upacara adat lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan adanya penurunan keaktifan dalam menghadiri upacara adat pada Gen Z dibandingkan orang tua mereka saat berada pada rentang usia yang sama (11-27 tahun) di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 187 },
          { label: "Jarang", percentage: 40.28, value: 76 },
          { label: "Kadang-kadang", percentage: 3.18, value: 34 },
          { label: "Sering", percentage: 2.83, value: 24 },
          { label: "Selalu", percentage: 3.89, value: 12 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 121 },
          { label: "Jarang", percentage: 41.29, value: 61 },
          { label: "Kadang-kadang", percentage: 30.83, value: 32 },
          { label: "Sering", percentage: 4.02, value: 21 },
          { label: "Selalu", percentage: 2.14, value: 21 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di rumah, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah di rumah. Namun, persentase orang tua yang selalu menggunakan bahasa daerah di rumah masih lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan, pada kategori yang lebih rendah (sering, kadang-kadang, jarang), persentase gen Z lebih tinggi dibandingkan orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di rumah oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 1 },
          { label: "Jarang", percentage: 29.50, value: 6 },
          { label: "Kadang-kadang", percentage: 1.31, value: 10 },
          { label: "Sering", percentage: 2.61, value: 86 },
          { label: "Selalu", percentage: 0.78, value: 189 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 12 },
          { label: "Jarang", percentage: 1.77, value: 3 },
          { label: "Kadang-kadang", percentage: 1.06, value: 4 },
          { label: "Sering", percentage: 1.06, value: 31 },
          { label: "Selalu", percentage: 0.71, value: 181 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di pergaulan, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak sering menggunakan bahasa daerah di pergaulan, sedangkan mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Pada Gen Z dewasa, mayoritas sering menggunakan bahasa daerah di pergaulan, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Persentase orang tua yang selalu menggunakan bahasa daerah di pergaulan lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di pergaulan oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 7 },
          { label: "Jarang", percentage: 40.28, value: 39 },
          { label: "Kadang-kadang", percentage: 3.18, value: 72 },
          { label: "Sering", percentage: 2.83, value: 108 },
          { label: "Selalu", percentage: 3.89, value: 66 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 35 },
          { label: "Jarang", percentage: 41.29, value: 20 },
          { label: "Kadang-kadang", percentage: 30.83, value: 50 },
          { label: "Sering", percentage: 4.02, value: 188 },
          { label: "Selalu", percentage: 2.14, value: 301 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak sering menggunakan bahasa daerah secara tidak langsung, sedangkan mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Pada Gen Z dewasa, mayoritas jarang menggunakan bahasa daerah secara tidak langsung, sementara mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Persentase orang tua pada kategori jarang sampai sering menggunakan bahasa daerah secara tidak langsung lebih rendah daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam menggunakan bahasa daerah secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan intensitas gen Z anak dalam menggunakan bahasa daerah secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama pada Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 17 },
          { label: "Jarang", percentage: 29.50, value: 83 },
          { label: "Kadang-kadang", percentage: 1.31, value: 80 },
          { label: "Sering", percentage: 2.61, value: 77 },
          { label: "Selalu", percentage: 0.78, value: 35 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 284 },
          { label: "Jarang", percentage: 1.77, value: 75 },
          { label: "Kadang-kadang", percentage: 1.06, value: 66 },
          { label: "Sering", percentage: 1.06, value: 61 },
          { label: "Selalu", percentage: 0.71, value: 182 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan jumlah dongeng/cerita rakyat yang diketahui, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z yang mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z yang tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z anak dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen Z.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "0 buah", percentage: 9.54, value: 28 },
          { label: "1-5 buah", percentage: 55.48, value: 165 },
          { label: "6-10 buah", percentage: 28.27, value: 81 },
          { label: "11-15 buah", percentage: 4.24, value: 12 },
          { label: ">= 16 buah", percentage: 2.47, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 55, percentage: 24.71 },
          { label: "1-5 buah", value: 102, percentage: 47.06 },
          { label: "6-10 buah", value: 37, percentage: 19.22 },
          { label: "11-15 buah", value: 8, percentage: 47.06 },
          { label: ">= 16 buah", value: 5, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak dan dewasa) tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung, sedangkan orang tuanya dalam rentang usia yang sama jarang mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang hingga sering melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 142 },
          { label: "Jarang", percentage: 40.28, value: 122 },
          { label: "Kadang-kadang", percentage: 3.18, value: 8 },
          { label: "Sering", percentage: 2.83, value: 9 },
          { label: "Selalu", percentage: 3.89, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 70 },
          { label: "Jarang", percentage: 41.29, value: 118 },
          { label: "Kadang-kadang", percentage: 30.83, value: 15 },
          { label: "Sering", percentage: 4.02, value: 12 },
          { label: "Selalu", percentage: 2.14, value: 7 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara tidak langsung. Persentase orang tua yang tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 258 },
          { label: "Jarang", percentage: 29.50, value: 15 },
          { label: "Kadang-kadang", percentage: 1.31, value: 6 },
          { label: "Sering", percentage: 2.61, value: 9 },
          { label: "Selalu", percentage: 0.78, value: 4 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 214 },
          { label: "Jarang", percentage: 1.77, value: 3 },
          { label: "Kadang-kadang", percentage: 1.06, value: 2 },
          { label: "Sering", percentage: 1.06, value: 3 },
          { label: "Selalu", percentage: 0.71, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan menonton/menikmati pertunjukkan atau pameran seni secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama jarang menonton/menikmati pertunjukkan atau pameran seni secara langsung. Persentase orang tua yang tidak pernah menonton/menikmati pertunjukan atau pameran seni secara langsung lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk menonton/menikmati pertunjukan atau pameran seni secara langsung lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z menonton/menikmati pertunjukan atau pameran seni secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 85 },
          { label: "Jarang", percentage: 40.28, value: 141 },
          { label: "Kadang-kadang", percentage: 3.18, value: 43 },
          { label: "Sering", percentage: 2.83, value: 14 },
          { label: "Selalu", percentage: 3.89, value: 9 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 44 },
          { label: "Jarang", percentage: 41.29, value: 110 },
          { label: "Kadang-kadang", percentage: 30.83, value: 30 },
          { label: "Sering", percentage: 4.02, value: 24 },
          { label: "Selalu", percentage: 2.14, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan menonton/menikmati pertunjukkan atau pameran seni secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah menonton/menikmati pertunjukan atau pameran seni secara tidak langsung. Persentase orang tua pada kategori jarang sampai selalu menonton/menikmati pertunjukan atau pameran seni secara tidak langsung lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk menonton/menikmati pertunjukan atau pameran seni secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z menonton/menikmati pertunjukan atau pameran seni secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 194 },
          { label: "Jarang", percentage: 29.50, value: 36 },
          { label: "Kadang-kadang", percentage: 1.31, value: 24 },
          { label: "Sering", percentage: 2.61, value: 10 },
          { label: "Selalu", percentage: 0.78, value: 28 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 202 },
          { label: "Jarang", percentage: 1.77, value: 8 },
          { label: "Kadang-kadang", percentage: 1.06, value: 6 },
          { label: "Sering", percentage: 1.06, value: 6 },
          { label: "Selalu", percentage: 0.71, value: 5 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Pemeran Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam pertunjukkan atau pameran seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah terlibat pertunjukan atau pameran seni. Persentase orang tua yang tidak pernah terlibat pertunjukan atau pameran seni lebih tinggi dibandingkan dengan gen Z anak. Sedangkan persentase orang tua yang tidak pernah terlibat pertunjukan atau pameran seni lebih rendah dibandingkan dengan gen Z dewasa. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z anak dan penurunan keaktifan gen Z dewasa dalam keterlibatan pertunjukan atau pameran seni dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 242 },
          { label: "Jarang", percentage: 40.28, value: 38 },
          { label: "Kadang-kadang", percentage: 3.18, value: 5 },
          { label: "Sering", percentage: 2.83, value: 4 },
          { label: "Selalu", percentage: 3.89, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 167 },
          { label: "Jarang", percentage: 41.29, value: 40 },
          { label: "Kadang-kadang", percentage: 30.83, value: 11 },
          { label: "Sering", percentage: 4.02, value: 6 },
          { label: "Selalu", percentage: 2.14, value: 5 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Produksi Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam produksi seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah terlibat produksi pertunjukan atau pameran seni. Persentase orang tua yang tidak pernah terlibat produksi pertunjukan atau pameran seni lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk terlibat produksi pertunjukan atau pameran seni lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z dalam keterlibatan produksi pertunjukan atau pameran seni dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 263 },
          { label: "Jarang", percentage: 29.50, value: 25 },
          { label: "Kadang-kadang", percentage: 1.31, value: 2 },
          { label: "Sering", percentage: 2.61, value: 2 },
          { label: "Selalu", percentage: 0.78, value: 0 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 203 },
          { label: "Jarang", percentage: 1.77, value: 17 },
          { label: "Kadang-kadang", percentage: 1.06, value: 3 },
          { label: "Sering", percentage: 1.06, value: 3 },
          { label: "Selalu", percentage: 0.71, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan membeli/menggunakan dan/atau menjual produk tradisional Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z dan orang tuanya dalam rentang usia yang sama selalu membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Pada Gen Z dewasa, mayoritas jarang membeli/menggunakan dan/atau menjual produk tradisional Indonesia, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Persentase orang tua saat berusia sama pada kategori selalu lebih tinggi daripada gen Z dalam membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Hal ini menggambarkan bahwa frekuensi gen Z membeli/menggunakan dan/atau menjual produk tradisional Indonesia lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z untuk membeli/menggunakan dan/atau menjual produk tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 5.65, value: 17 },
          { label: "Jarang", percentage: 27.56, value: 81 },
          { label: "Kadang-kadang", percentage: 20.85, value: 61 },
          { label: "Sering", percentage: 19.43, value: 59 },
          { label: "Selalu", percentage: 26.50, value: 74 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 3.93, value: 9 },
          { label: "Jarang", percentage: 22.14, value: 48 },
          { label: "Kadang-kadang", percentage: 22.14, value: 51 },
          { label: "Sering", percentage: 22.86, value: 54 },
          { label: "Selalu", percentage: 28.93, value: 68 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam mengikuti kegiatan permainan rakyat/olahraga tradisional dalam setahun terakhir, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z (baik anak maupun dewasa) tidak pernah mengikuti kegiatan permainan rakyat/olahraga tradisional, sedangkan orang tuanya dalam rentang usia yang sama selalu mengikuti kegiatan permainan rakyat/olahraga tradisional. Persentase orang tua saat berusia sama pada kategori sering dan selalu mengikuti kegiatan permainan rakyat/olahraga tradisional lebih tinggi daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam mengikuti kegiatan permainan rakyat/olahraga tradisional lebih rendah dibandingkan orang tua saat pada rentang usia yang sama. Kondisi ini menunjukkan adanya penurunan intensitas gen Z untuk mengikuti kegiatan permainan rakyat/olahraga tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Bangli.",
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 71.02, value: 207 },
          { label: "Jarang", percentage: 20.14, value: 58 },
          { label: "Kadang-kadang", percentage: 4.59, value: 14 },
          { label: "Sering", percentage: 2.12, value: 6 },
          { label: "Selalu", percentage: 2.12, value: 7 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 11.07, value: 23 },
          { label: "Jarang", percentage: 8.93, value: 19 },
          { label: "Kadang-kadang", percentage: 10.36, value: 26 },
          { label: "Sering", percentage: 20.36, value: 51 },
          { label: "Selalu", percentage: 49.29, value: 110 },
        ],
      ],
    },
  ],
};
