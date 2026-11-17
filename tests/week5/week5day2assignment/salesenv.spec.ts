import test from "@playwright/test"
import dotenv from "dotenv"
dotenv.config ({path:"Data/salesforce1.env"})
test ("learn to read from env file",async({page})=>{
    await page.goto(process.env.l_URL as string)
    await page.locator('[id="username"]').fill(process.env.l_Username as string)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(process.env.l_Password as string)
    await page.locator('[id="Login"]').click()

})