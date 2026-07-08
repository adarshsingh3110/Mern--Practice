//slice - original array modified nahi hoti hai
//isme shallow copy bnti ha or newarray create hoti hai
// let hostel = ["Ramu","Hari","john","Adarsh"]
// console.log(hostel.slice(0,2))
// console.log(hostel)

//splice: original array modify hoti hai
// array_name.splice(startTransition,deleteCount, item1, item2...)
// let hostel = ["Ramu","Hari","john","Adarsh"]
// console.log(hostel.splice(1,2))
// console.log(hostel)

// let a = [1,2,3,4,5,6,7,8]
// // a.splice(0,0,10)
// a.splice(0,1,100,20)
// console.log(a)

//Reverse
// let arr = [10,20,30,40]
// console.log("Before: ",arr);
// arr.reverse()
// console.log("After: ",arr);

//sort
// let arr = [10,50,20,30,40]
// console.log("Before: ",arr)
// arr.sort()
// console.log("After: ",arr)

// var arr = [45,10,89,100,5,30,9]
// // arr.sort((a,b)=>a-b)
// arr.sort((a,b)=>b-1)
// console.log(arr);

// let laptop = ["asus","accer","mac","lenovo","HP"]
// console.log(laptop.includes("HP"))
// console.log(laptop.indexOf("HP"))
// console.log(laptop.lastIndexOf("asus"))

// let n = [10,20,30,40,50]
// console.log(n.slice(2,-1))
// console.log(n.slice(-1))
// console.log(n.slice(2))

// let frontend = ["HTML","CSS","JS"]
// let backend = ["NodeJs", "ExpressJs"]
// let fullstack = frontend.concat(backend)
// console.log(fullstack);

//map:-transform each element into something new(create new array)
// let dhaba = [
//     {
//         id:1,
//         name:"A",
//         bill:500
//     },
//     {
//         id:2,
//         name:"B",
//         bill:700
//     },
//     {
//         id:3,
//         name:"C",
//         bill:800
//     }
// ]
// let name = dhaba.map((r)=>(
//     r.name
// ))
// console.log(name)

// let marks = [10,20,30]
// let ans = marks.map(r=>r*3)
// console.log(ans)

// let ans = []
// for(let i = 0; i < marks.length; i++){
//     ans.push(marks[i]*2)   
// }

//filter
// let num = [1,2,3,4,5,6]
// let even = num.filter(num=>num%2===0)
// console.log(even)

//find
