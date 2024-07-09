// The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// State of promise
/*
1. Pending
- This is the initail state, which we start from.

2. Fulfilled
- This means the promise has been fulfilled

3. rejectd
- This means the promise has been rejected, there was an error.

*/


// Why needed
/*
1. Promise was introduce to avoid callback hell


*/


// call back hell
// call back inside another callback and then ...


// callback example

function getData(){
    const request = new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v3.1/name/portugal');
    request.send();

    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const [neighbhour] = data.borders;
        console.log(neighbhour);
        const request = new XMLHttpRequest();
        request.open('GET',`https://restcountries.com/v3.1/alpha/${neighbhour}`);
        request.send();

        request.addEventListener('load',function(){
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
        })
    })
}

// getData()


// Product promise

// const promise1 = new Promise((resolve, reject)=>{
//     // resolve("Promise resolved")
//     reject("Promise rejected")
// })


// // consuming
// promise1.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("errr",err)
// })



function getDataByThen(){
    fetch('https://restcountries.com/v3.1/name/portugal')
    .then((response)=> response.json())
    .then((data)=> {
        const [border] =  data[0].borders;
        console.log(border);
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        
    })
    .then((response)=> response.json())
    .then((borderData)=>{
            console.log(borderData);
    })
}

// getDataByThen();

async function getDataByAsyncAwait(){
    const response = await fetch('https://restcountries.com/v3.1/name/portugal');
    const data = await response.json();
    const [border] =  data[0].borders;
    const response2 = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    const data2 = await response2.json();
    console.log(data2);
}
// getDataByAsyncAwait()


async function xyz(){
    console.log("zyx");
}

// console.log(xyz());



function getDataBynewThen(){
    console.log("before fetch")
    fetch('http://127.0.0.1:5500/interview-question-answer/state_list.json')
    .then(response => response.json())
    .then(data=> data.forEach(value=>console.log(value)))
    console.log("after fetch...")

}



// console.log("before Function called")
// getDataBynewThen();
// console.log("After Function called")


// before Function called
// before fetch
// after fetch...
// After Function called
// List of state


async function getDataNewAsynAwait(){
    console.log("before async call")
    const response = await fetch('http://127.0.0.1:5500/interview-question-answer/state_list.json');
    const data = await response.json();
    console.log("before for each array")
    data.forEach(value=>console.log(value))
    console.log("after  async call...")

}

// console.log("before Function called")
// getDataNewAsynAwait();
// console.log("After Function called")

// When promise will come like await all other code will not executed
// before Function called
// before async call
// After Function called
// before for each array
// Andra prash
// Maharashtra
// up
// uk
// odisha
// manipur
// magaland
// tripura
// after  async call...


// Create promise with dyanmic data

// var promise2 = new Promise((resolve, reject)=>{
//     resolve("Promise is resolved")
// })

// promise2.then((data)=>console.log(data))

var promise2 = function(arg){
    return new Promise((resolve, reject)=>{
        resolve(arg)
    });
}

// promise2('This is dyanmic data').then((data)=>console.log(data))


var promise1 = new Promise((resolve, reject)=>{
    reject('Promise1 resolve')
})
var promise2 = new Promise((resolve, reject)=>{
    resolve('Promise2 resolve')
})

var promise3 = new Promise((resolve, reject)=>{
    resolve('Promise3 resolve')
})

// Promise.all([promise1,promise2,promise3]).then(val => console.log(val))
// Any promise is reject, we will not get any data

// Promise.allSettled([promise1,promise2,promise3]).then(val => console.log(val));


// If any promise is resolve will give result, 
// Promise.any([promise1,promise2,promise3]).then(val => console.log(val));

// Anything come first resolve or reject will gona return 
Promise.race([promise1,promise2,promise3]).then(val => console.log(val)).catch(err=> console.log("error: ",err));


