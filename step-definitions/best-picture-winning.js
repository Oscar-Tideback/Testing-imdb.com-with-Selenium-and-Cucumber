let {
  $,
  sleep
} = require('./funcs');
const {
  username,
  password
} = require('./credentials.json');

let results, winners;
let winnerList = [];

module.exports = function () {

  this.Given(/^that I am on the Best Picture\-winning site$/, async function () {
    //step 1: call the page
    await helpers.loadPage('https://www.imdb.com/search/title/?count=100&groups=oscar_best_picture_winners&sort=year%2Cdesc&ref_=nv_ch_osc');
    await sleep(3000);
  });

  this.Then(/^I should see Best Picture\-winner and their rating\.$/, async function () {
    //step 2: check that we've found the results in a list on the page
    results = await $('.lister.list.detail.sub-list');
    assert(results, 'Could not find any results');
    //step 3: 
    winnerList = await $('.lister-item-header a');

    for (let prop of winnerList) {

      let string = await prop.getText();
      console.log(string);

    }


  });

}