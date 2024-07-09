function getName(city){
    console.log(this.fname+" "+ this.lname+ " lives in " + city);
}


let person= {
    fname:"rishi",
    lname:"pal"
}
Function.prototype.myBind = function(obj){
    const fn= this;
    // return function(arg){
    //     return fn.call(obj, arg)
    // }

    return function(...args){
        return fn.apply(obj, [...args])
    }
}

const bind = getName.myBind(person);
console.log(bind('delhi'));

