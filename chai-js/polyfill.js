// Traditional bind function 
let name3 = {
    firstname:"rishi",
    lastname:"pal",
}
let printFullName = function(age, town, country){
    console.log(this.firstname+" "+this.lastname+" age is "+age +" town is "+town+" "+country);
}

let printMyName = printFullName.bind(name3,20);
printMyName("Malad","USA");

/** Making a custom bind method */

// Each function can use
Function.prototype.myBind = function(...args){
    // this-> printFullName
    let obj = this;
    // console.log(args);  //[ { firstname: 'rishi', lastname: 'pal' }, 25 ]

    let params = args.slice(1)
    // console.log(params);
    return function(...args2){ // malad willl come here as agument
        // obj.call(args[0],params)
        console.log(args2);// ['malad']

        obj.apply(args[0], [...params,...args2]) // Contact two argument array as single arument as array
    }
}

let printMyName2 = printFullName.myBind(name3, 25);
printMyName2("malad","country")
