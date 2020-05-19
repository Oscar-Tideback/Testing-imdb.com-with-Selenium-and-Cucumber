const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;
  let movieName;

  //Scenario: When I have signed in I would lik to add rating on objects
  this.Given(/^that I have signed in to the page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F');
    await driver.findElement(By.linkText("Sign in with IMDb")).click();
    await driver.findElement(By.id('ap_email')).sendKeys(username);
    await driver.findElement(By.id('ap_password')).sendKeys(password);
    await driver.findElement(By.id('signInSubmit')).click();
    await sleep(sleepTime)
  });

  this.Then(/^click the first move in "([^"]*)"$/, async function (headingMovies2Watch) {
    movieName = await driver.findElement(By.css('.ipc-poster-card__title')).getText();
    await driver.wait(until.elementLocated(By.css('.ipc-poster-card__title')), 10000);
    await driver.wait(until.elementLocated(By.css('.ipc-poster-card')), 10000);
    let toClick = await driver.findElement(By.css('.ipc-poster-card'));
    expect(toClick,
      'Movie was not found'
    ).to.not.be.empty;
    await toClick.click();
    await sleep(sleepTime)
  });

  this.Then(/^get name of movie$/, async function () {
    // Done in step before
    await sleep(sleepTime)
  });

  this.Then(/^click (\d+) rating for that movie$/, async function (rating7) {
    await driver.findElement(By.css('.star-rating-button')).click();
    await driver.findElement(By.css('.star-rating-stars a[title="Click to rate: ' + rating7 + '"]')).click();
    await driver.wait(until.elementLocated(By.css('.star-rating-value')), 10000);
    await sleep(sleepTime)
  });

  this.Then(/^then the rating should be added to my rating page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/user/ur118073436/ratings?ref_=nv_usr_rt_4');
    await sleep(sleepTime)
  });

  this.Then(/^check name of first movie in list$/, async function () {
    let name = await driver.findElement(By.css('h3.lister-item-header > a')).getText();
    await driver.wait(until.elementLocated(By.id('ratings-container')), 10000);
    expect(name,
      'The movie is not found on rating page'
    ).to.equal(movieName);
    await sleep(sleepTime)
  });

  this.Then(/^that move should have (\d+) as a rating$/, async function (rating7) {
    let rating = await driver.findElement(By.css('.ipl-rating-star__rating')).getText();
    await driver.wait(until.elementLocated(By.id('ratings-container')), 10000);
    expect(rating,
      'The rating of the movie is not right'
    ).to.equal(rating7);
    await sleep(sleepTime)
  });

}