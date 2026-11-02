class browser1{
    browserversion(){
        console.log("Accessing browser version")
    }
}
class chromebrowser extends browser1{
    browserversion(){
        console.log("Chrome browser is launched")
    }
}
const br = new chromebrowser()
br.browserversion()

