/** Function currying is a programming pattern in which we pass only a few arguments to the function rather than all of them at once.
 *  The function returns another function to that we may provide additional parameters.
*/


// Simple function

function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

// ES6
const add2 = (a)=>(b)=>(c)=> a+b+c;


let addTwo = add(10)(20);
// console.log(addTwo(30));
// console.log(add2(1)(2)(3));


/** Sending email example */

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             return `Sending Email to ${to} with subject ${subject} and body ${body}`;
//         }
//     }
// }

/**
 * Sends an auto-generated email.
 * @param {string} to - The recipient of the email.
 * @returns {function} - A function that accepts the subject and body of the email.
 */
const sendAutoEmail = (to) => (subject) => (body) => `Sending Email with to ${to} with subject ${subject} and body ${body}`;

let developer1 = sendAutoEmail("Rishikesh.pal@email.com");
let developer2 = developer1("Rishi is working on JS");
let developer3 = developer2("Rishi is working on Node and React JS");
// console.log(developer3);



const userObj = {
    name:"Rishi",
    age:29
}

function userInfo(obj){
    return function(userInfo){
        return obj[userInfo]
    }
}

let result = userInfo(userObj);
// console.log(result('name'));

/** Infinity currying */


function addInfinte(a){
    return function(b){
        if(b) return addInfinte(a+b);
        return a;
    }

}

console.log(addInfinte(10)(1)(3)());


function f(x){
    x = "x-"+x;
    return function(y){
        return function(z){
            return x+z
        }
    }
}

console.log(f("a")("b")("c"));




 

// Create a currying function
// foo(1,2,3), foo(1)(2)(3)

const curry = function (fn){
    var arity = fn.length;
    console.log(arity);
    return function f1(...args){
        if(args.length >= arity){
         return fn(...args)
        }
        else{
            return function f2(...moreArgs){
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs)
            }
        }
    }
}


const curriedSum = curry((a,b,c)=>a+b+c);
const fullSum = curriedSum(1,2,3)
// console.log(fullSum);
const partiallyCurriedSum = curriedSum(1)
// console.log(partiallyCurriedSum(2)(4));

//User cases
const get = curry((property,object)=>object[property]);
const getId = get("id");
// console.log(getId({"id":35}));



const arr6 = [1,2,3,4,4,5,6,7,8,9,9];

const uniqueArr = (arr)=>{
    return arr.reduce((acc,el)=>{
        return acc.includes(el) ? acc:[...acc, el]
    },[])
}

// console.log(uniqueArr(arr6));

const arr7 = [3,5,1];
// const result7 = arr7.sort((a,b)=>(a<b ? -1: 1)); 
const result7 = arr7.sort((a,b)=>(a-b)); 
// console.log(result7);


const range = (start,end)=>{
    return [... Array(end -start).keys()].map(el=>el+start);
}

// console.log(range(0,50));

const shuffleItems = (items)=>{
    return items.map((item)=> ({sort: Math.random(), value:item}))
    .sort((item1, item2)=>item1.sort - item2.sort)
    .map((a)=>a.value)
}

console.log(shuffleItems([1,2,3]));


