"use strict";
function getNombre() {
    return "Fernando";
}
var nombre = "Juan";
var apellidos = "Perez";
var edad = 32;
var texto = "Hola, " + nombre + " " + apellidos + " (" + edad + ")";
var texto2 = "" + getNombre();
console.log(texto2);
