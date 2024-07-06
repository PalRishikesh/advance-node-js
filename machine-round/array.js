/*
Loop the array and show the original properteis of array
*/

Array.prototype.extraProperty = "chai";

const newArray = [1,2,3,4,5];

for (const value in newArray) {
    // console.log(value);
}

// Output
// 0
// 1
// 2
// 3
// 4
// extraProperty (not to include)

for (const value in newArray) {
    // if(newArray.hasOwnProperty(value))
    // console.log(value);
}

Array.prototype.customForEachOne = function(callback){
    for(let i=0; i< this.length; i++){
        callback(this[i],i, this)
    }
}

const a=[1,2,3,4];

// a.forEach((e)=> console.log(e))

// a.customForEachOne((singleValue,index,ar)=> console.log(singleValue,index,ar))


//
Array.prototype.forEachTwo = function(callback, thisContext){
    if(typeof callback !== 'function'){
        throw 'Please implment function'
    }

    const length = this.length;
    let i=0;
    while(i < length){
        if(this.hasOwnProperty(i)){
            // we cannot call callback directly inside while loop ie. use call method
            callback.call(thisContext, this[i],i,this)
        }

        i++;
    }
}

// a.forEachTwo((singleValue,index,ar)=> console.log(singleValue,index,ar))
newArray.forEach((singleValue,index,ar)=> console.log(singleValue,index,ar))
