
const { describe, it, after, before } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const HomePage = require("../pageobjects/homePage")
const ShopPage = require("../pageobjects/shopPage")
const CartPage = require("../pageobjects/cartPage")
const openBrowser = require('../utils/driver.utils')


chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "http://jupiter.cloud.planittesting.com"

describe("Test Case 3", function () {
    let homePage
    let shopPage
    const stuffedFrogToBuy = 2
    const fluffyBunnyToBuy = 5
    const valentineBearToBuy = 3
    const totalCount = stuffedFrogToBuy + fluffyBunnyToBuy + valentineBearToBuy
    const expectedFrogPrice = "$10.99"
    const expectedBunnyPrice = "$9.99"
    const expectedBearPrice = "$14.99"


    before(async function () {
        driver = openBrowser()
        homePage = new HomePage(driver)
        await homePage.enter_url(testURL)
        shopPage = new ShopPage(driver)
        cartPage = new CartPage(driver)
    })

    it("Get subtotal and total price of added items", async function () {
        //to check that URL is opened
        const driverTitle = await driver.getTitle()
        expect(driverTitle).to.equal("Jupiter Toys", "Unable to open URL")

        //go to Shop page
        await homePage.goToShopPage()
        const currentURL = await driver.getCurrentUrl()
        expect(currentURL).to.equal("https://jupiter.cloud.planittesting.com/#/shop",
            "Unable to go to Shop Page")

        //select products
        await driver.navigate().refresh()

        for (let i = 0; i < stuffedFrogToBuy; i++) {
            await shopPage.selectStuffedFrog()
        }
        for (let i = 0; i < fluffyBunnyToBuy; i++) {
            await shopPage.selectFluffyBunny()
        }
        for (let i = 0; i < valentineBearToBuy; i++) {
            await shopPage.selectValentineBear()
        }

        const cartCount = await shopPage.cartCountFloat()
        expect(totalCount).to.equal(cartCount)

        //go to cart page
        await homePage.goToCartPage()
        const currentCartURL = await driver.getCurrentUrl()
        expect(currentCartURL).to.equal("https://jupiter.cloud.planittesting.com/#/cart",
            "Unable to go to Contact Page")


        //********* verify price of each product **********
        //frog
        const frogPriceString = await cartPage.getFrogPriceString()
        expect(expectedFrogPrice).to.equal(frogPriceString)

        //bunny
        const bunnyPriceString = await cartPage.getBunnyPriceString()
        expect(expectedBunnyPrice).to.equal(bunnyPriceString)

        //bear
        const bearPriceString = await cartPage.getBearPriceString()
        expect(expectedBearPrice).to.equal(bearPriceString)



        //********* verify subtotal price of each product ******
        //frog subtotal
        const frogUnitPriceFloat = await cartPage.getFrogPriceFloat()
        const expectedFrogSubtotal = await cartPage.getSubtotalPriceFrog()
        //console.log(expectedFrogSubtotal)

        const frogSubtotal = await cartPage.computeSubtotal(stuffedFrogToBuy, frogUnitPriceFloat)
        //console.log(frogSubtotal)
        expect(expectedFrogSubtotal).to.equal(frogSubtotal)

        //bunny subtotal
        const bunnyUnitPriceFloat = await cartPage.getBunnyPriceFloat()
        const expectedBunnySubtotal = await cartPage.getSubtotalPriceBunny()

        const bunnySubtotal = await cartPage.computeSubtotal(fluffyBunnyToBuy, bunnyUnitPriceFloat)
        expect(expectedBunnySubtotal).to.equal(bunnySubtotal)

        //bear subtotal
        const bearUnitPriceFloat = await cartPage.getBearPriceFloat()
        const expectedBearSubtotal = await cartPage.getSubtotalPriceBear()

        const bearSubtotal = await cartPage.computeSubtotal(valentineBearToBuy, bearUnitPriceFloat)
        expect(expectedBearSubtotal).to.equal(bearSubtotal)


        //verify total (sum of subtotals)
        const total = (frogSubtotal + bunnySubtotal + bearSubtotal)
        const expectedTotalPrice = await cartPage.getTotalPrice()
        expect(expectedTotalPrice).to.equal(total)

    })

    after(async function () {
        if (driver) {
            await homePage.close_browser()
        }
    })
})