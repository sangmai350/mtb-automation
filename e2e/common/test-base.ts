import {element,by,ElementFinder,browser} from 'protractor';
import { By } from 'selenium-webdriver';
export class TestBase {

    uniqueValue = function(){
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var hour = dateObj.getUTCHours();
        var min = dateObj.getUTCMinutes();
        var sec = dateObj.getUTCSeconds();
        var dateString = ""+day+month+year+hour+min+sec;
        return dateString;
    };
}
