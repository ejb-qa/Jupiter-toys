const { By } = require("selenium-webdriver")

module.exports = {
    stuffedFrogButton: By.xpath("//*[@id='product-2']/div/p/a"),
    fluffyBunnyButton: By.xpath("//*[@id='product-4']/div/p/a"),
    valentineBearButton: By.xpath("//*[@id='product-7']/div/p/a"),

    cartCount: By.xpath("//*[@id='nav-cart']/a/span")



}