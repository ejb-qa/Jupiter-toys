const { describe, it, after, before } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const HomePage = require("../pageobjects/homePage")
const ContactPage = require("../pageobjects/contactPage")
const openBrowser = require('../utils/driver.utils')


chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "http://jupiter.cloud.planittesting.com"

describe("Test Case 2", function () {
    let homePage
    let contactPage
    const numberOfRuns = 5
    const forename = "John Doe"
    const email = "john@test.com"
    const message = "Test message"

    beforeEach(async function () {
        driver = openBrowser()
        homePage = new HomePage(driver)
        await homePage.enter_url(testURL)
        contactPage = new ContactPage(driver)
    })

    for (let i = 0; i < numberOfRuns; i++) {
        it(`Populate mandatory fields and submit: Test run # ${i + 1} `, async function () {

            //to check that URL is opened
            const driverTitle = await driver.getTitle()
            expect(driverTitle).to.equal("Jupiter Toys", "Unable to open URL")

            //go to Contact page
            await homePage.goToContactPage()
            const currentURL = await driver.getCurrentUrl()
            expect(currentURL).to.equal("https://jupiter.cloud.planittesting.com/#/contact",
                "Unable to go to Contact Page")

            //populate mandatory fields
            await contactPage.inputForename(forename)
            await contactPage.inputEmail(email)
            await contactPage.inputMessage(message)

            //click Submit button
            await contactPage.selectSubmitButton()

            //validate successful submission message
            const successMessage = await contactPage.successMessage()
            expect(successMessage).to.equal(`Thanks ${forename}, we appreciate your feedback.`)

        })
    }


    afterEach(async function () {
        if (driver) {
            await homePage.close_browser()
        }
    })


})










// const { describe, it, after, before } = require('mocha')
// const chai = require('chai')
// const chaiAsPromised = require('chai-as-promised')
// const HomePage = require("../pageobjects/homePage")
// const ContactPage = require("../pageobjects/contactPage")
// const openBrowser = require('../utils/driver.utils')


// chai.use(chaiAsPromised)
// const expect = chai.expect

// const testURL = "http://jupiter.cloud.planittesting.com"

// describe("Test Case 2", function () {
//     let homePage
//     let contactPage


//     before(async function () {
//         driver = openBrowser()
//         homePage = new HomePage(driver)
//         await homePage.enter_url(testURL)
//         contactPage = new ContactPage(driver)
//     })

//     it("Test Case 2", async function () {
//         //to check that URL is opened
//         const driverTitle = await driver.getTitle()
//         expect(driverTitle).to.equal("Jupiter Toys", "Unable to open URL")

//         //go to Contact page
//         await homePage.goToContactPage()
//         const currentURL = await driver.getCurrentUrl()
//         expect(currentURL).to.equal("https://jupiter.cloud.planittesting.com/#/contact",
//             "Unable to go to Contact Page")

//         //populate mandatory fields
//         await contactPage.inputForename("John Doe")
//         await contactPage.inputEmail("john@test.com")
//         await contactPage.inputMessage("Test message")

//         //click Submit button
//         await contactPage.selectSubmitButton()

//         //validate successful submission message
//         await contactPage.successMessage()


//     })

//     after(async function () {
//         if (driver) {
//             await homePage.close_browser()
//         }
//     })
// })