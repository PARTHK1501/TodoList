import React, { useState } from 'react'
import axios from 'axios'

const Create = ({ onTaskAdded }) => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios.post('https://todo-list-gamma-lyart-80.vercel.app/add', { task: task })
      .then(result => {
        console.log(result)
        setTask(""); // Clear input after adding
        onTaskAdded(); // Trigger refresh in parent
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='create_form'>
      <input type="text" placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} />
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
