/**
 * List of browsers to test against.
 * See https://www.browserstack.com/automate/capabilities
 */
const WINDOWS = {
    name: 'Windows',
    versions: {
        win10: '10',
        win8: '8',
        win7: '7'
    }
};

const CHROME = {
    name: 'Chrome',
    currentVersion: '72.0'
};

const DEFAULT_RESOLUTION = '1920x1080';

exports.browsers = [
    {
        browserName: CHROME.name,
        browser_version: CHROME.currentVersion,
        path: "C:\\dev_tools\\chromedriver_win32",
        os: WINDOWS.name,
        os_version: WINDOWS.versions.win10,
        resolution: DEFAULT_RESOLUTION
    }
];