const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  //Scenario: Check all links in main menu
  this.Then(/^we should beable to access all the main menues pages when I click the menu$/, async function () {
    await helpers.loadPage('https://www.imdb.com/');
    await driver.wait(until.elementLocated(By.css('.ipc-button')), 10000);
    let toClick = await driver.findElement(By.css('.ipc-button'));
    await toClick.click();
  });

  this.When(/^I click the "([^"]*)"$/, async function (url) {
    console.log(url);
    // await driver.wait(until.elementLocated(By.css('a[href="' + url + '"]')), 10000);
    // let toClick = await driver.findElement(By.css('a[href="' + url + '"]'));
    // await toClick.click();
    // await helpers.loadPage('https://www.imdb.com/');
    // await driver.wait(until.elementLocated(By.css('.ipc-button')), 10000);
    // let toClick2 = await driver.findElement(By.css('.ipc-button'));
    // await toClick2.click();

    // await driver.wait(until.elementLocated(By.css('a[href="https://www.imdb.com/calendar/?ref_=nv_mv_cal"]')), 10000);
    // let toClick = await driver.findElement(By.css('a[href="https://www.imdb.com/calendar/?ref_=nv_mv_cal"]'));
    // await toClick.click();
    // let title = await driver.getTagName('title');


    // console.log(title);

  });

  this.Then(/^I check that I'm on "([^"]*)"$/, function (pageTitle) {

  });

}