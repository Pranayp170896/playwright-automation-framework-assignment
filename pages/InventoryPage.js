
export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".inventory_item_name");
        this.addBackpack = page.locator("[data-test='add-to-cart-sauce-labs-backpack']");
        this.addBoltShirt = page.locator("[name='add-to-cart-sauce-labs-bolt-t-shirt']");
        this.cartBadge = page.locator(".shopping_cart_badge");
        this.cartIcon = page.locator(".shopping_cart_link");
    }
}


