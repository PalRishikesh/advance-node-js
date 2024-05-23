/** HOF which takes another function as an parameter  */
/** Callback functions which get passed as an argument to another function is called CBF */

const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return Math.abs(a-b)
}
// console.log(add(10,20));
// console.log(sub(10,20));


// Master function HOF, taking function as parameters
const calculator = (num1, num2, operator)=>{
    return operator(num1, num2);
}


// Callback Function pass functio as argument
console.log(calculator(5,6,add));