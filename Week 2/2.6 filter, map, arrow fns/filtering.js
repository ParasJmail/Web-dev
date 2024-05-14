//filtering by brute force

// from an array give back all even values from it

const arr = [1,2,3,4,5];

//[2,4];

const newArr = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);
