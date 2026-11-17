/*import test from "@playwright/test";

test('learn storage state',async({page})=>{
    await page.goto(" https://leaftaps.com/opentaps/control/login")

    //await page.context().storageState({path:'Data/slogin.json'})
    await page.getByText('Username',{exact:true}).fill('demoCSR2')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.context().storageState({path:'Data/slogin.json'})
    //await page.getByText('CRM/SFA',{exact:true}).click()
})*/

import {test,expect} from '@playwright/test'
test.use({
    storageState:'Data/slogin.json'
})
test('CRM SFA without login',async({page})=>{
    await page.goto(" https://leaftaps.com/opentaps/control/main")
    await expect(page).toHaveURL(/main/)
    await expect(page.getByText('username',{exact:true})).not.toBeVisible()
})