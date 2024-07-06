/** Inheritance: Remove code duplication */

class Animal{
    // Animal HAS-A realtion
    hunger: number;
    health: number;
    protected coordX:number;
    protected coordY: number;

    eat(){
        console.log("I am eating");
    }
    sleep(){
        console.log("I am sleeping");
        
    }

    move(){
        console.log("I am moving");
        
    }
    makeNoise(){
        console.log("Make some noise");
        
    }

    seetCordX(x:number){
        this.coordX = x;
    }
    seetCordY(x:number){
        this.coordY = x;
    }
}


// // Dog IS-A animal 
// class Dog extends Animal{

//     // Dog HAS-A  ownder variable
//     owner:string;

//     makeNoise(): void {
//         console.log("Bark");
        
//     }

//     returnToOwner(){
//         console.log(`I am at ${this.coordX} and ${this.coordY} and Returning to owner`);
//     }
// }

// const dog = new Dog();
// dog.seetCordX(64)
// dog.seetCordY(705)
// dog.makeNoise();
// dog.returnToOwner()




// class Cat extends Animal{}

// const cat  = new Cat();
// cat.makeNoise()


// class Wolf extends Animal{}
// const wolf = new Wolf();


/*** Two level */


class Canine extends Animal{
    makeNoise(){
        console.log('Bar bark bark...');
        
    }

    move(): void {
        console.log("Gettting up on all for paws..");
        // and then moving
        super.move();
        
    }
}

class Dog extends Canine{
    owner: string

    returnToOwner(){
        console.log(`I am at ${this.coordX} and ${this.coordY} and Returning to owner`);
    }
}

class Wolf extends Canine{}

const dog = new Dog();
dog.makeNoise()
dog.move();