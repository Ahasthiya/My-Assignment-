/* browser-actual browser engine launches the browser
context-user profile-(isolated browser session)
page-open the page /tab within the context*/

import {chromium, test}from "@playwright/test"
test ('learn to launch red bus in an edge browser',async () => {
    
    const browser= await chromium.launch()
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.amazon.com/")
    await page.waitForTimeout(4000)
})

test.only('learn to launch flipkart in an webkit',async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.waitForTimeout(2000)
})

