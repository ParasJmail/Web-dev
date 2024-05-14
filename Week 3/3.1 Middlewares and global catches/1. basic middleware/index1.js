const express = require("express");


const app = express();

let noOfRequest = 0;

function calculateRequest(req,res,next){
    noOfRequest++;
    console.log(noOfRequest);
    next();
}

app.get("/paras",calculateRequest,function(req,res){
    
});

app.listen(3000);