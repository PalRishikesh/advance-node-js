/** Optinal Parameters */
var x = function sumOfThree(a, b, c) {
    console.log("Adding three numbers");
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// console.log(x(1,2));
// console.log(x(1,1,3));
/** Default parameters */
// let y = function sumOfThree(a:number=10, b: number, c : number = 1): number{
//     console.log("Adding three numbers");
//     return a+b+c;
// }
//  console.log(y(undefined,1)); // undefined for default value of paramters
//  console.log(y(1,10,10));
/** Rest parameter will accept multiple value as array and must be last parameter*/
function sumAtLeatTwo(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    rest.forEach(function (n) {
        sum = sum + n;
    });
    console.log("Sum is ", sum);
    return sum;
}
sumAtLeatTwo(1, 2, 3, 4);
