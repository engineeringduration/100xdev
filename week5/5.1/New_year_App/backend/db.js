/*
Todo{
    titel: string ;
    description : string;
    completed : boolean
}*/

const mongoose = require("mongoose")
//mongodb url handy
//mongodb+srv://Shivam:Rm22@cluster0.2pbop.mongodb.net/

mongoose.connect("mongodb+srv://Shivam:Rm22@cluster0.2pbop.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}) 

const Todo = mongoose.model('todos',todoSchema);
module.exports = Todo;
