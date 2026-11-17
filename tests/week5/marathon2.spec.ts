import {test} from "@playwright/test"

test("learn to test the service now application",async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://dev330545.service-now.com",{timeout:60000})
    await page.locator('[id="user_name"]').fill("Admin")
    await page.locator('[id="user_password"]').fill("TkA5z3JBzp//")
    await page.locator('[id="sysverb_login"]').click()
    await page.locator('[aria-label="All"]').click()
    await page.locator('[aria-label="Service Catalog 3 of 23"]').click()
    let homeframe = await page.frameLocator('[id="gsft_main"]')
    homeframe.getByLabel('Mobiles. Cell phones to meet your business needs.').click()
    //let mobile = await page.frameLocator('[id="gsft_main"]')
    //await mobile.locator('[id="com.glideapp.servicecatalog.RenderCategory_0179335810751408_header"]').click()
    
})