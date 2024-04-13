function fruit() {
    console.log(name);
    console.log(price);
    var name = "apple";
    let price = 100;
}
// fruit();
// undefined
// error, can't access price before initialization
/** Hoisting allow var not to let and const , in var we can get undefined not for other */

for (var i = 0; i < 3; i++) {
    // setTimeout(()=> console.log(i),1)
}

for (let i = 0; i < 3; i++) {
    // setTimeout(()=> console.log(i),1)
}
// console.log(+true);
// console.log(typeof +"true"); // give number

// console.log(!"Rishi"); // false
// console.log(!!"Rishi"); // true
// console.log(typeof("rishi"));

let data = "size";
const bird = {
    size: "small"
}

// console.log(bird[data]); // small
// console.log(bird["size"]); // small
// console.log(bird.size); // small
// console.log(bird.data); // undefined as we can not access value from variable name dot operator

let c = { name: "Rishi" }
let d = c;
c.name = "Raj";
// console.log(d.name); // Raj as object is copy by refernce 

var x;
var x = 10; // this will work
// let x=10; // this will give error x has already been declared
// console.log(x); // 10


var a = 3;
let b = new Number(3);
// console.log(a == b); // true
// console.log(a === b); // false, as new Number will have object
// console.log(typeof b); // object


let name;
mane = {}; // typp
// console.log(name); // undefined

function woofCall() {
    console.log("Wook");
}
woofCall.name = "Wooow";
// woofCall(); // wook, as  function or object extra properties will not inpect original

function sum(a, b) {
    return a + b;
}
// console.log(sum(1,"2")); // 12

let number = 0;
// console.log(number++); //0
// console.log(++number); // 2
// console.log(number); // 2

function getAge(...arg) {
    console.log(arg); //[21];
    console.log(typeof arg); // everything in array is object
}

// getAge(21)

function getAgeStrict() {
    "use strict"; // by using this we can't use hoisting concept
    age = 21;
    console.log(age); // age is not defined
}
// getAgeStrict()

const sumEval = eval('5+10*10');
// console.log(sumEval); // 105

/** How long the session will remain */
// sessionStorage.setItem('secret',105) // as soon as we close the tab it will remove

const obj = { hello: "a", 2: "b", 3: "c" }
// console.log(obj.hasOwnProperty(2)); // we can use for numeric key
// console.log(obj.hasOwnProperty("2"));
// console.log(obj.hasOwnProperty("hello"));
// console.log(obj.hasOwnProperty(hello)); // Throw error as hello is not defiend it is treating as variable.

const obj1 = { a: "one", b: "two", a: "repeat" }
// console.log(obj1); //  { a: 'repeat', b: 'two' } as we overwrite the key with new value

for (let i = 1; i < 5; i++) {
    if (i == 3) continue;
    // console.log(i);
}
// output: 1 2 4

const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

// bar();
// foo();
// baz();
// output: First, Third, Second

{/* <div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('buttton')">Click!</button>
    </div>
</div> */}
// output: button, second div, first div as it forms bubble from inside to outside

const person = {name:"Peter"};

function sayHi(age){
    return `${this.name} is ${age}`
}
// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21)) // this will return the function so we need to use ()
// console.log(sayHi.bind(person,21)())


function getValue(){
    return (()=>0)();
}
// console.log(getValue()); // It is returing 0 with IEFF
// console.log(typeof getValue()); // number

function getValue2(){
    return ()=>0;
}
// console.log(getValue2()()); // as it returing anonymous function 
// console.log(typeof getValue2()); // function

// console.log(typeof typeof 1); // string as type of 1 is number and number type of is string

const numbers = [1,2,3];
numbers[9] = 11;
// console.log(numbers);
// output : [ 1, 2, 3, <6 empty items>, 11 ]


const numbers2 = [1,2,3];
// numbers2[3] = numbers2;
// console.log(numbers2); 
// every third value of array will have whole array and 
//it keep repeating for every inner array of third potition

/** In JS everything is primitive or object type */

// console.log(!!null); // false
// console.log(!!""); // false
// console.log(!!1); // true

// console.log(setInterval(() => console.log("hi"), 1000))
// console.log(setInterval(() => console.log("hi"), 1000))
// console.log(setInterval(() => console.log("hi"), 1000))
// Output: First will return unique id of very set interval and then log

// console.log([..."Rishi"]); // array rishi
// console.log([..."123456"]); // array of 123456

let dateCalucation = 3+4+'5';
// console.log(dateCalucation); // 75
// console.log(typeof dateCalucation); // string as its +'string'

// console.log(typeof 3 + 4 + '5'); // number45
// console.log(typeof (3 + 4 + '5')); // string
// console.log(typeof (3 + 4 + +'5')); // number (as we use + infront of 5 value)
// console.log(typeof []); // object
// console.log([] == []); // fase as it has unique addres

let dataArray = [1,2,3,'4'].map(num=>{
    if(typeof num === 'number') return;
    return num*2;
})
// console.log(dataArray);  // [ undefined, undefined, undefined, 8 ]

function getInfo(member){
    member.name ="Rishi";
}

const personDetail = {name:"Raj"};

getInfo(personDetail);
// console.log(personDetail); 
// as we have pass the object and object is  pass by reference

function Car(){
    this.make = 'TATA';
    return {
        make:'KIA'
    }
}

const myCar = new Car();
// console.log(myCar.make); // KIA
/** As function return over write the key */

(()=>{
    // let xyz = 10;
    let xyz = (y=10);
    // console.log(xyz) // 10
})();
// console.log(typeof xyz); // undefined as it acessing outside

(()=>{
    let xyze = abc = 10;
})();
// console.log(typeof abc); //number as its abc is default assing as var (global)

(()=>{
    let a = 10;
})();
(()=>{
    let a = 10;
})();

// Above two a let will not throw erro as its does not belong to same block scope

(()=>{
    let a = abcd = 10;
})();
(()=>{
    let a = abcd = 20;
})();
// console.log(abcd); // 20

let x1=100;
(()=>{
    var x1= 20;
})();
// console.log(x1); // 100 as var is with in the function

console.log(!true - true); // 0-1 = -1
 
console.log(true + +"10"); // 1+10 = 11