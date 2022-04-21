import React, { useState } from 'react'

import propTypes from 'prop-types'


const CounterApp = ({ value = 0 }) => { 

  const [ counter, setCounter ] = useState( value = 0 );
  
  
  const handleAddSubtract = () => { 
  setCounter(counter - 1 );  
  }

  // handleAdd
  const handleAdd = () => { 
    //  setCounter( counter + 1);
    setCounter( (c) => c + 1 )
  }

  return (
    <>
        <h1>counterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ ()=> setCounter( value ) }>Reset</button>
        <button onClick={ handleAddSubtract}>-1</button>
    </> 
  )
}

CounterApp.propTypes = {
    value: propTypes.number
}

export default CounterApp




