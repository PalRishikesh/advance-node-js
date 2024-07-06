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


class Archer extends Hero{
    arrows:number

    attack() {
        super.attack();
        console.log('Firing an arrow');
        this.arrows -=1;
    }
}
class Mage extends Hero{
    mana:number
    attack(): void {
        super.attack()
        console.log('Thowing a potion');
        
    }
}
class Knight extends Hero{
    shiled:number
    attack(): void {
        super.attack()
        console.log('I am swining with sword');
        
    }
}


// const archer: Hero = new Archer();
// const mage = new Mage();
// const knight = new Knight();


// archer.attack()
// mage.attack()
// knight.attack()


class Tribe{
    private heros : Hero[]

    setHeros(heros: Hero[]){
        this.heros = heros;
    }

    attack():void{
        for(let hero of this.heros){
            hero.attack();
        }
    }
}


const archer: Hero = new Archer();
const mage:Hero = new Mage();
const knight:Hero = new Knight();

const heros: Hero[] = [archer, mage, knight]

const tribe = new Tribe();
tribe.setHeros(heros);

tribe.attack();


// new Task: thieves

class Theif extends Hero{
    attack(): void {
        super.attack();
        console.log("Pick pocket");
    }
}

const thief = new Theif();
const heros2:Hero[] = [knight, thief, mage];
const tribe2 = new Tribe();

tribe2.setHeros(heros2);
tribe2.attack();