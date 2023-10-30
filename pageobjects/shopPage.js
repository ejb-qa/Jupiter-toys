const { until } = require("selenium-webdriver")
const BasePage = require("../utils/basepage.utils")
const Locator = require("../pageLocators/shopPageLocators")



class ShopPage extends BasePage {

    async selectStuffedFrog() {
        const stuffedFrog = await this.driver.wait(until.elementLocated(Locator.stuffedFrogButton, 5000))
        await stuffedFrog.click()
    }

    async selectFluffyBunny() {
        const fluffyBunny = await this.driver.wait(until.elementLocated(Locator.fluffyBunnyButton, 5000))
        await fluffyBunny.click()
    }

    async selectValentineBear() {
        const valentineBear = await this.driver.wait(until.elementLocated(Locator.valentineBearButton, 5000))
        await valentineBear.click()
    }





    async cartCountFloat() {
        const cartCount = await this.driver.findElement(Locator.cartCount, 5000)
        const cartCountText = await cartCount.getText()
        const cartCountFloat = parseFloat(cartCountText)
        //console.log(`From Cart Count float method: ${cartCountFloat}`)
        return cartCountFloat
    }

}


module.exports = ShopPage