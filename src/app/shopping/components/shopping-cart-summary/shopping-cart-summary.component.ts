import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {
  @Input() cart: ShoppingCart;

  getTotalPrice(cart) {
    if (cart.totalPrice) {
      return cart.totalPrice;
    }
    return cart.items.map(i => i.totalPrice).reduce((a, b) => a + b);
  }
}
