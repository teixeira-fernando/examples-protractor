const Secure = {
  successMsg: () => element(by.css('div[class="flash success"]')),
  btnLogout: () => element(by.css('a[class="button secondary radius"]')),

  loginSucess: () => Secure.successMsg().isDisplayed().then(displayed => displayed)
};

module.exports = Secure;
