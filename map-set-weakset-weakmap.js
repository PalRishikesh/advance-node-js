

let myArray = [1,2,3,4]
let mySet = new Set(myArray)
mySet.add(5)
const obj = {name:"rishi"}
mySet.add(obj)
// console.log(mySet)
// console.log(mySet.has(obj))
// console.log(mySet.has(1))
mySet.forEach((data)=>{
    // console.log(data);
})

/** Map have key and value form store data */

let myMap = new Map([["a1","Rishi"],["a2","Raj"]]);
myMap.set("a2","Raju")
// console.log(myMap.get("a1"));
// myMap.delete("a2")
// console.log(myMap);

for(let [key, value] of myMap){
    // console.log(key + " = " + value);
}


/** WeakMap */
/** We can only store object and only iterate */
let myWeakSet = new WeakSet();
let key1 = {name:"rishi"}
let key2 = {name:"Raj"}
myWeakSet.add(key1)
myWeakSet.add(key2)
// console.log(myWeakSet.has(key1));


/** WeakMap */
// Both have key as object and object related activity
    let myWeakMap = new WeakMap();
    let keyMap1 = {name:"rishi"}
    let keyMap2 = {name:"Raj"}
    myWeakMap.set(keyMap1,"Rishi")
    myWeakMap.set(keyMap2,"Raju")
    console.log(myWeakMap);   


