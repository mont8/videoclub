import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage   {

  constructor() { }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AutorPage');
  }

}
