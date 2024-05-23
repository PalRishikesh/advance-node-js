/** Factorial */
let num = 5;
var fact = 1
console.time("firstCode")

for(let i= num; i>1;){
    i = i-1;
    var fact = (num * i);
    num = fact;
}
console.timeEnd("firstCode")
console.time("secondCode")
for (; num > 1; num--) {
    fact = fact * num;
    
}
console.timeEnd("secondCode")
// console.log(fact);