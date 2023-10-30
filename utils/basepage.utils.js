class BasePage {

    constructor(driver) {
        this.driver = driver
    }

    async go_to_url(testURL) {
        await this.driver.get(testURL)
    }

    async close_browser() {
        await this.driver.close()
    }
}

module.exports = BasePage