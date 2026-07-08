//Array :- is a special object that stores multiple values in single variable

// var arr1 = [10,20,30,40,50,60,70]
// var arr2 = ['Adarsh', 'Manjit', 'Anup']
// arr1[0] = 30
// console.log(arr1);
// console.log(arr2[0]);
// var arr3 =['Adarsh', 10, 10.5, true]
// console.log(arr3);

// var arr = [10,20,30,9,8,90,87,7,5,4,3]
// console.log(arr.length)
// console.log(arr.length-1);
// console.log(arr[arr.length-1]);

// let arr = [10,20,30]
// arr[-1] = 99
// console.log(arr);
// console.log(typeof(arr));

//push - last me element add
//pop - last se element remove
//unshift-starting me element add
//shift- starting se element remove

// let arr = [10,20,30,40,50]
// console.log(arr);
// arr.push(99)
// arr.push(100)

// console.log(arr);
// arr.pop()
// arr.pop()
// console.log(arr);

// arr.unshift(1)
// arr.unshift(2)
// console.log(arr);
// arr.shift()
// arr.shift()
// console.log(arr);

// var arr = [15,45,78,90,78]
// arr.shift() //[45,78,90,78]
// arr.shift() //[78,90,78]
// arr.unshift(99) //[99,78,90,78]

// arr.pop() //[99,78,90]
// arr.pop() //[99,78]

// arr.push(89) //[99,78,89]

// arr.unshift(67) //[67,99,78,89]
// arr.push(89) //[67,99,78,99,89]

// arr.unshift(1) //[1,67,99,78,99,89]

// console.log(arr);
// console.log(arr[3]); //78

//arr.splice(startindex,deletecount,new element)
// var arr = [11,22,33,44,55]
// // arr.splice(1,2)
// // console.log(arr);
// arr.splice(1,1,99,88)
// console.log(arr);

// var arr = ['aman','bijoy','chandu','dev','ekansh','adarsh']
// arr.splice(3,2,'anup','manjit')
// console.log(arr);
// console.log(arr.length);
// console.log(arr[arr.length-1]);

//Lopping
// for loop
//idhr index milta hai
// let bike = ["Hunter", "Bullet", "Ninja", "KTM"]
// for(let i = 0; i <bike.length; i++){
//     console.log(bike[i]);
// }

// //for of loop
// //idhar value milta hai
// for(let val of bike){
//     console.log(val)
// }

// //for in loop: used to iterate over the enumerate properties of object
// for(let index in bike){
//     console.log(index);
// }

// const str = "Adarsh Singh"
// for(let ele of str){
//     // console.log(ele)
// }

// const student = {
//     rollNo: 123,
//     name : "Adarsh",
//     age: 100
// }
// for(let key in student){
//     console.log(key, student[key])
// }
// arr.splice(startindex,deletecount,new element)
// var arr = [11,22,33,44,55]
// // arr.splice(1,2)
// // console.log(arr);
// arr.splice(1,1,99,88)
// console.log(arr);