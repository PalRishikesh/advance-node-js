/** Global object will available at  at applicatoin */
// We can add custom property in global object

// window.alert("hello"); // Will do alert in browser

// window.alert = window.console.log; // This will overwrite

// window.alert("This is allert message");

// All browser come up with globalThis for common access global object insted of window or this

/** In Node we can use global insted of window or this */
// global.console.log = global.console.warn;
// console.log("Simple loggin with errro");


/** We can defined properties to global object with the var(not let,const) keyward not any inner function*/
var fruitName = "Apple";
function getFruitName(){
    alert("Fruit name is Apple")
}

/** We can test in old brower */
// If this is available is will show the details else not
// window.Promise 