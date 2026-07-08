//HOF : - function those takes another argument or return a function as a result.(functional and return argument)
//callback functions passed as an argument to another function and is executed later

// function greet(a){
//     console.log("Good Morning")
//     a() //callback
// }
// function sayBye(){
//     console.log("Adarsh ji")
// }
// greet(sayBye)

// function greetWithBye(){
//     console.log("Good Morning")
//     sayBye()
// }
// function sayBye(){
//     console.log("Morning")
// }
// function greetWithThanks(){
//     console.log("Good Morning")
//     sayTy()
// }
// function sayTy(){
//     console.log("Thanks")
// }
// function greetWithWelcome(){
//     console.log("Good Morning")
//     sayWc()
// }
// function sayWc(){
//     console.log("Welcome")
// }

// greetWithBye()
// greetWithThanks()
// greetWithWelcome()

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     if(b===0){
//         return "Cannot divide"
//     }
//     return a / b;
// }

// function calculator(x, y, operation) {
//     return operation(x, y);
// }


// console.log(calculator(10, 20, add));       
// console.log(calculator(10, 20, subtract));  
// console.log(calculator(10, 20, multiply));  
// console.log(calculator(20, 10, divide));

//Reduce:- the reduce method execute a callback function on each array element and return single value
const orders = [
  {
    id: 1,
    customer: "Rahul",
    food: "Pizza",
    price: 500,
    delivered: true
  },
  {
    id: 2,
    customer: "Aman",
    food: "Burger",
    price: 250,
    delivered: false
  },
  {
    id: 3,
    customer: "Priya",
    food: "Pasta",
    price: 400,
    delivered: true
  },
  {
    id: 4,
    customer: "Riya",
    food: "Momos",
    price: 150,
    delivered: false
  }
];
//map:- transform each element into something new and map returns a new array of the samne length.
const customerNames = orders.map(order => order.customer);

console.log(customerNames);

//reduce:- boil the array down to a single value
const totalEarning = orders.reduce((total, order) => {
    return total + order.price;
}, 0);

console.log(totalEarning);

//filter:- keep only elements that pass a condition and it returns a new array,possibly shorter.
const deliveredOrders = orders.filter(order => order.delivered);

console.log(deliveredOrders);

//find:- return the first matching element