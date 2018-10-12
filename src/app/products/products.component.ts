import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[];

  constructor(productService: ProductService) {
    productService.getAll().subscribe(x => {
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
    });
  }

}
