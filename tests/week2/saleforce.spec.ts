import {test} from "@playwright/test"
test('salesforce login successfully',async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator('[id="username"]').fill('yuvarani.sekar@testleaf.com')
    await page.locator("#Login").click()
    await page.locator('[id="password"]').fill('TestLeaf@2028')
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)

})