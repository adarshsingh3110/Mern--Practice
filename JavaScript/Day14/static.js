//static method:-
//it is a method that belongs to the class itself not to the objects created from that class

// class BankAccount {
//     static bankName = "State Bank of India";
//     constructor(customerName, balance) {
//         this.customerName = customerName;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         this.balance += amount;
//         console.log(`${amount} Deposited`);
//     }
//     withdraw(amount) {
//         this.balance -= amount;
//         console.log(`${amount} Withdrawn`);
//     }
//     static minimumBalance() {
//         console.log("Minimum Balance : 1000");
//     }
// }
// const jane = new BankAccount("Jane", 1000);
// const john = new BankAccount("John", 5000);

// console.log(jane);
// console.log(john);

// // Instance methods
// jane.deposit(500);
// john.withdraw(1000);

// // Static method
// BankAccount.minimumBalance();

// // Static property
// console.log(BankAccount.bankName);

// class BankAccount{
//     static bankBalance(){
//         console.log("Minimum balance should be 1000rs")
//     }
// }
// BankAccount.bankBalance() //op:- Minimum balance should be 1000rs

//humne yha pr koi obj create nhi kiya
//why?

// normal methods vs static methods

// static methods - sirf class
// normal methods - sirf Object

class Company {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    // Normal Method
    showSalary() {
        console.log(this.salary);
    }
    increaseSalary(amount) {
        this.salary += amount;
        console.log(this.salary);
    }
    // Static Method
    static companyName() {
        console.log("Google");
    }
    static companyPhone() {
        console.log("9876543210");
    }

    static balance() {
        console.log(1000);
    }
}

const emp1 = new Company("Adarsh", "IT", 50000);

emp1.showSalary();          
emp1.increaseSalary(5000);  

Company.companyName();    
Company.companyPhone();     
Company.balance();       