export const Gianyar = {
  region: "Kabupaten Gianyar", // Nama Daerah
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
        "perbandingan kehadiran dalam upacara adat, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong jarang menghadiri upacara adat. Persentase kehadiran yang tergolong kategori sering dan selalu memang lebih rendah dari kategori jarang. Namun, persentase orang tua yang tergolong sering hingga selalu menghadiri upacara adat lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal keaktifan gen Z dalam menghadiri upacara adat dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.",
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
          { label: "Tidak Pernah", value: 15, percentage: 6.93 },
          { label: "Jarang", value: 117, percentage: 50 },
          { label: "Kadang-kadang", value: 61, percentage: 32.12 },
          { label: "Sering", value: 48, percentage: 8.39 },
          { label: "Selalu", value: 47, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 9, percentage: 10.76 },
          { label: "Jarang", value: 87, percentage: 44.22 },
          { label: "Kadang-kadang", value: 63, percentage: 32.27 },
          { label: "Sering", value: 58, percentage: 8.76 },
          { label: "Selalu", value: 70, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan antara gen Z anak maupun gen Z dewasa terhadap orang tuanya dalam hal partisipasi aktif dalam upacara adat menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong tidak pernah berpartisipasi aktif dalam upacara adat. Seiring dengan kategori yang semakin tinggi, persentase partisipasi aktif dalam upacara adat justru menurun. Namun, persentase orang tua yang tergolong kadang-kadang sampai selalu berpartisipasi aktif dalam upacara adat lebih tinggi dari pada gen Z (baik anak maupun dewasa) dan persentase orang tua yang tergolong tidak pernah berpartisipasi aktif dalam upacara adat lebih rendah daripada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal partisipasi aktif gen Z dalam upacara adat dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 184 },
          { label: "Jarang", percentage: 50.73, value: 81 },
          { label: "Kadang-kadang", percentage: 10.58, value: 15 },
          { label: "Sering", percentage: 2.55, value: 5 },
          { label: "Selalu", percentage: 1.09, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 128 },
          { label: "Jarang", percentage: 54.96, value: 90 },
          { label: "Kadang-kadang", percentage: 12.21, value: 22 },
          { label: "Sering", percentage: 8.4, value: 29 },
          { label: "Selalu", percentage: 1.53, value: 17 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan penggunaan bahasa daerah di rumah, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah di rumah. Namun, persentase orang tua yang selalu menggunakan bahasa daerah di rumah masih lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan, pada kategori yang lebih rendah (sering, kadang-kadang, jarang), persentase gen Z lebih tinggi dibandingkan orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di rumah oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 14 },
          { label: "Jarang", percentage: 50.73, value: 15 },
          { label: "Kadang-kadang", percentage: 10.58, value: 16 },
          { label: "Sering", percentage: 2.55, value: 94 },
          { label: "Selalu", percentage: 1.09, value: 149 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 10 },
          { label: "Jarang", percentage: 54.96, value: 3 },
          { label: "Kadang-kadang", percentage: 12.21, value: 6 },
          { label: "Sering", percentage: 8.4, value: 77 },
          { label: "Selalu", percentage: 1.53, value: 192 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan penggunaan bahasa daerah dalam pergaulan, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) sering menggunakan bahasa daerah dalam pergaulan. Sedangkan, orang tua saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah dalam pergaulan. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah dalam pergaulan oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.",
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
          { label: "Tidak Pernah", value: 14, percentage: 6.93 },
          { label: "Jarang", value: 38, percentage: 50 },
          { label: "Kadang-kadang", value: 74, percentage: 32.12 },
          { label: "Sering", value: 116, percentage: 8.39 },
          { label: "Selalu", value: 46, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 11, percentage: 10.76 },
          { label: "Jarang", value: 15, percentage: 44.22 },
          { label: "Kadang-kadang", value: 32, percentage: 32.27 },
          { label: "Sering", value: 118, percentage: 8.76 },
          { label: "Selalu", value: 112, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan penggunaan bahasa daerah secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) tergolong jarang menggunakan bahasa daerah secara tidak langsung. Sedangkan, mayoritas orang tua saat dalam rentang usia yang sama tergolong tidak pernah menggunakan bahasa daerah secara tidak langsung. Walaupun demikian, persentase orang tua yang selalu menggunakan bahasa daerah secara tidak langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah secara tidak langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.",
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
          { label: "Tidak Pernah", value: 29, percentage: 6.93 },
          { label: "Jarang", value: 94, percentage: 50 },
          { label: "Kadang-kadang", value: 64, percentage: 32.12 },
          { label: "Sering", value: 72, percentage: 8.39 },
          { label: "Selalu", value: 29, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 104, percentage: 10.76 },
          { label: "Jarang", value: 94, percentage: 44.22 },
          { label: "Kadang-kadang", value: 64, percentage: 32.27 },
          { label: "Sering", value: 72, percentage: 8.76 },
          { label: "Selalu", value: 29, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan jumlah dongeng/cerita rakyat yang diketahui, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong mengetahui 1-5 buah dongeng/cerita rakyat. Namun, persentase orang tua yang mengetahui lebih dari 10 buah dongeng lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan pada jumlah dongeng/cerita rakyat yang lebih sedikit (1-5 buah) menunjukan persentase gen Z yang lebih tinggi. Hal ini mengindikasikan terjadinya pergeseran dalam hal pengetahuan gen Z mengenai dongeng/cerita rakyat dibandingkan dengan orang tuanya saat dalam rentang usia yang sama. ",
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
          { label: "0 buah", value: 26, percentage: 6.93 },
          { label: "1-5 buah", value: 168, percentage: 50 },
          { label: "6-10 buah", value: 78, percentage: 32.12 },
          { label: "11-15 buah", value: 11, percentage: 8.39 },
          { label: ">= 16 buah", value: 5, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 28, percentage: 10.76 },
          { label: "1-5 buah", value: 133, percentage: 44.22 },
          { label: "6-10 buah", value: 86, percentage: 32.27 },
          { label: "11-15 buah", value: 19, percentage: 8.76 },
          { label: ">= 16 buah", value: 15, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        " perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukan kondisi yang sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tua saat rentang umur yang sama tergolong jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua yang tergolong jarang hingga selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung oleh gen Z dibandingkan dengan orangtuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 104 },
          { label: "Jarang", percentage: 50.73, value: 149 },
          { label: "Kadang-kadang", percentage: 10.58, value: 20 },
          { label: "Sering", percentage: 2.55, value: 5 },
          { label: "Selalu", percentage: 1.09, value: 10 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 70 },
          { label: "Jarang", percentage: 54.96, value: 154 },
          { label: "Kadang-kadang", percentage: 12.21, value: 31 },
          { label: "Sering", percentage: 8.4, value: 15 },
          { label: "Selalu", percentage: 1.53, value: 12 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung. Persentase orang tua yang tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan tidak terjadinya pergeseran dalam hal melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 263 },
          { label: "Jarang", percentage: 50.73, value: 15 },
          { label: "Kadang-kadang", percentage: 10.58, value: 6 },
          { label: "Sering", percentage: 2.55, value: 2 },
          { label: "Selalu", percentage: 1.09, value: 2 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 285 },
          { label: "Jarang", percentage: 54.96, value: 2 },
          { label: "Kadang-kadang", percentage: 12.21, value: 1 },
          { label: "Sering", percentage: 8.4, value: 0 },
          { label: "Selalu", percentage: 1.53, value: 0 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
      "perbandingan menonton/menikmati pertunjukan atau tradisi seni secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong jarang menonton/menikmati pertunjukan atau tradisi seni secara langsung. Namun, persentase orang tua yang selalu menonton/menikmati pertunjukan atau tradisi seni secara langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal menonton/menikmati pertunjukan atau tradisi seni secara langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 86 },
          { label: "Jarang", percentage: 50.73, value: 117 },
          { label: "Kadang-kadang", percentage: 10.58, value: 56 },
          { label: "Sering", percentage: 2.55, value: 19 },
          { label: "Selalu", percentage: 1.09, value: 10 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 45 },
          { label: "Jarang", percentage: 54.96, value: 138 },
          { label: "Kadang-kadang", percentage: 12.21, value: 44 },
          { label: "Sering", percentage: 8.4, value: 26 },
          { label: "Selalu", percentage: 1.53, value: 30 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
      "perbandingan menonton/menikmati pertunjukan atau tradisi seni secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak dan dewasa) dan orang tuanya tergolong tidak pernah menonton/menikmati pertunjukan seni secara tidak langsung. Persentase orang tua yang tidak pernah menonton/menikmati pertunjukan atau tradisi seni secara tidak langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan tidak terjadinya pergeseran dalam hal menonton/menikmati pertunjukan atau tradisi seni secara tidak langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 203 },
          { label: "Jarang", percentage: 50.73, value: 28 },
          { label: "Kadang-kadang", percentage: 10.58, value: 18 },
          { label: "Sering", percentage: 2.55, value: 11 },
          { label: "Selalu", percentage: 1.09, value: 28 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 259 },
          { label: "Jarang", percentage: 54.96, value: 8 },
          { label: "Kadang-kadang", percentage: 12.21, value: 6 },
          { label: "Sering", percentage: 8.4, value: 4 },
          { label: "Selalu", percentage: 1.53, value: 7 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Pemeran Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan keterlibatan dalam pertunjukan/pameran seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong tidak pernah terlibat dalam pertunjukan/pameran seni dan tradisi Indonesia. Persentase orang tua yang tidak pernah terlibat dalam pertunjukan/pameran seni dan tradisi Indonesia lebih rendah dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal keterlibatan dalam pertunjukan/pameran seni dan tradisi Indonesia.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 192 },
          { label: "Jarang", percentage: 50.73, value: 71 },
          { label: "Kadang-kadang", percentage: 10.58, value: 15 },
          { label: "Sering", percentage: 2.55, value: 7 },
          { label: "Selalu", percentage: 1.09, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 172 },
          { label: "Jarang", percentage: 54.96, value: 71 },
          { label: "Kadang-kadang", percentage: 12.21, value: 20 },
          { label: "Sering", percentage: 8.4, value: 6 },
          { label: "Selalu", percentage: 1.53, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Produksi Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan keterlibatan dalam produksi seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong tidak pernah terlibat dalam produksi seni dan tradisi Indonesia. Persentase orang tua yang selalu terlibat dalam produksi seni dan tradisi Indonesia lebih tinggi daripada gen Z anak dan lebih rendah daripada gen Z dewasa. Hal ini mengindikasikan terjadinya pergeseran dalam hal keterlibatan dalam produksi seni dan tradisi Indonesia oleh gen Z  anak dibandingkan dengan orang tuanya saat dalam rentang usia yang sama dan tidak terjadinya pergeseran dalam hal keterlibatan dalam produksi seni dan tradisi Indonesia oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 267 },
          { label: "Jarang", percentage: 50.73, value: 15 },
          { label: "Kadang-kadang", percentage: 10.58, value: 4 },
          { label: "Sering", percentage: 2.55, value: 2 },
          { label: "Selalu", percentage: 1.09, value: 0 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 260 },
          { label: "Jarang", percentage: 54.96, value: 14 },
          { label: "Kadang-kadang", percentage: 12.21, value: 1 },
          { label: "Sering", percentage: 8.4, value: 8 },
          { label: "Selalu", percentage: 1.53, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan keterlibatan dalam membeli/menggunakan dan/ atau menjual produk tradisional pada gen Z anak dengan Z dewasa terhadap orang tuanya menunjukan kondisi yang hampir sama. Pada gen Z (baik anak dan dewasa) dan orang tua saat rentang umur yang sama mayoritas tergolong selalu membeli/menggunakan dan/atau menjual produk tradisional. Namun, pada gen Z anak yang tergolong sering hingga selalu membeli/menggunakan dan/atau menjual produk tradisional lebih sedikit dari pada orang tua, sedangkan pada gen Z dewasa yang tergolong sering hingga selalu membeli/menggunakan dan/atau menjual produk tradisional lebih banyak dari pada orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal membeli/menggunakan dan/atau menjual produk tradisional oleh gen Z anak dibandingkan dengan orang tuanya saat dalam rentang usia yang sama serta mengindikasikan tidak terjadinya pergeseran dalam hal membeli/menggunakan dan/atau menjual produk tradisional oleh gen Z dewasa dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 9.85, value: 18 },
          { label: "Jarang", percentage: 20.07, value: 64 },
          { label: "Kadang-kadang", percentage: 21.53, value: 39 },
          { label: "Sering", percentage: 26.64, value: 54 },
          { label: "Selalu", percentage: 21.9, value: 113 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 5.99, value: 11 },
          { label: "Jarang", percentage: 20.22, value: 74 },
          { label: "Kadang-kadang", percentage: 20.97, value: 41 },
          { label: "Sering", percentage: 28.84, value: 57 },
          { label: "Selalu", percentage: 23.97, value: 105 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan mengikuti kegiatan permainan rakyat/olahraga tradisional pada gen Z anak dan gen Z dewasa memiliki kondisi yang cukup berbeda. Mayoritas orang tua dari gen Z (baik anak maupun dewasa) saat memiliki usia sama tergolong selalu mengikuti kegiatan permainan rakyat/olahraga tradisional. Mayoritas gen Z anak tergolong jarang mengikuti kegiatan permainan rakyat/olahraga tradisional. Sedangkan, mayoritas gen Z dewasa tergolong tidak pernah mengikuti kegiatan permainan rakyat/olahraga tradisional. Walaupun demikian, orang tua yang tergolong selalu mengikuti kegiatan permainan rakyat/olahraga tradisional lebih banyak dibandingkan gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal mengikuti kegiatan permainan rakyat/olahraga tradisional oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama. ",
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 30.29, value: 74 },
          { label: "Jarang", percentage: 33.58, value: 95 },
          { label: "Kadang-kadang", percentage: 14.6, value: 35 },
          { label: "Sering", percentage: 11.68, value: 44 },
          { label: "Selalu", percentage: 9.85, value: 40 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 6.27, value: 21 },
          { label: "Jarang", percentage: 13.28, value: 35 },
          { label: "Kadang-kadang", percentage: 17.71, value: 27 },
          { label: "Sering", percentage: 29.15, value: 64 },
          { label: "Selalu", percentage: 33.58, value: 140 },
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
        " perbandingan kehadiran dalam upacara adat, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong jarang menghadiri upacara adat. Persentase kehadiran yang tergolong kategori sering dan selalu memang lebih rendah dari kategori jarang. Namun, persentase orang tua yang tergolong sering hingga selalu menghadiri upacara adat lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal keaktifan gen Z dalam menghadiri upacara adat dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak pernah", percentage: 9.54, value: 18 },
          { label: "Jarang", percentage: 55.48, value: 112 },
          { label: "Kadang-kadang", percentage: 28.27, value: 81 },
          { label: "Sering", percentage: 4.24, value: 46 },
          { label: "Selalu", percentage: 2.47, value: 71 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak pernah", value: 18, percentage: 24.71 },
          { label: "Jarang", value: 106, percentage: 47.06 },
          { label: "Kadang-kadang", value: 79, percentage: 19.22 },
          { label: "Sering", value: 49, percentage: 47.06 },
          { label: "Selalu", value: 74, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan antara gen Z anak maupun gen Z dewasa terhadap orang tuanya dalam hal partisipasi aktif dalam upacara adat menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong tidak pernah berpartisipasi aktif dalam upacara adat. Seiring dengan kategori yang semakin tinggi, persentase partisipasi aktif dalam upacara adat justru menurun. Namun, persentase orang tua yang tergolong kadang-kadang sampai selalu berpartisipasi aktif dalam upacara adat lebih tinggi dari pada gen Z (baik anak maupun dewasa) dan persentase orang tua yang tergolong tidak pernah berpartisipasi aktif dalam upacara adat lebih rendah daripada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal partisipasi aktif gen Z dalam upacara adat dibandingkan dengan orang tuanya saat dalam rentang usia yang sama. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 184 },
          { label: "Jarang", percentage: 43.74, value: 109 },
          { label: "Kadang-kadang", percentage: 8.99, value: 16 },
          { label: "Sering", percentage: 3.48, value: 12 },
          { label: "Selalu", percentage: 2.03, value: 7 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 145 },
          { label: "Jarang", percentage: 56.76, value: 100 },
          { label: "Kadang-kadang", percentage: 15.62, value: 33 },
          { label: "Sering", percentage: 5.71, value: 25 },
          { label: "Selalu", percentage: 2.4, value: 23 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        " perbandingan penggunaan bahasa daerah di rumah, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah di rumah. Namun, persentase orang tua yang selalu menggunakan bahasa daerah di rumah masih lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan, pada kategori yang lebih rendah (sering, kadang-kadang, jarang), persentase gen Z lebih tinggi dibandingkan orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di rumah oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 7 },
          { label: "Jarang", percentage: 43.74, value: 8 },
          { label: "Kadang-kadang", percentage: 8.99, value: 16 },
          { label: "Sering", percentage: 3.48, value: 113 },
          { label: "Selalu", percentage: 2.03, value: 184 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 17 },
          { label: "Jarang", percentage: 56.76, value: 5 },
          { label: "Kadang-kadang", percentage: 15.62, value: 7 },
          { label: "Sering", percentage: 5.71, value: 68 },
          { label: "Selalu", percentage: 2.4, value: 230 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan penggunaan bahasa daerah dalam pergaulan, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) sering menggunakan bahasa daerah dalam pergaulan. Sedangkan, orang tua saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah dalam pergaulan. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah dalam pergaulan oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 16 },
          { label: "Jarang", percentage: 43.74, value: 61 },
          { label: "Kadang-kadang", percentage: 8.99, value: 94 },
          { label: "Sering", percentage: 3.48, value: 119 },
          { label: "Selalu", percentage: 2.03, value: 38 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 18 },
          { label: "Jarang", percentage: 56.76, value: 13 },
          { label: "Kadang-kadang", percentage: 15.62, value: 36 },
          { label: "Sering", percentage: 5.71, value: 130 },
          { label: "Selalu", percentage: 2.4, value: 130 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan penggunaan bahasa daerah secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) tergolong jarang menggunakan bahasa daerah secara tidak langsung. Sedangkan, mayoritas orang tua saat dalam rentang usia yang sama tergolong tidak pernah menggunakan bahasa daerah secara tidak langsung. Walaupun demikian, persentase orang tua yang selalu menggunakan bahasa daerah secara tidak langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah secara tidak langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 21 },
          { label: "Jarang", percentage: 43.74, value: 111 },
          { label: "Kadang-kadang", percentage: 8.99, value: 87 },
          { label: "Sering", percentage: 3.48, value: 85 },
          { label: "Selalu", percentage: 2.03, value: 24 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 141 },
          { label: "Jarang", percentage: 56.76, value: 37 },
          { label: "Kadang-kadang", percentage: 15.62, value: 33 },
          { label: "Sering", percentage: 5.71, value: 63 },
          { label: "Selalu", percentage: 2.4, value: 51 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        " perbandingan jumlah dongeng/cerita rakyat yang diketahui, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong mengetahui 1-5 buah dongeng/cerita rakyat. Namun, persentase orang tua yang mengetahui lebih dari 10 buah dongeng lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan pada jumlah dongeng/cerita rakyat yang lebih sedikit (1-5 buah) menunjukan persentase gen Z yang lebih tinggi. Hal ini mengindikasikan terjadinya pergeseran dalam hal pengetahuan gen Z mengenai dongeng/cerita rakyat dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "0 buah", percentage: 9.54, value: 23 },
          { label: "1-5 buah", percentage: 55.48, value: 192 },
          { label: "6-10 buah", percentage: 28.27, value: 90 },
          { label: "11-15 buah", percentage: 4.24, value: 18 },
          { label: ">= 16 buah", percentage: 2.47, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 53, percentage: 24.71 },
          { label: "1-5 buah", value: 157, percentage: 47.06 },
          { label: "6-10 buah", value: 76, percentage: 19.22 },
          { label: "11-15 buah", value: 15, percentage: 47.06 },
          { label: ">= 16 buah", value: 18, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukan kondisi yang sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tua saat rentang umur yang sama tergolong jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua yang tergolong jarang hingga selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung oleh gen Z dibandingkan dengan orangtuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 120 },
          { label: "Jarang", percentage: 43.74, value: 160 },
          { label: "Kadang-kadang", percentage: 8.99, value: 25 },
          { label: "Sering", percentage: 3.48, value: 11 },
          { label: "Selalu", percentage: 2.03, value: 12 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 95 },
          { label: "Jarang", percentage: 56.76, value: 161 },
          { label: "Kadang-kadang", percentage: 15.62, value: 33 },
          { label: "Sering", percentage: 5.71, value: 15 },
          { label: "Selalu", percentage: 2.4, value: 15 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung. Persentase orang tua yang tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan tidak terjadinya pergeseran dalam hal melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 311 },
          { label: "Jarang", percentage: 43.74, value: 9 },
          { label: "Kadang-kadang", percentage: 8.99, value: 5 },
          { label: "Sering", percentage: 3.48, value: 1 },
          { label: "Selalu", percentage: 2.03, value: 2 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 325 },
          { label: "Jarang", percentage: 56.76, value: 2 },
          { label: "Kadang-kadang", percentage: 15.62, value: 0 },
          { label: "Sering", percentage: 5.71, value: 0 },
          { label: "Selalu", percentage: 2.4, value: 0 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan menonton/menikmati pertunjukan atau tradisi seni secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong jarang menonton/menikmati pertunjukan atau tradisi seni secara langsung. Namun, persentase orang tua yang selalu menonton/menikmati pertunjukan atau tradisi seni secara langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal menonton/menikmati pertunjukan atau tradisi seni secara langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 101 },
          { label: "Jarang", percentage: 43.74, value: 142 },
          { label: "Kadang-kadang", percentage: 8.99, value: 45 },
          { label: "Sering", percentage: 3.48, value: 19 },
          { label: "Selalu", percentage: 2.03, value: 21 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 74 },
          { label: "Jarang", percentage: 56.76, value: 131 },
          { label: "Kadang-kadang", percentage: 15.62, value: 57 },
          { label: "Sering", percentage: 5.71, value: 30 },
          { label: "Selalu", percentage: 2.4, value: 32 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan menonton/menikmati pertunjukan atau tradisi seni secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak dan dewasa) dan orang tuanya tergolong tidak pernah menonton/menikmati pertunjukan seni secara tidak langsung. Persentase orang tua yang tidak pernah menonton/menikmati pertunjukan atau tradisi seni secara tidak langsung lebih tinggi dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan tidak terjadinya pergeseran dalam hal menonton/menikmati pertunjukan atau tradisi seni secara tidak langsung oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 233 },
          { label: "Jarang", percentage: 43.74, value: 20 },
          { label: "Kadang-kadang", percentage: 8.99, value: 18 },
          { label: "Sering", percentage: 3.48, value: 15 },
          { label: "Selalu", percentage: 2.03, value: 42 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 291 },
          { label: "Jarang", percentage: 56.76, value: 8 },
          { label: "Kadang-kadang", percentage: 15.62, value: 8 },
          { label: "Sering", percentage: 5.71, value: 5 },
          { label: "Selalu", percentage: 2.4, value: 12 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Pemeran Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        " perbandingan keterlibatan dalam pertunjukan/pameran seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya tergolong tidak pernah terlibat dalam pertunjukan/pameran seni dan tradisi Indonesia. Persentase orang tua yang tidak pernah terlibat dalam pertunjukan/pameran seni dan tradisi Indonesia lebih rendah dari pada gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal keterlibatan dalam pertunjukan/pameran seni dan tradisi Indonesia.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 260 },
          { label: "Jarang", percentage: 43.74, value: 53 },
          { label: "Kadang-kadang", percentage: 8.99, value: 6 },
          { label: "Sering", percentage: 3.48, value: 3 },
          { label: "Selalu", percentage: 2.03, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 219 },
          { label: "Jarang", percentage: 56.76, value: 67 },
          { label: "Kadang-kadang", percentage: 15.62, value: 16 },
          { label: "Sering", percentage: 5.71, value: 9 },
          { label: "Selalu", percentage: 2.4, value: 12 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan keterlibatan dalam membeli/menggunakan dan/ atau menjual produk tradisional pada gen Z anak dengan Z dewasa terhadap orang tuanya menunjukan kondisi yang hampir sama. Pada gen Z (baik anak dan dewasa) dan orang tua saat rentang umur yang sama mayoritas tergolong selalu membeli/menggunakan dan/atau menjual produk tradisional. Namun, pada gen Z anak yang tergolong sering hingga selalu membeli/menggunakan dan/atau menjual produk tradisional lebih sedikit dari pada orang tua, sedangkan pada gen Z dewasa yang tergolong sering hingga selalu membeli/menggunakan dan/atau menjual produk tradisional lebih banyak dari pada orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal membeli/menggunakan dan/atau menjual produk tradisional oleh gen Z anak dibandingkan dengan orang tuanya saat dalam rentang usia yang sama serta mengindikasikan tidak terjadinya pergeseran dalam hal membeli/menggunakan dan/atau menjual produk tradisional oleh gen Z dewasa dibandingkan dengan orang tuanya saat dalam rentang usia yang sama.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 9.85, value: 18 },
          { label: "Jarang", percentage: 20.07, value: 64 },
          { label: "Kadang-kadang", percentage: 21.53, value: 39 },
          { label: "Sering", percentage: 26.64, value: 54 },
          { label: "Selalu", percentage: 21.9, value: 113 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 5.99, value: 11 },
          { label: "Jarang", percentage: 20.22, value: 74 },
          { label: "Kadang-kadang", percentage: 20.97, value: 41 },
          { label: "Sering", percentage: 28.84, value: 57 },
          { label: "Selalu", percentage: 23.97, value: 105 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan mengikuti kegiatan permainan rakyat/olahraga tradisional pada gen Z anak dan gen Z dewasa memiliki kondisi yang cukup berbeda. Mayoritas orang tua dari gen Z (baik anak maupun dewasa) saat memiliki usia sama tergolong selalu mengikuti kegiatan permainan rakyat/olahraga tradisional. Mayoritas gen Z anak tergolong jarang mengikuti kegiatan permainan rakyat/olahraga tradisional. Sedangkan, mayoritas gen Z dewasa tergolong tidak pernah mengikuti kegiatan permainan rakyat/olahraga tradisional. Walaupun demikian, orang tua yang tergolong selalu mengikuti kegiatan permainan rakyat/olahraga tradisional lebih banyak dibandingkan gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal mengikuti kegiatan permainan rakyat/olahraga tradisional oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama. ",
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 66.09, value: 271 },
          { label: "Jarang", percentage: 22.9, value: 65 },
          { label: "Kadang-kadang", percentage: 4.93, value: 24 },
          { label: "Sering", percentage: 2.61, value: 9 },
          { label: "Selalu", percentage: 3.48, value: 13 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 9.68, value: 43 },
          { label: "Jarang", percentage: 10.26, value: 35 },
          { label: "Kadang-kadang", percentage: 17.3, value: 38 },
          { label: "Sering", percentage: 31.96, value: 72 },
          { label: "Selalu", percentage: 30.79, value: 136 },
        ],
      ],
    },
  ],
};
