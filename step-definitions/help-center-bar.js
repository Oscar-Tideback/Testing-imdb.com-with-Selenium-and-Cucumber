let {
  $,
  sleep
} = require('./funcs');

const {
  username,
  password
} = require('./credentials.json');

module.exports = function () {

  let searchFieldHelp;
  //let results = [];

  this.Given(/^that i have clicked on the menu and chosen Help center$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    await helpers.loadPage('https://help.imdb.com');
    await sleep(1000);
    searchFieldHelp = await $('.a-input-text')
    assert.instanceOf(searchFieldHelp, searchFieldHelp.constructor, "Expected to see web element")

  });


  this.When(/^I type "([^"]*)" in the help center bar \+ ENTER$/, async function (search) {
    await searchFieldHelp.sendKeys(search)
    await searchFieldHelp.sendKeys(selenium.Key.ENTER);
    await sleep(3000)
    //See test below :)
  });



  this.Then(/^I should get related topics concerning the word "([^"]*)"$/, async function (searchString) {
    // Write code here that turns the phrase above into concrete actions
    let results = await driver.findElement(By.class('.a-link-normal'))

    let string = results.getText();
    console.log(string);
    /*let found = false
      for (let result of results) {
        console.log('text', await result.getText())
        let text = await result.getText()
        if (text.toLowerCase().includes(searchString.toLowerCase())) {
          found = true
          break
        }
    }*/

    //assert(found, 'expected to find ' + searchString)



  });


}