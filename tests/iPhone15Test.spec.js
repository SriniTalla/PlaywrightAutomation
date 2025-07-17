import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.co.uk/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.locator('#deals').click();
  await page.getByRole('link', { name: 'Google Pixel 9 Pro - Unlocked Android Smartphone with Gemini, Triple Rear Camera System, 24-Hour Battery, and 6.3" Super Actua Display - Obsidian, 128GB', exact: true }).click();
  await page.getByRole('button', { name: 'Selected Size Name is 128GB.' }).click();
  await page.getByRole('button', { name: 'Add to Basket' }).click();
  await page.locator('.a-row > .a-checkbox > label > .a-icon').first().click();
});