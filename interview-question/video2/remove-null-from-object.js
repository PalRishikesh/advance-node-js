const obj = {
    a:1,
    b:null,
    c:undefined,
    d:'hello'
}

const nweObj = Object.entries(obj).filter(([key,value])=>{
    return value != null && value !=undefined;
});
const newObjeValue = Object.fromEntries(nweObj);
console.log(newObjeValue);


let entries = Object.entries(obj); // Object to array
let fromEntries = Object.fromEntries(entries); // Array to object

console.log("entries: ",entries);
console.log("fromEntries: ",fromEntries);


const arrayData = [
    ['a',1],
    ['b',2],
    ['c',3],
    ['d',4]
]
const arryObj = Object.fromEntries(arrayData);
// console.log(arryObj);