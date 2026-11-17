class Browser {
    browsername : string
    browserversion: string

    constructor(browsername:string,browserversion:string){
        this.browsername =browsername
        this.browserversion =browserversion
    }
    openURL():void{
        console.log(`${this.browsername}Open URL`)
    }
    closebrowser():void{
        console.log(`${this.browsername}is closing`)

    }
    navigateback():void{
        console.log(`${this.browsername}is navigating back`)
    }

}

class chrome extends Browser{
    openincognito():void{
        console.log("chrome is opening incognito mode")
    }
    clearcache():void{
        console.log("chrome cache is cleared")
    }
    openURL():void{
        console.log("chrome is opening the URL")
    }

}

class edge extends Browser{
    takesnap():void{
        console.log("edge is taking a screenshot")
    }
    clearcookies():void{
        console.log("edge cookies are cleared")
    }
    navigateback():void{
        console.log("edge is navigating back")
    }
}

class safari extends Browser{
    readmode():void{
        console.log("safari reader mode is enabled")
    }
    fullscreenmode():void{
        console.log("safari full screen mode is enabled")
    }
    closebrowser():void{
        console.log("safari is closing")
    }

}

const browser1 = new safari("safari","17")
browser1.readmode()
browser1.fullscreenmode()
browser1.closebrowser()
browser1.openURL()
browser1.navigateback()

const browser2 = new edge("edge","119")
browser2.takesnap()
browser2.clearcookies()
browser2.navigateback()
browser2.openURL()
browser2.takesnap()


const browser3 = new chrome("chrome","120")
browser3.openincognito()
browser3.clearcache()
browser3.openURL()
browser3.closebrowser()
browser3.navigateback()

