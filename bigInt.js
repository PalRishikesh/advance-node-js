/** We can declare BigInt in 2 way (by puttin n at the end of number and BigIn() method) */

let x = 100n;
let y = BigInt(50);
console.log(y);
console.log(typeof x)
console.log(typeof y)

console.log(x*y); // It will print the proper calculation
console.log(x==y);

/** We can't compare BigInt in math function */
console.warn(Math.max(x,y));

/** We can't converet bigInt to number */