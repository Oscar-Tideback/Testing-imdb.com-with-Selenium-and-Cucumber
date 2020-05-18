let { $, sleep } = require('./funcs');

module.exports = function () {

  //let sleepTime = 1000;

  this.Given(/^that I am on the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    //await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchKey = await $('input[placeholder= "Search IMDb"]');
    assert(searchKey, 'Can not find the search field on the page');
    searchKey.sendKeys(searchText);
    await searchKey.sendKeys(selenium.Key.ENTER);
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
