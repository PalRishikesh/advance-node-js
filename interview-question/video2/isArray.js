console.log(typeof {})
console.log(typeof [])

// method 1
console.log(Array.isArray([]))
console.log([] instanceof Array)

let myName = "Vinod Thapa";
let channelName = myName;

myName = "Thapa technical";
console.log(channelName);


const obj1= {   
    id:1,
    name:"Vidon"
}

const obj2 = obj1;
obj2.name = "Thapa technical"

console.log(obj1)