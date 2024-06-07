export const Badung = {
  region: "Kabupaten Badung", // Nama Daerah
  // Kategori untuk Filter Checkbox
  categories: ["Gen Z Anak", "Gen Z Dewasa"],
  // Data Gen Z Anak Beserta Orang Tua
  anak: [
    // Variabel Pertama
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
          { label: "0 buah", value: 19, percentage: 6.93 },
          { label: "1-5 buah", value: 137, percentage: 50 },
          { label: "6-10 buah", value: 88, percentage: 32.12 },
          { label: "11-15 buah", value: 23, percentage: 8.39 },
          { label: ">= 16 buah", value: 7, percentage: 2.55 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "0 buah", value: 27, percentage: 10.76 },
          { label: "1-5 buah", value: 111, percentage: 44.22 },
          { label: "6-10 buah", value: 81, percentage: 32.27 },
          { label: "11-15 buah", value: 22, percentage: 8.76 },
          { label: ">= 16 buah", value: 10, percentage: 3.98 },
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
          { label: "Tidak Pernah", percentage: 35.04, value: 96 },
          { label: "Jarang", percentage: 50.73, value: 139 },
          { label: "Kadang-kadang", percentage: 10.58, value: 29 },
          { label: "Sering", percentage: 2.55, value: 7 },
          { label: "Selalu", percentage: 1.09, value: 3 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 60 },
          { label: "Jarang", percentage: 54.96, value: 144 },
          { label: "Kadang-kadang", percentage: 12.21, value: 32 },
          { label: "Sering", percentage: 8.4, value: 22 },
          { label: "Selalu", percentage: 1.53, value: 4 },
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
          { label: "Tidak Pernah", percentage: 35.04, value: 237 },
          { label: "Jarang", percentage: 50.73, value: 21 },
          { label: "Kadang-kadang", percentage: 10.58, value: 9 },
          { label: "Sering", percentage: 2.55, value: 3 },
          { label: "Selalu", percentage: 1.09, value: 4 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 22.9, value: 263 },
          { label: "Jarang", percentage: 54.96, value: 6 },
          { label: "Kadang-kadang", percentage: 12.21, value: 2 },
          { label: "Sering", percentage: 8.4, value: 2 },
          { label: "Selalu", percentage: 1.53, value: 1 },
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
          { label: "Tidak Pernah", percentage: 9.85, value: 27 },
          { label: "Jarang", percentage: 20.07, value: 55 },
          { label: "Kadang-kadang", percentage: 21.53, value: 59 },
          { label: "Sering", percentage: 26.64, value: 73 },
          { label: "Selalu", percentage: 21.9, value: 60 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 5.99, value: 16 },
          { label: "Jarang", percentage: 20.22, value: 54 },
          { label: "Kadang-kadang", percentage: 20.97, value: 56 },
          { label: "Sering", percentage: 28.84, value: 77 },
          { label: "Selalu", percentage: 23.97, value: 64 },
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
          { label: "Tidak Pernah", percentage: 30.29, value: 83 },
          { label: "Jarang", percentage: 33.58, value: 92 },
          { label: "Kadang-kadang", percentage: 14.6, value: 40 },
          { label: "Sering", percentage: 11.68, value: 32 },
          { label: "Selalu", percentage: 9.85, value: 27 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 6.27, value: 17 },
          { label: "Jarang", percentage: 13.28, value: 36 },
          { label: "Kadang-kadang", percentage: 17.71, value: 48 },
          { label: "Sering", percentage: 29.15, value: 79 },
          { label: "Selalu", percentage: 33.58, value: 91 },
        ],
      ],
    },
  ],
  dewasa: [
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
          { label: "Tidak Pernah", percentage: 43.77, value: 151 },
          { label: "Jarang", percentage: 43.74, value: 144 },
          { label: "Kadang-kadang", percentage: 8.99, value: 31 },
          { label: "Sering", percentage: 3.48, value: 12 },
          { label: "Selalu", percentage: 2.03, value: 7 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 333 },
          { label: "Jarang", percentage: 56.76, value: 8 },
          { label: "Kadang-kadang", percentage: 15.62, value: 2 },
          { label: "Sering", percentage: 5.71, value: 3 },
          { label: "Selalu", percentage: 2.4, value: 1 },
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
          { label: "Tidak Pernah", percentage: 43.77, value: 314 },
          { label: "Jarang", percentage: 43.74, value: 13 },
          { label: "Kadang-kadang", percentage: 8.99, value: 10 },
          { label: "Sering", percentage: 3.48, value: 3 },
          { label: "Selalu", percentage: 2.03, value: 5 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 19.52, value: 333 },
          { label: "Jarang", percentage: 56.76, value: 8 },
          { label: "Kadang-kadang", percentage: 15.62, value: 2 },
          { label: "Sering", percentage: 5.71, value: 3 },
          { label: "Selalu", percentage: 2.4, value: 1 },
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
          { label: "Tidak Pernah", percentage: 9.85, value: 27 },
          { label: "Jarang", percentage: 20.07, value: 55 },
          { label: "Kadang-kadang", percentage: 21.53, value: 59 },
          { label: "Sering", percentage: 26.64, value: 73 },
          { label: "Selalu", percentage: 21.9, value: 64 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 5.99, value: 16 },
          { label: "Jarang", percentage: 20.22, value: 54 },
          { label: "Kadang-kadang", percentage: 20.97, value: 56 },
          { label: "Sering", percentage: 28.84, value: 77 },
          { label: "Selalu", percentage: 23.97, value: 64 },
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
          { label: "Tidak Pernah", percentage: 66.09, value: 228 },
          { label: "Jarang", percentage: 22.9, value: 79 },
          { label: "Kadang-kadang", percentage: 4.93, value: 17 },
          { label: "Sering", percentage: 2.61, value: 9 },
          { label: "Selalu", percentage: 3.48, value: 12 },
        ],
        // Data Kategori Kedua: Orang Tua
        [
          { label: "Tidak Pernah", percentage: 9.68, value: 33 },
          { label: "Jarang", percentage: 10.26, value: 35 },
          { label: "Kadang-kadang", percentage: 17.3, value: 59 },
          { label: "Sering", percentage: 31.96, value: 109 },
          { label: "Selalu", percentage: 30.79, value: 105 },
        ],
      ],
    },
  ],
};
