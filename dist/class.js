"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Animal_id, _Animal2_leg;
/**
 * class width inheritence and polymorphism
 */
class human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
    }
}
class Emplyoe extends human {
    constructor(name, age, company, id) {
        super(name, age);
        this.company = company;
        this.id = id;
    }
    sayHi() {
        console.log(`Hi, Im ${this.name}  and Im ${this.age} years old.and company name is ${this.company}`);
    }
}
let emp1 = new Emplyoe('johan', 33, 'app', 123);
console.log(emp1);
emp1.sayHi();
/**
 * private
 */
class Animal {
    constructor(name) {
        _Animal_id.set(this, void 0);
        this.name = name;
    }
    set setId(id) {
        __classPrivateFieldSet(this, _Animal_id, id, "f");
    }
    get getId() {
        return __classPrivateFieldGet(this, _Animal_id, "f");
    }
}
_Animal_id = new WeakMap();
let animalOne = new Animal('dog');
animalOne.setId = 345;
console.log(animalOne);
console.log(animalOne.getId);
/**
 * protected
 * getter
 */
class Animal2 {
    constructor(name) {
        _Animal2_leg.set(this, void 0);
        this.name = name;
    }
    set setBread(bread) {
        this.bread = bread;
    }
    get getBread() {
        return this.bread;
    }
    set setLeg(leg) {
        __classPrivateFieldSet(this, _Animal2_leg, leg, "f");
    }
    get getLeg() {
        return __classPrivateFieldGet(this, _Animal2_leg, "f");
    }
}
_Animal2_leg = new WeakMap();
class Human2 extends Animal2 {
    constructor(name, personalName) {
        super(name);
        this.personalName = personalName;
    }
    /**
     * protected property of parent class accessable by child class
     * protected property accessible by class and it's child class but not accessible outside or from instance
     */
    printBread() {
        console.log(this.bread);
    }
}
const man = new Human2('human', 'johan');
man.setBread = 'men';
man.setLeg = '2';
console.log(man);
man.printBread();
console.log(man.getLeg);
//protected property accessible by class and it's child class but not accessible outside or from instance
// console.log(man.bread)
class College {
    static collegeGreeting() {
        console.log(`Welecome to acharya`);
    }
}
College.collegeName = 'acharya';
console.log(College.collegeName);
College.collegeGreeting();
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    static createCar(brand) {
        return new Car(brand);
    }
}
let myCar = Car.createCar("Toyota");
console.log(myCar.brand); // Output: Toyota
