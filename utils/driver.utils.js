const webdriver = require("selenium-webdriver")

function openBrowser() {
    return new webdriver.Builder().forBrowser("chrome").build()
}


module.exports = openBrowser