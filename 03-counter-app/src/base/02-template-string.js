


const nombre   = 'Juancamilo';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo( nombre = 'Carlos' ) {
    return 'hola' + nombre + '!' ;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );