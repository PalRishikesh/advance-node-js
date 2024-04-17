/** IIFE - Immediately Invoked Function Expression */
/**Immediately Invoked Function Expressions (IIFE) are JavaScript functions 
 * that are executed immediately after they are defined. */

/**They are typically used to create a local scope for variables to prevent them from polluting the global scope. */

(function add(a,b){
    console.log(a+b);
})(2,3);

(function sayHi(){
    console.log("Hey");
})();

(()=> console.log("I am inside ES6"))();

// Storing value
const value = (()=>100)();
console.log(value);

(function printAge(){
    let age = "25";
    console.log(`My age is ${age}`);
})();


/** Instead of below code  */

// let data;
// async function getData(){
//     data = await fetch();
// }
// getData();

// const data = (async ()=> await fetch())();
// console.log(data);

/** ATM for private and public */