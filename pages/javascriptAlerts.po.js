var JavaScriptAlertsPage = function(){
    var JSAlertButton = element(by.buttonText('Click for JS Alert'));
    var JSConfirmButton = element(by.buttonText('Click for JS Confirm'));
    var JSPromptButton = element(by.buttonText('Click for JS Prompt'));
    var ResultLabel = element(by.id('result'));
  
    this.isReady = function() {  
      const EC = protractor.ExpectedConditions;
      return browser.wait(EC.visibilityOf(JSAlertButton), 3000, 'JS Alert Button not visible after 3 seconds!');
    };

    this.loadPage = function() {  
        browser.get('/javascript_alerts');
    };

    this.clickONJSAlert = function() {       
      this.isReady();
      JSAlertButton.click();
    };

    this.clickONJSConfirmButton = function() {   
        this.isReady();
        JSConfirmButton.click();
    };

    this.clickONJSPromptButton = function() {
        this.isReady();
        JSPromptButton.click();
    };

    this.getResultLabelText = function() {
        return ResultLabel.getText();
    };
  };
  
  module.exports = new JavaScriptAlertsPage();
  