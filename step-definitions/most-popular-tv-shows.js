let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  let sleepTime = 1000;

  this.Given(/^that I am on the IMDB site\.$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

  this.When(/^I click on the Menu button$/, async function () {
    let menuButton = await driver.findElement(By.css('.ipc-button')).click();
    await sleep(sleepTime);
  });

  this.Then(/^I should see a list of popular shows by clicking on the link Most Popular Shows$/, async function () {
    let link4 = await driver.findElement(By.css("a[href*='tvmeter']"));
    link4.click();
    let title = await driver.findElement(By.xpath("/html/head/title"));
    let titleText = await title.getAttribute("textContent");
    expect(titleText,
      'Most Popular TV shows could not be found'
    ).to.include('Most Popular TV')
    await sleep(sleepTime);
  });
}