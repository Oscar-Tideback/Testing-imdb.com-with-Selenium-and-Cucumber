let { $, sleep } = require('./funcs');

const { username, password } = require('./credentials.json');

let clickRated, results;
let linkList, winnerList, ratingList = [];
let win, rate;

module.exports = function () {
  //Scenario: Top ratedd picture winners
  this.Given(/^that I am on the Best Picture\-winning site$/, async function () {

    //step 1: call the page
    await helpers.loadPage('https://www.imdb.com/search/title/?count=100&groups=oscar_best_picture_winners&sort=year%2Cdesc&ref_=nv_ch_osc');
    await sleep(2000);
  });

  this.Given(/^I have clicked User Rating$/, async function () {

    //step 2: find the class with all the link,s (Popularity, A-Z, User Rating etc.)
    linkList = await $('.sorting a');
    //step 3: Sort the class to get the "right" link to User Ratings 
    for (let prop of linkList) {
      let string = await prop.getText();
      if (string == 'User Rating') {
        clickRated = await prop;
      }
    }
    //step 4: click on the User Ratings link
    await clickRated.click();
    await sleep(2000);
  });

  this.Then(/^I should see Best Picture\-winner and their rating\.$/, async function () {
    //step 5: check that we've found the results in a list on the page
    results = await $('.lister.list.detail.sub-list');
    assert(results,
      'Could not find any results');

    //step 6: 2 test; 1) ratingList length of 50 ratingnumbers 2) that no ratingnumber is 0,0 with notEqual

    //test 1
    ratingList = await $('.inline-block.ratings-imdb-rating');
    let listLenght = ratingList.length;

    assert.equal(listLenght, 50,
      'missing object on site');

    //test 2
    for (let i = 0; i < winnerList.length; i++) {
      rate = ratingList[i];
      let rateString = await rate.getText();

      assert.notEqual(rateString, '0,0',
        'top winner is not rated');
    }
  });

}