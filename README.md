aprian
fungsi html:
Kode HTML tersebut berfungsi sebagai struktur dasar atau kerangka utama aplikasi DailyBoard. Pada bagian <!DOCTYPE html> digunakan untuk memberi tahu browser bahwa dokumen tersebut menggunakan standar HTML5. Tag <html lang="id"> menunjukkan bahwa bahasa utama yang digunakan pada halaman adalah bahasa Indonesia.

Bagian <head> berisi informasi mengenai halaman. Tag <meta charset="UTF-8"> digunakan agar halaman dapat menampilkan berbagai karakter dengan benar, termasuk huruf dan simbol. Tag <title>DailyBoard</title> berfungsi untuk memberikan judul halaman yang akan muncul pada tab browser. Selain itu, tag <link rel="stylesheet" href="style.css"> digunakan untuk menghubungkan halaman HTML dengan file CSS bernama style.css, yang berfungsi mengatur tampilan seperti warna, ukuran, posisi, dan desain aplikasi.

Pada bagian <body>, terdapat elemen <header> yang berisi judul utama <h1>DailyBoard</h1>. Judul ini menjadi nama aplikasi yang ditampilkan pada bagian atas halaman. Selanjutnya terdapat tag <main id="app"></main> yang berfungsi sebagai wadah utama untuk menampilkan seluruh isi aplikasi. Elemen dengan ID app ini nantinya akan diakses oleh file JavaScript menggunakan document.getElementById("app"), kemudian JavaScript akan menambahkan berbagai elemen seperti kutipan harian, tombol mode gelap, daftar tugas, catatan, dan informasi cuaca ke dalam bagian tersebut.

Tag <script src="script.js"></script> digunakan untuk menghubungkan halaman HTML dengan file JavaScript bernama script.js. File tersebut berisi seluruh logika dan fungsi aplikasi DailyBoard, seperti menambahkan tugas, menghapus dan mengedit tugas, menyimpan data ke localStorage, mengatur tema, mengambil kutipan dan data cuaca dari API, serta mengelola catatan.

Terakhir, terdapat tag <footer> yang berisi teks “aprian maulana”, yang berfungsi sebagai bagian bawah halaman dan dapat digunakan untuk menampilkan nama pembuat atau informasi pemilik aplikasi.

Jadi, secara keseluruhan HTML ini berfungsi sebagai kerangka dasar aplikasi DailyBoard, CSS digunakan untuk mengatur tampilannya, sedangkan JavaScript digunakan untuk menjalankan seluruh fungsi dan interaksi aplikasi.



fungsi  script js:
Script JavaScript tersebut berfungsi untuk membuat aplikasi DailyBoard, yaitu aplikasi sederhana untuk membantu pengguna mengatur kegiatan sehari-hari. Semua elemen pada aplikasi, seperti judul, tombol, input, daftar tugas, catatan, informasi cuaca, dan kutipan harian dibuat secara dinamis menggunakan JavaScript melalui document.createElement() dan kemudian dimasukkan ke dalam elemen HTML dengan ID app.

Aplikasi ini memiliki fitur kutipan harian yang diambil dari API menggunakan fetch(). Fungsi ambilKutipan() akan meminta data kutipan dari server, kemudian menampilkan isi kutipan dan nama penulisnya. Jika terjadi kesalahan saat mengambil data, program akan menampilkan pesan bahwa kutipan gagal dimuat.

Selain itu, terdapat fitur mode gelap dan mode terang. Pengguna dapat menekan tombol untuk mengganti tampilan halaman. Status tema yang dipilih akan disimpan menggunakan localStorage, sehingga ketika halaman dibuka kembali, tema sebelumnya tetap digunakan.

Bagian Tugas berfungsi sebagai daftar kegiatan atau to-do list. Pengguna dapat menambahkan tugas baru melalui input dan tombol Tambah atau dengan menekan tombol Enter. Setiap tugas memiliki ID, nama tugas, dan status selesai atau belum selesai. Tugas dapat ditandai selesai dengan cara diklik, sehingga teks tugas akan diberi garis coret. Pengguna juga dapat mencari tugas berdasarkan kata tertentu, memfilter tugas berdasarkan status Semua, Selesai, atau Belum Selesai, mengedit tugas, serta menghapus tugas yang sudah tidak diperlukan.

