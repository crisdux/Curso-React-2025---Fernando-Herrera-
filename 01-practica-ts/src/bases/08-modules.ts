import { heroes, type Hero } from "../data/heroes.data"


const getHeroById = (id : number):Hero | undefined => {
    const res = heroes.find((hero) => {
        return hero.id === id
    })

    return res;
}

console.log(getHeroById(1))