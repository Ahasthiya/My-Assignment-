//import { expect } from "@playwright/test"
import {test,expect} from "@playwright/test"
test ("learn download file",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
    let downloadpromise =page.waitForEvent("download")
    await page.locator('[href="download/Image.PNG"]').click()
    const download=await downloadpromise
    await download.saveAs("downloads/background.jpeg")
    //expect (download).tobeTruthy()
    expect(download.suggestedFilename()).toBe("Image.PNG")
})