// Javascript is a synchroonus language, event loop play role to made asynchonous


// Diff between var and let

/*
1. Var is function scoped and let and const are block scoped.
2. All of them are hoisted but let and const ahve teporal dead zone.
3. var can be redeclared in same scope but can not be done with let and const
4. var and let can be updated in same scope but const can not be updated
*/


function abc(){
    var a = 10;
    {
        var a = 30;
      
    }
    console.log(a); //30
}


// function abc(){
//     let a = 10;
//     {
//         let a = 30;
      
//     }
//     console.log(a); //10
// }

// abc();

/*
 let x = "outer value"
(function(){
    console.log(x);
    let x = "Inner value"
}())

*/


// Diff arrow function  and normla function

/*
1. Arrow functions have lexical this scope.
2. We cannot creaet constructors from arrow functions
3. Arrow function are not hoisted
4. We cannot access arguments object inside arrow functions
5. Way of writing both function are differences.



*/


// Problem

var Person = {
    name:'Rishikesh',
    getName:function(){
        // console.log(this.name);// Rishikesh
        function xyz(){
            console.log(this); // Global / window object
            console.log(this.name) // undefned
        }

        xyz() 
        
    }
}

// Person.getName()
// To overcome use 1. bind with call  2. assing some other variable before funciton 3. By using arrow function(bind the lexical scope of normal function this)
var Person2 = {
    name:'Rishikesh',
    getName:function(){
        // console.log(this.name);// Rishikesh
        function xyz(){
            console.log(this); // Global / window object
            console.log(this.name) // undefned
        }

        xyz.call(this)
      
    }
}
   
// Person2.getName()

var Person3 = {
    name:'Rishikesh',
    getName:function(){
        var selfThis = this;
        function xyz(){
            console.log(selfThis); 
            console.log(selfThis.name)
        }

        xyz()
      
    }
}

// Person3.getName()



var Person4 = {
    name:'Rishikesh',
    getName:function(){
        const xyz=()=>{
            console.log(this); // 
        }

        xyz() 
        
    }
}

// Person4.getName()

// Normal constructor function

function PersonDetail(name,age){
    this.name = name;
    this.age = age;
}

var john = new PersonDetail('Rishi',28);
// console.log(john);

// Hoisting

// abcd();
function abcd(){
    console.log("Normal function hoisting");
}

// Deep copy and Shallow copy
var obj1 = {
    name:'abc'
}

var obj2 = obj1
// console.log(obj2);


// Shallow copy

var obj1 = {
    name:'abc',
    address:{
        street:"malad",
        city:"delhi"
    }
}

// var obj2 = Object.assign({},obj1) // 1st way
var obj2 = {...obj1} // 2nd Way
obj2.name="xyz";
obj2.address.city="mumbai";

// console.log(obj1.name); // abc
// console.log(obj1.address.city); // Mumbai


// Deep copy, using stringfy. it will not work with any key is functin or its have lot of data, other home work to do with object.keys, or use loadash, cloneDeep()

var obj1 = {
    name:'abc',
    address:{
        street:"malad",
        city:"delhi"
    }
}

var obj2 =  JSON.parse(JSON.stringify(obj1))
obj2.name="xyz";
obj2.address.city="mumbai";

console.log(obj1.name); // abc
console.log(obj1.address.city); // delhi
console.log(obj2.address.city); // Mumbai


