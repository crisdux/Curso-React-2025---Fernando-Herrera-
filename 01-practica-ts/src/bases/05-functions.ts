
interface User {
    uid:string;
    username: string;
}

function getUser():User{
    return {
        uid: "ABC-123",
        username:"El_Papi23",
    }
}

const user = getUser();
console.log(user);


const getUser2 = ():User => (
    {   uid: "ABC-123",
        username:"El_Papi23",
    }
)

const user2 = getUser2()
console.log(user2);


const primos: number[] = [2,3,5,7,11]

primos.forEach((v) => console.log(v))