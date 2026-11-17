import test from '@playwright/test'

test('learn playwright locators',async({page})=>{
    await page.goto(" https://leaftaps.com/opentaps/control/login")

    //await page.getByAltText("/opentaps_images/opentaps_logo.png").click()

    await page.getByText('Username',{exact:true}).fill('Demosalesmanager')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByText('CRM/SFA',{exact:true}).click()
    await page.getByText('Leads',{exact:true}).click()
    await page.getByRole('link',{name:"Create Lead"}).click()
    await page.locator('[name="companyName"]').nth(1).fill('Testleaf')
    await page.locator('#createLeadForm_firstName').fill('Ahasthiya')
    await page.locator('#createLeadForm_lastName').fill('R')
    await page.locator('#createLeadForm_personalTitle').fill('Miss')
    await page.locator('#createLeadForm_generalProfTitle').fill('learning purpose')
    await page.locator('#createLeadForm_annualRevenue').fill('2.5lakhs')
    await page.locator('[name="departmentName"]').fill('Playwright')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('7286149019')
    await page.getByRole('button',{name: "Create Lead"}).click()
})