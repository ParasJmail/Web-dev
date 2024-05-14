const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());


app.post('/',function(req,res){
    console.log(req.body);
    res.send('Hello World')
})

app.get('/',function(req,res){
    console.log(req.body);
    res.send('Hello World')
})

app.get('/',function(req,res){
    console.log(req.body);
    res.send('Hello World')
})

app.listen(port,function(){
    console.log(`Example app is runnning on port ${port}`);
})