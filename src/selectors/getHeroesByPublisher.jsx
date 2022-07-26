import { heroes } from "../data/heroes";

export const getHeroesByPublisher= ( publisher ) => {
    const validPublisher= [ 'DC Comics', 'Marvel Comics', 'all' ]
    if( !validPublisher.includes( publisher )) {
        throw new Error( `${ publisher } is not a valid publisher` );
    }
    return publisher === 'all'
                ? heroes
                : heroes.filter( hero => hero.publisher === publisher );
}