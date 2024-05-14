// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
// let counter = 0;

// function increaseCounter(){
//     counter = counter + 1;
//     console.log(counter);
// }

// function asynccounter(){
//     setInterval(increaseCounter,1000);
// }

// asynccounter();

// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// let counter = 0;

// function increaseCounter(){
//     counter++;
//     console.log(counter);
//     setTimeout(increaseCounter,1000);
// }

// increaseCounter();

// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// const fs = require("fs");

// function read(onDone){
//     fs.readFile('a.txt','utf-8',function(err,data){
//         onDone(data);
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// read(onDone);

// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// const fs = require("fs");

// data = 'paras'

// function write(){
//     fs.writeFile('a.txt',data,err => {
//         if(err){
//             console.error(err);
//         }else{
//             console.log("file written successfully")
//         }
//     });
// }


// write();

// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// const fs = require("fs");

// function asyncRead(onDone){
//     let str;
//     fs.readFile('a.txt','utf-8',function(err,data){
//         onDone(data);
        
        
//     })

// }

// function asyncWrite(newStr){
//     fs.writeFile('a.txt',newStr,err => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log(newStr);
//         }
//     })
// }

// function onDone(data){
//     console.log(data);
//     data.toString();
//     let str = data;
        
//     let newStr = str.replace(/\s+/g, ' ');

//     asyncWrite(newStr);
// }

// asyncRead(onDone);

// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

