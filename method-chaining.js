/** Method chaining is the mechanism of calling a method on another method of the same object. This ensures a cleaner and readable code.  */

// Constructor
function Calculater(){
    let data = 0;
    this.add = function(val){
        data = data+val;
        // console.log(data);
        return this;
    },
    this.sub = function(val){
        data = data - val;
        // console.log(data);
        return this;
    },
    this.multi = function(val){
        data = data * val;
        // console.log(data);
        return this;
    },
    this.printData = function(){
        return data;
    }
}

let ca1 = new Calculater();
// console.log(ca1);.
// ca1.add(20);
// ca1.sub(5)

// ca1.add(30).sub(5).multi(2) // We can asess this way by returing this keyword in function other wise not possible
// console.log(ca1.add(30).sub(5).multi(2).printData());

/** Class implementation */

class CalcuaterClass {
    data = 0;
    add(val){
        this.data = this.data + val;
        return this;
    }
    sub(val){
        this.data = this.data - val;
        return this;
    }
    print(){
        return this.data;
    }
}

let cc = new CalcuaterClass();
console.log(cc.add(25).sub(5).print());