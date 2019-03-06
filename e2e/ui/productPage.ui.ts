export class ProductPageUI {
  static readonly ITEM_NAME = 'xpath=//a[@class="facets-item-cell-grid-title"]/span[@itemprop="name" and text()="%s"]';
  static readonly ITEM_IMAGE = 'xpath=//div[div[a[@class="facets-item-cell-grid-title"]/span[@itemprop="name" and text()="%s"]]]//img';
  static readonly ITEM_PRICE = 'xpath=//div[div[a[@class="facets-item-cell-grid-title"]/span[@itemprop="name" and text()="%s"]]]//span[@itemprop="price"]';
  static readonly ITEM_SIZE = 'xpath=//label[@data-label="label-custcol_matrix_clothing_size" and contains(.,"%s")]'
  static readonly ITEM_COLOUR = 'xpath=//label[@data-label="label-custcol_matrix_colour" and contains(.,"%s")]'
  static readonly ADD_TO_CART = 'css=.cart-add-to-cart-button-button'
  static readonly SECONDARY_CHECKOUT_BTN = 'xpath=//div[@class="header-secondary-wrapper"]//a[@class="header-mini-cart-button-checkout"]'
  static readonly CHECKOUT_ITEM_NAME = 'xpath=//div[@class="header-secondary-wrapper"]//a[@class="header-mini-cart-item-cell-title-navigable"]';
  static readonly CLOTHING_SIZE = 'xpath=//div[@class="header-secondary-wrapper"]//p[span[text()="Clothing Size: "]]//span[@class="transaction-line-views-selected-option-value"]';
  static readonly COLOUR = 'xpath=//div[@class="header-secondary-wrapper"]//p[span[text()="Colour: "]]//span[@class="transaction-line-views-selected-option-value"]';
}
