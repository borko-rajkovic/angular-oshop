import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
    Object.keys(itemsMap).forEach(productId => {
      this.items.push(itemsMap[productId]);
    });
  }

  get totalItemsCount() {
    let count = 0;

    Object.keys(this.itemsMap).forEach(item => {
      count += this.itemsMap[item].quantity;
    });
    return count;
  }
}
