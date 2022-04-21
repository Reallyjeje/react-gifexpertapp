


const nombre = 'juan';
const apellido = 'cardozo';


//  const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${ nombre }${ apellido }${ 2 * 2 }`;

console.log( nombreCompleto );



function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo ( nombre )} ` );


