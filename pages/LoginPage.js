
import { expect } from "@playwright/test";

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#login-button");
        this.errorMsg = page.locator("h3[data-test='error']");
    }

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(user, pwd) {
        await this.username.fill(user);
        await this.password.fill(pwd);
        await this.loginBtn.click();
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }
}

