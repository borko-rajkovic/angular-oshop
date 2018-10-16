import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap) {
    Object.keys(itemsMap).forEach(productId => {
      const item = itemsMap[productId];
      this.items.push(new ShoppingCartItem(item.product, item.quantity));
    });
  }

  get totalPrice() {
    let sum = 0;

    this.items.forEach(item => {
      sum += item.totalPrice;
    });

    return sum;
  }

  get totalItemsCount() {
    let count = 0;

    Object.keys(this.itemsMap).forEach(item => {
      count += this.itemsMap[item].quantity;
    });
    return count;
  }
}
