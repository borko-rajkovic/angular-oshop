import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories: Category[] = [];
  @Input() category;

  constructor(categoryService: CategoryService) {
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

  ngOnInit() {
  }

}
