let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  //let sleepTime = 1000;

  this.Given(/^that I am on the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    //await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await searchField.sendKeys(selenium.Key.ENTER);
    //await sleep(sleepTime);
  });

  this.Then(/^the first search result should contain the word "([^"]*)"$/, async function (phrase) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    let results = await $('.findResult');
    assert(results,
      'Could not find any results'
    );
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    //await sleep(sleepTime);
  });
}
