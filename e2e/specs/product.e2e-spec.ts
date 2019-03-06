import { BasePage } from '../common/base-page';
import { TestBase } from '../common/test-base';
import { HomePage } from '../page/homePage.po';
import { browser } from 'protractor';
import {ProductPage} from '../page/productPage.po';
import {CheckoutPage} from '../page/checkoutPage.po';
import { Constants } from '../common/constant';

let homePage = new HomePage();
let productPage = new ProductPage();
let checkoutPage = new CheckoutPage();

const PRODUCT_NAME = "BikeYoke Socks"
const PRODUCT_SIZE = "S-M"
const PRODUCT_COLOUR = "Blue - Pink"
const FIRST_NAME = "Sang"
const LAST_NAME = "Mai"
const EMAIL = "qa" + BasePage.getUniqueId(5) + "@gmail.com";

describe('Product page test', () => {
    beforeAll(async () => {
        await homePage.goToHomePage();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    it('Product Page - Verify Search for product succesfully', async () => {
        console.log("Step 1. Search for product");
        await homePage.searchForProduct(PRODUCT_NAME);
    
        console.log("VP 1. Verify that Product name is displayed");
        expect(await productPage.isProductNameDisplayed(PRODUCT_NAME)).toBeTruthy();

        console.log("VP 2. Verify that Product image is displayed");
        expect(await productPage.isProductImageDisplayed(PRODUCT_NAME)).toBeTruthy();

        console.log("VP 3. Verify that Product price is displayed");
        expect(await productPage.isProductPriceDisplayed(PRODUCT_NAME)).toBeTruthy();
    });

    it('Product Page - Verify Add Product to cart successfully', async () => {
        console.log("Step 1. Search for product");
        console.log("Step 2. Click on Product");
        await productPage.clickOnProduct(PRODUCT_NAME);

        console.log("Step 3. Select size");
        await productPage.selectSize(PRODUCT_SIZE);

        console.log("Step 4. Select colour");
        await productPage.selectColour(PRODUCT_COLOUR);

        console.log("Step 5. Click add to cart button");
        await productPage.addToCart();
    
        console.log("VP 1. Verify that Product name is displayed in mini cart");
        expect(await productPage.isProductNameDisplayedInMiniCart(PRODUCT_NAME)).toBeTruthy();

        console.log("VP 2. Verify that Product size is displayed in mini cart");
        expect(await productPage.isProductSizeDisplayedInMiniCart(PRODUCT_SIZE)).toBeTruthy();

        console.log("VP 3. Verify that Product colour is displayed in mini cart");
        expect(await productPage.isProductColourDisplayedInMiniCart(PRODUCT_COLOUR)).toBeTruthy();
    });

    it('Product Page - Verify Add Product to cart successfully', async () => {
        console.log("Step 1. Search for product");
        console.log("Step 2. Click on Product");
        console.log("Step 3. Select size");
        console.log("Step 4. Select colour");
        console.log("Step 5. Click add to cart button");
        console.log("Step 6. Click checkout button");
        await productPage.clickSecondaryCheckout();

        console.log("Step 7. Click checkout as guest button");
        await checkoutPage.clickCheckoutAsGuestButton();

        console.log("Step 8. Proceed checkout as Guest");
        await checkoutPage.proceedCheckoutAsGuest(FIRST_NAME, LAST_NAME, EMAIL);

        console.log("VP 1. Verify that Product name is displayed in checkout page");
        expect(await checkoutPage.isItemNameDisplayed(PRODUCT_NAME)).toBeTruthy();

        console.log("VP 2. Verify that Product size is displayed in heckout page");
        expect(await checkoutPage.isClothingSizeDisplayed(PRODUCT_SIZE)).toBeTruthy();

        console.log("VP 3. Verify that Product colour is displayed in heckout page");
        expect(await checkoutPage.isColourDisplayed(PRODUCT_COLOUR)).toBeTruthy();
    });

});