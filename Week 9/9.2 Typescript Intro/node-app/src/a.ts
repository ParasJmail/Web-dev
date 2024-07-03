// const x: number = 1;
// console.log(x);

// function Hello(name:string){
//     console.log("Hello " + name)
// } 

// Hello("Paras");

// function sum(a:number,b:number):Number{
//     return a + b
// }

// console.log(sum(2,3))

// function isLegal(age:number):boolean{
//     if(age > 18){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isLegal(20))

// function runAfter(fn: () => void){
//     setTimeout(fn,1000);
// }

// runAfter(function(){
//     console.log("hi there")
// })

interface User {
	firstName: string;
	lastName: string;
	email?: string;
	age: number;
}

function isLegal(user:User):boolean{
    if(user.age > 18){
        return true
    }else{
        return false
    }
}

function greet(user:User){
    console.log("hi " + user.firstName)
}

const user = {
	firstName: "paras",
	lastName: "jaitly",
	email: "email@gmail.com",
	age: 21,
}

console.log(isLegal(user));
greet(user);