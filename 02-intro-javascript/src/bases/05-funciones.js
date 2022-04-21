

// Funciones un en JS
// const saludar = function( nombre ){
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return`Hola, ${ nombre } `;
    
} 

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;
   
 


// console.log( saludar ('Alan') )

console.log( saludar2('Alan') ); 
console.log( saludar3('Goku') ); 
console.log( saludar4('') ); 

const getUser = () => ({
        uid: 'ABC123',
        usernme: 'Reallyjeje'
}); 


const user = ( getUser() )
console.log(user);

// Tarea
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => ({ 
    uid:'ABC434',
    username:'tUJSN'
});

const usuarioActivo = getUsuarioActivo('Alan');
console.log( usuarioActivo );   

// Notas
// Para convertir a flechas una funcion es necesario una "const" la palabra = y (el objeto) despues la flecha "=>"
// Para retornar el objeto implicito es necesario quitr el "return" y quitar quitar la "llave" y posteriormente encerrar la funcion en (parentesis)