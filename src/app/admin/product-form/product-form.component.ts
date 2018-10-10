import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  categories = [];
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
    this.categories$.subscribe(x => {
      this.categories = [];
      Object.keys(x).forEach(key => {
        this.categories.push({ key, name: x[key].name });
      });
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService
        .get(this.id)
        .pipe(take(1))
        .subscribe(p => (this.product = p));
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {}
}
