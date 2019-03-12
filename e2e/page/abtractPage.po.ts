import { $$, browser, element, by, promise, ElementFinder, ElementArrayFinder, ProtractorExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { BaseElement } from '../common/base-element';
import { Constants } from '../common/constant';
import { BasePage } from '../common/base-page';
import { BasePageUI } from '../ui/base-page.ui';

export class AbtractPage extends BasePage {

    async goToUrl(url: string) {
        await browser.driver.manage().window().maximize();
        await browser.driver.navigate().to(url);
    }

    async isValidationErrorMessageDisplayed(msg: string) {
        await this.waitForElementVisible(BasePageUI.VALIDATION_ERROR_MSG, msg);
        return await this.isElementDisplayed(BasePageUI.VALIDATION_ERROR_MSG, msg);
    }

    async isGlobalErrorMessageDisplayed(msg: string) {
        await this.waitForElementVisible(BasePageUI.GLOBAL_ERROR_MESSAGE, msg);
        return await this.isElementDisplayed(BasePageUI.GLOBAL_ERROR_MESSAGE, msg);
    }

    async isHeader2TextDisplayed(msg: string) {
        await this.waitForElementVisible(BasePageUI.H2_HEADER, msg);
        return await this.isElementDisplayed(BasePageUI.H2_HEADER, msg);
    }
}
