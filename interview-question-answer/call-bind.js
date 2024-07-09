
const person1 = {
    fname:'Rishi',
    lanme:'Pal',
    getName:function(){
        console.log(this.fname+ " "+this.lanme)
    }
}

const person2 = {
    fname:"Raj",
    lanme:"Singh"
}

person1.getName.call(person2)