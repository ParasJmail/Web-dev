const mongoose = require("mongoose");

// {
//     title:String,
//     description:String,
//     completed:boolean,
// }

mongoose.connect("my_mongo_link");

const todoSchema  = new mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}