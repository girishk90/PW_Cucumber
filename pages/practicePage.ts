import { context } from "@cucumber/cucumber";
import { Locator, Page } from "@playwright/test";

export class practicePage {

    readonly page: Page;
    readonly radioBtns: Locator;
    readonly autoComplete_Txt: Locator;
    readonly suggestionOptions: Locator;
    readonly selectDropdown: Locator;
    readonly checkboxes: Locator;
    readonly openWindowBtn: Locator;
    readonly openTabBtn: Locator;
    readonly alertTxt: Locator;
    readonly alertBtn: Locator;
    readonly confirmBtn: Locator;
    readonly hideText: Locator;
    readonly hideBtn: Locator;
    readonly showBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.radioBtns = page.locator("div#radio-btn-example input");
        this.autoComplete_Txt = page.getByPlaceholder("Type to Select Countries");
        this.suggestionOptions = page.locator("li.ui-menu-item")
        this.selectDropdown = page.locator("dropdown-class-example");
        this.checkboxes = page.locator("div#checkbox-example input");
        this.openWindowBtn = page.locator("button#openwindow");
        this.openTabBtn = page.locator("button#opentab");
        this.alertTxt = page.locator("input#name");
        this.alertBtn = page.locator("input#alertbtn")
        this.confirmBtn = page.locator("input#confirmbtn")
        this.hideText = page.locator("input#displayed-text")
        this.hideBtn = page.locator("input#hide-textbox")
        this.showBtn = page.locator("input#show-textbox")
    }

    async selectRadioOption(radioOption: string) {
        let radioBtnCount = await this.radioBtns.count();
        let optionFound = false;
        for (let i = 0; i < radioBtnCount; i++) {
            if (await this.radioBtns.nth(i).getAttribute("value") === radioOption) {
                await this.radioBtns.nth(i).click();
                optionFound = true;
                break;
            }
        }
        if (!optionFound) {
            console.log(`Radio Option ${radioOption} not found`)
        }


    }

    async selectSuggestText(countryName: string) {
        await this.autoComplete_Txt.fill(countryName)
        let cntrySuggestions = await this.suggestionOptions.count();
        for (let i = 0; i < cntrySuggestions; i++) {
            if ((await this.suggestionOptions.nth(i).textContent())?.trim() === countryName) {
                await this.suggestionOptions.nth(i).click();
                break;
            }
        }
    }

    async selectDataFromDropdown(optionValue: string) {
        await this.selectDropdown.selectOption(optionValue)

    }

    async selectMultipleCheckBox(checkBoxValue: string) {
        let checkboxCount = await this.checkboxes.count();
        for (let i = 0; i < checkboxCount; i++) {
            if (await this.checkboxes.nth(i).getAttribute("value") != checkBoxValue) {
                await this.checkboxes.nth(i).click();
            }
        }
    }

    async openNewWindow() {

        const [newPage] = await Promise.all([

            await this.page.waitForEvent('popup'),
            await this.openWindowBtn.click()
        ])
        return newPage;
    }

    async clickAlert(name: string) {
        this.page.on('dialog', async dialog => {
            let dialog_Message = (dialog.message());
            await dialog.accept();
            return dialog_Message;
        })

        await this.alertTxt.fill(name);
        await this.alertBtn.click();

    }






}