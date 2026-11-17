import {chromium, webkit,test}from "@playwright/test"
test ('learn to launch red bus in an edge browser',async () => {
    
    const browser= await chromium.launch({channel:'msedge'})
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(4000)

    console.log('redbus title:',await page.title())
    console.log('redbus URL:',page.url())
    await browser.close()
})

test ("learn to launch flipkart in an webkit",async () =>{
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(4000)

    console.log('flipkart title:',await page.title())
    console.log('flipkart URL:',page.url())
    await browser.close()
})
