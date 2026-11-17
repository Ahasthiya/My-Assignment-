"use strict";
class Browser {
    browsername;
    browserversion;
    constructor(browsername, browserversion) {
        this.browsername = browsername;
        this.browserversion = browserversion;
    }
    openURL() {
        console.log(`${this.browsername}Open URL`);
    }
    closebrowser() {
        console.log(`${this.browsername}is closing`);
    }
    navigateback() {
        console.log(`${this.browsername}is navigating back`);
    }
}
class chrome extends Browser {
    openincognito() {
        console.log("chrome is opening incognito mode");
    }
    clearcache() {
        console.log("chrome cache is cleared");
    }
    openURL() {
        console.log("chrome is opening the URL");
    }
}
class edge extends Browser {
    takesnap() {
        console.log("edge is taking a screenshot");
    }
    clearcookies() {
        console.log("edge cookies are cleared");
    }
    navigateback() {
        console.log("edge is navigating back");
    }
}
class safari extends Browser {
    readmode() {
        console.log("safari reader mode is enabled");
    }
    fullscreenmode() {
        console.log("safari full screen mode is enabled");
    }
    closebrowser() {
        console.log("safari is closing");
    }
}
const browser1 = new safari("safari", "17");
browser1.readmode();
browser1.fullscreenmode();
browser1.closebrowser();
browser1.openURL();
browser1.navigateback();
const browser2 = new edge("edge", "119");
browser2.takesnap();
browser2.clearcookies();
browser2.navigateback();
browser2.openURL();
browser2.takesnap();
const browser3 = new chrome("chrome", "120");
browser3.openincognito();
browser3.clearcache();
browser3.openURL();
browser3.closebrowser();
browser3.navigateback();
