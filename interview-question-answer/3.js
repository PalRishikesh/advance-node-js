// Semantic tag, which provide by name itself,table, title,header,footer, seo preference
// Screen reader
// why alt in images (for acccessibility)
// order list, with type a,b,c
// why Doc type in html, tell the html5
// What is attribute
// What is global attribute, id,class, stype
// What is data attribute
// svg(vector) vs canvas (can be pixalet)
// div vs span, we can not given height and width on inline where as on block we can set
//“The “cascading” in CSS refers to the fact that styling rules “cascade” down from several sources. This means that CSS has an inherent hierarchy and styles of a higher precedence will overwrite rules of a lower precedence.”
// id selector has maximum specicity/ combinatin of id class tag , like id has 100, element have 1
// What is sudo element
// What is specicity of sudo class: 10
// What is specicity of sudo element: 1
// What is specicity of class : 10
// Default value of position:static
// width em,rem,px
// box sizing boder box, boder contianer
// combinator seclector
// livescripr,mocha
// JS is dynamic 

// ternary is a expression(we can store the result in terary operator) and 'if else' is a statement
// type coersion, conversion

// What is scope, globa, func,block,lexical scope

var a=5;
// console.log(a++); //5
// console.log(a); //6

// console.log(1<2);
// console.log(2<3);

// console.log(2>1);
// console.log(3>2);

console.log(1<2<3); // true
console.log(3>2>1); // false

// function foo(a, ...rest,c){
//     console.log(a,rest,c); // SyntaxError: Rest parameter must be last formal parameter
// }

function foo1(a, ...rest){
    console.log(a,rest); // 1 [ 2, 3, 4, 5 ]

}
// foo1(1,2,3,4,5)

var x=20;
function fuzz(){
    console.log(x); // undefined, if below var was not delcared than will have 20 values
    // var x=10;
}
// Shadowing effect

fuzz();

// console.log(myname);
// var myname = 'rishi'

setTimeout(() => {
    console.log('Timeout');
}, 0);


Promise.resolve().then(()=>{
    console.log('Promise Then')
})
console.log('End'); // End, Promkise, Timeout


setTimeout(() => {
    
}, 10000);
//
async function  fuza() {
        return "Hello World!";
}

const restul = fuza();
console.log(restul); //Promise { 'Hello World!' }
console.log(restul.then(data=> data)); // Promise { <pending> }
// Or we can use fn

async function abcde(){
const restul = await fuza();
console.log(restul);

}
abcde();



