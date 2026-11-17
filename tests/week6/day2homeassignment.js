"use strict";
class basepage {
    waitforpageload() {
        console.log("waiting for page to load");
    }
    getpagetitle() {
        console.log("getting page title");
    }
}
class loginpage extends basepage {
    verifypage() {
        console.log("Login page verified");
    }
    Enterusername() {
        console.log("Username entered");
    }
    Enterpassword() {
        console.log("Password is entered");
    }
    Clicklogin() {
        console.log("Login clicked");
    }
}
class productpage extends basepage {
    verifypage() {
        console.log("Product page verified");
    }
    searchproduct() {
        console.log("Product page verified");
    }
    addtocart() {
        console.log("Product added to cart");
    }
}
const login = new loginpage();
login.waitforpageload();
login.verifypage();
login.Enterusername();
login.Enterpassword();
login.Clicklogin();
login.getpagetitle();
