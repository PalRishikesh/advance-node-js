// let student = {
//     name:'Rishi',
//     lastName:'Pal',
//     birth:2000,
//     getFullName:function(){
//         return this.name+ " "+this.lastName;
//     },
//     getAge:function(){
//         let age  = new Date().getFullYear() - this.birth;
//         return age;
//     }
// }


//  let teacher = {
//     name:'Raj',
//     lastName:'Singh',
//     birth:1980,
//     getFullName:function(){
//         return this.name+" "+this.lastName;
//     },
//     getAge:function(){
//         let age  = new Date().getFullYear() - this.birth;
//         return age;
//     }
//  }

//  console.log(teacher);
//  console.log(teacher.getFullName());
//  console.log(teacher.getAge());
//  console.log(student.getAge());

// Using protoype

let userDetail = {
 getFullName:function(){
        return this.name+" "+this.lastName;
    },
    getAge:function(){
        let age  = new Date().getFullYear() - this.birth;
        return age;
    }
}


let student = {
    name:'Rishi',
    lastName:'Pal',
    birth:2000
}


 let teacher = {
    name:'Raj',
    lastName:'Singh',
    birth:1980
 }

 /** When using __proto__ it will not load all the data when object is use, it will load when we call  */
//  teacher.__proto__= userDetail;
//  student.__proto__= userDetail;
//  console.log(teacher.getAge());
//  console.log(student.getAge());

 /** Or we can use in object also */
/** In this all the data will load at once only */
 let teacher2 = {
    name:'Raj',
    lastName:'Singh',
    birth:1960,
    getAge: userDetail.getAge
 }
//  console.log("teacher2: ",teacher2.getAge());

 /** There is many prototype use by javascript a.__proto__ */

/** Best way to implement prototype in overall project */
Object.prototype.myAppData = "This is prototype implementation at global level";
Object.prototype.myData= function(){
    return "Custom Function in prototype"
}

Object.prototype.getAge = function(){
    return "this is age from prototyp " + this.valueOf();
}

/** We can pass the value in fuction or directly use by this. variable name */
Object.prototype.getCurrentAge = function(){
    if(this.birth === undefined){
        return undefined;
    }
    return "Age " + (new Date().getFullYear() -  this.birth);
}

/** we can add prototype to string also */
String.prototype.customPototype = "This is custom protoype in string";
String.prototype.customLengh = function(){
    return this.length + 3
}
let a="this is string data";

// console.log(a.customPototype);
// console.log(a.customLengh());

// let stud={};
// console.log(stud.myAppData);
// console.log(stud.myData());

console.log(student.getCurrentAge());
console.log(a.getCurrentAge());