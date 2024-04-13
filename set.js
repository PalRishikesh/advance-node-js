/** Set is a collection of unique value  */

let ex1 = new Set([1,4,5,6,'hello',true,false,true,5,6,'hello',9]);
console.log(ex1);
/** We can't access direct value by indexing ex1[1] */


/** Map has key value pair, where as Sets have single value */

ex1.add('World')
ex1.add({name:"Rishi"})
/** Deleting single value */
ex1.delete('World')
/** Deleting all values */
ex1.clear();

/** Accessing value */
ex1.forEach(element => {
    console.log(element);
});
for(x of ex1){
    console.log(x);
}

/** Convert array to set */

let arr = [10,30,40,50,'a','b',30];
// console.log(arr);
arr = new Set(arr);
// console.log(arr);

/** Converting set to array */

let dataSet = new Set([20,10,50,'abcd',20]);
console.log(dataSet);
dataSet = [...dataSet]
console.log(dataSet);

