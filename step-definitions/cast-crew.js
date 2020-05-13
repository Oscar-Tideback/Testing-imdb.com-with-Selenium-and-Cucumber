let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
module.exports = function () {



  this.Given(/^that I am on the Suits page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/title/tt1632701/?ref_=nv_sr_srsg_0');
    await sleep(1000);
  });


  this.Given(/^that I have clicked the Edit button$/, async function () {
    let button = await $('a.button-box')
    button.click()
    await sleep(4000)
  });

  /*this.Given(/^that I haved chosen wanted Cast in Cast&Crew and clicked on the continue button$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I add data in Gabriel Macht,Episode Errors and Omissions \(\#(\d+)\.(\d+)\),Harvey Specter and click button check these updates$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.When(/^I click the button Submit these updates$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Then(/^the data I have submitted in Gabriel Macht, Episode Errors and Omissions \(\#(\d+)\.(\d+)\), Harvey Specter should be sent$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
*/
}