import { Component, OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-buscados',
  templateUrl: './heroes-buscados.component.html'
})
export class HeroesBuscadosComponent implements OnInit {

  heroes_buscados: Heroe[] = [];
  termino: String;

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
            }

            ngOnInit() {
              this.activatedRoute.params.subscribe( params => {
                this.termino = params['termino'];
                this.heroes_buscados = this._heroesService.buscarHeroes(params['termino']);
              });
            }

}
