/*
console.log("One");
setImmediate(()=>{
    console.log("Five");
})
setTimeout(() => {
    console.log("Two");
}, 0);

setTimeout(() => {
    console.log("Three");
},2000);

console.log("Four");
*/


/* One, Four, Two, Five,  Three */


// console.log("2" + 2);
// console.log("2" - 2);

// 22, 0


// console.log(0.1 + 0.2 === 0.3); // Becuase 0.1+0.2 will come 0.3000000
// False


function getName(name){
  delete name; // will work only object properties, line 40

  console.log(name)
}
// getName('Rishikesh Pal')



const Person={
    name:"Rishi",
    city:"Delhi"
}
// console.log(Person);
delete Person.city;
// console.log(Person);


// IIF

// (function(){
//     console.log(a);
//     console.log(b);
//     var a = b = 3;
// })()

// a is undefined, b is not defined


var a={}, b = {key:'b'}, c ={key:'c'}

a[b]= 123;
a[c] = 456;

// console.log(a[b]); // 456