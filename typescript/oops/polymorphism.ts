/** polymorphims: Providing a common protocal for a group of sub classes */


// class Mario{
//     health: number;
//     move(){}
//     plavVoiceRecording(){}
// }


// class Luigi{
//     health: number;
//     move(){}
//     plavVoiceRecording(){}
// }


// class Peach{
//     health: number;
//     move(){}
//     plavVoiceRecording(){}
// }

/** We can do in simple  */
// class Character{
//     health: number;
//     move(){}
//     plavVoiceRecording(){}
// }

// class Mario extends Character{}
// class Luigi extends Character{}
// class Peach extends Character{}



class Hero{
    hunger: number
    health: number
    
    attack(){
        console.log("I am attacking");
    }
    move(){
        console.log("I am moving");
    }
    eat(){
        console.log("I am eating");
    }
}


// class Archer extends Hero{
    // arrows:number

    // attack() {
    //     super.attack();
    //     console.log('Firing an arrow');
    //     this.arrows -=1;
    // }
// }
// class Mage extends Hero{
//     mana:number
//     attack(): void {
//         super.attack()
//         console.log('Thowing a potion');
        
//     }
// }
// class Knight extends Hero{
//     shiled:number
//     attack(): void {
//         super.attack()
//         console.log('I am swining with sword');
        
//     }
// }


// const archer = new Archer();
// const mage = new Mage();
// const knight = new Knight();


// archer.attack()
// mage.attack()
// knight.attack()