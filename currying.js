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