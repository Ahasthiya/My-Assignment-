class browser{
    browsertype(){
        console.log("Accessing browser type")
    }
    browserversion(){
        console.log("Accessing browser version")
    }
}
class chrome extends browser{
    launchbrowser(){
        console.log("Chrome browser is launched")
    }
}
class edge extends browser{
    launchbrowser(){
        console.log("Egde browser is launched")
    }
}

const login1 = new chrome()
login1.browsertype()
login1.browserversion()
login1.launchbrowser()

const login2 = new edge()
login2.browsertype()
login2.browserversion()
login2.launchbrowser()