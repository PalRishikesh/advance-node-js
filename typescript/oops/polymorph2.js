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
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.move = function () {
        console.log("I am moving");
    };
    Hero.prototype.eat = function () {
        console.log("I am eating");
    };
    return Hero;
}());
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
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mage;
}(Hero));
var Wizad = /** @class */ (function (_super) {
    __extends(Wizad, _super);
    function Wizad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizad.prototype.attack = function () {
        this.mana -= 1;
        console.log("Wizard attacks");
    };
    return Wizad;
}(Mage));
var Witch = /** @class */ (function (_super) {
    __extends(Witch, _super);
    function Witch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Witch.prototype.attack = function () {
        this.mana -= 1;
        console.log("Witch attacks");
    };
    return Witch;
}(Mage));
var wizard = new Wizad();
var witch = new Witch();
wizard.attack();
witch.attack();
