let arr = [1,3,4,5,5,];

const [arr1,arr2,,arr4, arr5] = arr;
const [a1,...latValue] = arr;
console.log(a1)
console.log(latValue)

let n1= 10;
let n2 = 20;

// let t = n1;
//  n1 = n2;
//  n2 = t;
// Or
[n1,n2] = [n2,n1]
 console.log(n1,n2);