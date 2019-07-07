import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  nombre: string = 'Carlos';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];

  PI = Math.PI;

  a: number = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  fecha = new Date();

  valorDePromesa = new Promise(  (resolve, reject) => {
    setTimeout(  () => resolve('han llegado los datos!!!'), 3500);
  });
}
