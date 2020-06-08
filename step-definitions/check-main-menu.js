let { $, sleep } = require('./funcs');

module.exports = function () {
  //Oscar T.
  //Scenario: Check all links in main menu
  this.When(/^we should beable to access all the main menues pages when I click the menu$/, async function () {
    await helpers.loadPage('https://www.imdb.com/');
    await driver.wait(until.elementLocated(By.css('.ipc-button')), 10000);
    let toClick = await driver.findElement(By.css('.ipc-button'));
    await toClick.click();
  });

  this.When(/^I click the "([^"]*)"$/, async function (linkText) {
    await driver.wait(until.elementLocated(By.linkText(linkText)), 10000);
    await driver.findElement(By.linkText(linkText)).click();
  });

  this.Then(/^I check that I'm on "([^"]*)"$/, async function (pageTitle) {
    await driver.wait(until.elementLocated(By.css('title')));
    let title = await driver.findElement(By.xpath('/html/head/title'));
    let titleText = await title.getAttribute('textContent');
    let str = titleText.replace('\n', ' ');
    titleText = str.replace('|', '');
    expect(titleText,
      'The page title,' + pageTitle + ', was not the right title.'
    ).to.include(pageTitle);
  });

}