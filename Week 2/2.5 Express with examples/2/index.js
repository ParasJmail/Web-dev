const express = require("express");
const app = express();
// const user =  {
//     name : "Paras",
//     kidneys:[{
//         healthy: false
//     }]
// }
// const users = [user];

const users = [{
    name : "Paras",
    kidneys:[{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/",function(req,res){
    //Write logic here
    const parasKidneys = users[0].kidneys;
    const numberOfKidneys = parasKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<parasKidneys.length; i++){
        if(parasKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})
//remove all unhealthy kidneys
app.delete("/",function(req,res){
    //if there is no unhealthy kidneys or wrong input you should return a 411
    //only if atleast 1 unhealthy kidney is there do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                users[0].kidneys.push({
                    healthy: true
                });

            }
        }
        users[0].kidneys = newKidneys;
        // for(let i = 0; i < users[0].kidneys.length; i++){
        //     if(!users[0].kidneys.healthy){
        //         users[0].kidneys.pop();

        //     }
        // }
        res.json({
            msg:"kidneys deleted"
        })
    }
    else{
        res.status(411).json({
            msg:"you have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}


//What will happen if there is no kidneys

app.listen(3000);