import { heroes, type Hero, type Owner } from "../data/heroes.data"


const getHeroById = (id : number):Hero | undefined => {
    const res = heroes.find((hero) => {
        return hero.id === id
    })

    return res;
}

// console.log(getHeroById(1))

export const getHeroesByOwner = (owner: Owner) => {
    const res = heroes.filter((heroe) => {
        return heroe.owner === owner
    })
    return res;
}