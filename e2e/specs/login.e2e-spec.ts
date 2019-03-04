import { BasePage } from '../common/base-page';
import { TestBase } from '../common/test-base';
import { HomePage } from '../page/homePage.po';
import { browser } from 'protractor';
import {AccountPage} from '../page/accountPage.po';
import { Constants } from '../common/constant';

let homePage = new HomePage();
let accountPage = new AccountPage();
describe('Account page test', () => {
    beforeAll(async () => {
        await homePage.goToHomePage();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    it('Account Page - Verify Sign in succesfully', async () => {
        console.log("Step 1. Click My Account button");
        await homePage.clickMyAccountButton();
        
        console.log("Step 2. Login with correct credentials");
        await accountPage.login(Constants.EMAIL, Constants.PASSWORD);

        console.log("Step 3. Verify that Account Summary page is displayed");
        expect(await accountPage.isOverviewEmailDisplayed).toBeTruthy();

    });
 
});