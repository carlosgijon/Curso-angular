import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.mensaje = 'Hola';
  }
}
