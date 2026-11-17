import {test} from "@playwright/test"
test('learn css selector',async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    
    await page.locator('input').first().fill('democsr')
    
    await page.locator('[id="password"]').fill('crmsfa')
    
    await page.locator(".decorativeSubmit").click()
    
    await page.locator('text=CRM/SFA').click()
    
    await page.locator('[href="/crmsfa/control/leadsMain"]').click()
    
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
    
    await page.locator('[name="companyName"]').nth(1).fill('testleaf')

    await page.locator('#createLeadForm_firstName').fill('Ahasthiya')

    await page.locator('[name="lastName"]').nth(2).fill('R')

    await page.locator('[name="personalTitle"]').fill('Miss')

    await page.locator('[name="generalProfTitle"]').fill('learning purpose')
    
    await page.locator('[name="annualRevenue"]').fill('2.5lakhs')

    await page.locator('[id="createLeadForm_departmentName"]').fill('playwright')

    await page.locator('[name="dataSourceId"]').selectOption("LEAD_CONFERENCE")

    let ddvalue = page.locator('[name="dataSourceId"]>option')

    let ddcount = await ddvalue.count()
    console.log(ddcount)

    for (let index=0; index<ddcount; index++){
        console.log(await ddvalue.nth(index).innerText())
    }

    await page.locator('[name="primaryPhoneNumber"]').last().fill('7256102421')

    await page.locator('[class="x-panel-header-text"]').last().click()


})