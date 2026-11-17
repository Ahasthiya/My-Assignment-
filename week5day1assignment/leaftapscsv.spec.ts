import test from "@playwright/test"
import {parse} from 'csv-parse/sync'
import fs from 'fs'
let login1 = fs.readFileSync('Data/leaftaps.csv',"utf-8")
console.log(login1)
let login2:any[] =parse (login1,{columns:true,skip_empty_lines:true})
console.log(login2)
for (let leaftaps of login2){
    test(`learn to read data from csv file $(leaf.TestcaseId)`,async({page})=>{
        await page.goto(' http://leaftaps.com/opentaps/control/main')
        await page.locator('[id="username"]').fill(leaftaps.Username)
        await page.locator('[id="password"]').fill(leaftaps.Password)
        await page.locator('[class="decorativeSubmit"]').click()
        await page.locator("//a[contains(text(),'CRM/SFA')]").click()
        await page.locator("//a[text()='Leads']").click()
        await page.locator("//a[text()='Create Lead']").click()
        await page.locator('[id="createLeadForm_companyName"]').fill(leaftaps.Companyname)
        await page.locator('[id="createLeadForm_firstName"]').fill(leaftaps.Firstname)
        await page.locator('[id="createLeadForm_lastName"]').fill(leaftaps.lastname)
        await page.locator('[id="createLeadForm_dataSourceId"]').selectOption({label:'Direct Mail'})
        await page.locator('[id="createLeadForm_marketingCampaignId"]').selectOption({label:'Demo Marketing Campaign'})
        const options = page.locator('[id="createLeadForm_marketingCampaignId"]>option')
        const count=await options.count()
        console.log(count)
        for(let i=0;i<count;i++){
            console.log(await options.nth(i).innerText())
        }
        await page.locator('[id="createLeadForm_industryEnumId"]').selectOption({label:'General Services'})
        await page.locator('[id="createLeadForm_currencyUomId"]').selectOption({label:'INR - Indian Rupee'})
        await page.locator('[id="createLeadForm_generalCountryGeoId"]').selectOption({label:'India'})
        await page.locator('[id="createLeadForm_generalStateProvinceGeoId"]').selectOption({label:"TAMILNADU"})
        const statevalue =page.locator('[id="createLeadForm_generalStateProvinceGeoId"]>option')
        const value =await statevalue.count()
        console.log(value)
        for(let i=0;i<value;i++)
            console.log(await statevalue.nth(i).innerText())
        await page.locator('[value="Create Lead"]').click()
    })
    }
