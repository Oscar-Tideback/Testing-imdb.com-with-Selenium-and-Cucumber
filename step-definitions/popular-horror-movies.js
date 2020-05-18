let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
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

  this.Then(/^I click on horror link text to see a list of Top (\d+) Horror Movies$/, async function (linkMovie) {
    let linkMovie = await driver.findElement(By.css("a[href*='genre/horror']"));
    linkMovie.click();

    await sleep(sleepTime);
    let title = await driver.findElement(By.xpath("/html/head/title"));
    let titleText = await title.getAttribute("textContent");
    expect(titleText,
      'Top 50 Horror Movies and TV Shows could not be found'
    ).to.include('Top 50 Horror Movies');
    await sleep(sleepTime);
  });
}