var jsAlertsPage = require('../pages/javascriptAlerts.po');

describe('JSAlerts tests', function() {

    var alertDialog;
    var JSAlertsPage = new jsAlertsPage();
    //beforeEach, beforeAll, afterEach, afterAll

    beforeAll(function () {
        JSAlertsPage.loadPage();
    });

   /*afterEach(function() {
        alertDialog.accept();
    });*/

  it('Basic JS Alert', function() {
    JSAlertsPage.clickONJSAlert();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS Alert");
    alertDialog.accept();
    expect(JSAlertsPage.getResultLabelText()).toBe('You successfuly clicked an alert');
  });

  it('JS Confirm Alert tests - OK', function() {
    JSAlertsPage.clickONJSConfirmButton();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS Confirm");
    alertDialog.accept();
    expect(JSAlertsPage.getResultLabelText()).toBe('You clicked: Ok');
  });

  it('JS Confirm Alert tests - Dismiss', function() {
    JSAlertsPage.clickONJSConfirmButton();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS Confirm");
    alertDialog.dismiss();
    expect(JSAlertsPage.getResultLabelText()).toBe('You clicked: Cancel');
  });

  it('JS Prompt Alert tests', function() {
    JSAlertsPage.clickONJSPromptButton();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS prompt");
    alertDialog.sendKeys("Testing");
    alertDialog.accept();
    expect(JSAlertsPage.getResultLabelText()).toBe('You entered: Testing');
  });

  it('JS Prompt Alert tests - Dismiss', function() {
    JSAlertsPage.clickONJSPromptButton();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS prompt");
    alertDialog.dismiss();
    expect(JSAlertsPage.getResultLabelText()).toBe('You entered: null');
  });


});
