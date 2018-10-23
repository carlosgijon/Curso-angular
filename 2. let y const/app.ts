var saludo_var = "hola";
let saludo_let = "hola";
const OPCIONES = "todas";

if(true) {
    var saludo_var = "Adios!";
    let saludo_let = "Adios!";
    const OPCIONES = "ninguna";
    console.log("OPCIONES dentro de if: " + OPCIONES);
}

console.log("Ahora saludo_var es: " + saludo_var);
console.log("Ahora saludo_let es: " + saludo_let);