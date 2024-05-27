const errorFirstCallback = (error,result)=>{
    if(error){
        console.error("Error in first : ",error.message);
        return;
    }
    console.log("Result: ", result);
}

function asyncOperation(callback){
    setTimeout(()=>{
        // const error = null;
        const error = new  Error("Async operation error");
        callback(error, null);
    },0)
}

asyncOperation(errorFirstCallback);