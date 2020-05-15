let { $, sleep } = require('./funcs');

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

<<<<<<< HEAD
=======
  this.When(/^I click on the search button$/, async function () {
    let searchButton = await $('#suggestion-search-button');
    assert(searchButton,
      'Could not find the search button'
    );
    await searchButton.click();
  });

>>>>>>> 06361b82f96949881886cf5576ba82e81eae6eea
  this.Then(/^the first search result should contain the word "([^"]*)"$/, async function (phrase) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    let results = await $('.findResult');
    assert(results,
      'Could not find any results'
    );
    let firstResult = results[0];
    let resultText = await firstResult.getText();
<<<<<<< HEAD
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
=======
    //console.log('resultText', resultText)
    //console.log('phrase', phrase);
    assert.include(resultText, phrase,
      'Could not find the phrase ' + phrase + ' in the first search result.'
    );
>>>>>>> 06361b82f96949881886cf5576ba82e81eae6eea
    //await sleep(sleepTime);
  });
}
