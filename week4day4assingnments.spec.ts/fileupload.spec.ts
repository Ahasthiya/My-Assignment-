import test,{expect} from "@playwright/test"
test("learn to upload file ",async({page})=>{
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(`//h2[text()="I'm experienced"]`).click()
    let fupload = page.locator('[class="uploadAction"]')
    fupload.setInputFiles('Data/Ahasthiya Resume.pdf')
    await page.waitForTimeout(3000)
    let fuploadassertion =await page.locator('[class="file-name ellipsis"]').innerText()
    console.log(fuploadassertion)
    expect(page.locator('[class="file-name ellipsis"]')).toContainText("Ahasthiya Resume.pdf")

})