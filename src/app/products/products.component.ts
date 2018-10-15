import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: any;
  subscription: Subscription;

  constructor(
    productService: ProductService,
    route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {
    productService
      .getAll()
      .pipe(
        switchMap(x => {
          this.products = [];
          Object.keys(x).forEach(key => {
            this.products.push({
              key,
              title: x[key].title,
              price: x[key].price,
              category: x[key].category,
              imageUrl: x[key].imageUrl
            });
          });

          return route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.products.filter(p => p.category === this.category)
          : this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {
        this.cart = cart;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
