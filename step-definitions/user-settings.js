let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {
  let newPassword = '123qwe098Q';
  //Scenario: When loggin to page
  this.Given(/^an account is premade$/, async function () {
    await helpers.loadPage('https://www.imdb.com/');
  });

  this.When(/^I click the button to sign in$/, async function () {
    await driver.findElement(By.css('._3cMNCrSVkxQhCkVs1JLIib')).click();
  });

  this.Then(/^I should be redirected to a page were I can select sign in method$/, async function () {
    await driver.wait(until.elementLocated(By.css('title')));
    let title = await driver.findElement(By.xpath('/html/head/title'));
    let titleText = await title.getAttribute('textContent');
    expect(titleText,
      'Did not redirect to the right page. '
    ).to.equal('Sign in with IMDb - IMDb');
  });

  this.Then(/^click the first loggin method "([^"]*)"$/, async function (sign) {
    await driver.findElement(By.linkText(sign)).click();
  });

  this.Then(/^I should be redirected the signin page$/, async function () {
    await driver.wait(until.elementLocated(By.css('title')));
    let title = await driver.findElement(By.xpath('/html/head/title'));
    let titleText = await title.getAttribute('textContent');
    expect(titleText,
      'Did not redirect to the right page. '
    ).to.equal('IMDb Sign-In');
  });

  this.Then(/^type in username and tab to next$/, async function () {
    await driver.findElement(By.id('ap_email')).sendKeys(username);
  });

  this.Then(/^type password and press enter$/, async function () {
    await driver.findElement(By.id('ap_password')).sendKeys(password);
    await driver.findElement(By.id('signInSubmit')).sendKeys(selenium.Key.ENTER);
  });

  //Scenario: When I enter my username and password and would like to change the password and user ID
  this.Given(/^that I have logged in to my account$/, async function () {
    await helpers.loadPage('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F');
    await driver.findElement(By.linkText('Sign in with IMDb')).click();
    await driver.findElement(By.id('ap_email')).sendKeys(username);
    await driver.findElement(By.id('ap_password')).sendKeys(password);
    await driver.findElement(By.id('signInSubmit')).click();
  });

  this.Then(/^clicked the user menu to account settings$/, async function () {
    await driver.findElement(By.css('span.imdb-header__account-toggle--logged-in')).click();
    await driver.findElement(By.linkText('Account settings')).click();
    await driver.wait(until.elementLocated(By.css('title')));
    let title = await driver.findElement(By.xpath('/html/head/title'));
    let titleText = await title.getAttribute('textContent');
    expect(titleText,
      'Did not redirect to the right page. '
    ).to.equal('Account Settings - IMDb');
  });

  this.Then(/^clicked on Login and security$/, async function () {
    await driver.findElement(By.linkText('Login and security')).click();
    await driver.wait(until.elementLocated(By.css('title')));
    let title = await driver.findElement(By.xpath('/html/head/title'));
    let titleText = await title.getAttribute("textContent");
    expect(titleText,
      'Did not redirect to the right page. '
    ).to.equal('IMDb Change Name, E-mail, Password');
  });

  this.Then(/^I clicked the edit button to change password$/, async function () {
    await driver.findElement(By.id('auth-cnep-edit-password-button')).click();
  });

  this.Then(/^type the current password in current password field$/, async function () {
    await driver.findElement(By.id('ap_password')).sendKeys(password);
  });

  this.Then(/^typed a new password in the new password field$/, async function () {
    await driver.findElement(By.id('ap_password_new')).sendKeys(newPassword);
  });

  this.Then(/^reenter the new password in the reenter password field$/, async function () {
    await driver.findElement(By.id('ap_password_new_check')).sendKeys(newPassword);
    await driver.findElement(By.id('cnep_1D_submit_button')).click();
    let success = await driver.findElement(By.id('auth-success-message-box'));
    expect(success,
      'Password was not changed'
    ).to.exist;
  });

  this.Then(/^reset to old password$/, async function () {
    await driver.findElement(By.id('auth-cnep-edit-password-button')).click();
    await driver.findElement(By.id('ap_password')).sendKeys(newPassword);
    await driver.findElement(By.id('ap_password_new')).sendKeys(password);
    await driver.findElement(By.id('ap_password_new_check')).sendKeys(password);
    await driver.findElement(By.id('cnep_1D_submit_button')).click();
  });

  this.Then(/^I clicked the edit button to change user ID$/, async function () {
    await driver.findElement(By.id('auth-cnep-edit-name-button')).click();
  });

  this.Then(/^type the current user ID in current user ID field$/, async function () {
    //No need for this
  });

  this.Then(/^typed a new user ID in the new user ID field$/, async function () {
    await driver.findElement(By.id('ap_customer_name')).sendKeys('_new');
    await driver.findElement(By.id('cnep_1C_submit_button')).click();
  });

  this.Then(/^reenter the new user ID in the reenter user ID field$/, async function () {//not right move
    await driver.findElement(By.id('auth-cnep-edit-name-button')).click();
  });

  this.Then(/^reset to old user ID$/, async function () {
    await driver.findElement(By.id('ap_customer_name')).clear();
    await driver.findElement(By.id('ap_customer_name')).sendKeys('test1618');
    await driver.findElement(By.id('ap_customer_name')).sendKeys(selenium.Key.TAB);
    await driver.findElement(By.id('cnep_1C_submit_button')).click();
    await driver.wait(until.elementLocated(By.id('auth-cnep-done-button')), 10000);
    await driver.findElement(By.id('auth-cnep-done-button')).click();

  });

  this.Then(/^I clicked the add to BIO button to change my bio and save$/, async function () {
    let userId = 'test-80520';
    await driver.findElement(By.linkText('Edit profile')).click();
    let title = await driver.findElement(By.xpath('/html/head/title'));
    let titleText = await title.getAttribute('textContent');
    expect(titleText,
      'Did not redirect to the right page. '
    ).to.equal('Edit profile - IMDb');

    await driver.findElement(By.css('.auth-input-right-side')).click();
    await driver.findElement(By.css('.auth-input--input')).sendKeys("_new");
    await driver.findElement(By.css('.auth-input--input')).sendKeys(selenium.Key.TAB);
    await driver.findElement(By.css('.pretty_btn')).click();
    let success = await driver.findElement(By.css('.success'));
    expect(success,
      'User ID was not changed'
    ).to.exist;

    await driver.findElement(By.css('span.imdb-header__account-toggle--logged-in')).click();
    await driver.findElement(By.linkText('Account settings')).click();
    await driver.findElement(By.linkText('Edit profile')).click();
    await driver.findElement(By.css('.auth-input-right-side')).click();
    await driver.findElement(By.css('.auth-input--input')).clear();
    await driver.findElement(By.css('.auth-input--input')).sendKeys(userId);
    await driver.findElement(By.css('.auth-input--input')).sendKeys(selenium.Key.TAB);
    await driver.findElement(By.css(".pretty_btn")).click();
  });

  this.Then(/^check if new BIO is accurate$/, async function () {
    let newBio = "New bio blah blah...";
    await driver.findElement(By.css('span.imdb-header__account-toggle--logged-in')).click();
    await driver.findElement(By.linkText('Account settings')).click();
    await driver.findElement(By.linkText('Edit profile')).click();
    await driver.findElement(By.css('.multiline')).clear();
    await driver.findElement(By.css('.multiline')).sendKeys(newBio);
    await driver.findElement(By.css('div[data-userbio-save]')).click();
    await driver.wait(until.elementLocated(By.css('.article h2')), 10000);
    await driver.findElement(By.linkText("Edit profile")).click();
    let bioText = await driver.findElement(By.css('.multiline')).getText();
    expect(bioText,
      'New bio is not right. '
    ).to.equal(newBio);

    await driver.findElement(By.css('.multiline')).clear();
    await driver.findElement(By.css('div[data-userbio-save]')).click();
  });

}