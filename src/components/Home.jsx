import React from 'react'
import '../styles/home.css'
import Button from './Button'

const Home = () => {
  return (
    <div className='home-page' >
        <article className="title-home">
            <h1>My project for self-development</h1>
        </article>
        <article className="desc-home">
            <Button to={"/counter"} > Counter </Button>
            <Button to={"/list"} > To Do List </Button>
        </article>
    </div>
  )
}

export default Home