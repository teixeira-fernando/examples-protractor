const JSAlertsPage = require('../pages/javascriptAlerts.po');

describe('JSAlerts tests', function() {

    var alertDialog;
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
    console.log("Texto: "+JSAlertsPage.getResultLabelText());
    expect(JSAlertsPage.getResultLabelText()).to.eventually.equal('You successfuly clicked an alert');
  });

  it('JS Confirm Alert tests', function() {
    JSAlertsPage.clickONJSConfirmButton();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS Confirm");
    alertDialog.accept();
  });

  it('JS Prompt Alert tests', function() {
    JSAlertsPage.clickONJSPromptButton();
    alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("I am a JS prompt");
    alertDialog.accept();
  });


});
