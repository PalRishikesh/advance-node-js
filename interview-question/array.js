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