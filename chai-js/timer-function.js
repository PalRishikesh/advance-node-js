// setImmediate()
/*
Use setImmediate() when you want to execute some function asynchronously, but as soon as possible and after finishing the current block.

When you run following code, callback function passed to setImmediate() is executed immediately after the last line in this code
*/

// setImmediate(() => {
//     console.info('2. Execution of Callback Function');
// });
// console.info('1. Execution of Main Module Ends');


/*

setTimeout()
Use setTimeout() when you want to execute some function asynchronously, after a specified delay and after finishing the current block.

When you execute this code, callback function passed to setImmediate() is invoked immediately after the last line in this code and after the specified delay, a timeout callback function.

*/

// setTimeout(() => {
//     console.info('2. Execution of Timeout Callback Function');
// }, 10);
// console.info('1. Execution of Main Module Ends');

setTimeout(() => {
    console.info('4. Execution of Timeout Callback Function'); 
});
setImmediate(() => {
    console.info('3. Execution of Immediate Callback Function'); 
});
process.nextTick(() => {
    console.info('2. Execution of NextTick Callback Function');
})
console.info('1. Execution of Main Module Ends');