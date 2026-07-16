//HOISTING:- to move declarations to the top of their scope. 
// Important: nothing physically moves — this is just the Creation Phase allocating memory before the code runs.
// console.log(name) // undefined
// var name = 'Adarsh'
// console.log(name) // Adarsh

// console.log(a) // ReferenceError: cannot access 'a' before initialization
// let a = 10
// console.log(a)

// console.log(b)//// ReferenceError: cannot access 'a' before initialization
// const b = 20

// hi()
// function hi(){
//     console.log("Hello")
// }
// hi()
// var hi = function(){
//   console.log("Hello")
//  } //typeError: hi is not a function
//  hi()
// const hi = function(){
//   console.log("Hello")
//  } //ReferenceError:- cant access hi before initialization

let user1 = {
    name: 'Adarsh',
    greet:function(){
        console.log("Hello " + this.name)
    }
}
let user2 = {
    name: 'Bob',
    // greet:function(){
    //     console.log("Hello " + user2.name)
    // }
    greet: user1.greet
}
user1.greet()
user2.greet()