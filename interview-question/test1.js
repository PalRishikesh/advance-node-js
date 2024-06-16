// Http server

const http = require("http");
const port = 5000;

// const server = http.createServer((req,res)=>{
//     res.write("Hi")
//     res.end()

// })
// server.listen(port, ()=>{
//     console.log(`Server is running ${port}`);
// })

// What is clousre

/** Closure in action that is inner function can have access to the outer function/ parent function variable  as well as all the global variable 
 * Closure in JavaScript is a form of lexical scoping used to preserve variables
 * A function with lexical scope is know as closure
*/

// function test2(){
//     let a = 100;
//     return function inner(){
//         return a;
//     }
// }

// let result1 = test2();
// console.log(result1());

/*

function clickHanlder(color){
return function(){
    document.body.style.backgroundColor = `${color}`;
    } 
}

document.getElementById('orange').onclick = clickHanlder('orange')
document.getElementById('green').onclick = clickHanlder('green')

*/


// What is a Reference Error?
/** Reference errors occur when you are trying to refer to or use something that does not exist. */
// Solution: only use a variable that you've declared to avoid getting an error.


/*
let a = 1
console.log(b) // undefined variable used
//output
Uncaught ReferenceError: b is not defined

if(true){
    let a = 1
}

console.log(a)

//output
ReferenceError: a is not defined
*/

// What is a Type Error?
/** Type errors occur when you use something that is not intended to be used in that particular way. */
// The easiest way to prevent type errors is to avoid using the same names for different variables and functions.


/*
let a = 1
console.log(a()) 

//output
Uncaught TypeError: a is not a function

const a = 1
a = 2 // you reassign a const type variable again

//output
TypeError: Assignment to constant variable.

const myArray = [1,2,3,4]
myArray = myArray.push(5) // reassign array

//output
TypeError: Assignment to constant variable.

*/

// What is garbage collector
/* 
Garbage collection (GC) is a form of automatic memory management by removing the objects that no needed anymore

There are two main algorithm used to detect which objects no needed anymore.
1. Reference-counting garbage collection: this algorithm reduces the definition of "an object is not needed anymore" to "an object has no other object referencing to it", the object will removed if no reference point to it

2. Mark-and-sweep algorithm: connect each objects to root source. any object doesn't connect to root or other object. this object will be removed.

currently most modern browsers using the second algorithm.
*/


// Q. Anonymous Function 
/*
It is a function that does not have any name associated with it. 

	var greet = function () { 
		console.log("Welcome to GeeksforGeeks!"); 
	}; 
	
	greet(); 

*/


// What is First class function

/*
A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
JavaScript treats function as a first-class citizen. This means that functions are simply a value and are just another type of object.

const Arithmetics = {
    add:(a, b) => {
        return `${a} + ${b} = ${a+b}`;
    },
    subtract:(a, b) => {
        return `${a} - ${b} = ${a-b}`
    },
    multiply:(a, b) => {
        return `${a} * ${b} = ${a*b}`
    },
    division:(a, b) => {
        if(b!=0) return `${a} / ${b} = ${a/b}`;
        return `Cannot Divide by Zero!!!`;
    }

}

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));

In the above program, functions are stored as a variable in an object.

*/


// Higher-Order Function
/*
A function that receives another function as an argument or that returns a new function or both is called Higher-order function.
 Higher-order functions are only possible because of the First-class function.

 const greet =  function(name){
    return function(m){
  
        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('ABC');
greet_message("Welcome To GeeksForGeeks")

// Hi!! ABC, Welcome To GeeksForGeeks

*/
/*
2. What is meant by stream in Node?
A stream in Node.js is a continuous flow of data between a source and a destination, processed incrementally in small chunks rather than as a whole.
*/

/*

Explain Streaing and its types

Streams are essentially a sequence of data that is processed sequentially, allowing developers to read and process data piece by piece or in chunks, 
instead of reading all the data into memory at once.

In Node.js, streams are a powerful concept that enables developers to handle data flow efficiently, especially when dealing with large data sets. 
Streams can be thought of as a sequence of data that is processed sequentially.

There are four types of Node streams: Readable streams, Writable streams, Duplex streams, and Transform streams.



Advantages of Stream:

Memory efficiency: Stream is memory (spatial) efficient because they enable you to download files in smaller chunks instead of a whole in the memory before you can process it thus, saving space.
Time efficiency: Stream is time-efficient because you start processing the data in smaller chunks so the procedure starts earlier compared to the general way, where you have to download the whole data to be able to process it. Hence, this early processing saves a lot of time.
Composable data: Data is composed because of the piping ability of the streams which lets them connect together in spite of however heavy the codes are. It means that the process of one input getting piped to output keeps on happening.

Readable stream: It is the stream from where you can receive and read the data in an ordered fashion. However, you are not allowed to send anything. For example fs.createReadStream() lets us read the contents of a file.
Writable stream: It is the stream where you can send data in an ordered fashion but you are not allowed to receive it back. For example fs.createWriteStream() lets us write data to a file.
Duplex stream: Duplex streams are streams that allow both reading and writing of data. They are essentially a combination of Readable and Writable streams. Duplex streams are commonly used for network communication and other scenarios where both reading and writing are necessary. For example net.Socket is a TCP socket.
Transform stream: Transform streams are a special type of Duplex stream that allows data to be modified as it flows through the stream. They can be used for tasks such as compression, encryption, or data manipulation. Transform streams have a writable side and a readable side,
 allowing data to be modified as it is being read from the source.


 Chaining the stream: Chaining of the stream is a mechanism of creating a chain of multiple stream operations by connecting the output of one stream with another stream. It is normally used with piping operations. For example, we will use piping and chaining to first compress a file and then decompress the same. 
*/


