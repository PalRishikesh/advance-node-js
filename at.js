/** Array function at() */
// New Feature of ECMA 2022
// Calcuate Array Length from Both End
// Better Performance


let arr = [1,2,5,4,8,7,1,6,2,0,5,4,9,87,99,151];
/** To get first value */
console.log(arr.at(0));
/** To get the last value, no need to do calculate total length and then do operatoion  */
console.log(arr.at(-1));
console.log(arr.at(-2));