import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  activatedRoute: any;

  constructor() { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
