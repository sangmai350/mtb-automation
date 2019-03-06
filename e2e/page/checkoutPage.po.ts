import { CheckoutPageUI } from '../ui/checkoutPage.ui';
import { AbtractPage } from './abtractPage.po';

export class CheckoutPage extends AbtractPage {

    async goToHomePage() {
        await this.goToUrl("https://dev.mtbdirect.com.au");
        // await this.waitForElementInvisibility(HomePageUI.LOADING_CURSOR);
    }

    async clickCheckoutAsGuestButton() {
        await this.waitForElementVisible(CheckoutPageUI.CHECKOUT_AS_GUEST_BTN);
        await this.click(CheckoutPageUI.CHECKOUT_AS_GUEST_BTN);
    }

    async proceedCheckoutAsGuest(first_name: string, last_name: string, email: string) {
        await this.waitForElementVisible(CheckoutPageUI.GUEST_FIRST_NAME);
        await this.type(CheckoutPageUI.GUEST_FIRST_NAME, first_name);
        await this.type(CheckoutPageUI.GUEST_LAST_NAME, last_name);
        await this.type(CheckoutPageUI.GUEST_EMAIL, email);
        await this.click(CheckoutPageUI.PROCEED_TO_CHECKOUT_BTN);
    }
    
    async isItemNameDisplayed(name: string) {
        await this.waitForElementVisible(CheckoutPageUI.CHECKOUT_ITEM_NAME);
        return  name === await this.getTextElement(CheckoutPageUI.CHECKOUT_ITEM_NAME);
    }

    async isClothingSizeDisplayed(size: string) {
        await this.waitForElementVisible(CheckoutPageUI.CLOTHING_SIZE);
        return  size === await this.getTextElement(CheckoutPageUI.CLOTHING_SIZE);
    }

    async isColourDisplayed(colour: string) {
        await this.waitForElementVisible(CheckoutPageUI.COLOUR);
        return  colour === await this.getTextElement(CheckoutPageUI.COLOUR);
    }

    constructor() {
        super();
    }
}