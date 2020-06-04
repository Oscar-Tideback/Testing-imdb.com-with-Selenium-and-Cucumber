let { $, sleep } = require('./funcs');
const { username, password } = require('./credentials.json');

module.exports = function () {

  let input = [];

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
      'Could not find the Edit button'
    );
    await editButton.click();
    await sleep(2000);
  });

  this.Given(/^that I haved chosen to add a credit in the Cast&Crew section and clicked on the continue button$/, async function () {
    //step 4: select categories
    await selectOption('select.choose', 'Add 1 credit');
    await sleep(2000);

    //step 5: select
    let editButton = await $('.btn.primary');
    assert(editButton,
      'Could not find the search button');
    await editButton.click();
    await sleep(2000);
  });

  this.When(/^I add data in "([^"]*)","([^"]*)", "([^"]*)" and click button check these updates$/, async function (input1, input2, input3) {
    // Write code here that turns the phrase above into concrete actions

    input[0] = await $('.a-input-text.a-spacing-none.ice-search-box');
    await input[0].sendKeys(input1);
    await sleep(2000);

    input[1] = await $('.has-fieldbrowser.series');
    await input[1].sendKeys(input2);
    await sleep(2000);

    //$('input.o.1.cast.new.1.edit.char');
    input[2] = await driver.findElement(By.name('o.1.cast.new.1.edit.char'));
    await input[2].sendKeys(input3);
    await sleep(2000);

    let uppdateButton = await $('.btn.primary');
    assert(uppdateButton,
      'Could not find the update button');
    await uppdateButton.click();
    await sleep(2000);

    //findElement(By.name('o.1.cast.new.1.error.name_exists.2.fix'));

    let defaultButton = await driver.findElement(By.xpath("//input[@value='unknown']"));
    await defaultButton.click();
    await sleep(2000);

    let recheckButton = await $('.btn.primary');
    assert(recheckButton,
      'Could not find the recheck button');
    await recheckButton.click();
    await sleep(2000);
  });

  this.When(/^I click the button Submit these updates$/, async function () {

    let submitButton = await driver.findElement(By.name('action__Submit'));
    assert(submitButton,
      'Could not find the submit button');
    await submitButton.click();
    await sleep(3000);
  });


  this.Then(/^the data I have submitted should be sent$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    let trackButton = await $('.trackbutton');
    assert(trackButton,
      'Could not find the track button');
    await trackButton.click();
    await sleep(3000);
    document.querySelectorAll('div.a-section.a-spacing-mini span')

    let submitText = await $('div.a-section.a-spacing-mini.submission-item-display-new span');

    console.log(submitText);

    for (let prop of submitText) {
      let text = prop.getText();
      console.log(text);
    }

    // a - section a - spacing - mini submission - item - display - new
    //console.log(submitText);

    /*for (let prop of submitText) {
      let text = await prop.getText();
      console.log(text);
    }*/
  });

}