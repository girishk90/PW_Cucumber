import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

Before(async function () {

    this.browser = await chromium.launch({
        headless: false
    })
    this.context = await this.browser.newContextcontext();
    this.page = await this.context.newPage();
})

After(async function () {
    await this.context?.close();
    await this.browser?.close();
})