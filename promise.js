/** In JavaScript, a Promise is an object that represents the eventual completion (or failure) 
 * of an asynchronous operation, and its resulting value 
 * It allows you to write asynchronous code in a more manageable way.
 * Promises help manage asynchronous operations and provide a cleaner, more robust way to handle asynchronous logic than callbacks.*/

let a = 10;
let b = 20;

let result = a+b;

async function getData(){
    let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await resultFromServer.json());
}

getData();
//Or we can handle with this way

fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=>{
    console.log("data is here");
    // console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Finally API calling  completed");
})

console.log(result);








/** Create promise */

let myPromise = new Promise(function(resolve,reject){
    // "Producing Code" (May take some time)

    let isSuccessfull = false; // Just for example
    if(isSuccessfull){
        resolve("Your coffee is ready!");
    }
    else{
        reject("Sorry no coffee for you sir.");
    }
});
/** Consuming promise  */

myPromise.then(
    function(value){
        console.log("Value is ",value);
    },
    function(error){
        console.log("Error is ",error);
    }
)