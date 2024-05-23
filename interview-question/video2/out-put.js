const logNumbers = ()=>{
    console.log(1);
    setTimeout(() => {
        console.log(2);
    }, 1000);
    setTimeout(() => {
        console.log(3)
    }, 0);
    console.log(4);
}

// logNumbers();

//1,4,3,2

// All numerics types in javascirpt are IEEE-754 Doubles.
// JS treats decimals as floating point numbers, which means operations like addition might be subject to rounding error.

console.log(400.4 === 200.2 * 2)
console.log(900.9 === 300.3 * 3) // false
console.log(900.9 === (300.3 * 10 * 3)/10)