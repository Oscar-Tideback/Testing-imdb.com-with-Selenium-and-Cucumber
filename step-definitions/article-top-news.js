let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
module.exports = function () {

  let text;
  let counter = 0;
  let list = [];
  //Test article headlines in Top News
  this.Given(/^that I am on the IMBd Celebrity news link page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/news/celebrity/?ref_=nv_cel_nw');
    await sleep(2000);
  });

  this.When(/^I click on each <headline> that are shown in the top news section$/, async function () {
    text = await driver.findElement(By.css('a.compact-news-item__title')).getText();

    let nr = 3;

    list = await driver.findElement(By.xpath('//*[@id="sidebar"]/div[3]/ul/li[nr]/div/a')).click();

    //*[@id="sidebar"]/div[3]/ul/li[1]/div/a
    // / html / body / div[3] / div / div[2] / div[3] / aside / div[3] / ul / li[1] / div / a


    await sleep(2000);



    //await driver.findElement(By.css('#sidebar > div:nth-child(5) > ul > li:nth-child(3)')).click();

    /*list = await driver.findElement(By.css('#sidebar > div:nth-child(5) > ul > li:nth-child(2)')).getText();
    console.log(list);*/

  });

  this.Then(/^the page should display the articles ingress$/, async function () {
    let text2 = await driver.findElement(By.css('.news-article__content')).getText();
    expect(text, 'The page does not display the ingress of article'
    ).to.include(text2);
  });

}