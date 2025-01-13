
function debounceFn(func,delay = 300){

    let clearTimeoutStatus;
    return function(...arg){
        clearTimeout(clearTimeoutStatus)
        clearTimeoutStatus = setTimeout(() => {
            func(...arg)
            // func.apply(this,arg)
        }, delay);
    }
}

function throttle(func, delay){
    let isWaiting = false;
    return function(...arg){
        if(!isWaiting){
            func(...arg);
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false
            }, delay);
        }
    }    
}
const saveInput = (name)=>{
    console.log("SaveInput ",name);
}

// const processChanage = debounceFn(saveInput,2000)
// processChanage("foo")
// processChanage("foo")
// processChanage("foo")
// processChanage("foo")
// processChanage("foo")

const processChanage = throttle(saveInput,2000)
processChanage("bar")

setTimeout(() => {
    processChanage("bar")
}, 1000);

setTimeout(() => {
    processChanage("bar")
}, 1200);
setTimeout(() => {
    processChanage("bar")
}, 1500);
setTimeout(() => {
    processChanage("bar")
}, 2000);