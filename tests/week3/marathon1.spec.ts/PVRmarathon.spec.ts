import {test,expect} from "@playwright/test"

test ("Learn to book cinema Tickets",async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")
    await page.locator('[class="select-city"]').click()
    await page.locator("//h6[text()='Chennai']").click()
    await page.locator("//span[text()='Cinema']").click()
    await page.locator("//span[text()='Select Cinema']").click()
    await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()
    await page.locator("//span[text()='18 Nov']").click()
    await page.locator("//span[text()='WILDWOOD']").last().click()
    await page.waitForTimeout(3000)
    await page.locator("//span[text()='07:35 PM']").click()
    await page.waitForTimeout(3000)
    await page.locator('[aria-label="Submit"]').click()
    await page.locator("//button[text()='Accept']").click()
    await page.locator('[id="CL.CLUB|H:7"]').click()
    await page.locator("//button[text()='Proceed']").click()
    await page.locator("//button[text()='Continue']").click()
    await page.locator('[class="pi pi-times"]').nth(1).click()
    const Title=await page.title()
    console.log(Title)
    
    

})