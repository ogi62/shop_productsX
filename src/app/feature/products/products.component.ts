import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductInterface,
} from '../admin/admin-products/models/product';
import { ProductsService } from '../admin/admin-products/services/productsService/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  category!: string | null;
  products: ProductInterface[] = [];
  filteredProducts!: ProductInterface[];

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.getProducts();
    this.getProductsByCategory();
  }

  

  ngOnInit(): void {}

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
        this.filteredProducts = products;
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
}
