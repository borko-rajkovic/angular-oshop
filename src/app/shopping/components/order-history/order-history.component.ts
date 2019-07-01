import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  id;
  order: any = { items: [] };

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    authService.user$
      .switchMap(u => orderService.getOrderByUserAndKey(u.uid, this.id))
      .subscribe(x => (this.order = x));
  }

  ngOnInit(): void {}

  getTotalPrice() {
    return this.order.items.map(i => i.totalPrice).reduce((a, b) => a + b, 0);
  }
}
