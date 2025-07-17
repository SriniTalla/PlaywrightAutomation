import {test,expect} from '@playwright/test'


test ('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html'); 

    //await page.locator('locator').click();

    //await page.click('locator');

    //await page.locator('id=login2').click();
    
    await page.click('id=login2');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click("(//*[contains(text(),'Log in')])[2]");

    const logoutlink = await page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible();
    await page.close();

})