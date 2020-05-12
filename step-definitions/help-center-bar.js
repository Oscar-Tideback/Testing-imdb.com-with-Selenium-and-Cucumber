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

  this.Given(/^that i have clicked on the menu and chosen Help center$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    await helpers.loadPage('https://help.imdb.com');
    await sleep(1000);
    searchFieldHelp = await $('.a-input-text')
    assert.instanceOf(searchFieldHelp, searchFieldHelp.constructor, "Expected to see web element")

  });



  this.When(/^I type ratings in the help center bar$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.Then(/^I should get related topics concerning ratings$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });


















}