const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  let movieName, randomMovie;

  //Scenario: 2 When I have signed in, I would like to add tom my watchlist
  this.Given(/^There are no movies in my watchlist and I have a random film$/, async function () {
    await helpers.loadPage('https://www.randomlists.com/random-movies');
    randomMovie = await driver.findElement(By.css('.rand_medium')).getText();
  });

  this.Given(/^I have signed in to the page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F');
    await driver.findElement(By.linkText("Sign in with IMDb")).click();
    await driver.findElement(By.id('ap_email')).sendKeys(username);
    await driver.findElement(By.id('ap_password')).sendKeys(password);
    await driver.findElement(By.id('signInSubmit')).click();
  });

  this.Then(/^I search IMDb for my random film and save the title$/, async function () {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    searchField.sendKeys(randomMovie);
    searchField.sendKeys(selenium.Key.ENTER);
  });

  this.Then(/^I click on my search result$/, async function () {
    await driver.wait(until.elementLocated(By.css('td.result_text')), 10000);
    await driver.findElement(By.css('td.result_text > a')).click();
  });

  this.Then(/^save that movie title$/, async function () {
    movieName = await driver.findElement(By.css('div.title_wrapper > h1')).getText();
    await driver.wait(until.elementLocated(By.css('div.title_wrapper > h1')));
    let words = movieName.split(' (');
    movieName = words[0];
  });

  this.Then(/^add it to my watchlist$/, async function () {
    await driver.wait(until.elementLocated(By.css('.wl-ribbon')), 10000);
    let button = await driver.findElement(By.css('.wl-ribbon'));
    await button.click();
  });

  this.Then(/^browse to my watchlist page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/user/ur118073436/watchlist?ref_=nv_usr_wl');
  });

  this.Then(/^the same movie title should be present$/, async function () {
    let movieNameResult = await driver.findElement(By.linkText(movieName)).getText();
    expect(movieNameResult,
      'The move is not in the watchlist'
    ).to.includes(movieName);
  });

}