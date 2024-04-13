var _ = require('lodash');
let user1 = {
    name:"Rishi"
}

let user2 = user1;
user2.name = "Raj"
// console.log(user1);
// console.log(user2);


/** Shallow copy */

// 1st option
// let user3 = Object.assign({},user1);
/** OR */
// 2nd option
let user3 = {...user1}
user3.name = "Raju";
// console.log(user1);
// console.log(user3);


let obj1 = {
    name: "Rishi",
    address:{
        city:"Bangalore",
        state:"Karnataka"
    },
    getDate: function(){
        return "all data"
    }
}
/** Shallow copy is only working for upper level only (first level) */
let obj2 = {...obj1}
// obj2.address.city = "Mumbai"
// console.log(obj1);


/** Deep Copy */
/** It will not work for any function and date */
/** 1st option */
let obj3 = JSON.parse(JSON.stringify(obj1))
obj3.name = "Raj"
obj3.address.city = "Urnab Banagalore"
// console.log(obj1); // It will not change
// console.log(obj3);

/** 2nd option */
/** Lodash */
/** This will do deep copy of object */
let obj4 = _.cloneDeep(obj1);
obj4.name = "Raj"
obj4.address.city = "Urnab Banagalore"
console.log(obj1); 
console.log(obj4);