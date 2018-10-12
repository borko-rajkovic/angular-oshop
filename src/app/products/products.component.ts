import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products';
import { Category } from '../models/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  category;

  constructor(
    productService: ProductService,
    categoryService: CategoryService,
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

    categoryService.getAll().subscribe(x => {
      this.categories = [];
      Object.keys(x).forEach(key => {
        this.categories.push({
          key,
          name: x[key].name
        });
      });
    });
  }
}
