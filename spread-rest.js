/** The spread operator helps us expands the iterable such as array and object.  */
/** In cases where we require all the elements of an iterable or object. */


const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10,11]

const arr3 = [...arr1, ...arr2]
// console.log(arr3);
/**  In this example above, appending an element to a given iterable. An array is defined and a value needs to be appended to it, 
 * so we use the spread operator to spread all the values of the iterable and then add the elements before or after according to the order we want.  */

const obj = {
    firstname: "Divit",
    lastname: "Patidar",
};
const obj2 = { ...obj };
// console.log(obj2);



/** Rest Operator or parameter */
/** The rest parameter is used to compress the elements of an iterable. */
/** The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest parameter compresses them */

function average(...args){
    console.log(args);
/**
 * Calculates the sum of all elements in an array.
 *
 * @param {Array} args - The array of numbers to be summed.
 * @returns {number} The sum of all elements in the array.
 */
const sum = args.reduce((a, b) => a + b);
console.log(sum/args.length);

}

average(1,2,3,5,4,6)