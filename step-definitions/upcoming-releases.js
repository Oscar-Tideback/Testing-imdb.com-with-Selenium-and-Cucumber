let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  let sleepTime = 5000;

  this.When(/^I have clicked on Release Calender$/, async function () {
    let linkCalendar = await driver.findElement(By.css("a[href*='calendar']"));
    linkCalendar.click();
    await sleep(sleepTime);
  });

  this.Then(/^I should see a list of upcoming releases for Austria by clicking on Austria$/, async function () {
    let linkReleases = await driver.findElement(By.css("a[href*='AT&ref']"));
    linkReleases.click();
    await sleep(sleepTime);
  });
}