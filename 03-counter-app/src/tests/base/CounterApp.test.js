import { shallow } from 'enzime';

import CounterApp from '../CounterApp';


describe('pruebas con CounterApp' , () => {


    test('debe de mostrar <CounterApp /> correctamente', () => {

        const wrapper = shallow( <CounterApp /> )

        expect( wrapper ).toMatchSnapshot();

    })


})