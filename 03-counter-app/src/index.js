import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#app');


// ReactDOM.render( <PrimeraApp saludo ='hola, soy goku' /> , divRoot );
ReactDOM.render( <CounterApp /> , divRoot );



