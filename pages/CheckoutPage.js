
class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zip = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
        this.successMessage = page.locator('.complete-header');
    }
}

export default CheckoutPage;
