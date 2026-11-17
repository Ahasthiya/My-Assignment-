import test from "@playwright/test"

test('window handling',async({page})=>{
    await page.goto(" https://www.leafground.com/window.xhtml")
})