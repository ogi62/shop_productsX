import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductInterface } from './models/product';
import {
  ProductsService,
} from './services/productsService/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products!: ProductInterface[];
  subscription!: Subscription;
  search!: string;
  //pagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: number[] = [5,10,15,20];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.getAllProducts();
  }

  getAllProducts() {
    return this.productsService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  editProduct(product: ProductInterface) {
    this.router.navigate(['/admin/products/', product.id]);
  }

  deleteProduct(id: any) {
    if (!confirm('Are you sure you want to delete this product ?')) {
      return;
    } else {
      this.productsService.deleteProduct(id).subscribe((result) => {
        this.productsService.getProducts().subscribe((data) => {
          this.products = data;
        });
      });
    }
  }

  //pagination
  onTableDataChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllProducts();
  }

  onTableSizeChange(event: any) {
    console.log(event.target.value)
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
