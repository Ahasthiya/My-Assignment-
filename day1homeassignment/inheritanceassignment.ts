class webcomponent{
    selector:string

    constructor(selector:string){
        this.selector = selector
    }
    click(){
        console.log(`simulating click on ${this.selector}`)
    }
    focus(){
        console.log(`focusing on ${this.selector}`)
    }
}

class button extends webcomponent{
    click(){
        console.log(`specific click action for button:${this.selector}`)
    }
}

class textinput extends webcomponent{
    value:string =""

    entertext(text:string):void{
        this.value =text
        console.log(`entering text "${text}" into ${this.selector}`)
    }
}

function textcomponents():void{
    const buttonelement = new button("submit")
    const textinputelement = new textinput("username")
    buttonelement.click()

    textinputelement.entertext("test entry")


}
textcomponents()