const { By } = require("selenium-webdriver")

module.exports = {
    submitButton: By.xpath("//a[normalize-space()='Submit']"),

    forenameError: By.xpath("//span[@id='forename-err']"),
    emailError: By.xpath("//span[@id='email-err']"),
    messageError: By.xpath("//span[@id='message-err']"),

    forenamePath: By.xpath("//input[@id='forename']"),
    emailPath: By.xpath("//input[@id='email']"),
    messagePath: By.xpath("//textarea[@id='message']"),

    successMessage: By.xpath("//div[@class='alert alert-success']")

}

