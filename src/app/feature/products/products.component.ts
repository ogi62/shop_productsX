import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/categoryService/category.service';
import {
  Product,
  ProductInterface,
} from '../admin/admin-products/models/product';
import { ProductsService } from '../admin/admin-products/services/productsService/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductInterface[] = [];
  categories!: CategoryInterface[];
  category!: string | null;
  filteredProducts!: ProductInterface[];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.getProducts();
    this.getCategories();
    this.getProductsByCategory();
  }

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
        this.filteredProducts = products;
      });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((category) => {
      this.categories = category;
    });
  }

  getProductsByCategory() {
    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      this.filteredProducts = this.category
        ? this.products.filter((p) =>{
          return p.category == this.category
          })
        : this.products;
    });
  }

  ngOnInit(): void {}
}
