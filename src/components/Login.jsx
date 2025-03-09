import React, { useState } from 'react'
import '../styles/login.css'

const data = [
        {email: "fakeuser@gmail.com" , password: "12345678"},
        {email: "resmail@gmail.com" , password: "8585aa35"},
        {email: "erjosh@gmail.com" , password: "josh52lim"},
        {email: "user12@gmail.com" , password: "7user12mail8"},
    ]

const Login = () => {

    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("")
    const[message , setMessage] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();

        const user = data.find((user) => 
            user.email === email && user.password === password
        )

        if(user){
            alert("✅ Login successful!")
        }
        else{
            alert("❌ Invalid email or password.")
        }
    }

  return (
    <div className='Login-page'>

        <article className="title-login">
            Login
        </article>

        <article className="desc-login">
            <form onSubmit={handleLogin} className="form-login">
                <input type="text"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <input type="text"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </article>

        <article className="users-login">
            <ul>
                <p>The list of users</p>
               {data.map((user , index) => (
                <li key={index} >
                    Email: {user.email} and Password: {user.password}
                </li>
               ))}
            </ul>
        </article>
    </div>
  )
}

export default Login