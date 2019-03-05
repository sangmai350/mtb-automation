import { BasePage } from '../common/base-page';
import { TestBase } from '../common/test-base';
import { HomePage } from '../page/homePage.po';
import { browser } from 'protractor';
import {ProductPage} from '../page/productPage.po';
import { Constants } from '../common/constant';

let homePage = new HomePage();
let productPage = new ProductPage();

const PRODUCT_NAME = "BikeYoke Socks"

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

});