Fitur tugas juga memiliki drag and drop, yaitu pengguna dapat menyeret tugas untuk mengubah urutan atau prioritasnya. Ketika sebuah tugas diseret dan dijatuhkan ke posisi tugas lain, fungsi pindahkanUrutanTugas() akan mengubah posisi data tugas dalam array. Semua perubahan pada tugas akan disimpan ke localStorage sehingga data tidak hilang ketika halaman di-refresh.

Bagian Catatan memungkinkan pengguna untuk menulis catatan singkat. Setiap catatan memiliki ID, isi catatan, dan tanggal saat catatan dibuat. Catatan dapat diedit dengan tombol Edit atau dengan klik dua kali pada isi catatan. Catatan juga dapat dihapus menggunakan tombol Hapus. Sama seperti tugas, data catatan disimpan menggunakan localStorage agar tetap tersedia setelah halaman dimuat ulang.

Script ini juga memiliki fungsi validasi input melalui validasiInput(). Fungsi tersebut memastikan bahwa pengguna tidak memasukkan data kosong dan membatasi panjang input maksimal 100 karakter. Jika input kosong atau terlalu panjang, program akan menampilkan peringatan menggunakan alert().

Fitur Cuaca memungkinkan pengguna memasukkan nama kota untuk mendapatkan informasi cuaca. Fungsi ambilCuaca() menggunakan API OpenWeatherMap untuk mengambil data cuaca berdasarkan nama kota yang dimasukkan. Data yang ditampilkan berupa nama kota, suhu dalam derajat Celsius, dan tingkat kelembapan. Jika kota tidak ditemukan atau terjadi masalah saat mengambil data, program akan menampilkan pesan kesalahan.

Fungsi muatSemuaWidget() digunakan untuk memuat beberapa data secara bersamaan, yaitu kutipan harian dan cuaca Jakarta. Fungsi ini menggunakan Promise.all() agar kedua proses pengambilan data dapat berjalan secara bersamaan. Saat data sedang dimuat, status akan menampilkan tulisan “Memuat data...”, dan setelah selesai akan berubah menjadi “Data berhasil dimuat!”.

Terakhir, DOMContentLoaded digunakan agar seluruh fungsi dijalankan setelah halaman HTML selesai dimuat. Pada bagian ini program akan memeriksa tema yang sebelumnya disimpan, memuat data tugas dan catatan dari localStorage, menampilkan kembali tugas dan catatan, serta memuat kutipan dan informasi cuaca.

Jadi, secara keseluruhan script JavaScript tersebut berfungsi sebagai logika utama aplikasi DailyBoard yang mengatur pembuatan tampilan secara dinamis, pengelolaan tugas, pencarian dan filter tugas, drag and drop, pengelolaan catatan, mode gelap dan terang, pengambilan data dari API, validasi input, serta penyimpanan data menggunakan localStorage.

fungsi css:1. body

Bagian body mengatur tampilan dasar seluruh halaman. Margin dibuat 0 agar tidak ada jarak bawaan browser. Font menggunakan Arial, warna teks hitam, dan warna latar belakang abu-abu muda. min-height: 100vh membuat halaman minimal setinggi layar. display: flex dan flex-direction: column digunakan agar isi halaman tersusun secara vertikal. transition membuat perubahan warna menjadi lebih halus ketika berpindah tema.

2. header

header digunakan untuk bagian kepala halaman. Latar belakangnya berwarna biru, teks berwarna putih, memiliki jarak dalam 20px, dan semua teks di dalamnya berada di tengah.

3. main

main merupakan bagian utama halaman. flex: 1 membuat bagian utama mengisi ruang yang tersedia, sedangkan padding: 30px memberikan jarak antara isi dengan tepi halaman.

4. section

Setiap bagian atau kotak konten diberikan latar belakang putih, jarak dalam 20px, jarak bawah 15px, sudut melengkung, dan bayangan tipis. Transition digunakan agar perubahan warna saat mode gelap berlangsung lebih halus.

5. h2 dan h3

h2 diberi warna biru dan teksnya berada di tengah. Sementara itu, h3 tidak memiliki jarak bagian atas sehingga judul terlihat lebih rapat dengan isi di bawahnya.

6. input

