let { $, sleep } = require('./funcs');

module.exports = function () {
  //# 1
  this.Given(/^that I am on the IMDB site\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I click on the Menu button\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^I would like to see the menu of what IMDB has to offer\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  //# 2
  this.Given(/^that I am on the IMDB site\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I click on the text ”Most popular TV shows”\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^I should see a list of the Most popular TV shows\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}