let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  let searchFieldHelp;
  let results = [];
  //Scenario: Search for ratings in help center bar.
  this.Given(/^that i have clicked on the menu and chosen Help center$/, async function () {
    await helpers.loadPage('https://help.imdb.com');
    await sleep(0);
    searchFieldHelp = await $('.a-input-text');
    assert.instanceOf(searchFieldHelp, searchFieldHelp.constructor,
      "Expected to see web element"
    );
  });

  this.When(/^I type "([^"]*)" in the help center bar \+ ENTER$/, async function (search) {
    await searchFieldHelp.sendKeys(search);
    await searchFieldHelp.sendKeys(selenium.Key.ENTER);
    await sleep(0);
    //See test below
  });

  this.Then(/^I should get related topics concerning "([^"]*)"$/, async function (searchString) {
    await driver.wait(until.elementLocated(By.css('a.a-link-normal > h3')));
    results = await $('a.a-link-normal > h3');
    //for loop that check every instance of the h3 element contins 'ratings'.
    for (let result of results) {
      let text = await result.getText();
      assert.include(text.toLowerCase(), searchString.toLowerCase(),
        'odes not contain'
      );
    }
  });

}