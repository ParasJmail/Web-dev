const jwt = require("jsonwebtoken");


//decode , verify , generate

const value = {
    name: 'Paras',
    accountNumber: 16118119
}

//jwt
const token = jwt.sign(value,'secret');
console.log(token);

//this token has been generated using this secret, and hence this token can only be verified using this secret

//this is your checkbook
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGFyYXMiLCJhY2NvdW50TnVtYmVyIjoxNjExODExOSwiaWF0IjoxNzE0NTM4NzIyfQ.bEiyPFeQKI3D5er-SeY_xWOoQ1O24VCdjlS3DpshIns

const decode = jwt.decode(token);
console.log(decode);

const verify = jwt.verify(token,"secret");
console.log(verify);
