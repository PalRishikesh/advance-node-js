/** The reduce methnod executes a reducer function (tat you provide) on each element of the array. resulting in single output value */
// arr.reduce(callback(accumlator, currentValue, [,index[ array]])),[initalValue]

let arr = [10,20,50,40,35,98,100];

let sum = arr.reduce((accum, curr, index, array)=>{
    // return accum + curr;
    // return accum * curr;
    let total =  accum + curr;
    if(index === array.length -1 ){
        return total/array.length;
    }
    return total;
});

console.log(sum);