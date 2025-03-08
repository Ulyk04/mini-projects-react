import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/search.css'

const Seearch = () => {

    const[users, setUsers] = useState([]);
    const[query , setQuery] = useState("");
    const[error , setError] = useState("");
    const[load , setLoad] = useState(false);

    const fetchServer = async() => {
        if(!query.trim()) return

        setLoad(true)
        setError("")

        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if(!response.ok){
                throw new Error("Error on server")
            }
            const data = await response.json()
            
            const filtredUsers = data.filter((user) => 
                user.name.toLowerCase().includes(query.toLowerCase())
            )

            setUsers(filtredUsers);
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoad(false)
        }
    }

    useEffect(() => {
        fetchServer()
    }, [query]);

  return (
    <div className='search-page' >

        <article className="title-search">
            <h1>Search on server</h1>
        </article>

        <article className="desc-search">
            <input type="text"
            placeholder='Write a name'
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>
            {load && <p>Loading</p>}
            {error && <p style={{
                color: "red"}} >{error.message}</p>}
            <ul>
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} >
                            {user.name} --- {user.email}
                        </li>
                    ))
                ): (
                    <p>User with this name not found</p>
                )}
            </ul>
        </article>

    </div>
  )
}

export default Seearch