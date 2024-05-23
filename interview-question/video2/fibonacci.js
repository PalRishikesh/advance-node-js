
const num = 200;
let x = 0;
let y = 1;
let fn = x+y;
while(fn < num){
    debugger
    console.log(fn);
    fn = x+y;
    x = y;
    y  = fn
    // num
}

let a = 10;
let b = 20;

// let temp = a;
// a = b;
// b = temp;
//OR

a = a + b; // 30
b = a - b // 10
a = a -b; // 20
console.log("a: ",a)
console.log("b: ",b)