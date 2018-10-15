import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(
    productService: ProductService,
    route: ActivatedRoute
  ) {
    productService.getAll().pipe(
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
    ).subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = this.category
        ? this.products.filter(p => p.category === this.category)
        : this.products;
    });

  }
}
