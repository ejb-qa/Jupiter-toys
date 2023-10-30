const webdriver = require("selenium-webdriver")
const { Builder, until } = require("selenium-webdriver")

async function isErrorRemoved(driver, locator) {
    try {
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), 5000)
        //console.log("Element is present, but it shouldn't be.")
        return false // Element is present
    } catch (error) {
        //console.log("Error message is not present.")
        return true // Element is not present
    }
}


module.exports = isErrorRemoved

