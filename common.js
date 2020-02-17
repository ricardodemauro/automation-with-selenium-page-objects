const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder } = require('selenium-webdriver');

exports.asyncForEach = async function (arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        await cb(arr[i], i, arr);
    }
};

exports.getDriver = async (testCase = 'generic') => {
    const chromeDriverPath = "C:\\dev_tools\\chromedriver_win32\\chromedriver.exe";
    const serviceBuilder = new ServiceBuilder(chromeDriverPath);

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(serviceBuilder)
        .build();

    console.log('build driver');

    return driver;
};