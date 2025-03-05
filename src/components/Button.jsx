import React from 'react'
import { Link } from 'react-router-dom'
import Earth from '../images/earth.png'
import '../styles/button.css'

const Button = ({children , to}) => {
  return (
    <div className='button-component' >
        <Link to={to} >
            <button>
                <img src={Earth} alt="" />
                <p> {children} </p>
            </button>
        </Link>
    </div>
  )
}

export default Button