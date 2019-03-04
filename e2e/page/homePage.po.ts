import { HomePageUI } from '../ui/homePage.ui';
import { AbtractPage } from './abtractPage.po';

export class HomePage extends AbtractPage {

    async goToHomePage() {
        await this.goToUrl("https://dev.mtbdirect.com.au");
        // await this.waitForElementInvisibility(HomePageUI.LOADING_CURSOR);
    }

    async clickMyAccountButton() {
        await this.waitForElementVisible(HomePageUI.MY_ACCOUNT_BUTTON);
        await this.click(HomePageUI.MY_ACCOUNT_BUTTON);
    }

    constructor() {
        super();
    }
}