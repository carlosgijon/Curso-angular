"use strict";
var saludo_var = "hola";
var saludo_let = "hola";
var OPCIONES = "todas";
if (true) {
    var saludo_var = "Adios!";
    var saludo_let_1 = "Adios!";
    var OPCIONES_1 = "ninguna";
    console.log("OPCIONES dentro de if: " + OPCIONES_1);
}
console.log("Ahora saludo_var es: " + saludo_var);
console.log("Ahora saludo_let es: " + saludo_let);