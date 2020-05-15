let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
module.exports = function () {

  let text;
  //Test article headlines in Top News
  this.Given(/^that I am on the IMBd Celebrity news link page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/news/celebrity/?ref_=nv_cel_nw');
    await sleep(0);
  });

  this.When(/^I click on each <headline> that are shown in the top news section$/, async function () {
    text = await driver.findElement(By.css('a.compact-news-item__title')).getText();
    await driver.findElement(By.css('a.compact-news-item__title')).click();
    await sleep(0);
  });

  this.Then(/^the page should display the articles ingress$/, async function () {
    let text2 = await driver.findElement(By.css('h2.news-article__title')).getText();
    expect(text, 'The page does not display the ingress of article'
    ).to.include(text2);
  });

}