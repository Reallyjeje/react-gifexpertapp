

describe( 'pruebas en el archivo demo.test.js ', () => {


    test('debe de ser iguales los strings', () => {
    
        // 1. inicialización
        const mensaje = 'Hola mundo';

    
        // 2. Estimulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observa el comportamiento
        expect( mensaje ). toBe( mensaje2 ); // === 
    })
    

});


