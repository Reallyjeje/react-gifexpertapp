import { getHeroesbyId } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) =>{
//    setTimeout( () => {
//     //Tarea 
//     // Importar
//     const p1 = getHeroesbyId(2);
//        reject( p1 );
//     // reject('No se pudd encontrar el heroe');
//    }, 2000)

// });

// promesa.them( (heroe) => {
//     console.log('heroe',heroe)
// })
// .catch(err => console.warn( err ) );

const getHeroeByAsync = ( id ) => {

   return new Promise( (resolve, reject) =>{

    setTimeout( () => {
    //Tarea 
    // Importar
    const p1 = getHeroesbyId( id );
        if ( p1 ) {
        resolve( p1 );
        } else {
        reject('No se pudd encontrar el heroe');
        }
    console.log(p1);
    //    reject( p1 );
    // reject('No se pudd encontrar el heroe');
   }, 2000)

});


}

getHeroeByAsync(1)
//    .catch(heroe => console.warn('Heroe', heroe));
.then( console.log )
.catch( console.warn );
 




