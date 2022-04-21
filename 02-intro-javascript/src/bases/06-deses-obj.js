// Desestructuración
// Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornaPersona = ({ clave, nombre, edad, rango = 'capitan' }) => {


    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.55005,
            lng: -13.25334
        }
    }

}


const { nombreClave, anios, latlng:{ lat, lng } } = retornaPersona ( persona );

console.log(nombreClave, anios)
console.log( lat, lng );


