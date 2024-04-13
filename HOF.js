/** Function take parameter as function or return as function or do both */

function fn1(){
    return 1+2;
}

function fn2(x){
    let data = function(){
        return "High Order Function";
    }
    return data;
}

fn2(fn1);


let data = [1,2,5,4,7];

// let result = data.map((item)=>{
//     return 10*item;
// })
/** Same we can write as function */

function singleItemFunction(item){
    return 10*item;
}
// let result = data.map((item)=>singleItemFunction(item))

// OR

let x = (item)=>{
    return 10*item;
}
let result = data.map(x);
// console.log(result);
/** We can say map is also a HOF */


let numberData = 10;

Number.prototype.customFunction = function(x){
    /** This will give current variable value */
    console.log(this);
    /** x is the function and we can pass current variable value */
    console.log(x);
    console.log(x(this));
    // return "Hello";
    return x(this);
}

let numberResult = numberData.customFunction((data)=>data*25);
// let numberResult2 = numberData.customFunction((x)=>x/5);
// console.log(numberResult);

/** Making HOF for array */
let data3 = [2,5,9,8,7,1,25,20];

Array.prototype.customMap = function(x){
    const result = [];
    for(let i=0; i< this.length;i++){
       console.log(x(this[i]));
       result.push(x(this[i]));
    }
    return result;
}

let arrayResult = data3.customMap((item)=> item * 2); // we can do -,+,/, etc
console.log(arrayResult);