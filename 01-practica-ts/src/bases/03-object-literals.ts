
const person: {nombre: string; apellido:string; edad:number;} = {
    nombre: "Cris",
    apellido: "Villca",
    edad: 29,
}

// console.log(person);

// person.nombre = "Emilio";

// console.log(person)

// es posible cambiar el nombre por que no modificamos el espacio de memoria donde 
// se almacena el objeto person, solo modificamos el valor de una propiedad de ese objeto
// por mas que el objeto haya sido declaro con const

//const superHero = person; // no crea un clon de objeto, solo copia la dirección de memoria de person en superHero,
// en otras palabras ambos objetos apuntan a la misma direccion de memoria
//superHero.edad = 100


// console.log(superHero)
// console.log(person)

const superHero = {...person}; // usando spread operator hacemos una copia superficial
superHero.edad = 100; // solo se moficica en superHero
console.log(superHero, person); // person no se altera

console.log(".".repeat(10))

const animal = {
    nombre:"boby",
    items: {
        color: "cafe",
        edad:2,
    }
}

//const otroAnimal = {...animal}; // pese a hacer una copia con spread no funciona para objetos anidados 

//otroAnimal.items.edad = 10
// cambiamos el valor de edad tanto en otroAnimal como en animal
//console.log(animal, otroAnimal)

const otroAnimal = structuredClone(animal);
otroAnimal.items.edad = 200; // solo cambiamos edad en el objeto anidado otroAnimal

console.log({otroAnimal}, { animal}) // animal mantiene su edad original

// las interfaces permiten escribir la estructura de un objeto en ts,
// establece un contrato que el objeto literal debe cumplir si o si para mantener estructura
// no implementa funcionalidades, solo establece estructura

interface Person {
    nombre: string;
    apellido: string;
    edad: number;
}

const cris: Person = {
    nombre: "Cris",
    apellido: "Villca",
    edad: 25
}

console.log(cris);






