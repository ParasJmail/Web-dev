const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://paras:paras1234@paras-database.lg2omsu.mongodb.net/user_app_new");

const User = mongoose.model('Users', {name: String, email: String, password: String});


app.post("/signup", async function(req,res){

    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: 'Paras',
        email: "paras@gmail.com",
        password: "12345678"
    });

    user.save();
    res.json({
        msg:"User created successfully"
    })
})



