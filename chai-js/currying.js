let multiply = function(x,y){
    console.log(x*y);
}

let multiplyClosure = function(x){
    return function(y){
        console.log(x*y);
    }
}
/*
let mutliplyByTwo = function(y){
    let x = 2;
    console.log(x*y);
}
// Above is same as below
let mutliplyByTwo = multiply.bind(this,2);
*/

let mutliplyByTwo = multiply.bind(this,2)
// mutliplyByTwo(10)


let mutliplyBy2 = multiplyClosure(2);
mutliplyBy2(20)

