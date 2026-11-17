import test,{expect}from "@playwright/test"

test('learn assertion in playwright',async({page})=>{
    await page.goto("https://leafground.com/input.xhtml")
    
    const disabledtextbox =page.getByPlaceholder('disabled')
    await expect(disabledtextbox).toBeDisabled()

    const nametextbox = page.locator('#j_idt88\\:name')
    await expect(nametextbox).toBeEditable()
    await nametextbox.fill('Ahasthiya')
    
    await expect.soft(nametextbox).toBeDisabled()
    
    await nametextbox.fill('playwright learning')

})