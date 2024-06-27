const express = require("express");
const User = require("../db")
const zod = require("zod")
const router = express.Router();
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(8),
    
})


router.get("/hi",(req,res) => {
    return res.json({
        message:"hi"
    })
})

router.post("/signup",async (req,res) => {

    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
            })
    }

    const user = User.findOne({
        username : body.username,
    });

    if(user._id){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
            })
    };

    const newUser = await User.create(body);
    const token = jwt.sign({
        userId: newUser._id
    },JWT_SECRET)
    res.json({
        message: "User created successfully",
        token:token,
    })
});

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
    
})

router.post("/signin",async (req,res) => {

    const {success} = signinSchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
            })
    }

    const user = User.findOne({
        username : req.body.username,
        password : req.body.password,
    });

    if(user){
        const token = jwt.sign({
            userId:user._id
        },JWT_SECRET)

        return res.status(200).json({
            token:token,
            })
    };

    res.status(411).json({
        message: "Error while logging in",
    })
});



  

module.exports = router;