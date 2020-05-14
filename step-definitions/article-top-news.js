let {
  $,
  sleep
} = require('./funcs');
const {
  username,
  password
} = require('./credentials.json');
module.exports = function () {

  let text;
  //No senario description
  this.Given(/^that I am on the IMBd Celebrity news link page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/news/celebrity/?ref_=nv_cel_nw');
    await sleep(1000); //Not to be pressent live or should be set to 0
  });

  this.When(/^I click on each <headline> that are shown in the top news section$/, async function () {
    //let button = await $('a.compact-news-item__title');//Not to be pressent live
    text = await driver.findElement(By.css('a.compact-news-item__title')).getText();
    //await button.click();//Not to be pressent live
    await driver.findElement(By.css('a.compact-news-item__title')).click();
    await sleep(4000); //Not to be pressent live or should be set to 0
  });

  this.Then(/^the page should display the articles ingress$/, async function () {
    let text2 = await driver.findElement(By.css('h2.news-article__title')).getText();
    console.log(text2); //Not to be pressent live
    expect(text).to.include(text2); //No error message

  }); //An extra return not needed and a gazillion return found after









}