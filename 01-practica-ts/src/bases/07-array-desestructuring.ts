
const nombres = ["alana", "pepe", "carlos"];

const [p1, , p3] = nombres;
console.log(p1, p3);

const test = () => {
    return ["abc", 123] as const ;
}


console.log(test()[0] + 100)


console.log("-".repeat(10));

const useState = (str:string) => {
    return [ str, (cadena:string) => {console.log(cadena)} ] as const;
}

const [name, setName] = useState("Goku");
console.log(name)
setName("Vegeta")