import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  products;

  constructor(private productService: ProductService) {
    this.products$ = productService.getAll();
    this.products$.subscribe(x => {
      this.products = [];
      Object.keys(x).forEach(key => {
        this.products.push({ key, title: x[key].title, price: x[key].price });
      });
      console.log(this.products);
    });
  }

  ngOnInit() {
  }

}
