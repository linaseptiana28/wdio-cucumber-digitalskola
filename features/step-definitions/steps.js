import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";
import CartPage from "../pageobjects/cart.page.js";

Given("user is on Login page", async () => {
    await LoginPage.open();
});

Given("user input {string} as username", async (username) => {
    await LoginPage.inputUsername(username);
});

Given("user input {string} as password", async (password) => {
    await LoginPage.inputPassword(password);
});

When("user click login button", async () => {
    await LoginPage.clickLoginButton();
});

Then("user should be redirected to homepage", async () => {
    await HomePage.validateOnHomePage();
});

Then("user should see error message {string}", async (errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed(errorMessage);
});
