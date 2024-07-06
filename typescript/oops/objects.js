var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    return Player;
}());
var mario = new Player();
mario.name = "Mario";
mario.health = 8;
mario.isInvincible = true;
var peach = new Player();
peach.name = 'Peach';
peach.health = 10;
peach.isInvincible = true;
mario.crush = peach;
console.log(mario.crush.name);
mario.greet();
peach.greet();
