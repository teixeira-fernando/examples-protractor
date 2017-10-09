const login = require('../pages/login.po');
const secure = require('../pages/secure.po');

describe('Login Tests', () => {
  it('Sign In', () => {
    login.logIn('tomsmith', 'SuperSecretPassword!');
    expect(secure.loginSucess()).toBeTruthy();
  })
});
