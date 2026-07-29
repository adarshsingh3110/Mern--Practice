//window object
// console.log(this)

//window object(non strict mode)
// function abc(){
//     console.log(this)
// }
// abc()

//Strict mode removes the default window hiding
// "use strict"
// function xyz(){
//     console.log(this)
// }
// xyz()

//this = object name
// const student = {
//     name: "Adarsh",
//     showName : function(){
//         console.log(this)
//     }
// }
// student.showName()

// function showCity(){
//     console.log(this)
// }
// const u1 = {
//     city: "Vadodara",
//     showCity: ()=>{
//         console.log(this)
//     }
// }
// u1.showCity()
// const u2 = {
//     city: "Noida",
//     showCity
// }
// u1.showCity()
// u2.showCity()
// 
// const u3 = {
//     name:"Adarsh",
//     address:{
//         city: "vadodara",
//         show(){
//             console.log(this.city)
//         }
//     }
// }

// function Employee(name){
//     this.name = name
// }
// const e1 = new Employee("Adarsh")
// console.log(e1)

// const e2 = new Employee("Harsh")
// console.log(e2)

// const user = {
//     fname : "Adarsh",
//     lname: "Singh",
//     printFullName : function(){
//         console.log(this)
//     }
// }
// const printName = user.printFullName
// printName()

//globally this -> window object
//function normally call-> window object
//object->object
//constructor function->object
//object->normal function->window object

//constructor function:-
//A cf is a special function used to create multiple objects with the same structure

// Constructor function = blueprint of house
// object = actual house

// function Employee (name, age, city){
//     this.name = name,
//     this.age = age,
//     this.city = city
// }
// const e1 = new Employee("Adarsh", 21, "Patna")
// const e2 = new Employee("Harsh", 20, "Balia")
// const e3 = new Employee("Anup", 31, "Vadodara")
// //new-> ek empty object bna deta hai
// //step2:= this jo hai is empty obj ko point krta hai
// //step3:- cf executes
// console.log(e1)
// console.log(e2)
// console.log(e3)



// class Employee{
//     constructor(name, age, skill){
//     this.name = name,
//     this.age = age,
//     this.skill = skill
//     }
// }
// const e1 = new Employee("Adarsh", 21, "JS")
// const e2 = new Employee("Harsh", 20, "React")
// const e3 = new Employee("Anup", 31, "Node js")


function BankAccount(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now() + Math.floor(Math.random() * 1000);
    this.balance = Number(balance);
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        alert("Insufficient Balance!");
        return;
    }

    this.balance -= amount;
};

const accountForm = document.getElementById("accountForm");
const customerName = document.getElementById("customerName");
const balance = document.getElementById("balance");
const accountsContainer = document.getElementById("accountsContainer");
const totalAccounts = document.getElementById("totalAccounts");
const totalBalance = document.getElementById("totalBalance");

let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
function saveData() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
function updateSummary() {
    totalAccounts.innerText = accounts.length;
    let bankBalance = 0;
    accounts.forEach(account => {
        bankBalance += Number(account.balance);
    });
    totalBalance.innerText = bankBalance;
}
function renderAccounts() {
    accountsContainer.innerHTML = "";
    accounts.forEach((account, index) => {
        const card = document.createElement("div");
        card.classList.add("account-card");
        card.innerHTML = `
            <h3>👤 ${account.customerName}</h3>
            <p>
                <strong>Account No:</strong><br>
                <span class="account-number">
                    ${account.accountNumber}
                </span>
            </p>
            <p class="balance">
                ₹${account.balance}
            </p>
            <div class="button-group">
                <button class="deposit">
                    Deposit
                </button>
                <button class="withdraw">
                    Withdraw
                </button>
                <button class="delete">
                    Delete
                </button>
            </div>
        `;
        const depositBtn = card.querySelector(".deposit");
        depositBtn.addEventListener("click", () => {
            const amount = Number(prompt("Enter Deposit Amount"));
            if (amount > 0) {
                account.balance += amount;
                saveData();
                renderAccounts();
            }
        });
        const withdrawBtn = card.querySelector(".withdraw");
        withdrawBtn.addEventListener("click", () => {
            const amount = Number(prompt("Enter Withdraw Amount"));
            if (amount > account.balance) {
                alert("Insufficient Balance!");
                return;
            }
            if (amount > 0) {
                account.balance -= amount;
                saveData();
                renderAccounts();
            }
        });
        const deleteBtn = card.querySelector(".delete");
        deleteBtn.addEventListener("click", () => {
            if (confirm("Delete this account?")) {
                accounts.splice(index, 1);
                saveData();
                renderAccounts();
            }
        });
        accountsContainer.appendChild(card);
    });
    updateSummary();
}
accountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = customerName.value.trim();
    const initialBalance = Number(balance.value);
    if (name === "" || initialBalance < 0) {
        alert("Enter Valid Details");
        return;

    }
    const account = new BankAccount(name, initialBalance);
    accounts.push(account);
    saveData();
    renderAccounts();
    accountForm.reset();

});
renderAccounts();