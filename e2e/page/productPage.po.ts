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

    async clickOnProduct(name: string) {
        await this.waitForElementVisible(ProductPageUI.ITEM_NAME, name);
        await this.click(ProductPageUI.ITEM_NAME, name);
    }

    async selectSize(size: string) {
        await this.waitForElementVisible(ProductPageUI.ITEM_SIZE, size);
        await this.click(ProductPageUI.ITEM_SIZE, size);
    }

    async selectColour(name: string) {
        await this.waitForElementVisible(ProductPageUI.ITEM_COLOUR, name);
        await this.click(ProductPageUI.ITEM_COLOUR, name);
    }

    async addToCart() {
        await this.waitForElementVisible(ProductPageUI.ADD_TO_CART);
        await this.click(ProductPageUI.ADD_TO_CART);
    }

    async clickSecondaryCheckout() {
        await this.waitForElementVisible(ProductPageUI.SECONDARY_CHECKOUT_BTN);
        await this.click(ProductPageUI.SECONDARY_CHECKOUT_BTN);
    }
    
    async isProductNameDisplayedInMiniCart(name: string) {
        await this.waitForElementVisible(ProductPageUI.CHECKOUT_ITEM_NAME, name);
        return await this.isElementDisplayed(ProductPageUI.CHECKOUT_ITEM_NAME, name);
    }

    async isProductSizeDisplayedInMiniCart(name: string) {
        await this.waitForElementVisible(ProductPageUI.CLOTHING_SIZE, name);
        return await this.isElementDisplayed(ProductPageUI.CLOTHING_SIZE, name);
    }

    async isProductColourDisplayedInMiniCart(name: string) {
        await this.waitForElementVisible(ProductPageUI.COLOUR, name);
        return await this.isElementDisplayed(ProductPageUI.COLOUR, name);
    }

    constructor() {
        super();
    }
}