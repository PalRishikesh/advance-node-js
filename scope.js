/*
What is Scope in Javascript
Current context of execution in which values and expression are visisble or can be referenced.
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice vera.


*/


function test(x,y){
    console.log(x+' '+x);
}

// test(1,2);
// 'use strict'
function test(x,x){
    console.log(x+' '+x);
}
// test(3,4);

function func([x=1,y=2] = []){
    console.log(x+y);
}

func([],[2,3]); //3 as default value while passing empty array
console.log(func([2,3])); // 5

function func([x=1,y=2] = [],[z,a]=[]){
    console.log(x+y+z+a);
}
func([],[2,3]); //8 2nd default values
func([],[2]); //NaN 2nd default values


async function async1() {
    setTimeout(() => {
        console.log('Async1');
    }, 0);
}


async function async2() {
    console.log('start');
    await async1();
    console.log('end');
}

async2();
// start
// end
// Async1 , becuase setTimeout is global function not promise