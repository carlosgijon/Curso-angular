"use strict";
var nombre = "Peter";
var numero = 123;
var booleano = true;
var hoy = new Date;
hoy = new Date('2020-10-21');
console.log(hoy);
// Con este tipo de variables podemos utilizar cualquiera de los demas tipos
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
// Objetos
var spiderman = {
    nombre: "Peter",
    edad: 20
};
spiderman = {
    nombre: "Juan",
    edad: 30
};
console.log(spiderman.nombre + " es spiderman y tiene " + spiderman.edad + " años");
