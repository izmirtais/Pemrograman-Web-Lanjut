import { Component, OnInit } from '@angular/core';
import { TugasKeduaService } from '../tugas-kedua.service';

@Component({
  selector: 'app-tugas-kedua',
  templateUrl: './tugas-kedua.component.html',
  styleUrls: ['./tugas-kedua.component.css']
})
export class TugasKeduaComponent implements OnInit {

  title = 'INI Tugas Pertama Biodata';
  currentDate= Date.now();
  nama = 'Izmir Tais Khasna Lugazi';
  alamat = 'jln. Bunga Andong Barat No.17';
  hoby = 'Hobby saya';
  TugasKedua;

  // TugasKedua = [
  //   {NO: 1, Hobby: 'berlari', Keterangan: 'lari 1 jam tiap hari'},
  //   {NO: 2, Hobby: 'senam', Keterangan: 'senam tiap sore'},
  //   {NO: 3, Hobby: 'bermain musik', Keterangan: 'bermain musik saat waktu senggang'}
  // ]

  constructor(private service : TugasKeduaService) {
    this.TugasKedua = service.getTugasKedua();
   }

  ngOnInit() {
  }

}
