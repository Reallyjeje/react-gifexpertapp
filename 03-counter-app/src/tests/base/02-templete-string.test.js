import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string.js', () => { 


    test('getSaludo debe de retornar hola Juancamilo!', () => { 

        const nombre = 'Juancamilo';

        const saludo = getSaludo( nombre );
        

        expect( saludo ).toBe( 'hola' + nombre + '!' );

    })

// get saludo debe retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar hola Carlos! si no hay argumento nombre', () => {

        // const nombre = 'Carlos';
        // const saludo = getSaludo( nombre );
        // expect( saludo ).toBe( 'hola' + nombre + '!' );
        const saludo = getSaludo();
        expect(saludo).toBe( 'holaCarlos!' );  
    })


    
})