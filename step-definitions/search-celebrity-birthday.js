let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  this.Given(/^that I am on the Birth Month Day of August (\d+)th$/, async function (date) {
    await helpers.loadPage('https://www.imdb.com/search/name/?birth_monthday=08-0' + date + '&ref_=nv_cel_brn');
    await sleep(0);
  });

  this.Then(/^I should be taken to the Janet McTeer page when I click on it\.$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.Then(/^I should be taken to the "([^"]*)" page when I click on it$/, async function (actors) {
    //await driver.findElement(By.css('a[class="' + actors + '"]'));
    // console.log(actors);
    // await driver.findElement(By.linkText(actors)).click();
    // let actorToBeTested = await driver.findElement(By.linkText(actors)).getText();
    // await driver.findElement(By.linkText(actors)).click();
    // let foundActorsPage = await driver.findElement(By.css('h1.header')).getText();
    // expect(actorToBeTested,
    //   'The actor does not have a page'
    // ).to.equal(foundActorsPage);
  });

  this.Then(/^I should be taken to the Mark Strong page when I click on it\.$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

}