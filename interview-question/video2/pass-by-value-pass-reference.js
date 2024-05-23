let a = 5;
let b = a;
b = a+9;

// Pass by value

// console.log(a)
// console.log(b)



let obj1 = {
    name: 'John',
    pass:'JH'
}

let obj2 = obj1;

obj2.pass = "newJH"
console.log(obj1);
console.log(obj2);

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(50);

// console.log(arr1);

var myName = "Rishi Pal"

const guessMyName = ()=>{
    // var name;
    console.log(myName);
    var myName = "Raj Pal";
    console.log(myName);
}
console.log(myName);

guessMyName();