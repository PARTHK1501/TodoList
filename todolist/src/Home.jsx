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
                // Ensure result.data is an array
                if (Array.isArray(result.data)) {
                    setTodos(result.data);
                } else {
                    console.error("Invalid data format:", result.data);
                    setTodos([]);
                }
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
                setTodos([]);
            });
    }

    useEffect(() => {
        fetchTodos();
    }, [refresh])

    const handleEdit = (id) => {
        axios.put('https://todo-list-gamma-lyart-80.vercel.app/update/' + id)
            .then(result => {
                setRefresh(!refresh); // Refresh list after update
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('https://todo-list-gamma-lyart-80.vercel.app/delete/' + id)
            .then(result => {
                setRefresh(!refresh); // Refresh list after delete
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="home">
            <h2>Todo List</h2>
            <Create onTaskAdded={() => setRefresh(!refresh)} />
            {Array.isArray(todos) && todos.length === 0 ?
                <div><h2>No Records</h2></div> :
                Array.isArray(todos) && todos.map(todo => (
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