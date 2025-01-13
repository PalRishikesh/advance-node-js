function abc(){
    console.log(abc.xyz);
}

/*
abc();// undefined
abc.xyz = 400;
abc.xyz = 200;
abc(); // 200
*/

// Event propagation
// https://dev.to/anshumanmahato/managing-event-flow-a-deep-dive-into-javascript-event-propagation-2gha#:~:text=Event%20Propagation%20%2D%20movement%20of%20Events,%2D%20Capturing%2C%20Targeting%20and%20Bubbling.

const num = [1,2,3,4];
num[100]=500;
/*
console.log(num); //[ 1, 2, 3, 4, <96 empty items>, 500 ]
console.log(num.length) // 101
*/

// console.log(typeof typeof 100); // string

const ar=[...'rishi'];
// console.log(ar); // [r,i,s,h,i]

/*
console.log(parseInt('10+2')); // 10
console.log(parseInt('7FM')); // 7
console.log(parseInt('M7F')); // NaN
console.log(parseInt('MF7')); // NaN
console.log(parseInt('02F7')); // 2
console.log(parseInt('02.22F7')); // 2

console.log(isNaN('Rishi')); // true
*/


console.log([1,2].map((num)=>{
    if(num>0) return ;
    return num*2;
}))
//[ undefined, undefined ]


'use strict'

{
    function abcd(){
        console.log('Rishi');
        
    }
    
}
abcd() // above block scope is global only then it will print output. 'Rishi'

// Window object are diretly hosted on global object
/*
var az = "rishi";
let ax = 'Pal';
console.log(this.az, this.xyz); // need to check
*/
/*
function azyx(a,b){
    'use strict'
    a=100;
    b=200;
    return arguments[0]+arguments[1];
    console.log(a+b);
    
}   
*/
//console.log(azyx(300,400)); // with strict 700, withut stric 300

// Mutable array, slice, splice, find, findIndex

const ars =[1,2,3];
const newAr = ars.map((nu)=>nu>2);
console.log(newAr); // [ false, false, true ]


// useMemo & callback
// LifeCycle Method
// Context vs Redux
// Role of App.js file
// What is role of babel
// Real DoM & virtual DOM
// Syntatic event
// Webpack

// HTML
// Void element
// empty tag <br>
// dataset, select
// No valid attibute
// HTML XHTML
// Sudo classes in css
// 3d tranfomation using css
// Grid Vs flexbox
