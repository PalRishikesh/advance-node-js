var nestedArray = [1, [2, [[3, 4]], 5], 6];

function flatternArry(arr,flatArray){
    // console.log(arr.length);
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatternArry(arr[i],flatArray);
        }
        else{
            flatArray.push(arr[i])
        }
    }
    return flatArray
}

console.log(flatternArry(nestedArray,[]));

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9,[10,11]]
];

// console.log(arr.flat());
const flatArr = arr.reduce((accum, curValue)=>{
    if(Array.isArray(curValue)){
        return accum.concat(curValue.flat()) // 
    }
    return accum.concat(curValue)
},[])
console.log(flatArr);