interface pagerules{
    verifypage():void}

    abstract class basepage{
        waitforpageload():void{
            console.log("waiting for page to load")
        }
        getpagetitle():void{
            console.log("getting page title")
        }
    }


    class loginpage extends basepage implements pagerules{
        verifypage(): void {
            console.log("Login page verified")
        }
        Enterusername():void{
            console.log("Username entered")
        }
        Enterpassword():void{
            console.log("Password is entered")
        }
        Clicklogin():void{
            console.log("Login clicked")
        }
        
    }
    class productpage extends basepage implements pagerules{
        verifypage(): void {
            console.log("Product page verified")
        }
        searchproduct():void{
            console.log("Product page verified")
        }
        addtocart():void{
            console.log("Product added to cart")
        }

    }

    const login = new loginpage()
    login.waitforpageload()
    login.verifypage()
    login.Enterusername()
    login.Enterpassword()
    login.Clicklogin()
    login.getpagetitle()

