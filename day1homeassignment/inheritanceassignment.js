"use strict";
class webcomponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`simulating click on ${this.selector}`);
    }
    focus() {
        console.log(`focusing on ${this.selector}`);
    }
}
class button extends webcomponent {
    click() {
        console.log(`specific click action for button:${this.selector}`);
    }
}
class textinput extends webcomponent {
    value = "";
    entertext(text) {
        this.value = text;
        console.log(`entering text "${text}" into ${this.selector}`);
    }
}
function textcomponents() {
    const buttonelement = new button("submit");
    const textinputelement = new textinput("username");
    buttonelement.click();
    textinputelement.entertext("test entry");
}
textcomponents();
