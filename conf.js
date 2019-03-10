'use strict';
exports.config = {
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        specs: 'specs/*.js',
    },
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    allScriptsTimeout: 20000,
    getPageTimeout: 20000,
    restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().window().maximize();
    }
};