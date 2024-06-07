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
        "Berdasarkan Gambar X, baik gen Z anak maupun orang tua saat berusia yang sama di Provinsi Bali mayoritas mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z anak mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z anak tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z anak lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z anak dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen Z.",
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
          { label: "0 buah", value: 35, percentage: 9.33 },
          { label: "1-5 buah", value: 186, percentage: 49.6 },
          { label: "6-10 buah", value: 121, percentage: 32.27 },
          { label: "11-15 buah", value: 20, percentage: 5.33 },
          { label: ">= 16 buah", value: 13, percentage: 3.47 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 68, percentage: 18.99 },
          { label: "1-5 buah", value: 133, percentage: 37.15 },
          { label: "6-10 buah", value: 99, percentage: 27.65 },
          { label: "11-15 buah", value: 33, percentage: 9.22 },
          { label: ">= 16 buah", value: 25, percentage: 6.98 },
        ],
      ],
    },
    // Variabel Pertama
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
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
          { label: "Tidak Pernah", percentage: 52.42, value: 195 },
          { label: "Jarang", percentage: 39.78, value: 148 },
          { label: "Kadang-kadang", percentage: 3.76, value: 14 },
          { label: "Sering", percentage: 1.88, value: 7 },
          { label: "Selalu", percentage: 2.15, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 113 },
          { label: "Jarang", percentage: 55.77, value: 203 },
          { label: "Kadang-kadang", percentage: 4.95, value: 18 },
          { label: "Sering", percentage: 3.85, value: 14 },
          { label: "Selalu", percentage: 4.40, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
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
          { label: "Tidak Pernah", percentage: 88.53, value: 332 },
          { label: "Jarang", percentage: 5.07, value: 19 },
          { label: "Kadang-kadang", percentage: 2.67, value: 10 },
          { label: "Sering", percentage: 2.13, value: 8 },
          { label: "Selalu", percentage: 1.60, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 356 },
          { label: "Jarang", percentage: 2.94, value: 11 },
          { label: "Kadang-kadang", percentage: 0.53, value: 2 },
          { label: "Sering", percentage: 0.27, value: 1 },
          { label: "Selalu", percentage: 1.07, value: 4 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
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
          { label: "Tidak Pernah", percentage: 52.42, value: 195 },
          { label: "Jarang", percentage: 39.78, value: 148 },
          { label: "Kadang-kadang", percentage: 3.76, value: 14 },
          { label: "Sering", percentage: 1.88, value: 7 },
          { label: "Selalu", percentage: 2.15, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 113 },
          { label: "Jarang", percentage: 55.77, value: 203 },
          { label: "Kadang-kadang", percentage: 4.95, value: 18 },
          { label: "Sering", percentage: 3.85, value: 14 },
          { label: "Selalu", percentage: 4.40, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
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
          { label: "Tidak Pernah", percentage: 88.53, value: 332 },
          { label: "Jarang", percentage: 5.07, value: 19 },
          { label: "Kadang-kadang", percentage: 2.67, value: 10 },
          { label: "Sering", percentage: 2.13, value: 8 },
          { label: "Selalu", percentage: 1.60, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 356 },
          { label: "Jarang", percentage: 2.94, value: 11 },
          { label: "Kadang-kadang", percentage: 0.53, value: 2 },
          { label: "Sering", percentage: 0.27, value: 1 },
          { label: "Selalu", percentage: 1.07, value: 4 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, baik gen Z anak maupun orang tua saat berusia yang sama di Provinsi Bali mayoritas mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z anak mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z anak tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z anak lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z anak dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen Z.",
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
          { label: "0 buah", value: 35, percentage: 9.33 },
          { label: "1-5 buah", value: 186, percentage: 49.6 },
          { label: "6-10 buah", value: 121, percentage: 32.27 },
          { label: "11-15 buah", value: 20, percentage: 5.33 },
          { label: ">= 16 buah", value: 13, percentage: 3.47 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 68, percentage: 18.99 },
          { label: "1-5 buah", value: 133, percentage: 37.15 },
          { label: "6-10 buah", value: 99, percentage: 27.65 },
          { label: "11-15 buah", value: 33, percentage: 9.22 },
          { label: ">= 16 buah", value: 25, percentage: 6.98 },
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
          { label: "Tidak Pernah", percentage: 52.42, value: 195 },
          { label: "Jarang", percentage: 39.78, value: 148 },
          { label: "Kadang-kadang", percentage: 3.76, value: 14 },
          { label: "Sering", percentage: 1.88, value: 7 },
          { label: "Selalu", percentage: 2.15, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 113 },
          { label: "Jarang", percentage: 55.77, value: 203 },
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
          { label: "Tidak Pernah", percentage: 88.53, value: 332 },
          { label: "Jarang", percentage: 5.07, value: 19 },
          { label: "Kadang-kadang", percentage: 2.67, value: 10 },
          { label: "Sering", percentage: 2.13, value: 8 },
          { label: "Selalu", percentage: 1.60, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 356 },
          { label: "Jarang", percentage: 2.94, value: 11 },
          { label: "Kadang-kadang", percentage: 0.53, value: 2 },
          { label: "Sering", percentage: 0.27, value: 1 },
          { label: "Selalu", percentage: 1.07, value: 4 },
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
          { label: "Tidak Pernah", percentage: 52.42, value: 195 },
          { label: "Jarang", percentage: 39.78, value: 148 },
          { label: "Kadang-kadang", percentage: 3.76, value: 14 },
          { label: "Sering", percentage: 1.88, value: 7 },
          { label: "Selalu", percentage: 2.15, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 113 },
          { label: "Jarang", percentage: 55.77, value: 203 },
          { label: "Kadang-kadang", percentage: 4.95, value: 18 },
          { label: "Sering", percentage: 3.85, value: 14 },
          { label: "Selalu", percentage: 4.40, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
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
          { label: "Tidak Pernah", percentage: 88.53, value: 332 },
          { label: "Jarang", percentage: 5.07, value: 19 },
          { label: "Kadang-kadang", percentage: 2.67, value: 10 },
          { label: "Sering", percentage: 2.13, value: 8 },
          { label: "Selalu", percentage: 1.60, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 356 },
          { label: "Jarang", percentage: 2.94, value: 11 },
          { label: "Kadang-kadang", percentage: 0.53, value: 2 },
          { label: "Sering", percentage: 0.27, value: 1 },
          { label: "Selalu", percentage: 1.07, value: 4 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Produksi Pertunjukan Seni di",
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
          { label: "Tidak Pernah", percentage: 52.42, value: 195 },
          { label: "Jarang", percentage: 39.78, value: 148 },
          { label: "Kadang-kadang", percentage: 3.76, value: 14 },
          { label: "Sering", percentage: 1.88, value: 7 },
          { label: "Selalu", percentage: 2.15, value: 8 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 31.04, value: 113 },
          { label: "Jarang", percentage: 55.77, value: 203 },
          { label: "Kadang-kadang", percentage: 4.95, value: 18 },
          { label: "Sering", percentage: 3.85, value: 14 },
          { label: "Selalu", percentage: 4.40, value: 16 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Penggunaan Produk Tradisional di",
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
          { label: "Tidak Pernah", percentage: 88.53, value: 332 },
          { label: "Jarang", percentage: 5.07, value: 19 },
          { label: "Kadang-kadang", percentage: 2.67, value: 10 },
          { label: "Sering", percentage: 2.13, value: 8 },
          { label: "Selalu", percentage: 1.60, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.19, value: 356 },
          { label: "Jarang", percentage: 2.94, value: 11 },
          { label: "Kadang-kadang", percentage: 0.53, value: 2 },
          { label: "Sering", percentage: 0.27, value: 1 },
          { label: "Selalu", percentage: 1.07, value: 4 },
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
          { label: "Tidak Pernah", percentage: 6.4, value: 24 },
          { label: "Jarang", percentage: 23.47, value: 88 },
          { label: "Kadang-kadang", percentage: 17.33, value: 65 },
          { label: "Sering", percentage: 22.40, value: 84 },
          { label: "Selalu", percentage: 30.40, value: 114 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 4.02, value: 15 },
          { label: "Jarang", percentage: 23.86, value: 89 },
          { label: "Kadang-kadang", percentage: 20.64, value: 77 },
          { label: "Sering", percentage: 19.03, value: 71 },
          { label: "Selalu", percentage: 32.44, value: 121 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak mayoritas jarang mengikuti kegiatan permainan rakyat. Sedangkan, orang tua saat seusia gen Z mayoritas selalu mengikuti kegiatan permainan rakyat atau olahraga tradisional. Persentase orang tua sering dan selalu mengikuti kegiatan permainan rakyat atau olahraga tradisional lebih tinggi dibandingkan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak mengikuti kegiatan permainan rakyat atau olahraga tradisional lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z anak untuk mengikuti permainan rakyat atau olahraga tradisional di Provinsi Bali.",
      categories: ["Gen Z Anak", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 44.57, value: 123 },
          { label: "Jarang", percentage: 3.99, value: 11 },
          { label: "Kadang-kadang", percentage: 18.48, value: 51 },
          { label: "Sering", percentage: 16.30, value: 45 },
          { label: "Selalu", percentage: 16.67, value: 46 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 10.78, value: 40 },
          { label: "Jarang", percentage: 11.59, value: 43 },
          { label: "Kadang-kadang", percentage: 8.09, value: 30 },
          { label: "Sering", percentage: 18.33, value: 68 },
          { label: "Selalu", percentage: 51.21, value: 190 },
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
        "Berdasarkan Gambar X, baik gen Z dewasa maupun orang tua saat berusia yang sama di Provinsi Bali mayoritas mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z dewasa mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z dewasa tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z dewasa lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z dewasa dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen z.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "0 buah", percentage: 9.54, value: 27 },
          { label: "1-5 buah", percentage: 55.48, value: 157 },
          { label: "6-10 buah", percentage: 28.27, value: 80 },
          { label: "11-15 buah", percentage: 4.24, value: 12 },
          { label: ">= 16 buah", percentage: 2.47, value: 7 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 63, percentage: 24.71 },
          { label: "1-5 buah", value: 120, percentage: 47.06 },
          { label: "6-10 buah", value: 49, percentage: 19.22 },
          { label: "11-15 buah", value: 12, percentage: 47.06 },
          { label: ">= 16 buah", value: 11, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berpartisipasi Aktif dalam Upacara Adat di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 141 },
          { label: "Jarang", percentage: 40.28, value: 114 },
          { label: "Kadang-kadang", percentage: 3.18, value: 9 },
          { label: "Sering", percentage: 2.83, value: 8 },
          { label: "Selalu", percentage: 3.89, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 81 },
          { label: "Jarang", percentage: 41.29, value: 154 },
          { label: "Kadang-kadang", percentage: 30.83, value: 115 },
          { label: "Sering", percentage: 4.02, value: 15 },
          { label: "Selalu", percentage: 2.14, value: 8 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Rumah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 252 },
          { label: "Jarang", percentage: 29.50, value: 113 },
          { label: "Kadang-kadang", percentage: 1.31, value: 5 },
          { label: "Sering", percentage: 2.61, value: 10 },
          { label: "Selalu", percentage: 0.78, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 269 },
          { label: "Jarang", percentage: 1.77, value: 5 },
          { label: "Kadang-kadang", percentage: 1.06, value: 3 },
          { label: "Sering", percentage: 1.06, value: 3 },
          { label: "Selalu", percentage: 0.71, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Lingkungan Pergaulan di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 141 },
          { label: "Jarang", percentage: 40.28, value: 114 },
          { label: "Kadang-kadang", percentage: 3.18, value: 9 },
          { label: "Sering", percentage: 2.83, value: 8 },
          { label: "Selalu", percentage: 3.89, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 81 },
          { label: "Jarang", percentage: 41.29, value: 154 },
          { label: "Kadang-kadang", percentage: 30.83, value: 115 },
          { label: "Sering", percentage: 4.02, value: 15 },
          { label: "Selalu", percentage: 2.14, value: 8 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menggunakan Bahasa Daerah di Sosial Media di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 252 },
          { label: "Jarang", percentage: 29.50, value: 113 },
          { label: "Kadang-kadang", percentage: 1.31, value: 5 },
          { label: "Sering", percentage: 2.61, value: 10 },
          { label: "Selalu", percentage: 0.78, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 269 },
          { label: "Jarang", percentage: 1.77, value: 5 },
          { label: "Kadang-kadang", percentage: 1.06, value: 3 },
          { label: "Sering", percentage: 1.06, value: 3 },
          { label: "Selalu", percentage: 0.71, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Cerita/Dongeng Rakyat yang Diketahui di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, baik gen Z dewasa maupun orang tua saat berusia yang sama di Provinsi Bali mayoritas mengetahui 1-5 buah dongeng/cerita rakyat. Persentase gen Z dewasa mengetahui 1-5 buah dongeng/cerita rakyat lebih tinggi dibandingkan orang tua saat berusia sama dan persentase gen Z dewasa tidak mengetahui cerita rakyat lebih rendah dibandingkan orang tua saat berusia sama. Hal ini menggambarkan bahwa jumlah dongeng/cerita rakyat yang diketahui gen Z dewasa lebih banyak dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya kenaikan pengetahuan gen Z dewasa dalam jumlah dongeng/cerita rakyat dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali. Hal ini dapat terjadi dikarenakan lebih mudahnya mencari informasi mengenai cerita rakyat saat ini dibandingkan saat orang tua berusia setara gen z.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "0 buah", percentage: 9.54, value: 27 },
          { label: "1-5 buah", percentage: 55.48, value: 157 },
          { label: "6-10 buah", percentage: 28.27, value: 80 },
          { label: "11-15 buah", percentage: 4.24, value: 12 },
          { label: ">= 16 buah", percentage: 2.47, value: 7 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 63, percentage: 24.71 },
          { label: "1-5 buah", value: 120, percentage: 47.06 },
          { label: "6-10 buah", value: 49, percentage: 19.22 },
          { label: "11-15 buah", value: 12, percentage: 47.06 },
          { label: ">= 16 buah", value: 11, percentage: 24.71 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 141 },
          { label: "Jarang", percentage: 40.28, value: 114 },
          { label: "Kadang-kadang", percentage: 3.18, value: 9 },
          { label: "Sering", percentage: 2.83, value: 8 },
          { label: "Selalu", percentage: 3.89, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 81 },
          { label: "Jarang", percentage: 41.29, value: 154 },
          { label: "Kadang-kadang", percentage: 30.83, value: 115 },
          { label: "Sering", percentage: 4.02, value: 15 },
          { label: "Selalu", percentage: 2.14, value: 8 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Kunjungan Tidak Langsung ke Tempat Bersejarah di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 252 },
          { label: "Jarang", percentage: 29.50, value: 113 },
          { label: "Kadang-kadang", percentage: 1.31, value: 5 },
          { label: "Sering", percentage: 2.61, value: 10 },
          { label: "Selalu", percentage: 0.78, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 269 },
          { label: "Jarang", percentage: 1.77, value: 5 },
          { label: "Kadang-kadang", percentage: 1.06, value: 3 },
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
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 141 },
          { label: "Jarang", percentage: 40.28, value: 114 },
          { label: "Kadang-kadang", percentage: 3.18, value: 9 },
          { label: "Sering", percentage: 2.83, value: 8 },
          { label: "Selalu", percentage: 3.89, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 81 },
          { label: "Jarang", percentage: 41.29, value: 154 },
          { label: "Kadang-kadang", percentage: 30.83, value: 115 },
          { label: "Sering", percentage: 4.02, value: 15 },
          { label: "Selalu", percentage: 2.14, value: 8 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Menonton Pertunjukan Seni secara Tidak Langsung di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 252 },
          { label: "Jarang", percentage: 29.50, value: 113 },
          { label: "Kadang-kadang", percentage: 1.31, value: 5 },
          { label: "Sering", percentage: 2.61, value: 10 },
          { label: "Selalu", percentage: 0.78, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 269 },
          { label: "Jarang", percentage: 1.77, value: 5 },
          { label: "Kadang-kadang", percentage: 1.06, value: 3 },
          { label: "Sering", percentage: 1.06, value: 3 },
          { label: "Selalu", percentage: 0.71, value: 2 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Pemeran Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 49.82, value: 141 },
          { label: "Jarang", percentage: 40.28, value: 114 },
          { label: "Kadang-kadang", percentage: 3.18, value: 9 },
          { label: "Sering", percentage: 2.83, value: 8 },
          { label: "Selalu", percentage: 3.89, value: 11 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 21.72, value: 81 },
          { label: "Jarang", percentage: 41.29, value: 154 },
          { label: "Kadang-kadang", percentage: 30.83, value: 115 },
          { label: "Sering", percentage: 4.02, value: 15 },
          { label: "Selalu", percentage: 2.14, value: 8 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Berperan sebagai Produksi Pertunjukan Seni di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak di Provinsi Bali mayoritas tidak pernah melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Sedangkan orang tua saat seusia gen Z di provinsi Bali mayoritas jarang melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung. Persentase orang tua jarang, kadang–kadang, sering, dan selalu melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya secara langsung lebih tinggi dibandingkan dengan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak untuk melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan keaktifan gen Z anak melakukan kunjungan ke tempat peninggalan bersejarah/warisan budaya dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 65.80, value: 252 },
          { label: "Jarang", percentage: 29.50, value: 113 },
          { label: "Kadang-kadang", percentage: 1.31, value: 5 },
          { label: "Sering", percentage: 2.61, value: 10 },
          { label: "Selalu", percentage: 0.78, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 95.39, value: 269 },
          { label: "Jarang", percentage: 1.77, value: 5 },
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
        "Berdasarkan Gambar X, baik gen Z anak maupun orang tua saat berusia sama di Provinsi Bali mayoritas jarang membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Meskipun persentase gen z anak orang tua saat berusia sama pada kategori sering dan selalu memiliki selisih tipis, namun secara keseluruhan orang tua memiliki intensitas yang lebih tinggi dalam membeli/menggunakan dan/atau menjual produk tradisional Indonesia. Hal ini menggambarkan bahwa frekuensi gen Z anak membeli/menggunakan dan/atau menjual produk tradisional Indonesia lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z anak untuk membeli/menggunakan dan/atau menjual produk Tradisional dibandingkan dengan orang tua saat dalam rentang usia yang sama di Provinsi Bali.", // Kategori pada Visualisasi untuk Legenda
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 5.65, value: 16 },
          { label: "Jarang", percentage: 27.56, value: 78 },
          { label: "Kadang-kadang", percentage: 20.85, value: 59 },
          { label: "Sering", percentage: 19.43, value: 55 },
          { label: "Selalu", percentage: 26.50, value: 75 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 3.93, value: 11 },
          { label: "Jarang", percentage: 22.14, value: 62 },
          { label: "Kadang-kadang", percentage: 22.14, value: 62 },
          { label: "Sering", percentage: 22.86, value: 64 },
          { label: "Selalu", percentage: 28.93, value: 81 },
        ],
      ],
    },
    {
      // Judul Visualisasi (Nama Lengkap Variabel dan Tanpa Keterangan Daerah)
      title: "Frekuensi Memainkan Permainan Tradisional di",
      // Interpretasi Visualisasi
      interpretasi:
        "Berdasarkan Gambar X, gen Z anak mayoritas jarang mengikuti kegiatan permainan rakyat. Sedangkan, orang tua saat seusia gen Z mayoritas selalu mengikuti kegiatan permainan rakyat atau olahraga tradisional. Persentase orang tua sering dan selalu mengikuti kegiatan permainan rakyat atau olahraga tradisional lebih tinggi dibandingkan gen Z anak. Hal ini menggambarkan bahwa frekuensi gen Z anak mengikuti kegiatan permainan rakyat atau olahraga tradisional lebih rendah dibandingkan orang tua saat dalam rentang usia yang sama. Kondisi ini menunjukan adanya penurunan intensitas gen Z anak untuk mengikuti permainan rakyat atau olahraga tradisional di Provinsi Bali.",
      categories: ["Gen Z Dewasa", "Orang Tua"],
      // Warna Kategori pada Visualisasi
      colors: ["#FFBF00", "#FFED46"],
      // Apakah Data dalam Persentase?
      isPercentage: true,
      // Data pada Visualisasi
      data: [
        // Data Kategori Pertama: Gen Z Anak
        [
          { label: "Tidak Pernah", percentage: 71.02, value: 201 },
          { label: "Jarang", percentage: 20.14, value: 57 },
          { label: "Kadang-kadang", percentage: 4.59, value: 13 },
          { label: "Sering", percentage: 2.12, value: 6 },
          { label: "Selalu", percentage: 2.12, value: 6 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 11.07, value: 31 },
          { label: "Jarang", percentage: 8.93, value: 25 },
          { label: "Kadang-kadang", percentage: 10.36, value: 29 },
          { label: "Sering", percentage: 20.36, value: 57 },
          { label: "Selalu", percentage: 49.29, value: 138 },
        ],
      ],
    },
  ],
};
