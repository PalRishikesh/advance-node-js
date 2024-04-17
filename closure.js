/** Lexical scope */
/** We can't access function inner value out side of function (Opp we can do) */

/** Closure */
/**Closure in JavaScript is a form of lexical scoping used to preserve variables 
 * from the outer scope of a function in the inner scope of a function. */

/** Inner function rember the value of out outer function  at the time of returning value*/

/** A function with lexical scope is know as closure */


let data = 10;
function test(){
    let a = 10;
    console.log(data);
}
// console.log(a); // This is outside of function 
// test().


function test2(){
    let a = 100;
    return function inner(){
        return a;
    }
}

let result1 = test2();
// console.log(result1());

function test4(){
    let a = 300;
    let fun = function inner(){
        // This is most priroty and value will be overwrite
        // a = 10
        // return a*a;
        a++;
        // If we are running multiple time, new a value is store/memorise
        return a;
    }
    // a = 40;
    // This is run here so a value will be overwrite and calcuatin on new value
    return fun;
}

let result4 = test4();
// console.log(result4())
// console.log(result4())

/** New example */
function adder(num){
    function add(x){
        console.log(num + x);
    }
    return add;
}

const addTo5 = adder(5);
const addTo10 = adder(10);
addTo5(1)
addTo5(2)
addTo10(3);
addTo10(4);

function makeCounter(){
    let count = 1;
    function increment(){
        console.log(count++);
    }
    return increment;
}
const incrase1 = makeCounter();
incrase1();
incrase1();
incrase1();

const incrase2 = makeCounter();
incrase2();
incrase2();



