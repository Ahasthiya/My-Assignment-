abstract class login{
    fill():void{
        console.log("Searchbox")
    }
    clear():void{
        console.log("Searchbox")
    }
    abstract locator():void
    abstract frame():void
}

class firstpage extends login{
    locator():void{
        console.log("website")
    }
    frame():void{
        console.log("Switch")
    }
}

const br = new firstpage()
br.fill()
br.clear()
br.frame()
br.locator()