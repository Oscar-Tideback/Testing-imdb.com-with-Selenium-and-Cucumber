let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  this.Given(/^that I am on the Birth Month Day of August (\d+)th$/, async function (date) {
    await helpers.loadPage('https://www.imdb.com/search/name/?birth_monthday=08-0' + date + '&ref_=nv_cel_brn');
  });

  this.When(/^I click on a headline with the name "([^"]*)"$/, async function (actor) {
    // grab a link by its text
    let link = await driver.findElement(By.linkText(actor));
    // expect that the link exists
    expect(link,
      'Could not find ' + actor + ' on page.'
    ).to.exist;
    // click the link
    await link.click();
  });

  this.Then(/^I should be taken to a page about the actor "([^"]*)"$/, async function (actor) {
    // wait for an element we know exists on actor pages but not on list pages
    await driver.wait(until.elementLocated(By.css('.name-overview-widget')));
    // read the text of the title of the page
    let title = await $('title');
    let titleText = await title.getAttribute("textContent");
    // expect the  title text to include the actors name
    expect(titleText,
      'The actors name,' + actor + ', was not in the page title.'
    ).to.include(actor)
    await sleep(0);
  });

}