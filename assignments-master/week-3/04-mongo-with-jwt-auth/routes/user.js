const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username:username,
        password:password
    })
    res.json({
        msg:"User Created Successfully"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET);
    
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg: "Incorrect email or password"
        })
    }

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
   const response = Course.find({});
   
   res.json({
    courses: response
   })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses: new mongoose.Types.ObjectId(courseId)
        }
    });

    res.json({
        msg:"Purchased Complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.username
    })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router