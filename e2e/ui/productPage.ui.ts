export class ProductPageUI {
  static readonly ITEM_NAME = 'xpath=//a[@class="facets-item-cell-grid-title"]/span[@itemprop="name" and text()="%s"]';
  static readonly ITEM_IMAGE = 'xpath=//div[div[a[@class="facets-item-cell-grid-title"]/span[@itemprop="name" and text()="%s"]]]//img';
  static readonly ITEM_PRICE = 'xpath=//div[div[a[@class="facets-item-cell-grid-title"]/span[@itemprop="name" and text()="%s"]]]//span[@itemprop="price"]';

}
