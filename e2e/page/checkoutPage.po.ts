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

    async inputShippingInfo(shipping_address: string, country: string, state: string, post_code: string, 
                            suburb: string, phone_number: string, delivery_method: string) {
        await this.waitForElementVisible(CheckoutPageUI.SHIP_ADDRESS);
        await this.type(CheckoutPageUI.SHIP_ADDRESS, shipping_address);
        await this.selectDropdownByCssText(CheckoutPageUI.COUNTRY_SELECTOR, country);
        await this.selectDropdownByCssText(CheckoutPageUI.STATE_SELECTOR, state);
        // await this.click(CheckoutPageUI.COUNTRY_SELECTOR);
        // await this.click(CheckoutPageUI.COUNTRY_OPTION);
        // await this.type(CheckoutPageUI.STATE_SELECTOR, state);
        await this.type(CheckoutPageUI.POST_CODE, post_code);
        await this.type(CheckoutPageUI.SUBURB, suburb);
        await this.type(CheckoutPageUI.PHONE_NUMBER, phone_number);
        await this.click(CheckoutPageUI.SUBURB);
        await this.waitForElementVisible(CheckoutPageUI.DELIVERY_METHOD, delivery_method);
        await this.click(CheckoutPageUI.DELIVERY_METHOD, delivery_method);
    }

    async useCreditCardToPlaceOrder(card_number: string, card_type: string, month: string, year: string, security_number: string) {
        await this.waitForElementVisible(CheckoutPageUI.CREDIT_PAYMENT_METHOD_IPT);
        await this.click(CheckoutPageUI.CREDIT_PAYMENT_METHOD_IPT);
        await this.type(CheckoutPageUI.CREDIT_CARD_NUMBER, card_number);
        await this.selectDropdownByCssText(CheckoutPageUI.EXP_MONTH, month);
        await this.selectDropdownByCssText(CheckoutPageUI.EXP_YEAR, year);
        await this.type(CheckoutPageUI.SECURITY_NUMBER, security_number);
        await this.waitForElementVisible(CheckoutPageUI.CREDIT_CARD_TYPE);
        await this.selectDropdownByCssText(CheckoutPageUI.CREDIT_CARD_TYPE, card_type);
    }
    
    async useShippingAddressAsBillingAddress() {
        await this.waitForElementVisible(CheckoutPageUI.SAME_AS_ADDRESS_CBX);
        await this.click(CheckoutPageUI.SAME_AS_ADDRESS_CBX);
    }

    async clickContinueCheckoutButton() {
        await this.waitForElementVisible(CheckoutPageUI.CONTINUE_BTN);
        await this.click(CheckoutPageUI.CONTINUE_BTN);
    }

    async clickPlaceOrderButton() {
        await this.waitForElementVisible(CheckoutPageUI.PLACE_ORDER_BTN);
        await this.click(CheckoutPageUI.PLACE_ORDER_BTN);
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