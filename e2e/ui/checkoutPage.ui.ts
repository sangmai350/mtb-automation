export class CheckoutPageUI {
  static readonly CHECKOUT_AS_GUEST_BTN = 'xpath=//button[@class="login-register-checkout-as-guest-button-show" and contains(text(),"Checkout as a Guest")]';
  static readonly GUEST_FIRST_NAME = 'css=#guest-firstname';
  static readonly GUEST_LAST_NAME = 'css=#guest-lastname';
  static readonly GUEST_EMAIL = 'css=#guest-email';
  static readonly PROCEED_TO_CHECKOUT_BTN = 'css=.login-register-checkout-as-guest-submit';
  static readonly CHECKOUT_ITEM_NAME = 'css=.transaction-line-views-cell-navigable-product-title';
  static readonly CLOTHING_SIZE = 'xpath=//p[span[text()="Clothing Size: "]]//span[@class="transaction-line-views-selected-option-value"]';
  static readonly COLOUR = 'xpath=//p[span[text()="Colour: "]]//span[@class="transaction-line-views-selected-option-value"]';
  static readonly SHIP_ADDRESS = 'css=#shipaddress-addr1';
  static readonly COUNTRY_SELECTOR = 'css=#shipaddresscountry';
  static readonly COUNTRY_OPTION = 'xpath=//select[@id="shipaddresscountry"]/option[text()="Austria"]';
  static readonly STATE_SELECTOR = 'css=#shipaddress-state';
  static readonly POST_CODE = 'css=#shipaddress-zip';
  static readonly SUBURB = 'css=#shipaddress-city';
  static readonly PHONE_NUMBER = 'css=#shipaddress-phone';
  static readonly DELIVERY_METHOD = 'xpath=//a[contains(@class,"order-wizard-shipmethod-module-option") and contains(.,"%s")]/input';
  static readonly CREDIT_PAYMENT_METHOD_IPT = 'css=#creditcard';
  static readonly CREDIT_CARD_NUMBER = 'css=#ccnumber';
  static readonly CREDIT_CARD_TYPE = 'css=#paymentmethod';
  static readonly EXP_MONTH = 'css=#expmonth';
  static readonly EXP_YEAR = 'css=#expyear';
  static readonly SECURITY_NUMBER = 'css=#ccsecuritycode';
  static readonly SAME_AS_ADDRESS_CBX = 'css=input[name="same-as-address"]';
  static readonly CONTINUE_BTN = 'xpath=//button[@data-action="submit-step" and text()="Continue"]';
  static readonly PLACE_ORDER_BTN = 'xpath=//div/button[@data-action="submit-step" and text()="Place Order"]';
}
