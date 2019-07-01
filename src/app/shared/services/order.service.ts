import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Injectable()
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db
      .object('/orders')
      .valueChanges()
      .pipe(
        map(order => {
          const res = [];
          Object.keys(order).forEach(o => {
            res.push({ ...order[o], key: o });
          });
          return res.sort((a, b) =>
            a.datePlaced > b.datePlaced
              ? -1
              : b.datePlaced > a.datePlaced
              ? 1
              : 0
          );
        })
      );
  }

  getOrdersByUser(userId: string) {
    return this.db
      .object('/orders')
      .valueChanges()
      .pipe(
        map(order => {
          const res = [];
          Object.keys(order).forEach(o => {
            if (order[o].userId === userId) {
              res.push({ ...order[o], key: o });
            }
          });

          return res.sort((a, b) =>
            a.datePlaced > b.datePlaced
              ? -1
              : b.datePlaced > a.datePlaced
              ? 1
              : 0
          );
        })
      );
    // const a = .orderByChild('userId').equalTo(userId);
    // , {
    //   query: {
    //     orderByChild: 'userId',
    //     equalTo: userId
    //   }
    // });
  }

  getOrderByUserAndKey(userId: string, key: string) {
    return this.db
      .object('/orders')
      .valueChanges()
      .pipe(
        map(order => {
          let res = null;
          Object.keys(order).forEach(o => {
            if (order[o].userId === userId && key === o) {
              res = { ...order[o], key: o };
            }
          });
          return res;
        })
      );
  }
}
