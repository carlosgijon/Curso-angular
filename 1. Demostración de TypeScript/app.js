"use strict";

function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
// Se crea un objeto
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);