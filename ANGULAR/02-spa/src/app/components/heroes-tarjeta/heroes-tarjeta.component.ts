import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styleUrls: ['./heroes-tarjeta.component.css']
})
export class HeroesTarjetaComponent implements OnInit {

  // Sirve para que desde la vista se pase un parametro
  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);

    this.router.navigate(['/heroe', this.index]);
  }

}
