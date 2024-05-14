// const zod = require("zod");

// // if this is an array of number with atleast 1 input ,return true or return false
// function  validateInput(arr){
//     if(typeof arr == 'object' && arr.length >= 1){
        
//         // const schema = zod.array(zod.number());

//         const response = schema.safeParse(arr);

//         console.log(response);
//     }
// }

// validateInput(["p",2,3]);

// {
//     email: string => email
//     password: atleast 8 letters
// }


const zod = require("zod");

function  validateInput(obj){

    const schema = zod.object({
        email:zod.string().email(),
        password: zod.string().min(8),
    })
        
    const response = schema.safeParse(obj);

    console.log(response);
    
}

validateInput({
    email: "paras@gmail.com",
    password: "12345678",
});


