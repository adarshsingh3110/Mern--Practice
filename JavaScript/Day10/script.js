//symbol
// const employee = {
//     name:"John",
//     age:30,
//     id:123
// }
// employee.name = 'abc'
// console.log(employee)

// let token = Symbol("token")
// console.log(typeof token)
// const bankAcc = {
//     name:"HDFC",
//     [token]:"HDFCAX124",
//     token : "AB678"
// }
// bankAcc[token] = "HDFCAX456"
// bankAcc.token = "ab123"
// // console.log(bankAcc.token)
// console.log(bankAcc)

//NUllish coalescing(??):- return right hand value only if left hand value is null or undefined
// let city = null
// console.log(city)

// let name = null;
// let text = "missing";
// let result = name ?? text;
// console.log(result)

// let city = null
// console.log(city??"Not Available")

// let token = Symbol('token')
// let IFSC = Symbol('IFSC')
// const bankAcc = {
//     name: "HDFC",
//     [token]: "H139",
//     [IFSC] : "I877",
//     token : "1BVD"
// }
// console.log(Object.keys(bankAcc))
// console.log(Object.values(bankAcc))
// console.log(Object.entries(bankAcc))
// console.log(Object.getOwnPropertySymbols(bankAcc))
// console.log(bankAcc)

// for(let k in bankAcc){
//     console.log(k, bankAcc[k])
// }

// let person = {
//      name: "Adarsh", 
//      age: 20, 
//      city: "Vadodara"
//      };

// for (let key in person) {
//     console.log(key, ":", person[key]);
// }

//SPREAD OPERATOR:-(...) copies all enumerable properties from one object into other object.
//expand one to many(array,object,function call)
//REST:- many to one (function parameters and destructuring)
function print(x,...y){
    console.log(x,y)
}
print(1,2,3,4,5)