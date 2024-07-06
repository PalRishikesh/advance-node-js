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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("I am eating");
    };
    Animal.prototype.sleep = function () {
        console.log("I am sleeping");
    };
    Animal.prototype.move = function () {
        console.log("I am moving");
    };
    Animal.prototype.makeNoise = function () {
        console.log("Make some noise");
    };
    Animal.prototype.seetCordX = function (x) {
        this.coordX = x;
    };
    Animal.prototype.seetCordY = function (x) {
        this.coordY = x;
    };
    return Animal;
}());
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
var Canine = /** @class */ (function (_super) {
    __extends(Canine, _super);
    function Canine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Canine.prototype.makeNoise = function () {
        console.log('Bar bark bark...');
    };
    Canine.prototype.move = function () {
        console.log("Gettting up on all for paws..");
        // and then moving
        _super.prototype.move.call(this);
    };
    return Canine;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.returnToOwner = function () {
        console.log("I am at ".concat(this.coordX, " and ").concat(this.coordY, " and Returning to owner"));
    };
    return Dog;
}(Canine));
var Wolf = /** @class */ (function (_super) {
    __extends(Wolf, _super);
    function Wolf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Wolf;
}(Canine));
var dog = new Dog();
dog.makeNoise();
dog.move();
