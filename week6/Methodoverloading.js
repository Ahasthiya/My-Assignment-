"use strict";
class textbox {
    fill(text, locator) {
        if (locator) {
            console.log(`This is ${text} and the locator is ${locator}`);
        }
        else {
            console.log(`This is`, text);
        }
    }
}
const Details = new textbox();
Details.fill("Qeagle");
Details.fill("Qeagle", "Playwright");
