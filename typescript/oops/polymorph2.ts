/** polymorphims: Providing a common protocal for a group of sub classes */



abstract class Hero{
    hunger: number
    health: number
    
    abstract attack(): void

    move(){
        console.log("I am moving");
    }
    eat(){
        console.log("I am eating");
    }
}


// class Archer extends Hero{
//     arrows:number

//     attack() {
//         // super.attack();
//         console.log('Firing an arrow');
//         this.arrows -=1;
//     }
// }
// class Mage extends Hero{
//     mana:number
//     attack(): void {
//         // super.attack()
//         console.log('Thowing a potion');  
//     }
// }
// class Knight extends Hero{
//     shiled:number
//     attack(): void {
//         // super.attack()
//         console.log('I am swining with sword');
        
//     }
// }


// const archer: Archer = new Archer()
// const knight: Hero = new Knight()








abstract class Mage extends Hero{
    mana:number

}
class Wizad extends Mage{
    attack(): void {
       this.mana -=1;
       console.log("Wizard attacks")
    }
    
}

class Witch extends Mage{
    attack(): void {
        this.mana -=1;
        console.log("Witch attacks")
     }
}


const wizard = new Wizad();
const witch = new Witch();

wizard.attack()
witch.attack()