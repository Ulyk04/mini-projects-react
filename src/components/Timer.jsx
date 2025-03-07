import React, {useEffect } from 'react'
import { useState } from 'react'
import '../styles/timer.css'

const Timer = () => {
    const[count , setCount] = useState(0);
    const[isRunning , setIsRunning] =useState(false)

    useEffect(() => {
        let interval;

        if(isRunning){
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            } , 1000)
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    function startTimer() {
        setIsRunning(true)
    }

    function deleteTimer(){
        setCount(0)
        setIsRunning(false)
    }
    

  return (
    <div className='timer-page' >
        <article className="title-timer">
            <h1>Timer</h1>
        </article>

        <article className="desc-timer">
            <button onClick={startTimer} >Start</button>
            <p>{count}</p>
            <button onClick={deleteTimer} >Delete</button>
        </article>
    </div>
  )
}

export default Timer