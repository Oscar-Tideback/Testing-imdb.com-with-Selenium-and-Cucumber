let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');



module.exports = function () {

  this.Given(/^that I am on the Suits page$/, async function () {
    //step 1: log in as a user
    await helpers.loadPage('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F');
    await driver.findElement(By.linkText("Sign in with IMDb")).click();
    await driver.findElement(By.id('ap_email')).sendKeys(username);
    await driver.findElement(By.id('ap_password')).sendKeys(password);
    await driver.findElement(By.id('signInSubmit')).click();
    //step 2: go to the Suits page
    await helpers.loadPage('https://www.imdb.com/title/tt1632701/?ref_=nv_sr_srsg_0');
    await sleep(2000);
  });

  this.Given(/^that I have clicked the Edit button$/, async function () {
    //step 3: click the edit button on the Suits page
    let editButton = await $('.btn.primary.large');
    assert(editButton,
      'Could not find the search button'
    );
    await editButton.click();
    await sleep(2000);

  });

  this.Given(/^that I haved chosen wanted Cast in Cast&Crew and clicked on the continue button$/, async function () {

    //step 4: select categories
    await selectOption('select.choose', 'Add 1 credit');
    await sleep(2000);

    //step 5: select
    let editButton = await $('.btn.primary');
    //assert(searchButton, 'Could not find the search button');
    await editButton.click();
    await sleep(2000);
  });

  this.When(/^I add data in "([^"]*)","([^"]*)", "([^"]*)" and click button check these updates$/, async function (input1, input2, input3) {
    // Write code here that turns the phrase above into concrete actions
    let input = await $('.a-input-text.a-spacing-none.ice-search-box');
    await input.sendKeys(input1);
    await sleep(2000);

    input = await $('.has-fieldbrowser.series');
    await input.sendKeys(input2);
    await sleep(2000);

    //$('input.o.1.cast.new.1.edit.char');
    input = await driver.findElement(By.name('o.1.cast.new.1.edit.char'));
    await input.sendKeys(input3);
    await sleep(2000);




  });

  /*
    this.When(/^I click the button Submit these updates$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });
  
  
    this.Then(/^the data I have submitted in Gabriel Macht, Episode Errors and Omissions \(\#(\d+)\.(\d+)\), Harvey Specter should be sent$/, function (arg1, arg2, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });
  */
}