// @ts-check
const { test } = require("@playwright/test");
const { validSignUp } = require("../helpers/signup.helper");
const events = require("../data/events.data");
const home = require("../data/home.data");

test.describe("Valida botões dos proxímos eventos do mês", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(home.page.urlBase, {
      waitUntil: "networkidle",
    });
  });

  test("Primeiro evento", async ({ page }) => {
    await validSignUp(page, events.firstEvent.buttonId);
  });

  test("Segundo evento", async ({ page }) => {
    await validSignUp(page, events.secondEvent.buttonId);
  });

  test("Terceiro evento", async ({ page }) => {
    await validSignUp(page, events.thirdEvent.buttonId);
  });

  test("Quarto evento", async ({ page }) => {
    await validSignUp(page, events.fourthEvent.buttonId);
  });
});
