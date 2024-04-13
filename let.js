var data = "Hello";
var data = "hi";
console.log(data);

let item = "Mobile"
// let item = "TV"; // we can do by without keyword let will work fine
/** Let have block level scope */

if(true){
    let y = 10;
}
// console.log(y);
// console.log(item);


/** Variable will on function level */
function test(){
    var x= 10;
    // console.log(x);
}
// console.log(x);
test();