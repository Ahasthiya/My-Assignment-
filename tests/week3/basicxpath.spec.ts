import test from "@playwright/test"

test ('learn basic xpath',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')

    await page.locator('//input[@name="USERNAME"]').fill('democsr')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.locator('//input[contains(@class,"decorative")]').click()
    
    
})













/*import test from '@playwright/test'

test('learn advanced xpath',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')

    await page.locator('//div[@id="username_container"]/input[@name="username"]').fill('yuvarani.sekar@testleaf.com')
    await page.locator('//form[@name="login"]//input[@id="Login"]').click()
    await page.locator('//input[@id="password"]//preceding-sibling::label').fill('TestLeaf@2028')
    await page.locator('//form[@id="login_form"]//input[@id="Login"]').click()
})*/

