
export default class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator('#checkout');
        this.cartItems = page.locator('.inventory_item_name');
    }
}


