/* import test from "@playwright/test"
test ("learn to launch browser",async({page})=>{
    await page.goto('https://www.amazon.in/')
}) */

    import { test } from '@playwright/test';

test('Open browser', async ({ page }) => {
  await page.goto('https://www.google.com');
  
})