interface Person {
    nombre:string;
    edad:number
}

const person:Person= {
    nombre: "Cris",
    edad: 29
}

const {edad, nombre} = person;
console.log(edad, nombre)


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}


const useContext = ({key, name, age, rank="Sin rango"}:Hero) => {
    return {
        keyName:key,
        user: {
            name,
            age,
        },
        rank
    }
}

// la desestructuracion es una tecnica de js que nos permite extraer de manera sencilla 
// propiedades de un objeto
// console.log(useContext({name:"Cris", age:28, key:"123"}))
const {keyName, user:{name, age}, rank } = useContext({name:"Cris", age:28, key:"123"})

console.log(keyName, name, age, rank)