/*
 1. Master is only in charge of the workers 
 2. Workers are in charges of handling incomking requrests, reading file, etc
 3. Each workers gets its own event loop, memeory and V8 instance
 
*/


/*

Shallow Copy
Shallow copy method creates a copy where the source and the copied variable reference remain the same. This means that modifications made in one place would affect both places.

Here's an example to get a better understanding:

const first_person = {
name: "Jack",
age: 24,
}

const second_person = first_person;

second_person.age = 25;

console.log(first_person.age); // output: 25
console.log(second_person.age); // output: 25



Deep Copy
Deep copy method creates a copy where the source and the copied variable reference are completely different. 
This means that modifications made in one place would only affect the variable where we are making a change.

Spread (...) operator

const first_person = {
name: "Jack",
age: 24,
}

const second_person = { ...first_person };

second_person.age = 25;

console.log(first_person.age); // output: 24
console.log(second_person.age); // output: 25


In case of nesting, the spread operator creates a shallow copy.

If the objects/arrays are nested, then we can achieve deep copy by using

JSON.parse() and JSON.stringify()

const first_person = {
  name: "Jack",
  age: 24,
  address: {
    apartment: "A",
    city: "London"
  }
};

const second_person = JSON.parse(JSON.stringify(first_person));

second_person.age = 25;
second_person.address.apartment = "N";
console.log(first_person);
console.log(second_person);

Summary
Shallow copy method creates a copy where the source and the copied variable reference remain the same. Changing one, would change the other as well.
Deep copy method creates a copy where the source and the copied variable reference are entirely different. Changing one, would not affect the other one.
Common methods like Array.concat(), Array.from(), Object.assign(), etc creates a shallow copy.
Spread(...) operator, creates a deep copy when there is no nesting.
One of the ways to create a deep copy is by using JSON.parse() and JSON.stringify().



*/


/*
Promise.all()
Promise.all method in JavaScript is used to handle multiple promises concurrently and wait for all of them to resolve.
If all promises resolve then it returns an array with all resolved promises.


const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.all(promisesArray)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

  All promises resolved: [ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]

  If any of the promise rejects, it won't wait for others to resolve and will return with reason of the promise that is rejected. Look at example below to get the better idea about this:


  const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 3 rejected"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.all(promisesArray)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

  Here, promise2 resolves after 500 seconds but promise3 rejects after 800 seconds so it will not wait for promise1 and will return a response:

  // Output: At least one promise rejected: Promise 3 rejected



  Promise.allSettled()
The Promise.allSettled method is used to handle multiple promises concurrently, just like Promise.all, but it waits for all the promises to settle (either resolve or reject) before proceeding. It returns an array of objects representing the outcomes of the input promises, including their values or reasons for rejection.

Promise.allSettled() always returns array of objects with status key which denotes fulfilled or rejected. If a promise is fulfilled then you can get response with value key and if the promise is rejected then you can find the reason in reason key.

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 2 resolved"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.allSettled(promisesArray).then((results) => {
  console.log("All promises settled:", results);
});

Res:
[
  { status: 'fulfilled', value: 'Promise 1 resolved' },
  { status: 'rejected', reason: 'Promise 2 resolved' },
  { status: 'fulfilled', value: 'Promise 3 resolved' }
]


Use Cases:
- As the name suggests, race returns first promise with shortest delay whether it is resolved or rejected.

Promise.all: Useful when you want to wait for multiple asynchronous operations to complete and need all of them to be successful before proceeding. For example, making multiple API requests in parallel and waiting for all responses.

Promise.allSettled: Useful when you want to gather the results of multiple asynchronous operations, regardless of whether they succeeded or failed. It's often used when you want to know the outcome of all promises, even if some of them are rejected.


The Promise.race method in JavaScript is used to handle multiple promises concurrently, but it resolves or rejects as soon as the first promise in the input array settles, either by resolving or rejecting.

Promise.race()


const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((_,reject) =>
  setTimeout(() => reject("Promise 2 rejected"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.race(promisesArray)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
  
  //At least one promise rejected: Promise 2 rejected

  // Please note: race does not care if all are resolved or all are rejected. It will give you first settled result whether it is resolved or rejected.


  Promise.any()
It is somewhat similar to race method but with few minor differences:

It will return with first resolved promise.


const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((_,reject) =>
  setTimeout(() => reject("Promise 2 rejected"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.any(promisesArray)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });


  Rejection Handling:
Promise.race: If the promise that settles first is rejected, the returned promise will also reject with the same rejection reason.
Promise.any: If all input promises reject, the returned promise will reject with an aggregated error containing the reasons of all rejected promises. It only resolves if at least one promise resolves.

Use Cases:
Promise.race: Useful when you want to implement scenarios like a timeout mechanism where you want to respond to the first promise to complete, regardless of whether it succeeds or fails.
Promise.any: Useful when you want to handle the case where at least one promise out of multiple promises succeeds, and you're interested in the result of the first resolving promise.

*/

/*

SetImediate => check hander/queue
setTimeout => timer queue

*/

function add(a,b){
    console.log(a+b);
}

setImmediate(()=>{
    add(2,2)
    console.log("Set immediate");
})

setTimeout(()=>{
    add(2,3)
    console.log("Set Timeout");
})

process.nextTick(()=>{
    add(2,4)
    console.log("Set nexttick");
})