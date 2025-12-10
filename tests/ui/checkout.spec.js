import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";

test("Complete checkout", async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.navigate();
    await login.login("standard_user", "secret_sauce");

    await inventory.addBackpack.click();
    await inventory.cartIcon.click();

    await cart.checkoutBtn.click();

    await checkout.firstName.fill("pranay");
    await checkout.lastName.fill("parteke");
    await checkout.zip.fill("12345");
    await checkout.continueBtn.click();
    await checkout.finishBtn.click();

    await expect(checkout.successMessage).toHaveText("Thank you for your order!");
    
});