Digunakan untuk mengatur kolom input. Input memiliki padding 10px, jarak kanan, garis tepi abu-abu, sudut melengkung, dan box-sizing: border-box agar ukuran input tetap sesuai dengan ukuran yang ditentukan.

7. textarea

textarea dibuat memenuhi lebar yang tersedia. Diberikan padding, garis tepi, sudut melengkung, font Arial, serta dapat diperbesar secara vertikal oleh pengguna.

8. button

Bagian ini mengatur tombol agar berwarna biru dengan teks putih. Tombol tidak memiliki border, memiliki sudut melengkung, dan kursor berubah menjadi bentuk tangan ketika diarahkan ke tombol.

Pada button:hover, warna tombol berubah menjadi biru yang lebih gelap ketika mouse berada di atasnya.

9. ul dan li

ul mengatur jarak bagian kiri dari daftar. li memberikan jarak bawah 10px pada setiap item agar daftar tidak terlalu rapat.

10. .tugas-item

Class ini digunakan untuk item tugas. Item memiliki padding, sudut melengkung, dan cursor grab untuk menunjukkan bahwa item dapat diseret.

Ketika mouse diarahkan ke item, warnanya berubah menjadi biru muda. Ketika sedang diseret, class .sedang-drag membuat item menjadi transparan dengan opacity: 0.5.

11. #daftar-catatan

Digunakan untuk mengatur kumpulan catatan. display: flex membuat kartu tersusun menggunakan Flexbox, sedangkan flex-wrap: wrap membuat kartu turun ke baris berikutnya jika ruang tidak cukup. gap: 10px memberikan jarak antar kartu.

12. .kartu-catatan

Class ini mengatur bentuk kartu catatan. Setiap kartu memiliki lebar 200px, padding 15px, latar belakang abu-abu sangat muda, border, dan sudut melengkung.

Bagian .kartu-catatan p membuat teks dalam kartu dapat membungkus jika terlalu panjang. Sementara .kartu-catatan small digunakan untuk teks kecil seperti informasi tambahan atau tanggal.

13. #kutipan-harian

Digunakan untuk bagian kutipan harian. Teks dibuat miring menggunakan font-style: italic dan memiliki jarak antarbaris 1.6 agar lebih mudah dibaca.

14. #info-cuaca

Memberikan jarak bagian atas dan memperbesar ukuran teks informasi cuaca menjadi 18px.

15. #status

Membuat teks status berada di tengah dan menggunakan huruf tebal.

16. #toggle-tema

Memberikan jarak kanan pada tombol untuk mengubah tema halaman.

17. #cari-tugas

Menentukan lebar kolom pencarian tugas menjadi 250px.

18. footer

Footer memiliki latar belakang abu-abu gelap, teks putih, padding 15px, dan teks berada di tengah.

19. Dark Mode

Bagian body.dark-mode digunakan ketika halaman menggunakan mode gelap.

Background halaman berubah menjadi abu-abu sangat gelap.
Teks berubah menjadi putih.
section berubah menjadi abu-abu gelap.
input dan textarea berubah menjadi lebih gelap dengan teks putih.
Placeholder juga dibuat lebih terang agar tetap terlihat.
Kartu catatan berubah menjadi abu-abu gelap.
Teks kecil pada kartu dibuat lebih terang.
Hover pada tugas berubah menjadi abu-abu.
h2 berubah menjadi biru muda.
Tombol menggunakan warna biru yang sedikit berbeda.

Jadi, ketika class dark-mode ditambahkan ke elemen body, seluruh tampilan halaman akan berubah menjadi dark mode.

20. Responsive Design

Bagian:

@media (max-width: 600px)

digunakan agar website tetap nyaman digunakan pada layar kecil seperti HP.

Ketika lebar layar maksimal 600px:

Padding main dikurangi menjadi 15px.
Padding section dikurangi menjadi 15px.
Input dibuat memiliki lebar 100%.
Kolom pencarian tugas juga menjadi 100%.
Kartu catatan memenuhi seluruh lebar layar.
Jarak tombol diperkecil.
Kesimpulan

Secara keseluruhan, CSS ini berfungsi untuk membuat website pengelola tugas dan catatan dengan tampilan yang rapi. CSS tersebut juga sudah memiliki light mode, dark mode, efek hover, drag-and-drop styling, kartu catatan, serta responsive design sehingga tampilannya dapat menyesuaikan perangkat desktop maupun HP.
