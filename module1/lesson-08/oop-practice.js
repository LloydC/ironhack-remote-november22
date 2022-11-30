class BankAccount {
    constructor(clientName, currency) {
        this.clientName = clientName; // Should receive clientName as it's first argument
        this.currency = currency; // Should receive currency as it's second argument
        this.balance = 0; // Should generate a property balance with 0 as its value
    }

    showBalance(){
        return `${this.currency} ${this.balance}`; // Should return a string which displays the balance of the account
    }

    withdrawMoney(amount){
        if(this.balance - amount > 0){ 
            return this.balance -= amount;
        }
        else {
            return 'unauthorized due to insufficient funds';
        }

    }
    depositMoney(amount){
        return this.balance += amount;
    }
}

const customerAccount = new BankAccount('Giulia', '¢');
console.log('customerAccount: ', customerAccount);
console.log('deposit: ', customerAccount.depositMoney(50));
console.log('withdraw: ', customerAccount.withdrawMoney(100))
console.log('customer balance: ', customerAccount.showBalance());

class BusinessAccount extends BankAccount {
    constructor(clientName, currency, companyName){
        super(clientName, currency);
        this.companyName = companyName;
    }
}

const testBusinessAccount = new BusinessAccount('Giulia', '¢', 'Colombo Inc.')
console.log('testBusinessAccount: ', testBusinessAccount);
console.log('add investors money: ', testBusinessAccount.depositMoney(1000))
console.log('testBusinessAccount balance: ', testBusinessAccount.showBalance());



// Add the following methods to your BankAccount constructor

// showBalance()


// withdrawMoney(amount)
// Should either deduct the amount from the account or tell the user 'unauthorized due to insufficient funds'

// depositMoney(amount)
// Should add the amount to the account and return a string stating the new balance

// Make sure to test your solution by creating an account and calling each methods when you're done

// Create a class Business account which extends BankAccount
// its constructor should have clientName, currency and companyName and generate each one as a property

// Again, make sure to test your solution by creating an account and calling each methods when you're done

