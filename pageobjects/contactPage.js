const { By, until, ExpectedConditions } = require("selenium-webdriver")
const BasePage = require("../utils/basepage.utils")
const Locator = require("../pageLocators/contactPageLocators")
const isErrorRemoved = require('../utils/removederror.utils')


class ContactPage extends BasePage {

    async selectSubmitButton() {
        const submitButton = await this.driver.wait(until.elementLocated(Locator.submitButton, 5000))
        await submitButton.click()
    }

    async getForenameError() {
        const forenameError = await this.driver.findElement(Locator.forenameError)
        const forenameErrorText = await forenameError.getText()
        return forenameErrorText
    }

    async getEmailError() {
        const emailError = await this.driver.findElement(Locator.emailError)
        const emailErrorText = await emailError.getText()
        return emailErrorText
    }

    async getMessageError() {
        const messageError = await this.driver.findElement(Locator.messageError)
        const messageErrorText = await messageError.getText()
        return messageErrorText
    }

    async inputForename(forename) {
        //await this.driver.findElement(Locator.forenamePath).sendKeys(forename)
        const enterForenameText = await this.driver.wait(until.elementLocated(Locator.forenamePath, 5000))
        enterForenameText.sendKeys(forename)
    }

    async inputEmail(email) {
        const enterEmailText = await this.driver.wait(until.elementLocated(Locator.emailPath, 5000))
        enterEmailText.sendKeys(email)
    }

    async inputMessage(message) {
        const enterMessageText = await this.driver.wait(until.elementLocated(Locator.messagePath, 5000))
        enterMessageText.sendKeys(message)
    }

    async forenameErrorRemoved() {
        const driver = await this.driver
        const forenameErrorRemoved = isErrorRemoved(driver, Locator.forenameError)
        return forenameErrorRemoved
    }

    async emailErrorRemoved() {
        const driver = await this.driver
        const emailErrorRemoved = isErrorRemoved(driver, Locator.emailError)
        return emailErrorRemoved
    }

    async messageErrorRemoved() {
        const driver = await this.driver
        const messageErrorRemoved = isErrorRemoved(driver, Locator.messageError)
        return messageErrorRemoved
    }

    async successMessage() {
        const successMessage = await this.driver.wait(until.elementLocated(Locator.successMessage, 20000))
        const successMessageText = await successMessage.getText()
        return successMessageText
    }


}

module.exports = ContactPage





//put in utils
// async forenameErrorRemoved() {
//     try {
//         await this.driver.wait(until.elementIsVisible(this.driver.findElement(Locator.forenameError)), 5000)
//         console.log("Element is present, but it shouldn't be.")
//         return false // Element is present
//     } catch (error) {
//         console.log("Forename error is not present.")
//         return true // Element is not present
//     }
// }