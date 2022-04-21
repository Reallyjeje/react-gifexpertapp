

const persona = {
    nombre: 'Tony',  
    apellido: 'Stark',
    edades: 45,
    direccion:{
        ciudad: 'Washington',
        zip: '436456443',   
        lat: '12.7656',
        lng: '23.23122' 
    }
};

// console.table(persona );

const persona2 = {...persona };
persona2.nombre = 'peter'; 


console.log( persona );  
console.log( persona2 )

