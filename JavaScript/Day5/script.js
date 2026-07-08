// let a = 'Adarsh'
// console.log(a.length)
// console.log(a.slice(0,5))
// console.log(a.charAt(4))
// console.log(a.indexOf('h'))
// console.log(a.substring(1,3))
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log("   hi   ".trim()); 

//Explicit Conversion
// let age = "20"
// let num = (Number(age))
// console.log(typeof(num))

// let n = 100
// let str = String(n)
// console.log(typeof(str))

// let a = "Value"
// console.log(Boolean(a))
// let bol = Boolean(a)
// console.log(bol)
// console.log(typeof(bol))

// let age = 20
// console.log(typeof(age))
// let bol = Boolean(age)
// console.log(bol)
// console.log(typeof(bol))

// let val = "200"
// console.log(parseInt("200"))

// console.log(Number("333 abc"))
// console.log(Number(true))
// console.log(Number(""));
// console.log(Boolean(""))

//implicit coercion
// console.log("5" + 3);     // "53"   ← string concatenation
// console.log("5" - 3);     // 2      ← number subtraction
// console.log("5" * "2");   // 10
// console.log(true + 1);    // 2      (true becomes 1)
// console.log(false + 1);   // 1      (false becomes 0)
// console.log(null + 1);    // 1      (null becomes 0)
// console.log(undefined + 1); // NaN  (undefined becomes NaN)
// console.log("5" === 5)
// console.log("ab" + 2 +3)
// console.log(2 + 3 + "ab")
// console.log([] + {})
// console.log({} + [])
// console.log([] + [])
// console.log("" == false)
// console.log(null == undefined)

//Useful Number Methods
// let n = 3.14159;

// console.log(n.toFixed(2));     // "3.14" (returns string!)
// console.log(Number("42"));     // 42
// console.log(Number("42abc"));  // NaN
// console.log(parseInt("42px")); // 42 (parses what it can)
// console.log(parseFloat("3.14kg")); // 3.14
// console.log(isNaN("hello"));   // true
// console.log(Number.isInteger(5));   // true
// console.log(Number.isInteger(5.5)); // false

//The Math Object
// console.log(Math.PI);            // 3.14159...
// console.log(Math.E);             // 2.71828...

// console.log(Math.round(4.5));
// console.log(Math.round(4.6));    // 5
// console.log(Math.floor(4.9));    // 4 (always rounds down)
// console.log(Math.ceil(4.1));     // 5 (always rounds up)
// console.log(Math.abs(-7));       // 7
// console.log(Math.max(1, 5, 3));  // 5
// console.log(Math.min(1, 5, 3));  // 1
// console.log(Math.pow(2, 10));    // 1024
// console.log(Math.sqrt(16));      // 4
// console.log(Math.random());      // random number between 0 and 1
// console.log(Math.random()); 
// console.log(Math.random()); 
// console.log(Math.floor(Math.random() * 10) + 1);

// let rand = Math.floor(Math.random() * (max - min + 1)) + min;
