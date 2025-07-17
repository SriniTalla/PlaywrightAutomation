import { test, expect } from '@playwright/test';

test('testing', async ({ page }) => {
  await page.goto('https://www.amazon.co.uk/');
  await page.getByRole('link', { name: 'Best Sellers' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('listitem').filter({ hasText: '#1Jsdoin Hand Held Fan,' }).locator('a').first().click();
  const element = await page.getByRole('link', { name: 'KITCHEN, You are currently ot' });
  await expect(element).toBeVisible();
  await page.close();


});