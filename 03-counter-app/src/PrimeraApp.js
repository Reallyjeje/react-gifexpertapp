// import React, { Fragment } from 'react';

import React from 'react';

// FUNCIONAL COMPONENTS

const PrimeraApp = ( props ) => {


const saludo = 'Hola, soy goku'

console.log(props);

    return (
        <>
           <h1> { saludo }!!!? </h1>
           {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
           <p> { subtitulo } </p>
        </>
    );
 
    


}



export default PrimeraApp;