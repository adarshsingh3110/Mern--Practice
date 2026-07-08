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
