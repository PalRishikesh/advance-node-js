// // func is the function to transform
// function curried(...args) {
//     if (args.length >= func.length) { // (1)
//       return func.apply(this, args);
//     } else {
//       return function(...args2) { // (2)
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };


/*
Scenario 2: Test-fDriven Development (TDD) and Deployment of AWS Lambda Function

Question:
You are tasked with implementing a Lambda function using a TDD approach. 
The function processes user data and stores it in DynamoDB. 
Describe the TDD process and demonstrate how you would deploy the function to the development environment using AWS SAM.

Scenario:
You need to ensure the reliability and correctness of your Lambda function by writing tests before implementation. 
The function will receive user data through an API gateway, process it, and store it in a DynamoDB table.
 After development, you need to deploy it using AWS SAM, ensuring all tests pass before deployment.

Technical Question:
Write a basic test case for the Lambda function using the unittest framework and provide an AWS SAM template for deployment. 
Ensure the function is only deployed if all tests pass.


 */


/** 1. */

/*
// Synchronous code
console.log("one");

// Asynchronous code
setTimeout(function(){
    console.log("two")
},0)
setTimeout(function(){
    console.log("three")
},4000)
console.log("four")

*/
// one, four, two, three



/** 2 */

/*
console.log("2"+ 2) // will stringify, 22
console.log("2"-2) // 0, in substraction string is implicity convert to number 
*/

/*
console.log(0.1+0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false
console.log(Number(0.1+0.2).toFixed(1)) // 0.3
*/

/*
function getName(name){
    delete name; // will work on object properties
    console.log(name);
}
getName("Raj")

*/


//IIFE
/*
(function(){
    console.log(a); // undefined
    console.log(b); // b is not defined, b is not delcare with var, default it consider as let only 
    var a = b = 3;
})()

*/

/*
var a={}, b = {key:'b'}, c={key:'c'};

a[b] = 123
a[c] = 456
console.log(a[b]); // 456 as a[b] and a[c] both will store as object as key and will replace with new value
*/

/*
var length = 10;
function fn(){
    console.log(this.length);
}
// fn() // undefined

var obj={
    length:5,
    method:function(fn){
        fn();
        console.log(arguments);
        arguments[0]() // here is 1 argument hence 2 is output
    }
}

obj.method(fn, 1)
*/

/*
var a = 10;

function getVal(){
    console.log(a); // undefined
    var a = 20;
}
 getVal();
 */

/*
var a =[1,2,3];
a[10] = 99;
console.log(a[6]); // undefined
*/

/*

function executer(cb){
    cb(null,'hello')
}

executer(function(err,data){
    console.log(data)
})

console.log("hi")
*/
// hello hi


/*
var arr = new Array('a','b','c');

arr[10] = 'f';

delete arr[10];
console.log(arr);
console.log(arr.length); // 11 (becuase its delete value not removing from indexing)
arr.length = 0;
console.log(arr.length); // 0

*/


let sum = function (a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

// console.log(sum(1)(2)(3)())



// From 1 object to another object function
/*

let name1 = {
    firstname:"rishi",
    lastname:"pal",
    printFullName: function(){
       // console.log(this); // Print full name object value ie. firstname,lastname, and function also.
       console.log(this.firstname+ " "+ this.lastname)
    }
}
name1.printFullName()

let name2 ={
    firstname:"Raj",
    lastname:"singh"
}

// Call, function borrowing, borrow the funciton from other object and use is with some other object
name1.printFullName.call(name2)

*/


let name3 = {
    firstname:"rishi",
    lastname:"pal",
}

let name4 = {
    firstname:"Raj",
    lastname:"Patel",
}
let printFullName = function(age = null){

    let ageValue = age != null ? " and age is "+age : " ";
    console.log(this.firstname+" "+this.lastname + ageValue );
}
printFullName.call(name3,20) // rishi pal and age is 20

// printFullName.call(name4) //Raj Patel

printFullName.apply(name4,[45,60]) // Raj Patel and age is 45, will take only first array value, ignore the others

// Bind, look like call method,instead return the copy of the funciton to execture later on.

let printMyName = printFullName.bind(name3,25)
// console.log(printMyName);  //[Function: bound printFullName]

printMyName()  //rishi pal and age is 25