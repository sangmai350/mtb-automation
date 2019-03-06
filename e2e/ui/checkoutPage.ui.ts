export class CheckoutPageUI {
  static readonly CHECKOUT_AS_GUEST_BTN = 'xpath=//button[@class="login-register-checkout-as-guest-button-show" and contains(text(),"Checkout as a Guest")]';
  static readonly GUEST_FIRST_NAME = 'css=#guest-firstname';
  static readonly GUEST_LAST_NAME = 'css=#guest-lastname';
  static readonly GUEST_EMAIL = 'css=#guest-email';
  static readonly PROCEED_TO_CHECKOUT_BTN = 'css=.login-register-checkout-as-guest-submit';
  static readonly CHECKOUT_ITEM_NAME = 'css=.transaction-line-views-cell-navigable-product-title';
  static readonly CLOTHING_SIZE = 'xpath=//p[span[text()="Clothing Size: "]]//span[@class="transaction-line-views-selected-option-value"]';
  static readonly COLOUR = 'xpath=//p[span[text()="Colour: "]]//span[@class="transaction-line-views-selected-option-value"]';
}
