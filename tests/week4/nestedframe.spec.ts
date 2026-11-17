/*import {test} from "@playwright/test"

test ("learn frames using playwright",async({page})=>{
    await page.goto(" https://www.leafground.com/frame.xhtml")

    const allframes = page.frames()
    console.log(allframes.length)

    const nestedframe = allframes[4]
    await nestedframe.locator('#click').click()
    await page.waitForTimeout(3000)
})*/

import test,{expect} from "@playwright/test"

test("learn frame using framelocator",async({page})=>{
    await page.goto(" https://www.leafground.com/frame.xhtml")
    const parentframe=page.frameLocator('//iframe[@src="page.xhtml"]')
    const childframe = parentframe.frameLocator("#frame2")
    await childframe.locator("#Click").click()
    const afterclick=await childframe.locator("#Click").innerText()
    console.log(afterclick)
    await expect (childframe.locator('#Click')).toHaveText("Hurray! You Clicked Me.")
   
    
    
})

