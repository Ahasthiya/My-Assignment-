import test from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
let value =fs.readFileSync('Data/login.csv',"utf-8")
console.log(value)
let value1:any[]=parse(value,{columns:true,skip_empty_lines:true})
console.log(value1)
for (let login of value1){
test(`learn to read data from csv file ${login.tcid}`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill(login.username)
    await page.locator('[id="password"]').fill(login.password)
    await page.locator('[class="decorativeSubmit"]').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
})
}