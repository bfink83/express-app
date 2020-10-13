const INTEREST_RATE = 0.2;

class Account {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

module.exports.Account = Account;
module.exports.interest = INTEREST_RATE;