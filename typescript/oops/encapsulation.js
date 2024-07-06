var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("You can not set health below 0");
            return;
        }
        this.health = health;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    return Player;
}());
var mario = new Player();
/// we can not access directly by making private inside class
// mario.health = 10;
// mario.speed = 1;
mario.setHealth(-3);
mario.setSpeed(1);
console.log(mario.getHealth());
console.log(mario.getSpeed());
