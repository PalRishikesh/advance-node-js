/** Prototypes are the mechanism by which JavaScript objects inherit features from one another. */

const obj1 = {
    name:"Rishi Pal",
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
}

// console.log(obj1);

// If we want to use getName method in obj2 we can use, first will check properties in obj2 if not found will return properties of obj1 like name
const obj2 = {
    age: 21,
    name:"raj",
    __proto__:obj1
}

// console.log(obj2);
// console.log(obj2.getName()); // if name is not there in obj2 will return rishi 
// console.log(obj2.getAge())


const obj3 = {
    class:"MCA",
    __proto__:obj2
}

// console.log(obj3.getName());
// console.log(obj3.getAge());

/** Making custom prototype */
Array.prototype.customShow = function(){
    // return this
    let tempArray = [];
    this.forEach((element,index)=>{
        tempArray.push(element+" city");
    })
    return tempArray;
}
 const cities = ["Mumbai","Banaglore"]

 console.log(cities.customShow());

 Array.prototype.convertIntoObject = function(){
    let newObj = {};
    this.forEach((element,index)=>{
        newObj[index] = element;
    })
    return newObj;
 }

 console.log(cities.convertIntoObject());


 function MyPrototype(name){
    this.name = name;
 }
 MyPrototype.prototype = obj1

 const customproto = new MyPrototype("Pooja");
 console.log(customproto.getName());
