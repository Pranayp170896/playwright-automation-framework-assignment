import { test, expect } from "@playwright/test";
import fs from "fs";
import LoginPage from "../../pages/LoginPage";

test("Login test-store successful login result in file", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login("standard_user", "secret_sauce");
    await login.assertLoginSuccess();

    
    if (!fs.existsSync("results")) {
        fs.mkdirSync("results");
    }

    const loginData=[{
         status: "success",
         user: "standard_user",
    }]

    
    fs.writeFileSync("results/loginResult.json", JSON.stringify(loginData));

});
