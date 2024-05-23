/** In Javascript, a prototype is a mechanism for objects to inherit properties and methods from other object. 
 * It's essentially a blueprint that defineds the default properties and behaviors of objects created using a specific constructor function.
 */
/** Prototype Chain: 
 * Every object in JavaScript has an internal hidden property called its prototype. 
 * This prototype itself is another object, and it can also have its own prototype, forming a chain.
 * When you try to access a property on an object, JavaScript searches for it first in the object itself, then in its prototype, and then continues up the prototype chain until it finds a property with a matching name or reaches the end of the chain (null).
*/
/** Inheritance:
 *  This prototype chain allows objects to inherit properties and methods from their prototypes.
 *  If an object doesn't have a specific property defined directly on itself, it can still access it from its prototype. 
 * This promotes code reusability and reduces redundancy.
 * */


console.log("Start");;
const person = {
    name:"john",
    getName:function(){
        return this.name;
    },
    getRollNo:function(){
        return this.rollNo;
    }
}

// console.log(person)

const student = {
    rollNo: 1,
    __proto__:person
}

console.log(student.getName()); // Accessing from parent object
console.log(student.getRollNo()) // Student alway have it own properties reference while accessing parent variable and function.

const primaryStudent = {
    rollNo: 2,
    __proto__:student
}

console.log(primaryStudent.getRollNo());



const obj1 = new Object(); // const obj1={}
const arr1 = new Array(); // const arr1=[]
const fun1 = new Function(); // const fun1 = function()
const regExp1 = new RegExp(); // const regExp1 = /regex/;

// To check all prototype
console.log(Object.prototype);
console.log(Array.prototype)
console.log(Function.prototype)


Array.prototype.convertToObject = function(){
    let obj = {}
    this.forEach((elem, index)=>{
        obj[index] = elem
    })
    return obj
}
const cities = ['Munbai','Pune','Banaglore'];
console.log(cities.convertToObject());


// Chaning whole prototype

function MyProto(name){
    this.name = name;
}
// MyProto.prototype = MyProto;
MyProto.prototype = person;
const p2 = new MyProto("Rishi");
console.log(p2.name);

// Experiment

Object.getPrototypeOf(p2);
Object.setPrototypeOf(p2, Array);
console.log(p2.length); // using array properties of length