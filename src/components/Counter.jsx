import React, { use } from 'react'
import '../styles/counter.css'
import { useState } from 'react';

const Counter = () => {

  const [num , setNum ] = useState(0);

  function countPlus(){
    setNum(num => num + 1)
  }

  function countMinus(){
    setNum(num => num -1 )
  }

  return (
    <div className='counter-page' >
        <article className="title-counter">
          <button onClick={() => {countPlus();}} > <p>+</p> </button>
          <h1>Count: {num} </h1>
          <button onClick={() => {countMinus();}} > <p>-</p> </button>
        </article>
    </div>
  )
}

export default Counter