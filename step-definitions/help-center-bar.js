let {
  $,
  sleep
} = require('./funcs');

const {
  username,
  password
} = require('./credentials.json');// Syntax not agreed by group

module.exports = function () {

  let searchFieldHelp;
  let results = [];
  let counter = 0;//This is not used
  //No senario description
  this.Given(/^that i have clicked on the menu and chosen Help center$/, async function () {
    // Write code here that turns the phrase above into concrete actions // This text should not be here
    await helpers.loadPage('https://help.imdb.com');
    await sleep(1000);//This should not be pressent or used live
    searchFieldHelp = await $('.a-input-text')//Missing ";"
    assert.instanceOf(searchFieldHelp, searchFieldHelp.constructor, "Expected to see web element")//Missing ";" and syntax not preferred by Thomas

  });// An extra return found after last assert

  this.When(/^I type "([^"]*)" in the help center bar \+ ENTER$/, async function (search) {
    await searchFieldHelp.sendKeys(search)//Missing ";"
    await searchFieldHelp.sendKeys(selenium.Key.ENTER);
    await sleep(3000)//This should not be pressent or used live
    //See test below :)
  });

  this.Then(/^I should get related topics concerning "([^"]*)"$/, async function (searchString) {
    // Write code here that turns the phrase above into concrete actions // This text should not be here
    await driver.wait(until.elementLocated(By.css('a.a-link-normal > h3')));
    results = await $('a.a-link-normal > h3');
    //for loop that check every instance of the h3 element contins 'ratings'.
    for (let result of results) {
      let text = await result.getText()//Missing ";"
      console.log(text);//This should not be here when live
      assert.include(text.toLowerCase(), searchString.toLowerCase(), 'odes not contain');//Syntax not preferred by Thomas
    }

  });// An extra return found before method closing 

}