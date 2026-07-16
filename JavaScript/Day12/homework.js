//1. Reference copy
//student2 = student1 does not create a new object. It only copies the reference (memory address) of student1.
//So both variables point to the same object in memory.
let student1 = {
    name: 'Adarsh',
    age : 21
}
//Assign
let student2 = student1
//change in student2.name
student2.name = 'Adarsh Singh'
//print
console.log(student1)
console.log(student2)

//2.shallow copy
//The spread operator (...) creates a new object and copies the top-level properties of the original object.
// Create object
let employee = {
  name: "Adarsh",
  department: "IT"
}

let employeeCopy = { ...employee };
employeeCopy.department = "HR";
console.log(employee);
console.log(employeeCopy);

//3.shallow copy with nested object

let user = {
    name: 'Adarsh singh',
    age: 20,
    address:{
        city:'Vadodara',
        pincode: '841413'
    }
}
let userCopy = {...user}
userCopy.address.city = 'Patna'
console.log(user)
console.log(userCopy)

//4.Deep copy
let user1 = {
    name: 'Adarsh singh',
    age: 20,
    address:{
        city:'Vadodara',
        pincode: '841413'
    }
}
let userCopy1 = structuredClone(user1);
userCopy1.address.city = 'Patna'
console.log(user1)
console.log(userCopy1)

//5.BankAccount
