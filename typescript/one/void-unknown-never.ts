// Function is not returning any data we can use void, void mean value will be null or undefined

let x: void;
x = undefined;
// for nulll, strictNullChecks is set to false in tsconfig.json then only 
// x = null;


function displaySum(a: number, b: number): void {
    console.log("sum is ", a + b);
}
// Implicit infer void 
function display() {

}

/** never is the value that will never occurs in case of innormall terminate, error throws*/
function functionTest2(): never {
    while (true) { }
}
function functionTest(): never {
    throw new Error("error");
}

/** When we don't know the types, not know, type safe counterpart of :any */
/** When we calling api and not aware about the type */

function functionTestAPI(){
    return "this is API valie";
}

let value: unknown = functionTestAPI();

let value1: any = functionTestAPI() // by :any, we are disabling types checking
console.log(value1.toUpperCase()); // This will work fine, as we have put any
// console.log(value.toUpperCase()); // This will throw error as we have put unknown type
// using assertions
/** Type assertions is a technique that informs the compiler about the type of a variable. */
let valueInString : string = value as string;
console.log(valueInString.toUpperCase());


