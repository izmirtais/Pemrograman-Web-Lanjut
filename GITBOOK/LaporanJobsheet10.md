# 10. Routes

### Praktikum – Bagian 1: Configure the routes

* Buat project baru berisi komponen posts (praktikum http service), form-member (soal uts), navbar, not-found, home

![](image/Jobsheet10/1.PNG)

* Jika node_modules belum tersida, install menggunakan npm install

* Buka file **app.module.ts**. Pastikan komponen pada langkah 1 sudah terdaftar seperti gambar dibawah ini
 
![](image/Jobsheet10/2.PNG)

* Tambahkan module router pada halaman **app.module.ts** seperti gambar dibawah ini:

![](image/Jobsheet10/3.PNG)

![](image/Jobsheet10/3a.PNG) 

* Buka halaman **navbar.component.html** dan tambahkan kode dibawah ini:

![](image/Jobsheet10/5.PNG) 

* Buka halaman **app.component.html**. tambahkan kode dibawah ini: 

![](image/Jobsheet10/6.PNG)

* Jalankan dan catat hasilnya (soal no. 1)
![](image/Jobsheet10/soal1.PNG)

### Praktikum - Bagian 2 : Router Outlet

* Buka halaman **app.component.html** dan rubah menjadi seperti dibawah ini:

![](image/Jobsheet10/7.PNG)

* Jalankan dan inspect elemen seperti pada gambar dibawah ini
Apa yang bisa anda simpulkan? ```(Soal No 2)```

![](image/Jobsheet10/soal2.PNG)

* Jalankan link dibawah ini localhost:4200/form seperti gambar dibawah ini:
catat hasilnya ```(Soal No. 3)```

![](image/Jobsheet10/8.PNG)

![](image/Jobsheet10/8a.PNG)

* Jalankan link dibawah ini localhost:4200/post seperti gambar dibawah ini:
catat hasilnya ``(Soal No. 4)``

![](image/Jobsheet10/9.PNG)

![](image/Jobsheet10/9a.PNG)

* Jalankan link dibawah ini localhost:4200/coba seperti gambar dibawah ini:
catat hasilnya ``(Soal No. 5)``

![](image/Jobsheet10/10.PNG)

![](image/Jobsheet10/10a.PNG)

* SImpulkan langkah 3, 4 dan 5 ``(Soal No. 6)``

```Setiap link mempunyai component sendiri kecuali link localhost:4200/coba karena tidak dibuatkan component```


### Praktikum - Bagian 3 : Add Link

* Buka halaman **navbar.component.html**. tambahkan link pada href tiap menu seperti gambar dibawah ini:

![](image/Jobsheet10/soal7.PNG)
![](image/Jobsheet10/soal7a.PNG)
![](image/Jobsheet10/soal7b.PNG)

* Modifikasi href menjadi routerLink pada halaman **navbar.component.html** seperti gambar dibawah ini:

![](image/Jobsheet10/11.PNG)

* Jalankan, inspect element, coba link dan cek pada tab network. Catat dan beri penjelasan ``(Soal No. 8)``

![](image/Jobsheet10/soal8.PNG)

* Modifikasi class li pada halaman **navbar.component.html** menjadi seperti pada gambar dibawah ini:

![](image/Jobsheet10/12.PNG)

* Jalankan, catat dan beri penjelasan ``(Soal No. 9)``

![](image/Jobsheet10/soal9.PNG)


### Praktikum - Bagian 4 : Accesing Route Parameter

* Buat komponen baru dengan nama profile dengan perintah ``ng g c profile``

![](image/Jobsheet10/13.PNG)

* Buka **app.module.ts** dan tambahkan route untuk profile seperti gambar dibawah ini:

![](image/Jobsheet10/14.PNG)

* Modifikasi halaman **home.component.html** menjadi seperti gambar dibawah ini:

![](image/Jobsheet10/15.PNG)

* Modifikasi file **profile.component.ts** menjadi seperti pada gambar dibawah ini:

![](image/Jobsheet10/16.PNG)

* Jalankan, klik tombol home kemudian klik link joko bowo kemudian inspect element seperti dibawah ini:
Catat dan berikan penjelasan ``(Soal No. 10)``

![](image/Jobsheet10/soal10.PNG)

* Modifikasi file profile.component.ts menjadi seperti pada gambar dibawah ini:

![](image/Jobsheet10/17.PNG)

* Jalankan, klik tombol home kemudian klik link joko bowo kemudia inspect element. Catat dan berikan penjelasan ``(Soal No. 11)``

![](image/Jobsheet10/soal11.PNG)