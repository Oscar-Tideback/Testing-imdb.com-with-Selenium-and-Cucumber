let { $, sleep } = require('./funcs');

module.exports = function () {

  this.When(/^I browse the statpage$/, async function () {
    await helpers.loadPage('https://www.imdb.com/');
  });

  this.Then(/^the footer should contain the information$/, async function (table) {
    //List < List < String >> data = table.raw();
    const data = table.raw();
    console.log(data[1][1], ' OCH ', data[1][1][1]);

  });

  this.Then(/^images and extrenal links to$/, function (table) {
  });

  this.Then(/^the text "([^"]*)"$/, function (copyRightText) {
  });

  this.Then(/^that IMDb loggo is pressent$/, function () {
  });

}