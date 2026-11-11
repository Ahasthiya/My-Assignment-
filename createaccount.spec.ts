import {test} from "@playwright/test"
import { loginpage } from "../Pages/01_loginpage"
import { welcomepage } from "../Pages/02_welcomepage"
import { homepage } from "../Pages/03_homepage"
import { accountspage } from "../Pages/07_accountspage"
import { createaccountspage } from "../Pages/08_createaccountspage"
import { viewaccountpage } from "../Pages/09_viewaccountpage"

test ("create account using pom",async ({page})=>{
    const lp = new loginpage(page)
    await lp.loadurl("https://leaftaps.com/opentaps/control/main")
    await lp.entercredential("Demosalesmanager","crmsfa")
    await lp.clickonlogin()
    
    const wp = new welcomepage(page)
    await wp.clickoncrmsfa()

    const hp = new homepage(page)
    await hp.clickonaccounts()

    const mp = new accountspage(page)
    await mp.clickoncreateaccount()

    const cl = new createaccountspage(page)
    await cl.enteraccountname()
    await cl.clickoncreateaccountbutton()

    const va = new viewaccountpage(page)
    await va.verifyaccount()
}
)

