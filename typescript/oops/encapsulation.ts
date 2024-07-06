class Player{
    private speed: number;
    private health: number;

    setHealth(health:number){
       if(health < 0){
        console.log("You can not set health below 0");
        return;
        
       }
        this.health = health
    }
    setSpeed(speed:number){
        this.speed = speed;
    }

    getHealth(){
        return this.health;
    }
    getSpeed(){
        return this.speed;
    }
    
}

const mario = new Player();

/// we can not access directly by making private inside class
// mario.health = 10;
// mario.speed = 1;

mario.setHealth(-3)
mario.setSpeed(1)
console.log(mario.getHealth());
console.log(mario.getSpeed());

