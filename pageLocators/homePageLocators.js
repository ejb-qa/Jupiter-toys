
const { By } = require("selenium-webdriver")

module.exports = {
    contactButton: By.xpath("//a[normalize-space()='Contact']"),
    shopButton: By.xpath("//a[normalize-space()='Shop']"),
    cartButton: By.xpath("//*[@id='nav-cart']/a")

}



