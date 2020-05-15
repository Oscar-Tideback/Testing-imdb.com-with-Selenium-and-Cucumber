let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  // # 1 
  this.Given(/^that I am on the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    //await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)"$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    //await sleep(sleepTime);
  });

  this.When(/^I click on the search button$/, async function () {
    let searchButton = await $('#suggestion-search-button');
    assert(searchButton, 'Could not find the search button');
    await searchButton.click();
  });

  this.Then(/^the first search result should contain the word "([^"]*)"$/, async function (phrase) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    //console.log('resultText', resultText)
    //console.log('phrase', phrase);
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    //await sleep(sleepTime);
  });

  //# 2

  this.When(/^I enter the search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await searchField.sendKeys(selenium.Key.ENTER);
    //await sleep(sleepTime);
  });
}
