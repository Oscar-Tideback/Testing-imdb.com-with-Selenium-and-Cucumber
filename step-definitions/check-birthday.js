let { $, sleep } = require('./funcs');

module.exports = function () {
  let names = [];
  let wikipediaCeleb = [];
  let wikiBday = [];
  let rightDate, ourDate, numberOfCelebMax50;

  //Scenario: Cross-check our date of birth with the celebertys wikipedia pages
  this.When(/^I browse to Birth Month Day of todays$/, async function () {
    await helpers.loadPage('https://www.imdb.com/feature/bornondate/?ref_=nv_cel_brn');
    await sleep(0);
  });

  this.Then(/^the first (\d+) names should be saved to a list$/, async function (value) {
    names = await $("h3.lister-item-header > a");
    await driver.wait(until.elementLocated(By.css('h3.lister-item-header > a')), 10000);
    expect(names,
      'There is no celebrity in the list today'
    ).to.not.be.empty;
    numberOfCelebMax50 = value;
  });

  this.Then(/^if the list contains white space replace that with _$/, async function () {
    names.slice(0, numberOfCelebMax50); //Reduce the list of names, just cleaning the list
    for (let i = 0; i < numberOfCelebMax50; i++) {
      let name = await names[i].getText();
      let str = name.replace(" ", "_");//Finding " " between forename and lastname and replaces it with "_"
      names[i] = str;
    }
  });

  this.Then(/^add "([^"]*)" before the name$/, async function (wikipediaUrl) {
    for (let i = 0; i < numberOfCelebMax50; i++) {
      wikipediaCeleb[i] = await wikipediaUrl.concat(names[i]);//Adding names with "_" to wiki url
    }
  });

  this.Then(/^browse to that page$/, async function () {
    //We will browse page in next step
  });

  this.Then(/^find birthday on that page and check if it is today$/, async function () {
    let today = new Date();//BUG, Fix is. check what date IMDb is on right now
    ourDate = today.getMonth() + 1;
    ourDate += "-";
    ourDate += today.getDate();// Made string with todays date with format 01-13

    for (let i = 0; i < numberOfCelebMax50; i++) {
      await helpers.loadPage(wikipediaCeleb[i]);
      wikiBday[i] = await $(".bday");
      await driver.wait(until.elementLocated(By.id('footer-copyrightico')), 10000);
      if ((wikiBday[i]) !== null) {//Check if wiki is missing birthday
        let str = await wikiBday[i].getAttribute("textContent");
        let str2 = str.slice(5, str.length);
        if (today.getMonth() < 9) //This might be wrong, should it be 10?// Removes a 0 if month is 01-09 so 1-9
          rightDate = str2.slice(1, str2.length);

        expect(ourDate,
          'Our birthday date for https://everipedia.org/wiki/lang_en/' + names[i] +
          ' on todays page might be wrong it could be ' + rightDate
        ).to.be.equal(rightDate);
      }
    }
  });

}