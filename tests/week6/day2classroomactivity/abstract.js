"use strict";
class login {
    fill() {
        console.log("Searchbox");
    }
    clear() {
        console.log("Searchbox");
    }
}
class firstpage extends login {
    locator() {
        console.log("website");
    }
    frame() {
        console.log("Switch");
    }
}
const br = new firstpage();
br.fill();
br.clear();
br.frame();
br.locator();
