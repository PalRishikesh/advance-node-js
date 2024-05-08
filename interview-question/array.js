/** Convert array to object */
const arr = ['a','b','c'];
const obj = {}

arr.forEach((element, index)=>{
    obj[index] = element
})

// console.log(obj);

/** Converting object to array  */
const obj1 = { '0': 'a', '1': 'b', '2': 'c' }
// const obj1Array = Object.values(obj1)
// console.log(obj1Array);
const obj1Array1 = [];
for(let key in obj1){
    if(obj1.hasOwnProperty(key)){
        obj1Array1.push(obj1[key])
    }
}
// console.log("obj1Array1: ",obj1Array1);

/** Find the number of array value repeat for how many time */
const array = [1, 2, 3, 4, 5, 6, 3, 2, 1, 1, 4, 5, 6, 7, 5, 5];
const arrayObject = {};
const duplicateArray = [];
let dArray = new Set();
array.forEach((value,key)=>{
    if(arrayObject[value]){
        arrayObject[value] = arrayObject[value] +1;
        dArray.add(value)
        duplicateArray.push(value)
    }
    else{
        arrayObject[value] = 1;
    }
})

// array.forEach((value,key)=>{
//     arrayObject[value] ? arrayObject[value] += 1 : arrayObject[value] = 1;
// })

// console.log(arrayObject);
// console.log(dArray);
// console.log(duplicateArray);



const array1 = [1, 2, 3, 4, 5, 6, 3, 2, 1, 1, 4, 5, 6, 7, 5, 5];

function findMinMax(arr){
    if(arr.length == 0){
        return {
            min:undefined,
            max:undefined
        }
    }
    let min = arr[0];
    let max = arr[0];
    
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < min){
            min = arr[index];
        }
        if(arr[index] > max){
            max = arr[index];
        }
        
    }

    return {
        min,max
    }
}




const result = findMinMax(array1);
// console.log("result: ",result);


let arrone = [1,2,3,4,5];

let firstElement = arrone[0]
let lastElement = arrone[arrone.length - 1]
// console.log(arrone.length);
// console.log(firstElement);
// console.log(lastElement);
// arrone.pop();
// console.log(arrone);

// console.log(arrone.indexOf(50)); // if -1 means not found

/** Removing element from array using splice method */

// arrone.splice(3,2)
// console.log(arrone);
let newArry = arrone.concat([10,20,60])
// console.log(newArry);

var nestedArray = [1, [2, [[3, 4]], 5], 6];
//  console.log(nestedArray.flat(3));

function flattenArray(arr) {

    return arr.reduce(function(flat, toFlatten) {
    
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    
    }, []);
    
}

function customFlatternArray(arrayList){
    let newArray = [];
    return arrayList.reduce(function(previousValue, currentValue){
        
        // console.log(previousValue);
        // if(Array.isArray(currentValue)){
        //     customFlatternArray(currentValue)
        // }
        // else{
        //     console.log("else", currentValue);
        //     return newArray.concat(currentValue)
            
        // }
        // return previousValue.concat(Array.isArray(currentValue) ? customFlatternArray(currentValue) : currentValue);
        return previousValue.concat(Array.isArray(currentValue) ? customFlatternArray(currentValue) :currentValue)
    },[])
    // return newArray;
}
console.log(customFlatternArray(nestedArray))