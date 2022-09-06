import { Component, Input, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/categoryService/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories!: CategoryInterface[];
  @Input() category!: string | null;


  constructor(
    private categoryService: CategoryService,
  ) {
    this.getCategories();
   }

  ngOnInit(): void {
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((category) => {
      this.categories = category;
    });
  }

}
