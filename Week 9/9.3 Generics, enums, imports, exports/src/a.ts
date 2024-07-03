// Generic

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);



// enums
// // enum Direction{
// //     Up,
// //     Down,
// //     Left,
// //     Right
// // }

// enum Direction{
//     Up ="up",
//     Down = "down",
//     Left = "left",
//     Right = "right"
// }

// function doSomething(keyPressed:Direction){
//     if(keyPressed == Direction.Up){

//     }
// }

// doSomething(Direction.Up);

// // type keyInput = "up" | "down" | "left" | "right";

// // function doSomething(keyPressed:keyInput){
// //     if(keyPressed == "up"){

// //     }
// // }

// // doSomething("up");