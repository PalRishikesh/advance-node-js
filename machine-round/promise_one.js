
const promiseFn = new Promise((resolve)=>{
    console.log('This is promise');
    return resolve("What's going on")
})

console.log("What");

promiseFn.then((res)=>{
    console.log(res);
})