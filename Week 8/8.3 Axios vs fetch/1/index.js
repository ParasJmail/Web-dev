//axios vs fetch
const axios = require("axios")


// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async response =>{
//             const json = await response.json();
//             console.log(json)
//         })
// }

// async function main(){
//     const response = await fetch("https://sum-server.100xdevs.com/todos",{
//          methods:"GET",
//          body:{
//              username:"paras",
//              password:"123",
//          }
//          headers:{
//              "Authorization": "Bearer 123"
//          }
//      });
//     const json = await response.json();
//     console.log(json)
// }

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/30a8226f-dbc5-44c9-8c89-eff88065005c",{
        username:"paras",
        password:"1234567",
    },{
        headers:{
            "Authorization":"Bearer 123"
        }
    });
    console.log(response.data)
}

main();