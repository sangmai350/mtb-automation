import { BasePage } from '../common/base-page';
import { HomePage } from '../page/homePage.po';
import { browser } from 'protractor';
import { ProductPage } from '../page/productPage.po';
import { CheckoutPage } from '../page/checkoutPage.po';

const homePage = new HomePage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();

const PRODUCT_NAME = 'BikeYoke Socks';
const PRODUCT_SIZE = 'S-M';
const PRODUCT_COLOUR = 'Blue - Pink';
const FIRST_NAME = 'Sang';
const LAST_NAME = 'Mai';
const EMAIL = 'qa' + BasePage.getUniqueId(5) + '@gmail.com';
const SHIPPING_ADDRESS = '234 Main Street';
const COUNTRY = 'Australia';
const STATE = ' New South Wales ';
const POST_CODE = '3026';
const SUBURD = 'Derrimut';
const PHONE_NUMBER = '0412 123 456';
const DELIVERY_METHOD = 'Australia Post Economy/Envelope Service - NO TRACKING';
const CARD_NUMBER = '4444333322221111';
const CARD_TYPE = 'Visa';
const MONTH = '5';
const YEAR = '2022';
const SECURITY_NUMBER = '111';

describe('Product page test', () => {
    beforeAll(async () => {
        await homePage.goToHomePage();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
    });

    it('Product Page - Verify Search for product succesfully', async () => {
        console.log('Step 1. Search for product');
        await homePage.searchForProduct(PRODUCT_NAME);

        console.log('VP 1. Verify that Product name is displayed');
        expect(await productPage.isProductNameDisplayed(PRODUCT_NAME)).toBeTruthy();

        console.log('VP 2. Verify that Product image is displayed');
        expect(await productPage.isProductImageDisplayed(PRODUCT_NAME)).toBeTruthy();

        console.log('VP 3. Verify that Product price is displayed');
        expect(await productPage.isProductPriceDisplayed(PRODUCT_NAME)).toBeTruthy();
    });

    it('Product Page - Verify Add Product to cart successfully', async () => {
        console.log('Step 1. Search for product');
        console.log('Step 2. Click on Product');
        await productPage.clickOnProduct(PRODUCT_NAME);

        console.log('Step 3. Select size');
        await productPage.selectSize(PRODUCT_SIZE);

        console.log('Step 4. Select colour');
        await productPage.selectColour(PRODUCT_COLOUR);

        console.log('Step 5. Click add to cart button');
        await productPage.addToCart();

        console.log('VP 1. Verify that Product name is displayed in mini cart');
        expect(await productPage.isProductNameDisplayedInMiniCart(PRODUCT_NAME)).toBeTruthy();

        console.log('VP 2. Verify that Product size is displayed in mini cart');
        expect(await productPage.isProductSizeDisplayedInMiniCart(PRODUCT_SIZE)).toBeTruthy();

        console.log('VP 3. Verify that Product colour is displayed in mini cart');
        expect(await productPage.isProductColourDisplayedInMiniCart(PRODUCT_COLOUR)).toBeTruthy();
    });

    it('Product Page - Verify Add Product to cart successfully', async () => {
        console.log('Step 1. Search for product');
        console.log('Step 2. Click on Product');
        console.log('Step 3. Select size');
        console.log('Step 4. Select colour');
        console.log('Step 5. Click add to cart button');
        console.log('Step 6. Click checkout button');
        await productPage.clickSecondaryCheckout();

        console.log('Step 7. Click checkout as guest button');
        await checkoutPage.clickCheckoutAsGuestButton();

        console.log('Step 8. Proceed checkout as Guest');
        await checkoutPage.proceedCheckoutAsGuest(FIRST_NAME, LAST_NAME, EMAIL);

        console.log('VP 1. Verify that Product name is displayed in checkout page');
        expect(await checkoutPage.isItemNameDisplayed(PRODUCT_NAME)).toBeTruthy();

        console.log('VP 2. Verify that Product size is displayed in heckout page');
        expect(await checkoutPage.isClothingSizeDisplayed(PRODUCT_SIZE)).toBeTruthy();

        console.log('VP 3. Verify that Product colour is displayed in heckout page');
        expect(await checkoutPage.isColourDisplayed(PRODUCT_COLOUR)).toBeTruthy();
    });

    it('Product Page - Verify Place Order with Visa card successfully', async () => {
        console.log('Step 1. Search for product');
        console.log('Step 2. Click on Product');
        console.log('Step 3. Select size');
        console.log('Step 4. Select colour');
        console.log('Step 5. Click add to cart button');
        console.log('Step 6. Click checkout button');
        console.log('Step 7. Click checkout as guest button');
        console.log('Step 8. Proceed checkout as Guest');
        console.log('Step 9. Input Shipping info');
        await checkoutPage.inputShippingInfo(SHIPPING_ADDRESS, COUNTRY, STATE, POST_CODE, SUBURD, PHONE_NUMBER, DELIVERY_METHOD);

        console.log('Step 10. Use Credit card as payment method');
        await checkoutPage.useCreditCardToPlaceOrder(CARD_NUMBER, CARD_TYPE, MONTH, YEAR, SECURITY_NUMBER);

        console.log('Step 11. Use Shipping address as Billing address');
        await checkoutPage.useShippingAddressAsBillingAddress();

        console.log('Step 12. Click Continue button');
        await checkoutPage.clickContinueCheckoutButton();

        console.log('Step 13. Click Place Order button');
        await checkoutPage.clickPlaceOrderButton();

        console.log('VP 1. Verify that Place Order is not success');
        expect(await checkoutPage.isHeader2TextDisplayed('Thank you for shopping with us!'));
    });

});
