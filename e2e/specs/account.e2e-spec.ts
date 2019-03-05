import { BasePage } from '../common/base-page';
import { TestBase } from '../common/test-base';
import { HomePage } from '../page/homePage.po';
import { browser } from 'protractor';
import {AccountPage} from '../page/accountPage.po';
import { Constants } from '../common/constant';

let homePage = new HomePage();
let accountPage = new AccountPage();

const FIRST_NAME = "Sang"
const LAST_NAME = "Mai"
const COMPANY = "MTB"
const EMAIL = "qa" + BasePage.getUniqueId(5) + "@gmail.com";

describe('Account page test', () => {
    beforeAll(async () => {
        await homePage.goToHomePage();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    
    // it('Account Page - Verify Sign in without email and password', async () => {
    //     console.log("Step 1. Click My Account button");
    //     await homePage.clickMyAccountButton();
        
    //     console.log("Step 2. Login without credentials");
    //     await accountPage.login("", "");

    //     console.log("Step 3. Verify that 'Valid Email is required' error message is displayed");
    //     expect(await accountPage.isValidationErrorMessageDisplayed("Valid Email is required")).toBeTruthy();

    //     console.log("Step 3. Verify that 'Please enter a valid password' error message is displayed");
    //     expect(await accountPage.isValidationErrorMessageDisplayed("Please enter a valid password")).toBeTruthy();
    // });

    // it('Account Page - Verify Sign in with invalid email', async () => {
    //     console.log("Step 1. Click My Account button");
    //     await homePage.clickMyAccountButton();
        
    //     console.log("Step 2. Login without credentials");
    //     await accountPage.login(Constants.INVALID_EMAIL, Constants.PASSWORD);

    //     console.log("Step 3. Verify that 'Valid Email is required' error message is displayed");
    //     expect(await accountPage.isValidationErrorMessageDisplayed("Valid Email is required")).toBeTruthy();
    // });
        
    // it('Account Page - Verify Sign in with incorrect email and password', async () => {
    //     console.log("Step 1. Click My Account button");
    //     await homePage.clickMyAccountButton();
        
    //     console.log("Step 2. Login without credentials");
    //     await accountPage.login(Constants.EMAIL, Constants.PASSWORD + "abc");

    //     console.log("Step 3. Verify that 'Valid Email is required' error message is displayed");
    //     expect(await accountPage.isValidationErrorMessageDisplayed("Valid Email is required")).toBeTruthy();

    //     console.log("Step 3. Verify that 'Please enter a valid password' error message is displayed");
    //     expect(await accountPage.isIncorrectCredentialsMessageDisplayed()).toBeTruthy();
    // });

    it('Account Page - Verify Sign in succesfully', async () => {
        console.log("Step 1. Click My Account button");
        await homePage.clickMyAccountButton();
        
        console.log("Step 2. Login with correct credentials");
        await accountPage.login(Constants.EMAIL, Constants.PASSWORD);

        console.log("VP 1. Verify that Account Summary page is displayed");
        expect(await accountPage.isOverviewEmailDisplayed(Constants.EMAIL)).toBeTruthy();

        console.log("Step 3. Logout");
        await accountPage.signOut();
    });

    it('Account Page - Verify Sign up succesfully', async () => {
        console.log("Step 1. Click My Account button");
        await homePage.clickMyAccountButton();
        
        console.log("Step 2. Sign up with correct credentials");
        await accountPage.register(FIRST_NAME, LAST_NAME, EMAIL, COMPANY, Constants.PASSWORD, Constants.PASSWORD, true);

        console.log("Step 3. Verify that Account Summary page is displayed");
        expect(await accountPage.isOverviewEmailDisplayed(EMAIL)).toBeTruthy();
    });
});