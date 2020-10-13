//import { getBalance, deposit } from "./account.js";       //can import specific functions from a module

import Account from "./account.js";        //can import everything from a module, access using dot notation

const checking = new Account(20);
const savings = new Account(100);
const def = new Account();


console.log(Account.interest);

console.log(checking.balance);
console.log(savings.balance);
console.log(def.balance);

def.deposit(100);
savings.withdraw(50);
checking.deposit(4);

console.log(checking.balance);
console.log(savings.balance);
console.log(def.balance);