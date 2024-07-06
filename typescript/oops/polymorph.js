/** polymorphims: Providing a common protocal for a group of sub classes */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attack = function () {
        console.log("I am attacking");
    };
    Hero.prototype.move = function () {
        console.log("I am moving");
    };
    Hero.prototype.eat = function () {
        console.log("I am eating");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log('Firing an arrow');
        this.arrows -= 1;
    };
    return Archer;
}(Hero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log('Thowing a potion');
    };
    return Mage;
}(Hero));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log('I am swining with sword');
    };
    return Knight;
}(Hero));
// const archer: Hero = new Archer();
// const mage = new Mage();
// const knight = new Knight();
// archer.attack()
// mage.attack()
// knight.attack()
var Tribe = /** @class */ (function () {
    function Tribe() {
    }
    Tribe.prototype.setHeros = function (heros) {
        this.heros = heros;
    };
    Tribe.prototype.attack = function () {
        for (var _i = 0, _a = this.heros; _i < _a.length; _i++) {
            var hero = _a[_i];
            hero.attack();
        }
    };
    return Tribe;
}());
var archer = new Archer();
var mage = new Mage();
var knight = new Knight();
var heros = [archer, mage, knight];
var tribe = new Tribe();
tribe.setHeros(heros);
tribe.attack();
// new Task: thieves
var Theif = /** @class */ (function (_super) {
    __extends(Theif, _super);
    function Theif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Theif.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("Pick pocket");
    };
    return Theif;
}(Hero));
var thief = new Theif();
var heros2 = [knight, thief, mage];
var tribe2 = new Tribe();
tribe2.setHeros(heros2);
tribe2.attack();
