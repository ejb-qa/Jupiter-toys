const { until } = require("selenium-webdriver")
const BasePage = require("../utils/basepage.utils")
const Locator = require("../pageLocators/cartPageLocators")



class CartPage extends BasePage {

    //get unit price of Product and return a string
    async getPriceString(productElement) {
        const unitPrice = await this.driver.wait(until.elementLocated(productElement, 5000))
        const unitPriceText = await unitPrice.getText()
        //console.log(unitPriceText)
        return unitPriceText
    }

    //get price of Product and return a float
    async getPriceFloat(productElement) {
        const unitPrice = await this.driver.wait(until.elementLocated(productElement, 5000))
        const unitPriceText = await unitPrice.getText()
        const unitPriceFloat = parseFloat(unitPriceText.replace('$', ''))
        //console.log(unitPriceFloat)
        return unitPriceFloat
    }

    //price of Frog
    async getFrogPriceString() {
        const frogPriceElement = Locator.frogPrice
        const frogPriceString = cartPage.getPriceString(frogPriceElement)
        return frogPriceString
    }

    async getFrogPriceFloat() {
        const frogPriceElement = Locator.frogPrice
        const frogPriceFloat = cartPage.getPriceFloat(frogPriceElement)
        return frogPriceFloat
    }

    //price of Bunny
    async getBunnyPriceString() {
        const bunnyPriceElement = Locator.bunnyPrice
        const bunnyPriceString = cartPage.getPriceString(bunnyPriceElement)
        return bunnyPriceString
    }

    async getBunnyPriceFloat() {
        const bunnyPriceElement = Locator.bunnyPrice
        const bunnyPriceFloat = cartPage.getPriceFloat(bunnyPriceElement)
        return bunnyPriceFloat
    }

    //price of Bear
    async getBearPriceString() {
        const bearPriceElement = Locator.bearPrice
        const bearPriceString = cartPage.getPriceString(bearPriceElement)
        return bearPriceString
    }

    async getBearPriceFloat() {
        const bearPriceElement = Locator.bearPrice
        const bearPriceFloat = cartPage.getPriceFloat(bearPriceElement)
        return bearPriceFloat
    }



    //Subtotal ****************************************

    //get the subtotal of a product and return a float
    async getSubtotalPriceFloat(element) {
        const subtotal = await this.driver.wait(until.elementLocated(element, 5000))
        const subtotalText = await subtotal.getText()
        const subtotalFloat = parseFloat(subtotalText.replace('$', ''))
        //console.log(`Subtotal price in float: ${subtotalFloat}`)
        return subtotalFloat
    }

    async getSubtotalPriceFrog() {
        const frogSubtotalElement = Locator.frogSubtotal
        const subtotalPriceFrog = cartPage.getSubtotalPriceFloat(frogSubtotalElement)
        return subtotalPriceFrog
    }

    async getSubtotalPriceBunny() {
        const bunnySubtotalElement = Locator.bunnySubtotal
        const subtotalPriceBunny = cartPage.getSubtotalPriceFloat(bunnySubtotalElement)
        return subtotalPriceBunny
    }

    async getSubtotalPriceBear() {
        const bearSubtotalElement = Locator.bearSubtotal
        const subtotalPriceBear = cartPage.getSubtotalPriceFloat(bearSubtotalElement)
        return subtotalPriceBear
    }


    async computeSubtotal(itemQuantity, unitPrice) {
        const productSubtotal = itemQuantity * unitPrice
        return productSubtotal
    }

    async getTotalPrice() {
        const totalPriceElement = await this.driver.wait(until.elementLocated(Locator.totalPrice, 5000))
        const totalPriceText = await totalPriceElement.getText()
        const totalPriceFloat = parseFloat(totalPriceText.replace('Total: ', ''))
        //console.log(`Total price in float: ${totalPriceFloat}`)
        return totalPriceFloat

    }






























}


module.exports = CartPage