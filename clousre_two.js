/** A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope from an inner function. */

var sum = function(a){
    var c = 4;
    return function(b){
        return a+b+c;
    }
}

var storeSum = sum(10);
// console.log(storeSum(5));


var summation = function(a,b,c){
    return {
        getTwoSum: function(){
            return a+b
        },
        getThreeSum: function(){
            return a+b+c
        }
    }
}

var storeSummation = summation(1,5,9);
console.log(storeSummation.getTwoSum());
console.log(storeSummation.getThreeSum());