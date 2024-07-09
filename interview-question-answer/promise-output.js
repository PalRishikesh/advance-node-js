// Promise.resolve().then(()=>console.log("abc"))
// new Promise((res,rej)=>{
//     console.log("Promise is started...");
//     res("");
// }).then(()=>{
//         console.log("abc");
// })
// console.log("3");
// setTimeout(() => {
//     console.log("2");
// }, 1000);



// Promise is started...
// 3
// abc
// 2

// new Promise((res,rej)=>{
//     console.log("Promise is started...");
//     res("");
// }).then(()=>{
//     setTimeout(() => {
//         console.log("abc");
//     }, 1000);
// })
// console.log("3");
// setTimeout(() => {
//     console.log("2");
// }, 1000);


// After going in microtask queue, immediately will go tin macro task queue for settimeout
// Promise is started...
// 3
// 2
// abc

Promise.resolve(console.log('abc'))
console.log(3);
setTimeout(() => {
    console.log(2);
}, 1000);

// abc
// 3
// 2