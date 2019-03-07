'use strict';
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  // seleniumAddress: 'http://127.0.0.1:4723/wd/hub',
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  // directConnect: true,
  // seleniumServerJar: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.6.0.jar',
  // capabilities: {
  //   browserName: 'chrome',
  //   chromeOptions: {
  //     args: ['start-maximized', 'incognito', 'disable-extensions', 'ignore-certificate-errors', 'ignore-ssl-errors'],
  //   },
  //   framework: 'jasmine2',
  //   jasmineNodeOpts: {
  //     showColors: true,
  //     defaultTimeoutInterval: 500000,
  //     print: function () {},
  //   },
  // },
  capabilities: {
    'browserstack.user': 'sang63',
    'browserstack.key': 'ubeopqU5WqwRpiuXshD5',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Chrome',
    chromeOptions: {
      args: ['start-maximized', 'incognito', 'disable-extensions', 'ignore-certificate-errors', 'ignore-ssl-errors'],
    },
    'browser_version': '73.0 beta',
    'resolution': '1920x1080',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 500000,
      print: function() {}
    },
  },
  plugins: [{
    package: 'aurelia-protractor-plugin'
  }],
  SELENIUM_PROMISE_MANAGER: false,
  specs: [
    // './e2e/specs/account.e2e-spec.ts',
    './e2e/specs/product.e2e-spec.ts',
  ],
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
    require('ts-node')
      .register({
        compilerOptions: {
          module: 'commonjs'
        },
        disableWarnings: true,
        fast: true
      });
    // browser.ignoreSynchronization = true;
  },
};