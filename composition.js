
/** Function composition is an approach where the result of one function is passed on to the next function,
 * which is passed to another until the final function is executed for the final result. 
 * 
 * Function Composition is a technique in which you combine two or more functions to produce a new function. 
 *  The idea is to take the output of one function and use it as the input for another. */

function add(a,b){
    return a+b;
}

function square(val){
    return val*val;
}

/** Here is only two function we can easily manage inside another like below */
function addTwoandSquare(a,b){
    return square(add(a,b));
}

// console.log(addTwoandSquare(2,3));

/** Making a generic function */

function composeTwoFunction(fn1, fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    }
}
const task = composeTwoFunction(add,square);
// console.log(task(2,3));

/** Suppose we added new function with multiply */
function multiply(a,b){
    return a*b;
}

const task2 = composeTwoFunction(multiply, square);
// console.log(task2(2,3));

// New JS version

const c2f = (fn1,fn2)=>(a,b)=>fn2(fn1(a,b));

const task3 = c2f(multiply, square);
// console.log(task3(2,3));

/** Making unlimited function composition */
function newMultiple(args){
    return args[0] * args[1];
}
function compose(...fns){
    return function(...value){
        console.log(...value);
        return fns.reduce((fn1,fn2)=>fn2(fn1),value)
    };
}
const task4 = compose(newMultiple, square);
console.log(task4(1,2));
// ES6 Modern JS
const composeES6 = (...fns) => (...value)=>fns.reduce((fn1,fn2)=>fn2(fn1),value)
// const task5 = composeES6(newMultiple, square, function(val){
//     return val+1
// });
/** OR below  */
// const task5 = composeES6(newMultiple, square, (val) => val + 1);
const task5 = composeES6(newMultiple, square, plusOne);
console.log(task5(4,2));

function plusOne(val){
    return val+101;
}


