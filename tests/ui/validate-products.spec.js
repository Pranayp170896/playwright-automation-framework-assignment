import { test, expect } from "@playwright/test";
import fs from "fs";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

test("Validate products exist using stored file data", async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    const productsFile = JSON.parse(fs.readFileSync("results/selectedProducts.json"));

    await login.navigate();
    await login.login("standard_user", "secret_sauce");

    const allProducts = await inventory.products.allTextContents();
    for (const product of productsFile) {
        expect(allProducts).toContain(product);
    }
});
