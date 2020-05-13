let { $, sleep } = require('./funcs');

module.exports = function () {
  let names = [];
  let wikipediaCeleb = [];
  let wikiBday = [];
  let name, rightDate, ourDate, numberOfCeleb;

  //Scenario: Cross-check our date of birth with the celebertys wikipedia pages
  this.When(/^I browse to Birth Month Day of todays$/, async function () {
    await helpers.loadPage('https://www.imdb.com/feature/bornondate/?ref_=nv_cel_brn');
    await sleep(1000);
  });
  this.Then(/^the first (\d+) names should be saved to a list$/, async function (value) {
    names = await $("h3.lister-item-header > a");
    numberOfCeleb = value;
  });
  this.Then(/^if the list contains white space replace that with _$/, async function () {
    for (let i = 0; i < numberOfCeleb; i++) {
      name = await names[i].getText();
      let str = name.replace(" ", "_");
      names[i] = str;
    }
  });
  this.Then(/^add "([^"]*)" before the name$/, async function (wikipediaUrl) {
    for (let i = 0; i < numberOfCeleb; i++) {
      wikipediaCeleb[i] = await wikipediaUrl.concat(names[i]);
    }
  });
  this.Then(/^browse to that page$/, async function () {
    //We will browse page in next step
  });
  this.Then(/^find birthday on that page and check if it is today$/, async function () {
    let today = new Date();
    ourDate = today.getMonth() + 1;
    ourDate += "-";
    ourDate += today.getDate();
    for (let i = 0; i < numberOfCeleb; i++) {
      await helpers.loadPage(wikipediaCeleb[i]);
      wikiBday[i] = await $(".bday");
      await sleep(1000);
      let str = await wikiBday[i].getAttribute("textContent");
      let str2 = str.slice(5, str.length);
      if (today.getMonth() < 9)//This might be wrong, should it be 10?
        rightDate = str2.slice(1, str2.length);
      expect(ourDate,
        'Our birthday date for ' + names[i] +
        ' on todays page is wrong it should be ' + rightDate
      ).to.be.equal(rightDate);
    }
  });

}