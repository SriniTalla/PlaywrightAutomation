import {test,expect} from '@playwright/test'

test('Locate Multiple Elements', async ({page})=>{

    await page.goto('https://www.amazon.co.uk/');

    // const links = await page.$$('a');

    // for(const link of links){
    //     const linktext = await link.textContent();
    //     console.log(linktext);
    // }

    const products = await page.$$('//*[@id="CardInstancebpilq2_Q5kRPensbDtySNw"]/div[2]/div//div//div');
    for (const product of products){
        const producttext = await p
    }
})