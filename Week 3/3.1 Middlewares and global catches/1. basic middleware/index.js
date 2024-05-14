// //ugly way

// const express = require("express");

// const app = express();

// app.get("/health-checkup", function(req,res){
//     //Do kidney check here
//     const kidneyId = req.query.kidneyId;
//     const username = req.header.username;
//     const password = req.headers.password;

//     if(username != "paras" && password != "pass" )
//     {
//         res.status(403).json({
//             msg: "User does not exist",
//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "wrong input",
//         });
//         return;
//     }

//     res.send("Your hearth is healthy");
//     // res.json({
//     //     msg: "your kidney is fine"
//     // })

// });

// app.listen(3000);


//Best Solution -> Using middleware


const express = require("express");


const app = express();

let noOfRequest = 0;

function calculateRequest(req,res,next){
    noOfRequest++;
    console.log(noOfRequest);
    next();
}

app.use(express.json());

app.post("/paras",calculateRequest,function(req,res){
    res.json({
        msg: "hi there",
    })
});

app.listen(3000);