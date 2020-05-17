let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 1000;

  this.Given(/^I have clicked on the Menu button$/, async function () {
    let menuButton = await driver.findElement(By.css('.ipc-button')).click();
    await sleep(sleepTime);
  });

  this.When(/^I have clicked on Most popular movies$/, async function () {
    let link10 = await driver.findElement(By.css("a[href*='moviemeter']"));
    link10.click();
    await sleep(sleepTime);
  });

  this.Then(/^I click on horror link text to see a list of popular movies and tv shows\.$/, async function () {
    let linkMovie = await driver.findElement(By.css("a[href*='genre/horror']"));
    linkMovie.click();
    await sleep(sleepTime);
  });
}