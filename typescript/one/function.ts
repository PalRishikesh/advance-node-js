// Function  defination/creation


// Formal parameters
function simpleWork(rs:number, text: string):number{
    console.log("Hello sir, what can I do for you");
    return 11;
}

// function calling
// Actual parameter  (while calling function) 
simpleWork(10,'new')
simpleWork(15,'middium')
simpleWork(20,'large')

/** Function types */
/** Function types (parameters)=> return type */
/** (a:number, b: number)=> number */

let funX: (x: number, y: number ) => number = function  simpleFunction(a: number, b: number): number{
    return a+b;
}

// uses in object

let person : {
    firstName: string,
    lastName: string,
    getFullName:() => string;
}

person = {
    firstName:"Rishi",
    lastName:"Pal",
    getFullName: function(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

console.log(person.getFullName());
