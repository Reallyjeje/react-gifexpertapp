// import { heroes } from './data/heroes';

// import heroes,  { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );




export const getHeroesbyId = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroesbyId(2) );

// find, filter 
export const getHeroesbyowner = (owner) =>  heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesbyowner('Marvel') );



// 







