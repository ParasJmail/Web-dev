let arr = [1,2,3,4,5];
let nameArr = ["Paras", "paavan" , "Atharva", "Prasad"];

function filtering_logic(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
function namsFiltering_logic(n){
    if(n.startsWith("P")){
        return true;
    }
    else{
        return false;
    }
}

const ans = arr.filter(filtering_logic);
const nameAns = nameArr.filter(namsFiltering_logic);
console.log(ans);
console.log(nameAns);