// An Object is a collection of related data and/or functionality
// Object Store data in form of key and onValue
// In Same object we can store different type of value 

/** Defined object in 2 ways */
let user = {}
let memeber = new Object();

user.name="Rishi";
memeber.name = "Raj"

// console.log(user);
// console.log(memeber);

// const is impect on value not on key value ie. object

let key = "address new";
let phone = 123456743
const user1 = {
    name:"Raj",
    age:24,
    isDeveloper: true,
    getData:function(){
        let developer= "I am not a developer";
        if(this.isDeveloper){
            developer = " I am developer";
        }
        /** We can also defiend properties after object create and can assess inside object */
        return "I am "+this.name+" "+ this.age+" year old and "+developer+ " Living in "+this.city;
    },
    inner:{
        name:"Inner man"
    },
    ["perosnal detail"]: "Some thing private",
    [key]:"This is my address",
    phone // short hand property
}

user1.name="Rishi"
user1.city = "Varanasi"
/** We can use blank space in properties */
user1["pin code"]= "215482"
/** Delete keys will only working on innner key not on main object*/
// delete user1.inner;

console.log(user1);
// console.log(user1['pin code']);
// console.log(user1.getData());
// console.log(user1.inner); // Will return the object
// console.log(user1.inner.name);


/** Check key is present or not */
console.log('city' in  user1); // true or false

// Looping in object

for (item in user1) {
    // console.log(item); // key
    // console.log(user1[item]); // value
}

let emp ={
    rishi:100,
    pal:200,
    raj:300,
    suman:50
}

let salary=0;
for(item in emp){
    salary += emp[item]
}
console.log(salary);
