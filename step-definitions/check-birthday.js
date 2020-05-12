let { $, sleep } = require('./funcs');

module.exports = function () {
  let names = [];
  let name, text, wikipedia, rightDate, ourDate;

  //Scenario: Cross-check our date of birth with the celebertys wikipedia pages
  this.When(/^I browse to Birth Month Day of todays$/, async function () {
    await helpers.loadPage('https://www.imdb.com/feature/bornondate/?ref_=nv_cel_brn');
    await sleep(1000);
  });
  this.Then(/^the first (\d+) names should be saved to a list$/, async function (value5) {
    names = await $("h3.lister-item-header > a");
    name = await names[0].getText();
    console.log(await names[0].getText());

  });
  this.Then(/^if the list contains white space replace that with _$/, function () {
    text = name.replace(" ", "_");
  });
  this.Then(/^add "([^"]*)" before the name$/, async function (wikipediaUrl) {
    wikipedia = await wikipediaUrl.concat(text);
    console.log(wikipedia);
  });
  this.Then(/^browse to that page$/, async function () {
    await helpers.loadPage(wikipedia);
    await sleep(1000);
  });
  this.Then(/^find birthday on that page and check if it is today$/, async function () {
    let today = new Date();
    ourDate = today.getMonth() + 01;
    ourDate += "-";
    ourDate += today.getDate();
    birthday = await $(".bday");
    let str = await birthday.getAttribute("textContent");
    let str2 = str.slice(5, str.length);
    if (today.getMonth() < 9)
      rightDate = str2.slice(1, str2.length);
    //console.log(str + ' ' + ourDate);
    expect(ourDate).to.be.equal(rightDate);
  });

}