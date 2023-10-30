const { describe, it, after, before } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const HomePage = require("../pageobjects/homePage")
const ContactPage = require("../pageobjects/contactPage")
const openBrowser = require('../utils/driver.utils')


chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "http://jupiter.cloud.planittesting.com"

describe("Test Case 1", function () {
    let homePage
    let contactPage


    before(async function () {
        driver = openBrowser()
        homePage = new HomePage(driver)
        await homePage.enter_url(testURL)
        //console.log(testURL)
        contactPage = new ContactPage(driver)
    })

    it("Verify when error messages are displayed/removed in Contact page", async function () {
        //to check that URL is opened
        const driverTitle = await driver.getTitle()
        expect(driverTitle).to.equal("Jupiter Toys", "Unable to open URL")

        //go to Contact page
        await homePage.goToContactPage()
        const currentURL = await driver.getCurrentUrl()
        expect(currentURL).to.equal("https://jupiter.cloud.planittesting.com/#/contact",
            "Unable to go to Contact Page")

        //click Submit button
        //console.log(currentURL)
        await contactPage.selectSubmitButton()

        //verify error messages
        const forenameError = await contactPage.getForenameError()
        expect(forenameError, "Forename error is not displayed.").to.exist

        const emailError = await contactPage.getEmailError()
        expect(emailError, "Email error is not displayed.").to.exist

        const messageError = await contactPage.getMessageError()
        expect(messageError, "Message error is not displayed.").to.exist

        //populate mandatory fields
        await contactPage.inputForename("John Doe")
        await contactPage.inputEmail("john@test.com")
        await contactPage.inputMessage("Test message")

        //validate that errors are gone
        forenameErrorRemoved = await contactPage.forenameErrorRemoved()
        expect(forenameErrorRemoved).to.be.true

        emailErrorRemoved = await contactPage.emailErrorRemoved()
        expect(emailErrorRemoved).to.be.true

        messageErrorRemoved = await contactPage.messageErrorRemoved()
        expect(messageErrorRemoved).to.be.true
    })

    after(async function () {
        if (driver) {   //to check that driver exists before closing
            await homePage.close_browser()
        }
    })
})