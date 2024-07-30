let arr = ["rishi", "pal"];

let object = {
    name:"Rish",
    city:"mumbai",
    getIntro: function(){
        console.log(this.name + " from "+this.city);
    }
}


let object2 = {
    name:"Raj"
}

// Just for example, not to do in real project
object2.__proto__ = object;
console.log(object2.name);
console.log(object2.city);
object2.getIntro()
