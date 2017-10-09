const LoginPage = {
  inputUsername: () => element(by.id('username')),
  inputPassword: () => element(by.id('password')),
  btnLogin: () => element(by.css('button[class="radius"]')),

  isReady: () => {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(LoginPage.inputUsername()), 30000, 'Input filed username not displayed after 5 seconds!');
  },
  logIn: (user, pass) => {
    browser.get('/login');
    LoginPage.isReady();
    LoginPage.inputUsername().sendKeys(user);
    LoginPage.inputPassword().sendKeys(pass);
    return LoginPage.btnLogin().click();
  }
};

module.exports = LoginPage;
