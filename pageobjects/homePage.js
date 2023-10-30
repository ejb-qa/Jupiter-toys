//Home Page Object

const { until } = require("selenium-webdriver")
const BasePage = require("../utils/basepage.utils")
const Locator = require("../pageLocators/homePageLocators")



class HomePage extends BasePage {

    async enter_url(testURL) {
        await this.go_to_url(testURL)
    }

    async goToContactPage() {
        const contactButton = await this.driver.findElement(Locator.contactButton)
        await contactButton.click()
    }

    async goToShopPage() {
        const shopButton = await this.driver.wait(until.elementLocated(Locator.shopButton, 5000))
        await shopButton.click()
    }

    async goToCartPage() {
        const cartButton = await this.driver.wait(until.elementLocated(Locator.cartButton, 5000))
        await cartButton.click()
    }

}

module.exports = HomePage