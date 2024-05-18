// basic exppress boilerplate code
// with express.json middleware

const express = require("express");
const app = express();
const {todo} = require("./db");
const { createTodo ,updateTodo} = require("./types");

app.use(express.json());

// body{
//  title:String,
//  description:String,
// }


app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsePayload = await createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        
        res.status(411).json({
            msg:"You sent wrong Input",
        })
        
        return;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsePayload = await updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input",
        })
        return;
    }

    // const updatedTod0 = await todo.find({
    //     id:req.params.id
    // })

    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true,
    })

    res.json({
        msg:"Todo marked as completed"
    })
})


app.listen(3000);