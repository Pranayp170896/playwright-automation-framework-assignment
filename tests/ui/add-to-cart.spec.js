import { test, expect } from "@playwright/test";
import fs from "fs";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

test("Add products in cart", async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.navigate();
    await login.login("standard_user", "secret_sauce");

    await inventory.addBackpack.click();
    await inventory.addBoltShirt.click();
    await expect(inventory.cartBadge).toHaveText("2");

    const selectedProducts = [
        "Sauce Labs Backpack",
        "Sauce Labs Bolt T-Shirt"
    ];

    fs.writeFileSync("results/selectedProducts.json", JSON.stringify(selectedProducts));
});
