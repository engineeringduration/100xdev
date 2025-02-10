//write a bsic express biolerplate code 
//with express.json() middleware

const express = require("express")
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const {Todo}= require("./db")

const app = express();
app.use(express.json());

app.get("/todos",async(req,res)=>{
    // const createPayload = req.body;//it gets the request from frontend in the body and stores in the the variable 
    // // const parsedPayload = createTodo.safeParse(createPayload)// stores the validation checkback
    // if(!parsedPayload.success){
        //res.status(411).json({
           // msg"You sent the wrong inputs"
        //})
    //     return;
    // }
    //put it in mongodb
    try {
        const Todos = await todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }

})

app.post(("/todo"),async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(! parsedPayload.success){
        res.status(411).json({
            msg:"You send a wrong inputs"
        })
        return;
    } 
    //put it in mongodb
    await Todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created successfully"
        })
})

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if(! parsedPayload.success){
        res.status(411).json({
            msg:"You send a wrong inputs"
        })
        return;
    }
    //update in mongodb
    await Todo.findByIdAndUpdate({
        _id: req.body.id
    },{
        completed: true,
    })
    res.json({
        msg:"Todo completed successfully"
        })
})
//use the app.listen() method to start the server
app.delete(("/delete"),(req,res)=>{
    req.body(body.number);
    res.send("Todo Deleted")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})