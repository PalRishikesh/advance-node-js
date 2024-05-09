/** Making one object function to available another object with call*/
/** Function borow from one object */

let userDetail1 = {
    name: "Rishi",
    age: 25,
    printDetail:function(){
        // console.log(this);
        console.log(this.name);
    }
}

userDetail1.printDetail() // Rishi


let userDetail2 = {
    name: "Raj",
    age: 24
}

userDetail1.printDetail.call(userDetail2) // Raj

/** If function is in not in object that is outside generic function */

const printDataFn = function(state, country){
    console.log(this.name, state, country);
}
// Or we can use rest opeator
const printDataFnWithRest = function(...state){
    console.log(this.name, ...state);
}
printDataFn.call(userDetail2,"Mumbai","India")
/** Apply will take data in array form */
printDataFn.apply(userDetail2,["Banaglore","India"])
/** Bind is same like call but it will store function and call leter */
let printBindFn = printDataFn.bind(userDetail2,"Delhi","India")
printBindFn()

