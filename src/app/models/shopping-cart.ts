import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  constructor(public items: ShoppingCartItem[]) {}

  get productIds() {
    return Object.keys(this.items);
  }

  get totalItemsCount() {
    let count = 0;

    Object.keys(this.items).forEach(item => {
      count += this.items[item].quantity;
    });
    return count;
  }
}
