let { $, sleep } = require('./funcs');

module.exports = function () {
  let celebertys = [];
  let celeberty = {
    name: '',
    ourAge: '',
    googleAge: '',
    everipediaAge: ''
  };
  let names = [];
  let wikipediaCeleb = [];
  let wikiBday = [];
  let rightDate, ourDate, numberOfCelebMax50;

  //Scenario: Cross-check our date of birth with the celebertys wikipedia pages
  this.When(/^I browse to Birth Month Day of todays$/, async function () {
    //Check Jessica Raine
    //await helpers.loadPage('https://www.imdb.com/search/name/?birth_monthday=05-14&ref_=nv_cel_brn');
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
      //celebertys['name']
      names[i] = await names[i].getText();
      let str = (names[i].replace(' ', '_')).toLowerCase();//Finding " " between forename and lastname and replaces it with "_"
      //str += '.html';
      names[i] = str;
    }
  });

  this.Then(/^add "([^"]*)" before the name$/, async function (wikipediaUrl) {
    for (let i = 0; i < numberOfCelebMax50; i++) {
      wikipediaCeleb[i] = await wikipediaUrl.concat(names[i]);//Adding names with "_" to wiki url
    }
  });

  this.Then(/^browse to that page$/, async function () {
    let i = 0;
    for (let celeb of wikipediaCeleb) {
      await driver.get(celeb);
      //class="Section__SectionContentContainer-jz0tf3-1 hVWYjN"
      //Typography__SentenceFormatted-oif0y8-18 kvqvAg
      //class="Tables__InfoboxHTMLTableTd-sc-1mrzkgn-15 xKtzR wikitable-td"
      await sleep(1000);
      //Typography__SentenceFormatted-oif0y8-18 References__EllipsisSentence-j1ke70-5 SEGMo
      //class="Flex__FlexCustom-sc-1warjtl-0 ArticleComponent__Bottom-musaep-9 cBgqZY"
      await driver.wait(until.elementLocated(By.css('.Typography__SentenceFormatted-oif0y8-18')));
      //let date = await $('.wikitable-td');
      await driver.wait(until.elementLocated(By.css('.ArticleComponent__Bottom-musaep-9')));
      //let date = await driver.wait(until.elementLocated(By.css('.wikitable-td')));
      let date = await $('.wikitable-td');
      celeberty['name'] = names[i];
      celeberty['everipediaAge'] = await date.getText();
      celebertys.push(celeberty);
      console.log(celebertys[i]);
      i++;

      //console.log(await date.getText());
    }
    // let i = 0;
    // await driver.get('https://google.com');
    // for (let name of names) {
    //   searchField = await driver.wait(until.elementLocated(By.css('input.gLFyf')));
    //   await searchField.clear();
    //   await searchField.sendKeys(name);
    //   await searchField.sendKeys(selenium.Key.ENTER);
    //   await driver.wait(until.elementLocated(By.css('input.gLFyf'))).click();
    //   await sleep(250);
    //   let date = await driver.wait(until.elementLocated(By.css('span.LrzXr.kno-fv')));
    //   celeberty['name'] = name;
    //   let text = await date.getText();
    //   celeberty['googleAge'] = text;
    //   celebertys.push(celeberty);
    //   console.log(celebertys[i]);
    //   i++;
    // }


    //We will browse page in next step
  });

  this.Then(/^find birthday on that page and check if it is today$/, async function () {
    let today = new Date();
    ourDate = today.getMonth() + 1;
    ourDate += '-';
    ourDate += today.getDate();

    for (let i = 0; i < numberOfCelebMax50; i++) {
      await helpers.loadPage(wikipediaCeleb[i]);
      await sleep(000);
      let date = await $('.stat.box');
      str = await date[0].getText();
      //expect(str).to.include('Happy Birthday!');

      str = str.replace('Happy Birthday!', '');
      str = str.replace('BIRTHDAY', '');
      str = str.slice(0, 15);
      //console.log(str);

      let char = /[a-zA-Z]+/g;
      let num = /\d+/;
      let day = str.match(num);
      let month = str.match(char);
      let getMonthNumber = {
        January: 1, February: 2, March: 3,
        April: 4, May: 5, June: 6,
        July: 7, August: 8, September: 9,
        October: 10, November: 11, December: 12
      };
      console.log(wikipediaCeleb[i]);
      let famousBirthdays = getMonthNumber[month] + "-" + day;
      console.log(famousBirthdays);
      //await driver.wait(until.elementLocated(By.id('footer-copyrightico')), 10000);
      if ((famousBirthdays) !== null) {//Check if wiki is missing birthday
        expect(ourDate,
          'Our birthday date for https://everipedia.org/wiki/lang_en/' + names[i] +
          ' on todays page might be wrong it could be ' + famousBirthdays
        ).to.be.equal(famousBirthdays);
      }
    }
  });

}