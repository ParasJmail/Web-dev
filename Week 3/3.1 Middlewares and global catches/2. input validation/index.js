const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup",function(req,res,next){
    const kidneys = req.body.kidneys;
    // if(!kidneys){
    //     res.json({
    //         msg:"wrong inputs"
    //     })
    //     return;
    // }
    // else{
        const kidneyLength = kidneys.length;

        res.send("you have " + kidneyLength + " kidneys");
    // }
});

//global catches --> error handling middleware
app.use(function(err,req,res,next){
    res.json({
        msg: "something is up with the server"
    })
})

app.listen(3000);