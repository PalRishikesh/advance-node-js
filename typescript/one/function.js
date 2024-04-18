// Function  defination/creation
// Formal parameters
function simpleWork(rs, text) {
    console.log("Hello sir, what can I do for you");
    return 11;
}
// function calling
// Actual parameter  (while calling function) 
simpleWork(10, 'new');
simpleWork(15, 'middium');
simpleWork(20, 'large');
/** Function types */
/** Function types (parameters)=> return type */
/** (a:number, b: number)=> number */
var funX = function simpleFunction(a, b) {
    return a + b;
};
// uses in object
var person;
person = {
    firstName: "Rishi",
    lastName: "Pal",
    getFullName: function () {
        return "My name is ".concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log(person.getFullName());
