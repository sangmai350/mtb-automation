export class BasePageUI {
  static readonly VALIDATION_ERROR_MSG = 'xpath=//p[@data-validation-error="block" and text() = "%s"]';
  static readonly H2_HEADER = 'xpath=//h2[text()="%s"]';
  static readonly GLOBAL_ERROR_MESSAGE = 'xpath=//div[@class="global-views-message global-views-message-error alert"and contains(.,"%s")]';
}
