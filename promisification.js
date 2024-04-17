/** Promisifcation it's the conversion of a function that accepts a callback into function that returns a promise */
/** Convert old school callback function into promises */


// Without promise
function loadScriptWithoutPromise(src,callback){
    // const script = window.document.createElement('script');
    // script.src = script;
    // script.onload =()=> callback(null, script);
    // script.onerror = (error)=> callback(error)
    // document.head.appendChild(script);
    
    let condition = false;
    if(condition){
        callback(null,"This is working fine!")
    }
    else{
        callback("Error is here")
    }
}

// Fetching above function details with callback
// loadScriptWithoutPromise('test.js',(error,script)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(script);
//     }
// })

/** Creating promisify */
function promiseify(fn){
    return function(...args){
        return new Promise((resolve, reject)=>{
            fn(...args, (error, result)=>{
                if(error) return reject(error);
                return resolve(result);
            })
        })
    }
}


const loadScriptWithPromisify = promiseify(loadScriptWithoutPromise);

/// Calling function with promise
// loadScriptWithPromisify('test.js')
// .then((result)=> console.log(result))
// .catch((error)=> console.log("Error : ",error))

// OR asyn await

(async()=>{
    try {
        const result = await loadScriptWithPromisify('test.js');
        console.log(result);
    } catch (error) {
        console.log("There is here bor..");
    }
   
})();
