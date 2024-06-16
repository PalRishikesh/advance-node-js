/** Certainly! Memoization is an optimization technique used to speed up function calls by caching their results. 
 * When the same inputs occur again, the cached result is returned instead of re-executing the function.*/


let sum = 0 ;
const  calc =(n)=>{
    for(let i = 0 ;i <= n; i++){
        sum += i;
    }
    return sum;
}

const add = (a,b)=>{
       return a+b
};

// For sinlge input
const memoizeFunction = (fun)=>{
    let cache = {};
    return (...args)=>{
        let n = args[0];
        // if(n in cache){
        //     console.log("cache");
        //     return cache[n];
        // }

        // OR
        if(cache[n]){
            console.log("cache");
            return cache[n];
        }
        else{
            console.log("Calculating");
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
    
}


// console.time();
// console.log(calc(5));
// console.timeEnd();
const memoCalc = memoizeFunction(calc);

// console.time();
// console.log(memoCalc(5));
// console.timeEnd();
// console.time();
// console.log(memoCalc(5));
// console.timeEnd();


// console.log(add(10,20));

// For N number of input
const memeoizeAddFn = (fn)=>{
    let cache = {}
    console.log("cache: ",cache);
    return (...args)=>{
        const key = JSON.stringify(args);
       if(cache[key]){
            console.log("cache...");
            return cache[key];
        }
        else{   
            console.log("Calcutating..");
            result = fn(...args);
            cache[key] = result;
            return result;
        }   
    }
}
// const memoAdd = memeoizeAddFn(add)

// console.time()
// console.log(memoAdd(10,30))
// console.timeEnd()

// console.time()
// console.log(memoAdd(10,30))
// console.timeEnd()


// console.time()
// console.log(memoAdd(10,20))
// console.timeEnd()

// console.time()
// console.log(memoAdd(10,40))
// console.timeEnd()

// console.time()
// console.log(memoAdd(10,30))
// console.timeEnd()