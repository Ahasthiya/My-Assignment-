import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leafground.com/checkbox.xhtml');
  await page.locator('.ui-chkbox-box').first().click();
  await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  await expect(page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover')).toBeVisible();
  await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  await expect(page.locator('.ui-toggleswitch-slider')).toBeVisible();
  await page.locator('.ui-toggleswitch-slider').click();
  await page.locator('div').filter({ hasText: /^Disabled$/ }).click();
  await page.locator('.ui-icon.ui-icon-triangle-1-s').click();
  await page.getByRole('listitem').filter({ hasText: 'London' }).click();
  await page.getByRole('link', { name: 'Close' }).click();
});
