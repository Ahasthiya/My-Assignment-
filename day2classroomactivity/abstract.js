"use strict";
class browser {
    fill() {
        console.log("Searchbox");
    }
    clear() {
        console.log("Searchbox");
    }
}
class application extends browser {
    locator() {
        console.log("website");
    }
    frame() {
        console.log("Switch");
    }
}
const br = new application();
br.fill();
br.clear();
br.frame();
br.locator();
