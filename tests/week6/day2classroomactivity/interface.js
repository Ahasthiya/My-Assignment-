"use strict";
class UPI {
    pay(amount) {
        console.log("UPI payment limit is 10000");
    }
}
class Creaditcard {
    pay(amount) {
        console.log("creaditcard payment limit is 20000");
    }
}
class netbanking {
    pay(amount) {
        console.log("netbanking payment limit is 30000");
    }
}
const bank = new UPI();
bank.pay(5000);
const bank1 = new Creaditcard();
bank1.pay(15000);
