import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/shared/models/category';
import {  CategoryService } from 'src/app/shared/services/categoryService/category.service';
import { ProductInterface } from '../admin/admin-products/models/product';
import { ProductsService } from '../admin/admin-products/services/productsService/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<ProductInterface[]>;
  categories$: Observable<CategoryInterface[]>;

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService
    ) {
    this.products$ = productService.getProducts();
    this.categories$ = categoryService.getCategories();
    
   }

  ngOnInit(): void {
  }

}
