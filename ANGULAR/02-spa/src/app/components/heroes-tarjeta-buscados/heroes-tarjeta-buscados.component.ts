import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Heroe} from "../../servicios/heroes.service";



@Component({
  selector: 'app-heroes-tarjeta-buscados',
  templateUrl: './heroes-tarjeta-buscados.component.html',
  styleUrls: ['./heroes-tarjeta-buscados.component.css']
})
export class HeroesTarjetaBuscadosComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate
  }

}
