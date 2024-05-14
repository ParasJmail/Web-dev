//create a map f(n) that take 2 inputs and array and a transformation
//callback/f(n) and transform the array into a new one using transformation function

const input = [1,2,3,4,5]

function map(arr, callback) {
    const result = [];
        for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
    }

const ans = map(input,(i)=>{
    return i+10;
});

console.log(ans);