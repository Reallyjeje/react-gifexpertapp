import React from 'react';
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme'


describe('pruebas en <PrimeraApp />', () => {

//     test('debe de mostrar el mensaje "Hola, soy goku"', () => {
//         const saludo = 'Hola, soy goku';
//         const { getByText } = render( <PrimeraApp saludo={saludo} /> )
//         expect( getByText(saludo) ).toBeInTheDocument();
//     })


    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy goku';

        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> )


        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar el subtitulo enviado por props', () => {



        const saludo = 'Hola, soy goku';
        const subTitulo = 'soy un subtitulo';
        const  wrapper = shallow( 
        <PrimeraApp
            saludo={ saludo } 
            subtitulo={ subTitulo }
        /> )

        const textoParrafo = wrapper.find('p').texto();
        // console.log(textoParrafo);

        expect( textoParrafo ).toBe( subTitulo );



    })





})


