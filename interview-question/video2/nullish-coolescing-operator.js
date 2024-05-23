/** Nullish is used to check the value is null and undefined then only it will give the second value */

let myVal;
const myNumber1 = myVal ?? 10;

console.log(myNumber1);


// In JS, the following values are considered falsy : false, 0, '' (an empty string), null, undefined and NaN.

const myVal2 = '';
const myNumber2 = myVal2 || 10;
console.log(myNumber2);

