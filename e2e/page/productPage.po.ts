import { ProductPageUI } from '../ui/productPage.ui';
import { AbtractPage } from './abtractPage.po';

export class ProductPage extends AbtractPage {

    async isProductNameDisplayed(name: string) {
        await this.waitForElementVisible(ProductPageUI.ITEM_NAME, name);
        return await this.isElementDisplayed(ProductPageUI.ITEM_NAME, name);
    }

    async isProductImageDisplayed(name: string) {
        await this.waitForElementVisible(ProductPageUI.ITEM_IMAGE, name);
        return await this.isElementDisplayed(ProductPageUI.ITEM_IMAGE, name);
    }

    async isProductPriceDisplayed(name: string) {
        await this.waitForElementVisible(ProductPageUI.ITEM_PRICE, name);
        return await this.isElementDisplayed(ProductPageUI.ITEM_PRICE, name);
    }

    constructor() {
        super();
    }
}