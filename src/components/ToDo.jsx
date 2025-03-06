import React from 'react'
import '../styles/todo.css'
import { useState } from 'react'

const ToDo = () => {

  const[task , setTask] = useState("");
  const[tasks , setTasks] = useState([]);

  const addTask = () => {
    if(task.trim() === "") return; 
    setTasks([...tasks ,task]);
    setTask("");
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_ , i) =>i !==index ));
  };

  return (
    <div className='list-page'>
      <article className="title-list">
        <h1>To Do List</h1>
      </article>
      <article className="desc-list">
        <input type="text"
        placeholder="Your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
         />
        <button onClick={addTask} >Add</button>
        <div className="small-list">
          <ul>
            {tasks.map((t , index) => (
              <li key={index} >
                {t}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ToDo
