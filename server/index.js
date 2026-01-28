const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
require('dotenv').config()

const app=express()
app.use(cors())
app.use(express.json())

const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/toDoList'
mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.error('MongoDB connection error:', err))

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.post('/add',(req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findById(id)
        .then(todo => {
            return TodoModel.findByIdAndUpdate(id, { done: !todo.done });
        })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Delete Route
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
});

module.exports = app;