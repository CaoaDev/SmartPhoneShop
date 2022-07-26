import { heroes } from "../data/heroes"

export const getElementById= ( id = '' ) => {
    return heroes.find( hero => hero.id === id );
}