/** Optional chaining is a feature in JS that allows you to access properties of an object or elements of an array without having to check whether the object or array is null or undefined first 
 * It is represneted by the ?. operator and can be used to concisely access deeply nested properties without having to write a long chain of if staments to check for null or undefined valuesl.
*/

const user= {
    name:"rishi",
    age: 30,
    address:{
        street:"Main stree",
        city: "New Road",
        state:"MH",
        pincode: 123456
    }
}

console.log(user.address.road_no?.house_no);

/** Same can use with array, but instead of ?. we have to use []?.  */

const users =[
    {name:"rishi",age:30},
    {name:"raj",age:20},
]
console.log(users[5]?.name);