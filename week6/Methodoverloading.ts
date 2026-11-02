class textbox{
    fill(text:string):void
    fill(text:string,locator:string):void

    fill(text:string,locator?:string){
        if(locator){
            console.log(`This is ${text} and the locator is ${locator}`)
        }else{
            console.log(`This is`,text)
        }
    }
}
const Details = new textbox()
Details.fill("Qeagle")
Details.fill("Qeagle","Playwright")