let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
module.exports = function () {

  let text;

  this.Given(/^that I am on the IMBd Celebrity news link page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/news/celebrity/?ref_=nv_cel_nw');
    await sleep(1000);
  });

  this.When(/^I click on each <headline> that are shown in the top news section$/, async function () {
    //let button = await $('a.compact-news-item__title');
    text = await driver.findElement(By.css('a.compact-news-item__title')).getText();
    //await button.click();
    await driver.findElement(By.css('a.compact-news-item__title')).click();
    await sleep(4000);
  });

  this.Then(/^the page should display the articles ingress$/, async function () {
    let text2 = await driver.findElement(By.css('h2.news-article__title')).getText();
    console.log(text2);
    expect(text).to.include(text2);

  });









}
















