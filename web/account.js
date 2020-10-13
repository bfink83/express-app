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
//export { INTEREST_RATE as interest, deposit, withdraw, getBalance};
export { INTEREST_RATE as interest};
//export { deposit, withdraw, getBalance};
export default Account;
