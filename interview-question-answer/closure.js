// closure is a function which is bubdle together with it surrounding evnironment/or lexical enviroement (parent scope)


// function abc(){
//     var name="Rishi";
//      function def(){
//         console.log(name);
//     }
//     def()
// }

// abc()


// function abc(){
//     var name="Rishi";
//     return function def(){
//         console.log(name);
//     }
// }

// abc()()


function abc(){
    var name="Rishi";
    return function def(){
        console.log(name);
    }
}

// const clousre  = abc();
// clousre()


// Needed so that we can crate a private varibale can not access outside of scope(encapsulation)
// Advantage of closure
/*
1. function curring, slpit a function with mulriple argument into multiple function of single argument
2. Memoization
3. Module desing patten
*/

// disadvnate
// 1. occupies more memeory, cause memeroy leackage

function area(length){
    return function(width){
        console.log(length * width);
    }
}

var area2  = area(10);
// area2(20)



function abc(){
    var name = "rishi";
    function def(){
        // var name = "Ram"
        function xzy(){
            console.log(name);
        }
        xzy();
    }
    def()
}

// abc();

// IIF
// (function immediateA(a){
//     return (function immediateB(b){
//         console.log(a);
//     })(1)
// })(0)

let count = 0;

// (function immediate(){
//     if(count == 0){
//         let count = 1 // Becuase we have redeclare is here
//         console.log(count);
//     }
//     console.log(count);
// })()


// for(var i=0; i< 3; i++){
//    (function(i){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//    })(i)
// }

// Use variable with some increment 

function abc(){
    var count = 0;
    return function xyz(){
        count++;
        console.log(count);
    }
}

// var counter = abc();
// counter()
// counter()
// counter()

function sum(x,y){
    return x+y;
}

const obj = {};
function basicMemoizationSumWithoutClosure(a,b){
    const key = a+''+b;
    if(obj[key]){
        console.log("found ");
        return obj[key];
    }
    else{
        console.log("not found ");
        const sumValue =  sum(a,b);
        obj[key] = sumValue;
        return sumValue
    }
}
// console.log(sum(10,5));

// console.log(basicMemoizationSumWithoutClosure(10,2))
// console.log(basicMemoizationSumWithoutClosure(10,2))

function geSum(){
    const obj={}
    return function(x,y){
        const key  = x+","+y;
        if(!obj[key]){
            console.log("calculating");
            obj[key] = x+y;
            console.log(obj[key]);

        }
        else{
            console.log(obj[key]);
        }
    }
}

const memSum = geSum();
// memSum(2,3)
// memSum(2,3)
// memSum(2,3)


function getCount(){
    var count=0;
    return{
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        log:function(){
            console.log(count);
        }
    }
}

const customCount = getCount();
customCount.increment();
customCount.increment();
customCount.increment();
customCount.increment();
customCount.log()
customCount.decrement();
customCount.log()