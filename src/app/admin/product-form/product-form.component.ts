import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  categories = [];

  constructor(categoryService: CategoryService, private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    this.categories$.subscribe(x => {
      this.categories = [];
      Object.keys(x).forEach(key => {
        this.categories.push({key, name: x[key].name });
      });
    });
  }

  save(product) {
    this.productService.create(product);
  }

  ngOnInit() {}
}
