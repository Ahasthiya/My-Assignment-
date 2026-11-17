import {test} from "@playwright/test"

test ("learn dropdown",async({page})=>{
    await page.goto("https://www.leafground.com/select.xhtml")
    //static dropdown --- select dropdown
    await page.locator('select[class="ui-selectonemenu"]').selectOption({label:'Playwright'})
    await page.waitForTimeout(2000)
    await page.locator('select[class="ui-selectonemenu"]').selectOption({index:3})
    await page.waitForTimeout(4000)

    let dpvalue = page.locator('select[class="ui-selectonemenu"]>option')
    let dpcount = await dpvalue.count()
    console.log(dpcount)
    for (let index = 0; index < dpcount; index++) {
        console.log(await dpvalue.nth(index).innerText())
        
    }
})

//dynamic dropdown or custom dropdown --- with select dropdown

test.only ("learn dynamic dropdown",async({page})=>{
    await page.goto("https://www.leafground.com/select.xhtml")
    await page.locator('text=Select Country').nth(1).click()
    //await page.waitForTimeout(2000)
    await page.locator('[data-label="India"]').click()
    //await page.waitForTimeout(3000)
    
})