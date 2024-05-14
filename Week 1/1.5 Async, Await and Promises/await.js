//Before
function ParasAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){resolve("hi there")},1000)
    });
    return p;
}

async function main(){
    let value = ParasAsyncFunction()
        console.log(value);
    
}

main();

//After
function ParasAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){resolve("hi there")},1000)
    });
    return p;
}

async function main(){

    //no call backs no .then and Promise syntax
    let value = await ParasAsyncFunction()
        console.log(value);
    
}

main();

console.log("after main");