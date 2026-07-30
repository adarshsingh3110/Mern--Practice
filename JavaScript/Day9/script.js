//object:- An object is a collection of key-value pairs. Arrays store ordered data; objects store named data.
// object is non primitive data type
// let Student = {
//     name: "Adarsh",
//     age: 20,
//     city: "Vadodara",
//     course: "B.tech"
// };
// console.log(Student.name);
// console.log(Student["name"]);
// console.log(Student.age);
// console.log(Student)

// let laptop = {
//     brand : "HP",
//     price : 59000
// }
// // Adding key and value in obj
// //object_name.property_name = value
// laptop.color = "black"
// laptop.ram = 4
// laptop["storage"] = 512
// // Object.freeze(laptop)
// laptop.price = 60000
// laptop.model = "HP5AXLPN"
// //delete
// delete laptop.brand
// delete laptop.model
// delete laptop["color"]
// console.log(laptop)

// let employee = {
//     empName : "Adarsh",
//     empId : 123
// }
// //add
// employee.salary = 56000
// employee["company"] = "FlipKart"
// console.log(employee)
// //freeze
// // Object.freeze(employee)
// // employee.experience = "2 years"
// // console.log(employee)
// //delete
// delete employee.company
// delete employee["salary"]
// console.log(employee)

//optional change is used to safely access  properties and method of an object.
// it prevents your program from crashing when a property does not exist.
//problem
// const user = {
//     name:"Anup",
//     address : {
//         city : "BHITRAMPUR",
//         pincode: 41414
       
//     }
// }
// console.log(user.address?.city)
// console.log("JAI HO")

// function printBag(name,capacity,color,price){
//     return {
//         // name: name,
//         // capacity: capacity,
//         // color : color,
//         // price : price
//         name,
//         capacity,
//         color,
//         price,
//         model:"safari"
//     }
// }
// let bag = printBag("safari","35L","black", 1000)
// console.log(bag)

// let obj1 = {
//     for : 1,
//     let : 2,
//     const : 3,
//     return : 4
// }
// console.log(obj1.for + obj1.let + obj1.return + obj1.const)

//symbol:- unique 
// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1==s2)

// let id = Symbol("id")
// let user = {
//     name : "Adarsh",
//     [id] :101
// }
// console.log(typeof id)

//protoype

// function Student(name){
//     this.name = name
//     // this.sayHello = function(){
//     //     console.log("hello " +this.name)
//     // }
// }
// // Student.prototype.text = "This is a proto"
// Student.prototype.sayHello = function(){
//     console.log("Hello " + this.name)
// }
// const s1 = new Student("Adarsh")
// const s2 = new Student("Harsh")
// console.log(s1.sayHello())
// console.log(s2.sayHello())

//classes
// class BankAccount{
//     customerName;
//     accountNumber;
//     balance;

//     constructor(customerName, balance=0){
//         this.customerName = customerName
//         this.accountNumber = Date.now()
//         this.balance = balance
//     }

//     deposit(amount){
//         this.balance += amount
//     }
//     withdraw(amount){
//         this.balance -= amount
//     }
// }

// const emaa = new BankAccount("Emma",1000)
// emaa.deposit(200)
// emaa.withdraw(100)
// console.log(emaa)

// class Person {
// constructor(name, age) {
// this.name = name;
// this.age = age;
// }
// greet(){
// console.log("Hi, main " + this.name + " mai " +this.age + " saal ka hu");
// }
// }
// const p = new Person("Adarsh", 21);
// p.greet();

//inheritance
// Inheritnce in JavaScript is a mechanism where one class can inherit properties and methods from another class. This allows for code reusability and the creation of hierarchical relationships between classes.

// In JavaScript, inheritance is primarily achieved through prototypes. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. When you create a new object, it can access the properties and methods of its prototype chain.

// There are two main ways to implement inheritance in JavaScript: using constructor functions and using ES6 classes.

// function BankAccount(customerName, balance){
//     this.customerName = customerName
//     this.accountNumber = Date.now()
//     this.balance = balance
// }
// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount
// }

// BankAccount.prototype.withdraw = function(amount){
//         this.balance -= amount
// }
// function CurrentAccount(customerName, balance=0){
//     // this.customerName = customerName
//     // this.accountNumber = Date.now()
//     // this.balance = balance

//     BankAccount.call(this, customerName, balance) // Call the parent constructor to initialize properties

//     this.transactionLimit = 10000
    
//     // this.takeBusinessLoan = function(amount){
//     //     console.log("Loan of: "+amount)
//     }
// CurrentAccount.prototype.takeBusinessLoan =  function(amount){
//         console.log("Loan of: "+amount)
//     }
// const adarsh = new CurrentAccount("adarsh", 1000)
// console.log(adarsh)

// adarsh.takeBusinessLoan(100000)
// const shyam = new CurrentAccount("shyam", 2000)
// console.log(shyam)
// shyam.takeBusinessLoan(500000)

// function SavingsAccount(customerName, balance=0){
//     // this.customerName = customerName
//     // this.accountNumber = Date.now()
//     // this.balance = balance

//     BankAccount.call(this, customerName, balance) // Call the parent constructor to initialize properties
    
//     this.transactionLimit = 10000
// }

// const abc = new SavingsAccount("abc", 100)
// console.log(abc)

// Parent
// function Car(name, model, year, color, type) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.type = type;
// }

// Car.prototype.start = function () {
//     console.log(this.name + " started");
// };

// Car.prototype.stop = function () {
//     console.log(this.name + " stopped");
// };


// function RacingCar(name, model, year, color) {
//     Car.call(this, name, model, year, color, "Racing Car");
//     this.carSpeed = 300;
// }

// RacingCar.prototype = Object.create(Car.prototype);

// RacingCar.prototype.nitrogas = function () {
//     console.log("Nitro Gas Speed: " + this.carSpeed);
// };

// // Sedan
// function Sedan(name, model, year, color) {
//     Car.call(this, name, model, year, color, "Sedan");
//     this.luxury = "Premium";
// }

// Sedan.prototype = Object.create(Car.prototype);

// Sedan.prototype.comfort = function () {
//     console.log("Luxury: " + this.luxury);
// };

// function SUV(name, model, year, color) {
//     Car.call(this, name, model, year, color, "SUV");
//     this.offRoad = "Yes";
// }

// SUV.prototype = Object.create(Car.prototype);

// SUV.prototype.offroading = function () {
//     console.log("Off Road: " + this.offRoad);
// };


// const race = new RacingCar("Ferrari", "F8", 2024, "Red");
// const suv = new SUV("Fortuner", "Legender", 2023, "Black");
// const sedan = new Sedan("Honda", "City", 2024, "White");

// race.start();
// race.nitrogas();
// race.stop();


// suv.start();
// suv.offroading();
// suv.stop();


// sedan.start();
// sedan.comfort();
// sedan.stop();


class BankAccount {
    #balance;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.#balance = balance;
    }

    // Getter
    get balance() {
        return this.#balance;
    }

    // Setter
    set balance(amount) {
        this.#balance = amount;
    }
}

const user = new BankAccount("Adarsh", 5000);

console.log(user.balance); // Getter

user.balance = 10000; // Setter

console.log(user.balance);

// console.log(user.#balance); ❌ Error (Private Property)