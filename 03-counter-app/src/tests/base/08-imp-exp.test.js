import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';





describe('pruebas en funciones de heroes', () => {

     test('debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );



     });   

     test('debe retornar un undefiend si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined);



     });  
     
// Debe retornar un arreglo con los heroes de DC
// owner
// toEqual a arreglo filtrado

     test('Debe retornar un arreglo con los heroes de DC', () => {

        const owner = ([1, 3, 4]);
        const heroe = getHeroesByOwner();

        const heroeData = heroes.filter( h => h.owner === owner )
        
        expect( heroe ).toEqual( heroeData );

     })

// Debe retornar un arreglo a los heroes de marvel
// length = 2
     test('Debe de retornar un arreglo a los heroes de marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

     })



})
