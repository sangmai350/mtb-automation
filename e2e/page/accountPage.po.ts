import { AccountPageUI } from '../ui/accountPage.ui';
import { AbtractPage } from './abtractPage.po';

export class AccountPage extends AbtractPage {

    async login(email: string, password: string) {
        await this.waitForElementVisible(AccountPageUI.LOGIN_EMAIL_IPT);
        await this.type(AccountPageUI.LOGIN_EMAIL_IPT, email);
        await this.type(AccountPageUI.LOGIN_PWD_IPT, password);
        await this.click(AccountPageUI.LOGIN_BTN);
    }

    async register(firstName: string, lastName: string, email: string, 
                company: string, password: string, password2: string, subscribe: boolean) {
        await this.waitForElementVisible(AccountPageUI.REGISTER_FIRST_NAME_IPT);
        await this.type(AccountPageUI.REGISTER_FIRST_NAME_IPT, firstName);
        await this.type(AccountPageUI.REGISTER_LAST_NAME_IPT, lastName);
        await this.type(AccountPageUI.REGISTER_EMAIL_IPT, email);
        await this.type(AccountPageUI.REGISTER_COMPANY_IPT, company);
        await this.type(AccountPageUI.REGISTER_PWD_IPT, password);
        await this.type(AccountPageUI.REGISTER_CONFIRM_PWD_IPT, password2);
        if (subscribe) await this.click(AccountPageUI.REGISTER_EMAIL_SUBSCRIBE_CBX);
        await this.click(AccountPageUI.REGISTER_CONTINUE_BTN);
    }

    async signOut() {
        await this.waitForElementVisible(AccountPageUI.MY_ACCOUNT_BUTTON);
        await this.click(AccountPageUI.MY_ACCOUNT_BUTTON);
        await this.sleep(2);
        await this.waitForElementVisible(AccountPageUI.SIGNOUT_BUTTON);
        await this.click(AccountPageUI.SIGNOUT_BUTTON);
    }

    async isOverviewEmailDisplayed(email: string) {
        await this.waitForElementVisible(AccountPageUI.OVERVIEW_EMAIL);
        return  email === await this.getTextElement(AccountPageUI.OVERVIEW_EMAIL);
    }

    async isIncorrectCredentialsMessageDisplayed() {
        await this.waitForElementVisible(AccountPageUI.INCORRECT_CREDENTIALS_MSG);
        return await this.isElementDisplayed(AccountPageUI.INCORRECT_CREDENTIALS_MSG);
    }



    constructor() {
        super();
    }
}