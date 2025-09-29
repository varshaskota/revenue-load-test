const { expect, test } = require('@playwright/test');

test('BStack Signed in pricing page', async ({ page }) => {
  // visit the site
  await page.goto('https://preprod.bsstag.com/users/sign_in');

  // Input user email and password
  await page.fill('#user_email_login', 'automationbs+loadtest@browserstack.com'); // Replace with a valid email
  await page.fill('#user_password', 'testtest'); // Replace with a valid password

  // Click the login button
  await page.click('#user_submit');
  await page.waitForSelector('#account-menu-toggle', { state: 'visible' }); 
  
  try {
    await page.goto('https://preprod.bsstag.com/accounts/subscriptions', { waitUntil: 'load' });
  } catch (error) {
    console.error('Navigation failed:', error);
  }
  console.log('----Current URL:', page.url());
   
  // wait for the page to fully load
   await page.waitForSelector('.plan_choose.contact_sale_btn.cart_add.btn-primary.btn-md.col-xs-6.col-center.btn-upgrade.live-desktop:nth-child(1)', { state: 'visible' });
});
