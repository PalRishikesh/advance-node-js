let data = [4,5,2,1,7,8,6,5,7,4];
// Get no. of fix length ie. 2 and ignore other
// data.length = 2; // If we giving more then original lenght rest will asume empty item
// console.log(data);

/** Find sum */
let sum = data.reduce((current,prev)=>current+prev)
// console.log(sum);

/** Set will never have duplicate, undefined and empty value */
let unique = new Set(data);
console.log(unique); // Default it will return object
console.log([...unique]) // It will return as array

/** Commna seperated (first params/value do its calcaution 2nd return the  value) */
let a = 10;
let b=20;

// a = (a++,a);
a = (a++,b)
// console.log(a);

/** Sweping with destructuring */
let x=10, y=20;
[x,y]=[y,x];

console.log(x,y);