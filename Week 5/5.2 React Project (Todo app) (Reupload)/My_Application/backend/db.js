const mongoose = require("mongoose");

// {
//     title:String,
//     description:String,
//     completed:boolean,
// }

mongoose.connect("mongodb+srv://paras:paras1234@paras-database.lg2omsu.mongodb.net/todo-apps");

const todoSchema  = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}