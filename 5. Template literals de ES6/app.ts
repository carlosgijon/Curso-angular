function getNombre() {
    return "Fernando"
}

let nombre:string = "Juan";
let apellidos:string = "Perez";
let edad:number = 32;

let texto = `Hola, ${ nombre } ${ apellidos } (${ edad })`;

let texto2:string = `${ getNombre() }`


console.log(texto2);