let { $, sleep } = require('./funcs');

module.exports = function () {

  const { username, password } = require('./credentials.json');
  let movieName;

  //Scenario: When I have signed in, I would like to add tom my watchlist
  this.When(/^I have signed in to the page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F');
    await driver.findElement(By.linkText("Sign in with IMDb")).click();
    await driver.findElement(By.id('ap_email')).sendKeys(username);
    await driver.findElement(By.id('ap_password')).sendKeys(password);
    await driver.findElement(By.id('signInSubmit')).click();
  });

  this.Then(/^click add to watchlist on the first move on page$/, async function () {
    await driver.wait(until.elementLocated(By.css('.ipc-poster-card .ipc-watchlist-ribbon')), 10000);
    let toClick = await driver.findElement(By.css('.ipc-poster-card .ipc-watchlist-ribbon'));
    await toClick.click();
    await driver.wait(until.elementLocated(By.css('.ipc-poster-card .ipc-watchlist-ribbon[aria-label="remove from watchlist"]')), 10000);
  });

  this.Then(/^save that movie name$/, async function () {
    movieName = await driver.findElement(By.css('.ipc-poster-card__title')).getText();
    await driver.wait(until.elementLocated(By.css('.ipc-poster-card__title')));
  });

  this.Then(/^browse to my watchlist$/, async function () {
    await helpers.loadPage('https://www.imdb.com/user/ur118073436/watchlist?ref_=nv_usr_wl');
  });

  this.Then(/^the same movie should be present$/, async function () {
    let movieNameResult = await driver.findElement(By.linkText(movieName)).getText();
    expect(movieNameResult,
      'The move is not in the watchlist'
    ).to.equal(movieName);
    // expect(await driver.findElement(By.linkText(movieName)),// This is not right
    //   'The move is not in the watchlist'
    // ).to.exist;
  });

}