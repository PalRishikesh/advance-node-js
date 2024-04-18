/** Object type represent multiple properties */
// let student: object = {
//     name:"Rishikesh",
//     address: "Mahadevapura Bangalore",
//     phone: 123456,
//     isActive: true
// }
let student: {
    name: string,
    address: string,
    phone: number,
    isActive: boolean
} = {
    name: "Rishikesh",
    address: "Mahadevapura Bangalore",
    phone: 123456,
    isActive: true
}

console.log(student);
console.log(student.name); // After assing invidual key type we can access single properites/key 

// empty object
let person = {};

// object return type we as Object return functionality