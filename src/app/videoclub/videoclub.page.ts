import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage  {
  router: any;

  constructor() { }

  
  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');


  }
  
  verPaginaDetalle(id): void {
    this.router.navigate(['/detalle', id]);
}

}
