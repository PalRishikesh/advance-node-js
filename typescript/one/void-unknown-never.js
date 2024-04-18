// Function is not returning any data we can use void, void mean value will be null or undefined
var x;
x = undefined;
// for nulll, strictNullChecks is set to false in tsconfig.json then only 
// x = null;
function displaySum(a, b) {
    console.log("sum is ", a + b);
}
// Implicit infer void 
function display() {
}
/** never is the value that will never occurs in case of innormall terminate, error throws*/
function functionTest2() {
    while (true) { }
}
function functionTest() {
    throw new Error("error");
}
/** When we don't know the types, not know, type safe counterpart of :any */
/** When we calling api and not aware about the type */
function functionTestAPI() {
    return "this is API valie";
}
var value = functionTestAPI();
var value1 = functionTestAPI(); // by :any, we are disabling types checking
console.log(value1.toUpperCase()); // This will work fine, as we have put any
// console.log(value.toUpperCase()); // This will throw error as we have put unknown type
// using assertions
/** Type assertions is a technique that informs the compiler about the type of a variable. */
var valueInString = value;
console.log(valueInString.toUpperCase());
