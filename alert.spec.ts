import {test,expect} from '@playwright/test'

test ('test to handle alert',async({page})=>{
    page.on('dialog',async(alert)=>{
        const message = alert.message()
        console.log(message)
        const alerttype = alert.type()
        console.log(alerttype)

        await alert.accept()
    })
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    await page.frameLocator('#iframeResult').locator('//button[@onclick="myFunction()"]').click()
    //await page.waitForTimeout(3000)
    await expect(
    page.frameLocator('#iframeResult').locator('#demo')).toHaveText("You pressed OK!")

    

})