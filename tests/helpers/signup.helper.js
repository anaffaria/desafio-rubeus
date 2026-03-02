const { expect } = require("@playwright/test");
const home = require("../data/home.data");
const pageAnalyst = require("../data/pageAnalyst.data");

async function validSignUp(page, buttonId) {
  const btnSignUp = page.locator(`#${buttonId}`);

  await expect(btnSignUp).toBeVisible();
  await expect(btnSignUp).toHaveText(home.page.btnSignupText);

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    btnSignUp.click(),
  ]);

  await expect(newPage).toHaveURL(new RegExp(`${pageAnalyst.page.url}`));
  await expect(newPage).toHaveTitle(pageAnalyst.page.title);
}

module.exports = { validSignUp };
