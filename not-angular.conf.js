exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  resultJsonOutputFile: './reports/results.json',
  baseUrl: 'https://the-internet.herokuapp.com',
  specs: ['./tests/*.tests.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};