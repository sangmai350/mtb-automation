import { $$, browser, element, by, promise, ElementFinder, ElementArrayFinder, ProtractorExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { BaseElement } from '../common/base-element';
import { Constants } from '../common/constant';
import { BasePage } from '../common/base-page';

export class AbtractPage extends BasePage {

    async goToUrl(url: string) {
        await browser.driver.navigate().to(url);
    }
}