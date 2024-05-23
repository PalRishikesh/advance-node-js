/** Set is a collection of unique values. It is a  smilar to an array, but the values in a set ar not ordered and connot be repeated.*/

const mySet = new Set();

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)

console.log(mySet.size);
console.log(mySet.has(5));
console.log(mySet.delete(3)) // Deleting the value

console.log(mySet);

for(let someValue of mySet){
    console.log(someValue);
}

// Deleting duplicate value
const arr= [1,2,3,3,4,4,5,5,6,6,6,4,3,2]
const mySetAr = new Set(arr);
console.log(mySetAr);
console.log([...mySetAr]);

// Getting seprated value
const myName = "Rishi";
console.log(new Set(myName));
console.log([...new Set(myName)]);