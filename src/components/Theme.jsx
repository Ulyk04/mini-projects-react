import React, { use } from 'react'
import '../styles/theme.css'
import { createContext, useContext , useState } from 'react'
const themeType = createContext()

const Theme = () => {

    const[theme , setTheme] = useState('light');


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


  return (

    <themeType.Provider value = {theme}>

        <div className='theme-page'>
            <h1>Welcome</h1>
            <div className="desc-theme">
                <input type="checkbox" 
                checked={theme === 'dark'}
                onChange={(e) => {setTheme(e.target.checked ? 'dark' : 'light')}}/> <p>Dark mode</p>
            </div>
        </div>
    </themeType.Provider>
  )
}

export default Theme