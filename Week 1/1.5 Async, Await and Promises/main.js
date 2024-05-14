const fs = require('fs');


//Creating async function bad way

//my own asynchronus code
function ParasReadFile(cb){
    fs.readFile('a.txt','utf-8',function(err,data){
        cb(data);
    });
}
//Callback function to call
function onDone(data){
    console.log(data);
}

ParasReadFile(onDone);

//creating async function cleaner way

//my own asynchronus function
function ParasReadFilePreety(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}

function onDonePreety(data){
    console.log(data);
}

ParasReadFilePreety().then(onDonePreety);