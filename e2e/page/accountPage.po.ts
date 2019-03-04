import { AccountPageUI } from '../ui/accountPage.ui';
import { AbtractPage } from './abtractPage.po';

export class AccountPage extends AbtractPage {

    async login(email: string, password: string) {
        await this.waitForElementVisible(AccountPageUI.LOGIN_EMAIL_IPT);
        await this.type(AccountPageUI.LOGIN_EMAIL_IPT, email);
        await this.type(AccountPageUI.LOGIN_PWD_IPT, password);
        await this.click(AccountPageUI.LOGIN_BTN);
    }

    async isOverviewEmailDisplayed(email: string) {
        await this.waitForElementVisible(AccountPageUI.LOGIN_EMAIL_IPT);
        return  email === await this.getTextElement(AccountPageUI.OVERVIEW_IMAGE);
    }

    constructor() {
        super();
    }
}