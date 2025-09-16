
const numbers: number[] = [1,2,3];
// indicamos el tipo de valores que tendra el array con number[]

for (let number of numbers){
    console.log(number)
}

// otra manera de definir el tipo de dato de un array es usando el generico Array<tipo> y entre los 
// signos de menor y mayor ponemos el tipo de dato, en este caso un arreglo de cadenas

const nombres: Array<string> = ["Hola", "mundo"]
const res = nombres.map((nombre) => {
    return nombre.toUpperCase()
})

console.log(res)