// Two Object is never same in JS
let arrName = [
    {name:"Rishi", pass:"pal"},
    {name:"Raj", pass:"patel"}
]

console.log(
    arrName.indexOf({
        name:"Raj", pass:"patel"
    })
)


let a ={};
let b = a;
let c = {};
console.log(a==b);
console.log("a  b", a==b)
console.log("a  c", a==c)
console.log(a == a)