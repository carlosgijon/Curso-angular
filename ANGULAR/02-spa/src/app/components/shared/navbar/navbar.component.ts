import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

array_heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private router: Router) {

  }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    // Aqui debera redireccionar a la pagina de los heroes que busca

    this.array_heroes = this._heroesService.buscarHeroes(termino);

    // Me habia faltado esto en la tares
    this.router.navigate(['/heroes-buscados', termino]);

  }

}
