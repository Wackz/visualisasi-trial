export const Badung = {
  region: "Kabupaten Badung", // Nama Daerah
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
        "Perbandingan kehadiran dalam upacara adat antara Gen Z (anak dan dewasa) dengan orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z anak jarang menghadiri upacara adat, sedangkan mayoritas orang tuanya dalam rentang usia yang sama sering menghadiri upacara adat. Pada Gen Z dewasa, mayoritas kadang-kadang menghadiri upacara adat, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu menghadiri upacara adat. Persentase orang tua yang sering dan selalu menghadiri upacara adat lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan adanya penurunan keaktifan dalam menghadiri upacara adat pada Gen Z dibandingkan orang tua mereka saat berada pada rentang usia yang sama (11-27 tahun) di Kabupaten Badung.",
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
          { label: "Tidak Pernah", value: 19, percentage: 6.93 },
          { label: "Jarang", value: 104, percentage: 50 },
          { label: "Kadang-kadang", value: 66, percentage: 32.12 },
          { label: "Sering", value: 54, percentage: 8.39 },
          { label: "Selalu", value: 51, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 12, percentage: 10.76 },
          { label: "Jarang", value: 64, percentage: 44.22 },
          { label: "Kadang-kadang", value: 49, percentage: 32.27 },
          { label: "Sering", value: 70, percentage: 8.76 },
          { label: "Selalu", value: 68, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan partisipasi aktif dalam upacara adat antara Gen Z (anak dan dewasa) dengan orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tidak pernah berpartisipasi aktif dalam upacara adat. Persentase orang tua yang sering dan selalu berpartisipasi aktif dalam upacara adat lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan adanya penurunan keaktifan dalam menghadiri upacara adat pada Gen Z dibandingkan orang tua mereka saat berada pada rentang usia yang sama (11-27 tahun) di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 224 },
          { label: "Jarang", percentage: 50.73, value: 45 },
          { label: "Kadang-kadang", percentage: 10.58, value: 15 },
          { label: "Sering", percentage: 2.55, value: 8 },
          { label: "Selalu", percentage: 1.09, value: 2 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 136 },
          { label: "Jarang", percentage: 54.96, value: 66 },
          { label: "Kadang-kadang", percentage: 12.21, value: 16 },
          { label: "Sering", percentage: 8.4, value: 23 },
          { label: "Selalu", percentage: 1.53, value: 24 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di rumah, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah di rumah. Namun, persentase orang tua yang selalu menggunakan bahasa daerah di rumah masih lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan, pada kategori yang lebih rendah (sering, kadang-kadang, jarang), persentase gen Z lebih tinggi dibandingkan orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di rumah oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
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
          { label: "Jarang", percentage: 50.73, value: 19 },
          { label: "Kadang-kadang", percentage: 10.58, value: 15 },
          { label: "Sering", percentage: 2.55, value: 107 },
          { label: "Selalu", percentage: 1.09, value: 139 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 16 },
          { label: "Jarang", percentage: 54.96, value: 4 },
          { label: "Kadang-kadang", percentage: 12.21, value: 9 },
          { label: "Sering", percentage: 8.4, value: 45 },
          { label: "Selalu", percentage: 1.53, value: 190 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di pergaulan, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak sering menggunakan bahasa daerah di pergaulan, sedangkan mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Pada Gen Z dewasa, mayoritas kadang-kadang menggunakan bahasa daerah di pergaulan, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Persentase orang tua yang selalu menggunakan bahasa daerah di pergaulan lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di pergaulan oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Badung.",
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
          { label: "Jarang", value: 40, percentage: 50 },
          { label: "Kadang-kadang", value: 71, percentage: 32.12 },
          { label: "Sering", value: 132, percentage: 8.39 },
          { label: "Selalu", value: 36, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 33, percentage: 10.76 },
          { label: "Jarang", value: 29, percentage: 44.22 },
          { label: "Kadang-kadang", value: 77, percentage: 32.27 },
          { label: "Sering", value: 167, percentage: 8.76 },
          { label: "Selalu", value: 218, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak jarang menggunakan bahasa daerah secara tidak langsung, sedangkan mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Pada Gen Z dewasa, mayoritas jarang menggunakan bahasa daerah secara tidak langsung, sementara mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Persentase orang tua pada kategori jarang sampai sering menggunakan bahasa daerah secara tidak langsung lebih rendah daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam menggunakan bahasa daerah secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan intensitas gen Z anak dalam menggunakan bahasa daerah secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama pada Kabupaten Badung.",// Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", value: 42, percentage: 6.93 },
          { label: "Jarang", value: 97, percentage: 50 },
          { label: "Kadang-kadang", value: 72, percentage: 32.12 },
          { label: "Sering", value: 68, percentage: 8.39 },
          { label: "Selalu", value: 15, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", value: 209, percentage: 10.76 },
          { label: "Jarang", value: 69, percentage: 44.22 },
          { label: "Kadang-kadang", value: 65, percentage: 32.27 },
          { label: "Sering", value: 85, percentage: 8.76 },
          { label: "Selalu", value: 88, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan jumlah dongeng/cerita rakyat yang diketahui, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z yang mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z yang tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z anak dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen Z.",
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
          { label: "0 buah", value: 21, percentage: 6.93 },
          { label: "1-5 buah", value: 155, percentage: 50 },
          { label: "6-10 buah", value: 91, percentage: 32.12 },
          { label: "11-15 buah", value: 19, percentage: 8.39 },
          { label: ">= 16 buah", value: 8, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 33, percentage: 10.76 },
          { label: "1-5 buah", value: 116, percentage: 44.22 },
          { label: "6-10 buah", value: 72, percentage: 32.27 },
          { label: "11-15 buah", value: 24, percentage: 8.76 },
          { label: ">= 16 buah", value: 4, percentage: 3.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 109 },
          { label: "Jarang", percentage: 50.73, value: 142 },
          { label: "Kadang-kadang", percentage: 10.58, value: 29 },
          { label: "Sering", percentage: 2.55, value: 9 },
          { label: "Selalu", percentage: 1.09, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 63 },
          { label: "Jarang", percentage: 54.96, value: 137 },
          { label: "Kadang-kadang", percentage: 12.21, value: 31 },
          { label: "Sering", percentage: 8.4, value: 23 },
          { label: "Selalu", percentage: 1.53, value: 3 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak dan orang tuanya dalam rentang usia yang sama jarang mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung. Pada Gen Z dewasa, mayoritas tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung, sementara mayoritas orang tuanya dalam rentang usia yang sama jarang mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang hingga sering melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 254 },
          { label: "Jarang", percentage: 50.73, value: 22 },
          { label: "Kadang-kadang", percentage: 10.58, value: 9 },
          { label: "Sering", percentage: 2.55, value: 4 },
          { label: "Selalu", percentage: 1.09, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 245 },
          { label: "Jarang", percentage: 54.96, value: 6 },
          { label: "Kadang-kadang", percentage: 12.21, value: 2 },
          { label: "Sering", percentage: 8.4, value: 2 },
          { label: "Selalu", percentage: 1.53, value: 1 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 94 },
          { label: "Jarang", percentage: 50.73, value: 109 },
          { label: "Kadang-kadang", percentage: 10.58, value: 51 },
          { label: "Sering", percentage: 2.55, value: 26 },
          { label: "Selalu", percentage: 1.09, value: 14 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 42 },
          { label: "Jarang", percentage: 54.96, value: 115 },
          { label: "Kadang-kadang", percentage: 12.21, value: 52 },
          { label: "Sering", percentage: 8.4, value: 41 },
          { label: "Selalu", percentage: 1.53, value: 12 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara tidak langsung. Persentase orang tua yang tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 254 },
          { label: "Jarang", percentage: 50.73, value: 22 },
          { label: "Kadang-kadang", percentage: 10.58, value: 9 },
          { label: "Sering", percentage: 2.55, value: 4 },
          { label: "Selalu", percentage: 1.09, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 245 },
          { label: "Jarang", percentage: 54.96, value: 6 },
          { label: "Kadang-kadang", percentage: 12.21, value: 2 },
          { label: "Sering", percentage: 8.4, value: 2 },
          { label: "Selalu", percentage: 1.53, value: 1 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Pemeran Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam pertunjukkan atau pameran seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah terlibat pertunjukan atau pameran seni. Persentase orang tua yang tidak pernah terlibat pertunjukan atau pameran seni lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk terlibat pertunjukan atau pameran seni lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak dalam keterlibatan pertunjukan atau pameran seni dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 187 },
          { label: "Jarang", percentage: 50.73, value: 71 },
          { label: "Kadang-kadang", percentage: 10.58, value: 22 },
          { label: "Sering", percentage: 2.55, value: 12 },
          { label: "Selalu", percentage: 1.09, value: 2 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 165 },
          { label: "Jarang", percentage: 54.96, value: 65 },
          { label: "Kadang-kadang", percentage: 12.21, value: 14 },
          { label: "Sering", percentage: 8.4, value: 12 },
          { label: "Selalu", percentage: 1.53, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Produksi Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan keterlibatan dalam produksi seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah terlibat produksi pertunjukan atau pameran seni. Persentase orang tua yang tidak pernah terlibat produksi pertunjukan atau pameran seni lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk terlibat produksi pertunjukan atau pameran seni lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z dalam keterlibatan produksi pertunjukan atau pameran seni dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 35.04, value: 261 },
          { label: "Jarang", percentage: 50.73, value: 26 },
          { label: "Kadang-kadang", percentage: 10.58, value: 1 },
          { label: "Sering", percentage: 2.55, value: 6 },
          { label: "Selalu", percentage: 1.09, value: 0 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 225 },
          { label: "Jarang", percentage: 54.96, value: 19 },
          { label: "Kadang-kadang", percentage: 12.21, value: 6 },
          { label: "Sering", percentage: 8.4, value: 7 },
          { label: "Selalu", percentage: 1.53, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, baik gen Z anak maupun orang tua saat berusia sama di Provinsi Bali mayoritas jarang membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Meskipun persentase gen z anak orang tua saat berusia sama pada kategori sering dan selalu memiliki selisih tipis, namun secara keseluruhan orang tua memiliki intensitas yang lebih tinggi dalam membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Hal ini menggambarkan bahwa frekuensi gen Z anak membeli/menggunakan dan/atau menjual produk tradisional Indonesia lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z anak untuk membeli/menggunakan dan/atau menjual produk Tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 9.85, value: 38 },
          { label: "Jarang", percentage: 20.07, value: 58 },
          { label: "Kadang-kadang", percentage: 21.53, value: 58 },
          { label: "Sering", percentage: 26.64, value: 82 },
          { label: "Selalu", percentage: 21.9, value: 58 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 5.99, value: 13 },
          { label: "Jarang", percentage: 20.22, value: 57 },
          { label: "Kadang-kadang", percentage: 20.97, value: 55 },
          { label: "Sering", percentage: 28.84, value: 70 },
          { label: "Selalu", percentage: 23.97, value: 66 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan membeli/menggunakan dan/atau menjual produk tradisional Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z dan orang tuanya dalam rentang usia yang sama sering membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Pada Gen Z dewasa, mayoritas sering membeli/menggunakan dan/atau menjual produk tradisional Indonesia, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Persentase orang tua saat berusia sama pada kategori selalu lebih tinggi daripada gen Z dalam membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Hal ini menggambarkan bahwa frekuensi gen Z membeli/menggunakan dan/atau menjual produk tradisional Indonesia lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z untuk membeli/menggunakan dan/atau menjual produk tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.",
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 30.29, value: 88 },
          { label: "Jarang", percentage: 33.58, value: 102 },
          { label: "Kadang-kadang", percentage: 14.6, value: 39 },
          { label: "Sering", percentage: 11.68, value: 39 },
          { label: "Selalu", percentage: 9.85, value: 26 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 6.27, value: 15 },
          { label: "Jarang", percentage: 13.28, value: 35 },
          { label: "Kadang-kadang", percentage: 17.71, value: 46 },
          { label: "Sering", percentage: 29.15, value: 76 },
          { label: "Selalu", percentage: 33.58, value: 72 },
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
          { label: "Tidak pernah", percentage: 9.54, value: 12 },
          { label: "Jarang", percentage: 55.48, value: 79 },
          { label: "Kadang-kadang", percentage: 28.27, value: 89 },
          { label: "Sering", percentage: 4.24, value: 81 },
          { label: "Selalu", percentage: 2.47, value: 72 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak pernah", value: 10, percentage: 24.71 },
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
          { label: "Tidak Pernah", percentage: 43.77, value: 187 },
          { label: "Jarang", percentage: 43.74, value: 76 },
          { label: "Kadang-kadang", percentage: 8.99, value: 34 },
          { label: "Sering", percentage: 3.48, value: 24 },
          { label: "Selalu", percentage: 2.03, value: 12 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 121 },
          { label: "Jarang", percentage: 56.76, value: 61 },
          { label: "Kadang-kadang", percentage: 15.62, value: 32 },
          { label: "Sering", percentage: 5.71, value: 21 },
          { label: "Selalu", percentage: 2.4, value: 21 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di rumah, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama tergolong selalu menggunakan bahasa daerah di rumah. Namun, persentase orang tua yang selalu menggunakan bahasa daerah di rumah masih lebih tinggi dari pada gen Z (baik anak maupun dewasa). Sedangkan, pada kategori yang lebih rendah (sering, kadang-kadang, jarang), persentase gen Z lebih tinggi dibandingkan orang tua. Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di rumah oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 5 },
          { label: "Jarang", percentage: 43.74, value: 10 },
          { label: "Kadang-kadang", percentage: 8.99, value: 24 },
          { label: "Sering", percentage: 3.48, value: 101 },
          { label: "Selalu", percentage: 2.03, value: 193 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 17 },
          { label: "Jarang", percentage: 56.76, value: 3 },
          { label: "Kadang-kadang", percentage: 15.62, value: 14 },
          { label: "Sering", percentage: 5.71, value: 52 },
          { label: "Selalu", percentage: 2.4, value: 173 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah di pergaulan, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak sering menggunakan bahasa daerah di pergaulan, sedangkan mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Pada Gen Z dewasa, mayoritas kadang-kadang menggunakan bahasa daerah di pergaulan, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu menggunakan bahasa daerah di pergaulan. Persentase orang tua yang selalu menggunakan bahasa daerah di pergaulan lebih tinggi dibandingkan dengan Gen Z (baik anak maupun dewasa). Hal ini mengindikasikan terjadinya pergeseran dalam hal penggunaan bahasa daerah di pergaulan oleh gen Z dibandingkan dengan orang tuanya saat dalam rentang usia yang sama pada Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
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
          { label: "Jarang", percentage: 43.74, value: 65 },
          { label: "Kadang-kadang", percentage: 8.99, value: 108 },
          { label: "Sering", percentage: 3.48, value: 105 },
          { label: "Selalu", percentage: 2.03, value: 39},
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 33 },
          { label: "Jarang", percentage: 56.76, value: 29 },
          { label: "Kadang-kadang", percentage: 15.62, value: 77 },
          { label: "Sering", percentage: 5.71, value: 167 },
          { label: "Selalu", percentage: 2.4, value: 218 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan penggunaan bahasa daerah secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak jarang menggunakan bahasa daerah secara tidak langsung, sedangkan mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Pada Gen Z dewasa, mayoritas jarang menggunakan bahasa daerah secara tidak langsung, sementara mayoritas orang tuanya dalam rentang usia yang sama tidak pernah menggunakan bahasa daerah secara tidak langsung. Persentase orang tua pada kategori jarang sampai sering menggunakan bahasa daerah secara tidak langsung lebih rendah daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam menggunakan bahasa daerah secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan intensitas gen Z anak dalam menggunakan bahasa daerah secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama pada Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 36 },
          { label: "Jarang", percentage: 43.74, value: 113 },
          { label: "Kadang-kadang", percentage: 8.99, value: 102 },
          { label: "Sering", percentage: 3.48, value: 63 },
          { label: "Selalu", percentage: 2.03, value: 19 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 209 },
          { label: "Jarang", percentage: 56.76, value: 69 },
          { label: "Kadang-kadang", percentage: 15.62, value: 65 },
          { label: "Sering", percentage: 5.71, value: 85 },
          { label: "Selalu", percentage: 2.4, value: 88 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan jumlah dongeng/cerita rakyat yang diketahui, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak maupun dewasa) dan orang tuanya saat dalam rentang usia yang sama mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z yang mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z yang tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z anak dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen Z.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "0 buah", percentage: 9.54, value: 22 },
          { label: "1-5 buah", percentage: 55.48, value: 174 },
          { label: "6-10 buah", percentage: 28.27, value: 102 },
          { label: "11-15 buah", percentage: 4.24, value: 26 },
          { label: ">= 16 buah", percentage: 2.47, value: 9 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 23, percentage: 24.71 },
          { label: "1-5 buah", value: 119, percentage: 47.06 },
          { label: "6-10 buah", value: 61, percentage: 19.22 },
          { label: "11-15 buah", value: 25, percentage: 47.06 },
          { label: ">= 16 buah", value: 13, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z anak dan orang tuanya dalam rentang usia yang sama jarang mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung. Pada Gen Z dewasa, mayoritas tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung, sementara mayoritas orang tuanya dalam rentang usia yang sama jarang mengunjungi tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang hingga sering melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 144 },
          { label: "Jarang", percentage: 43.74, value: 130 },
          { label: "Kadang-kadang", percentage: 8.99, value: 36 },
          { label: "Sering", percentage: 3.48, value: 13 },
          { label: "Selalu", percentage: 2.03, value: 7 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 47 },
          { label: "Jarang", percentage: 56.76, value: 139 },
          { label: "Kadang-kadang", percentage: 15.62, value: 38 },
          { label: "Sering", percentage: 5.71, value: 13 },
          { label: "Selalu", percentage: 2.4, value: 9 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (baik anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah mengunjungi tempat peninggalan bersejarah/warisan budaya secara tidak langsung. Persentase orang tua yang tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 303 },
          { label: "Jarang", percentage: 43.74, value: 11 },
          { label: "Kadang-kadang", percentage: 8.99, value: 10 },
          { label: "Sering", percentage: 3.48, value: 4 },
          { label: "Selalu", percentage: 2.03, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 235 },
          { label: "Jarang", percentage: 56.76, value: 5 },
          { label: "Kadang-kadang", percentage: 15.62, value: 2 },
          { label: "Sering", percentage: 5.71, value: 3 },
          { label: "Selalu", percentage: 2.4, value: 1 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan menonton/menikmati pertunjukkan atau pameran seni secara langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama jarang menonton/menikmati pertunjukkan atau pameran seni secara langsung. Persentase orang tua yang tidak pernah menonton/menikmati pertunjukan atau pameran seni secara langsung lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk menonton/menikmati pertunjukan atau pameran seni secara langsung lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z menonton/menikmati pertunjukan atau pameran seni secara langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 115 },
          { label: "Jarang", percentage: 43.74, value: 121 },
          { label: "Kadang-kadang", percentage: 8.99, value: 62 },
          { label: "Sering", percentage: 3.48, value: 19 },
          { label: "Selalu", percentage: 2.03, value: 16 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 33 },
          { label: "Jarang", percentage: 56.76, value: 94 },
          { label: "Kadang-kadang", percentage: 15.62, value: 66 },
          { label: "Sering", percentage: 5.71, value: 35 },
          { label: "Selalu", percentage: 2.4, value: 22 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan menonton/menikmati pertunjukkan atau pameran seni secara tidak langsung, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah menonton/menikmati pertunjukkan atau pameran seni secara tidak langsung. Persentase orang tua pada kategori jarang sampai selalu menonton/menikmati pertunjukan atau pameran seni secara tidak langsung lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk menonton/menikmati pertunjukan atau pameran seni secara tidak langsung lebih tinggi dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya peningkatan keaktifan gen Z menonton/menikmati pertunjukan atau pameran seni secara tidak langsung dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 303 },
          { label: "Jarang", percentage: 43.74, value: 11 },
          { label: "Kadang-kadang", percentage: 8.99, value: 10 },
          { label: "Sering", percentage: 3.48, value: 4 },
          { label: "Selalu", percentage: 2.03, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 235 },
          { label: "Jarang", percentage: 56.76, value: 5 },
          { label: "Kadang-kadang", percentage: 15.62, value: 2 },
          { label: "Sering", percentage: 5.71, value: 3 },
          { label: "Selalu", percentage: 2.4, value: 1 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Pemeran Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan keterlibatan dalam pertunjukkan atau pameran seni dan tradisi Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas gen Z (anak dan dewasa) dan orang tuanya dalam rentang usia yang sama tidak pernah terlibat pertunjukan atau pameran seni. Persentase orang tua yang tidak pernah terlibat pertunjukan atau pameran seni lebih rendah dibandingkan dengan gen Z. Hal ini menggambarkan bahwa frekuensi gen Z untuk terlibat pertunjukan atau pameran seni lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak dalam keterlibatan pertunjukan atau pameran seni dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung. ", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 43.77, value: 222 },
          { label: "Jarang", percentage: 43.74, value: 71 },
          { label: "Kadang-kadang", percentage: 8.99, value: 23 },
          { label: "Sering", percentage: 3.48, value: 13 },
          { label: "Selalu", percentage: 2.03, value: 4 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 146 },
          { label: "Jarang", percentage: 56.76, value: 58 },
          { label: "Kadang-kadang", percentage: 15.62, value: 26 },
          { label: "Sering", percentage: 5.71, value: 12 },
          { label: "Selalu", percentage: 2.4, value: 11 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Perbandingan membeli/menggunakan dan/atau menjual produk tradisional Indonesia, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z dan orang tuanya dalam rentang usia yang sama sering membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Pada Gen Z dewasa, mayoritas sering membeli/menggunakan dan/atau menjual produk tradisional Indonesia, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Persentase orang tua saat berusia sama pada kategori selalu lebih tinggi daripada gen Z dalam membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Hal ini menggambarkan bahwa frekuensi gen Z membeli/menggunakan dan/atau menjual produk tradisional Indonesia lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z untuk membeli/menggunakan dan/atau menjual produk tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 9.85, value: 31 },
          { label: "Jarang", percentage: 20.07, value: 68 },
          { label: "Kadang-kadang", percentage: 21.53, value: 79 },
          { label: "Sering", percentage: 26.64, value: 84 },
          { label: "Selalu", percentage: 21.9, value: 71 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 5.99, value: 18 },
          { label: "Jarang", percentage: 20.22, value: 49 },
          { label: "Kadang-kadang", percentage: 20.97, value: 48 },
          { label: "Sering", percentage: 28.84, value: 69 },
          { label: "Selalu", percentage: 23.97, value: 70 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "perbandingan keterlibatan dalam mengikuti kegiatan permainan rakyat/olahraga tradisional dalam setahun terakhir, baik antara gen Z anak maupun gen Z dewasa terhadap orang tuanya menunjukkan kondisi yang hampir sama. Mayoritas Gen Z anak jarang mengikuti kegiatan permainan rakyat/olahraga tradisional, sedangkan orang tuanya dalam rentang usia yang sama selalu mengikuti kegiatan permainan rakyat/olahraga tradisional. Pada Gen Z dewasa, mayoritas tidak pernah mengikuti kegiatan permainan rakyat/olahraga tradisional, sementara mayoritas orang tuanya dalam rentang usia yang sama selalu mengikuti kegiatan permainan rakyat/olahraga tradisional. Persentase orang tua saat berusia sama pada kategori sering dan selalu mengikuti kegiatan permainan rakyat/olahraga tradisional lebih tinggi daripada gen Z. Hal ini menggambarkan bahwa frekuensi gen Z dalam mengikuti kegiatan permainan rakyat/olahraga tradisional lebih rendah dibandingkan orang tua saat pada rentang usia yang sama. Kondisi ini menunjukkan adanya penurunan intensitas gen Z untuk mengikuti kegiatan permainan rakyat/olahraga tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Kabupaten Badung.",
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 66.09, value: 223 },
          { label: "Jarang", percentage: 22.9, value: 77 },
          { label: "Kadang-kadang", percentage: 4.93, value: 16 },
          { label: "Sering", percentage: 2.61, value: 9 },
          { label: "Selalu", percentage: 3.48, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 9.68, value: 22 },
          { label: "Jarang", percentage: 10.26, value: 34 },
          { label: "Kadang-kadang", percentage: 17.3, value: 38 },
          { label: "Sering", percentage: 31.96, value: 76 },
          { label: "Selalu", percentage: 30.79, value: 85 },
        ],
      ],
    },
  ],
};
