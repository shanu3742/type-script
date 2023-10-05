/**
 * class width inheritence and polymorphism
 */
class human {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
    }
}
class Emplyoe extends human {
    company: string;
    id: number;
    constructor(name: string, age: number, company: string, id: number) {
        super(name, age);
        this.company = company;
        this.id = id;
    }
    sayHi(): void {
        console.log(`Hi, Im ${this.name}  and Im ${this.age} years old.and company name is ${this.company}`);
    }
}
let emp1 = new Emplyoe('johan', 33, 'app', 123);
console.log(emp1)
emp1.sayHi();

/**
 * private 
 */
class Animal {
    name: string;
    #id!: number
    constructor(name: string) {
        this.name = name;
    }
    set setId(id: number) {
        this.#id = id
    }
    get getId() {
        return this.#id
    }

}
let animalOne = new Animal('dog');
animalOne.setId = 345;
console.log(animalOne);
console.log(animalOne.getId)


/**
 * protected 
 * getter
 */
class Animal2 {
    protected  bread!: string;
    name: string;
    #leg!: string;
    constructor(name: string) {
        this.name = name;
    }
    set setBread(bread: string) {
        this.bread = bread;
    }
    get getBread() {
        return this.bread
    }
    set setLeg(leg: string) {
        this.#leg = leg;
    }
    get getLeg() {
        return this.#leg
    }
}
class Human2 extends Animal2 {
    personalName: string
    constructor(name: string, personalName: string) {
        super(name)
        this.personalName = personalName;
    }
    /**
     * protected property of parent class accessable by child class
     * protected property accessible by class and it's child class but not accessible outside or from instance
     */
    printBread() {
        console.log(this.bread)
    }
    /**
     * private property of parent class not accessable by child 
     */


    // printLeg(){
    //     console.log(this.#leg)
    // }

}
const man = new Human2('human', 'johan')
man.setBread = 'men';
man.setLeg = '2';
console.log(man);
man.printBread();
console.log(man.getLeg);
//protected property accessible by class and it's child class but not accessible outside or from instance
// console.log(man.bread)

class College{
    static collegeName:string='acharya';
    static collegeGreeting(){
        console.log(`Welecome to acharya`)
    }
}
console.log(College.collegeName);
College.collegeGreeting();
class Car {
    constructor(public brand: string) {}

    static createCar(brand: string): Car {
        return new Car(brand);
    }
}

let myCar = Car.createCar("Toyota");
console.log(myCar.brand); // Output: Toyota
