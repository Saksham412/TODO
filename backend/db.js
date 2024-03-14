const mongoose = require('mongoose')

//mongodb+srv://admin:2mtgUWBXp7yVvT5J@cluster0.ohjymd8.mongodb.net/todos
mongoose.connect("mongodb+srv://admin:2mtgUWBXp7yVvT5J@cluster0.ohjymd8.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema)

module.exports = {
    todo
}