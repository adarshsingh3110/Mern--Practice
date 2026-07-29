// let user = {
//     name:"Adarsh",
//     age:20,
//     city:"vadodara"
// }
// let{name:myName,age:myAge,city} = user
// console.log(myName)
// console.log(myAge)
// console.log(city)

// let bag = {
//     Name: 'Safari',
//     Price: 4000,
//     warranty: '3Years',
//     color: 'black'
// }
// let{Name:bagName, Price, warranty,color:bagColor} = bag
// console.log(bagName)
// console.log(Price)
// console.log(warranty)
// console.log(bagColor)

//json
// const user = {
//  name: "Adarsh",
//  age: 21,
//  skills: ["JS", "React"],
// };
// const jsonString = JSON.stringify(user);
// console.log(jsonString);
// console.log(typeof jsonString); // string

// const jsonString = `{
//   "name":"Adarsh",
//   "age":21,
//   "skills":["JS","React"]
// }`;

// const user = JSON.parse(jsonString);

// console.log(user);
// console.log(user.name);
// console.log(user.skills[0]);
// console.log(typeof user);

// function counter() {
// let count = 0;            
// return function () {      
// count++;
// return count;
// };
// }
// // (1) local variable
// // (2) inner function is returned
// const inc = counter();      

// console.log(inc()); // 1    // (4)
// console.log(inc()); // 2    // (5)
// console.log(inc()); // 3    // (6)

//function borrow
// const u1 = {
//     name: "Adarsh",
//     welcome(city, age){
//         console.log("Welcome " + this.name)
//         console.log(city)
//         console.log(age)
//     }
// }
// // u1.welcome('Vadodara',20)

// const u2 = {
//     name: "Singh sahab"  
// }
// // call()
// // u1.welcome.call(u2,'Vadodara',21)
// // apply()
// // u1.welcome.apply(u2,['Vadodara',25])
// // bind()
// let newWelcome = u1.welcome.bind(u2)
// newWelcome('chapra',21)

