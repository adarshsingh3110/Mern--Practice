//Array Destructuring:-A clean way to extract values from arrays into variables.
// let arr = [10, 20, 30];

// Old way
// let a = arr[0];
// let b = arr[1];
// console.log(arr)

// New way
// let [x, y, z] = arr;
// console.log(x, y, z);   // 10 20 30

//Skip elements:
// let [first, , third] = [1, 2, 3];
// console.log(first, third);   // 1 3

//Default values:
// let [a = 10, b = 20] = [5];
// console.log(a, b);   // 5 20

//Swap variables (elegant!):
// let x = 1, y = 2;
// console.log("Before: ", x,y);
// [x, y] = [y, x];
// console.log("After: ",x, y);   // 2 1
// let arr = [10,20,30,40,50]
// let [a,b, ...rest1] = arr
// console.log(a) //10
// console.log(b) //20
// console.log(rest1) //30 40 50 60
// console.log(rest1[0])

//find
// let arr = [10,20,30,40,50,60,70,80,90,100]
// let ans = arr.find((n)=> n>50)
// console.log(ans);

//objects:-
let student= {
    id : 123,
    "full name" : "Adarsh",
    course: "B.Tech",
    cgpa : 7.9
}
//dynamic key
let k = "name"
// console.log(student.k);
console.log(student["full name"]);