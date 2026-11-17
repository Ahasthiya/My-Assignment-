"use strict";
class logintest {
    browsername;
    password;
    username;
    constructor() {
        this.browsername = "Chrome";
        this.password = "admin123";
        this.username = "Tester";
    }
    openapplication() {
        console.log(`The browsername is ${this.browsername}`);
    }
    login() {
        console.log(`The Password is ${this.password} and The user is ${this.username}`);
    }
}
const detail = new logintest();
detail.openapplication();
detail.login();
