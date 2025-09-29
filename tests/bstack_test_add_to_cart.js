const { expect, test } = require('@playwright/test');

test('BStack Signed out pricing page', async ({ page }) => {
  // visit the site
  await page.goto('https://preprod.bsstag.com/pricing');

  // wait for the page to fully load
  await page.waitForSelector('.plan_choose.contact_sale_btn.cart_add.btn-primary.btn-md.col-xs-6.col-center.btn-upgrade.live-desktop:nth-child(1)', { state: 'visible' });
});
