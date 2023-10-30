const { By } = require("selenium-webdriver")

module.exports = {
    frogPrice: By.xpath("//td[normalize-space()='$10.99']"),
    bunnyPrice: By.xpath("//td[normalize-space()='$9.99']"),
    bearPrice: By.xpath("//td[normalize-space()='$14.99']"),


    //frogSubtotal: By.xpath("//td[normalize-space()='$21.98']"),
    frogSubtotal: By.xpath("/html/body/div[2]/div/form/table/tbody/tr[1]/td[4]"),
    bunnySubtotal: By.xpath("/html/body/div[2]/div/form/table/tbody/tr[2]/td[4]"),
    bearSubtotal: By.xpath("/html/body/div[2]/div/form/table/tbody/tr[3]/td[4]"),

    totalPrice: By.xpath("/html/body/div[2]/div/form/table/tfoot/tr[1]/td/strong")



}