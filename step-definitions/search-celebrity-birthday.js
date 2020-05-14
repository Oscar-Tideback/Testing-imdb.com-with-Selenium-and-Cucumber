let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
module.exports = function () {


  this.Given(/^that I am at the Birth Month Day of August (\d+)th$/, function () {
    await helpers.loadPage('');
    await sleep(1000);
  });


  this.Then(/^I should be taken to the Janet McTeer page when I click on it\.$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Given(/^that I am at the Birth Month Day of August (\d+)th$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^I should be taken to the Mark Strong page when I click on it\.$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Given(/^that I am at the Birth Month Day of August (\d+)th$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Then(/^I should be taken to the Jesse Williams page when I click on it\.$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Given(/^that I am at the Birth Month Day of August (\d+)th$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Then(/^I should be taken to the Stephanie Szostak page when I click on it\.$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Given(/^that I am at the Birth Month Day of August (\d+)th$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Then(/^I should be taken to the James Gunn page when I click on it\.$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

}