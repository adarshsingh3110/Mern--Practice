// const list = document.getElementById("list");

// const l1 = document.createElement("li");
// l1.innerText = "JS";

// list.appendChild(l1);

// const l2 = document.createElement("li");
// l2.innerText = "MERN";
// const l3 = document.createElement("li");
// l3.innerText = "NODE";
// const l4 = document.createElement("li");
// l4.innerText = "REACT";
// const l5 = document.createElement("li");
// l5.innerText = "DOM";

// list.append(l2,l3,l4,l5);

//inertBefore
// const li = document.createElement("li")
// li.innerText = "CSS"
// const js = document.getElementById("js")
// // list.insertBefore(li,js)
// // list.insertBefore(li,list.firstChild)
// const random = list.children[0]
// list.insertBefore(li, random)
// list.prepend(li);
// 1. Heading create karo
const heading = document.createElement("h1");

// 2. Text add karo
heading.innerText = "Welcome to JavaScript";

// 3. Body me add karo
document.body.appendChild(heading);

// 4. Remove karo
heading.remove();