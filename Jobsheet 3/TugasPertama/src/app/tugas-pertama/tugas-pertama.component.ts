import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas-pertama',
  templateUrl: './tugas-pertama.component.html',
  styleUrls: ['./tugas-pertama.component.css']
})
export class TugasPertamaComponent implements OnInit {

  title = 'Angular';
  authorr = "3 Author";
  author = ['Author1','Author2','Author3']

getAuthor(){
return this.authorr;
}
constructor() { }

ngOnInit() {
}
}
