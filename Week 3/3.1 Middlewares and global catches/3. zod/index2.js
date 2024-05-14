const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

function validateInput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
    })

    const response = schema.safeParse(obj);
    
    return response;
}

app.post("/login",function(req,res){
    // const inputs = req.body;
    // // 
    // // {
    // //      email
    // //      password
    // // }

    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            msg:"your response is invalid",
        })
        return;
    }else{
        res.json({
            response
        })
    }
})

app.listen(3000)