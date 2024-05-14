//Simple Primitives in JS
let name = "Paras";
let age = 21;
let isMarried = false;

console.log("this person named is " + name + " and his age is " + age);

if(isMarried){
    console.log(name + " is married");
}else{
    console.log(name + " is not married");
};

let ans = 0;
for(let i = 0;i<=100;i++){
    ans = ans + i;
}
console.log(ans);


//Complex Primitives in JS
const ages = [21,22,23,24,25];
const numberOfPeople = ages.length;
for (let i = 0; i<numberOfPeople;i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}

//Functions
function greet(){
    console.log("Hi")
}
setInterval(greet,1*1000);