// let arr1 = [10,20,30]
// let arr2 = [...arr1]
// console.log(arr2)

//copy means making another variable with the same data
//2 Types:
//1.shallow copy 2.Deep copy
// let a = 10
// let b = a
// b  = 20
// console.log(a)
// console.log(b)

// let user1 = {
//     name: "Adarsh"
// }
// let user2 = user1
// user2.name = "Singh"
// console.log(user1.name)
// console.log(user2.name)

//shallow copy: A shallow copy copies only first level, Nested objects still the share the same memory
// let emp1 ={
//     name:"adarsh",
//     age:20,
//     address:{
//         city:"vadodara"
//     }
// }
// let emp2 = {...emp1}
// emp2.name = "Adarsh Singh"
// emp2.address.city = "chapra"
// console.log(emp1.address.city)
// console.log(emp2.address.city)

// let emp3 = {
//     name: "Adarsh",
//     age:20
// }
// let copy = Object.assign({},emp3)
// copy.age = 18
// console.log(emp3.age)
// console.log(copy.age)

//Deep copy : copies everythig, inculding all nested objects and arrays
// let emp4 = {
//     name: "Adarsh Singh",
//     age:21,
//     address:{
//         city: "Chapra"
//     }
// }
// // structuredClone() - this fxn is used for deep copy
// let emp5 = structuredClone(emp4)
// emp5.address.city = "Vadodara"
// console.log(emp4.address.city)
// console.log(emp5.address.city)

//properties stores the information
//function(methods) perform action

// let student = {
//     name : "Adarsh",
//     age:19,
//     study: function(){
//         console.log("Student is studying..")
//     }
// }
// student.study()

// let car = {
//     brand : "BMW",
//     color : "Black",
//     start : function(){
//         console.log("Car started")
//     },
//     stop: function(){
//         console.log("Car stopped")
//     },
//     showBrand : function(){
//         console.log(car.brand)
//     }
// }
// car.start()
// car.stop()
// car.showBrand()

//this
let person = {
    name: "Adarsh",
    greet() {
        console.log("Hello, I am " + this.name);
    }
};

person.greet();   // "Hello, I am Adarsh"