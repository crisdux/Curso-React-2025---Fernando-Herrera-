const firstName = "Tony";
const lastName = "Stark";

console.log(firstName, lastName.includes("h"))

const animal = "Perro";
console.log(animal);

// la const animal es de tipo Perro, no de tipo string
// esto pasa por que la variable animal esta declarada como const, entonces el compilador de 
// TypeScript asume que ese valor no cambiara nunca y por ello hace que el tipo de dato sea 
// mucho mas especifico que una cadena suelta.

let vegetal = "Zanahoria";
console.log(vegetal);

// aca la variable vegetal si es de tipo string porque fue declarada como let, entonces 
// TypeScript asume que ese valor si puede cambiar en un futuro y es de tipo string, osea un poco mas generico que el tipo 
// literal del anterior caso con la variable animal

/// --- 

// TypeScript siempre hara el mejor esfuerzo por inferir los tipos de datos de nuestras variables, 
// se recomienda que siempre tratemos de declararlas con const

