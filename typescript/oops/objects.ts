class Player{
    name: string;
    health: number;
    isInvincible: boolean;
    crush: Player
    greet(){
        console.log(`Hello ${this.name}`);
        
    }
}

const mario = new Player();
mario.name = "Mario";
mario.health = 8;
mario.isInvincible = true;


const peach = new Player();
peach.name = 'Peach'
peach.health = 10;
peach.isInvincible = true;


mario.crush = peach;
console.log(mario.crush.name)

mario.greet();
peach.greet();
