export class AccountPageUI {
  static readonly LOGIN_EMAIL_IPT = 'css=#login-email';
  static readonly LOGIN_PWD_IPT = 'css=#login-password';
  static readonly LOGIN_BTN = 'css=button[data-action="login-button"]';
  static readonly OVERVIEW_EMAIL = 'css=.overview-profile-email';
  static readonly INCORRECT_CREDENTIALS_MSG = 'xpath=//div[@class="global-views-message global-views-message-error alert" and contains(.,"Incorrect email or password")]'
  static readonly REGISTER_FIRST_NAME_IPT = 'css=#register-firstname';
  static readonly REGISTER_LAST_NAME_IPT = 'css=#register-lastname';
  static readonly REGISTER_EMAIL_IPT = 'css=#register-email';
  static readonly REGISTER_COMPANY_IPT = 'css=#register-company';
  static readonly REGISTER_PWD_IPT = 'css=#register-password';
  static readonly REGISTER_CONFIRM_PWD_IPT = 'css=#register-password2';
  static readonly REGISTER_EMAIL_SUBSCRIBE_CBX = 'css=#register-emailsubscribe';
  static readonly REGISTER_CONTINUE_BTN= 'css=.login-register-register-form-submit';
  static readonly MY_ACCOUNT_BUTTON = 'css=.header-profile-welcome-link';
  static readonly SIGNOUT_BUTTON = 'css=.header-menu-myaccount-signout-link';
}
