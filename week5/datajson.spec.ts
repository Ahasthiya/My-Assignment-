import {test} from '@playwright/test'
import login from '../../../Data/login.json'
for (let data of login){
test(`Learn to read data from json file ${data.TestcaseID}`,async({page})=>{
    await page.goto('https://login.salesforce.com/')
    await page.locator('[id="username"]').fill(data.Username)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(data.Password)
    await page.locator('[id="Login"]').click()
})
}