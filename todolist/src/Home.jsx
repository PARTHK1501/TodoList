import React, { useState, useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const fetchTodos = () => {
        axios.get('https://todo-list-gamma-lyart-80.vercel.app/get')
            .then(result => {
                // result.data contains the array of todos from MongoDB
                setTodos(result.data);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }

    useEffect(() => {
        fetchTodos();
    }, [refresh])

    const handleEdit = (id) => {
        // Added the missing '/' before id
        axios.put('https://todo-list-gamma-lyart-80.vercel.app/update/' + id)
            .then(result => {
                fetchTodos(result); // Refresh list after update
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('https://todo-list-gamma-lyart-80.vercel.app/delete/' + id)
            .then(result => {
                fetchTodos(result); // Refresh list after delete
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="home">
            <h2>Todo List</h2>
            <Create onTaskAdded={() => setRefresh(!refresh)} />
            {todos.length === 0 ?
                <div><h2>No Records</h2></div> :
                todos.map(todo => (
                    <div className="task" key={todo._id}>
                        <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                            {todo.done ?
                                <BsFillCheckCircleFill className="icon" /> :
                                <BsCircleFill className="icon" />
                            }
                            <p className={todo.done ? "line_through" : ""}>
                                {todo.task}
                            </p>
                        </div>
                        <div>
                            <span>
                                <BsFillTrashFill
                                    className="icon"
                                    onClick={() => handleDelete(todo._id)}
                                />
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home