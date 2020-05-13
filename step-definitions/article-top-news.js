let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');
module.exports = function () {

  this.Given(/^that I am on the IMBd Celebrity news link page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/news/celebrity/?ref_=nv_cel_nw');
    await sleep(1000);
  });

  this.When(/^When I click on each <headline> that are shown in the top news section$/, async function () {
    let button = await $('https://www.imdb.com/news/ni62884442?ref_=nwc_sb_nwc_li')
    button.click()
    await sleep(4000)
  });













}
