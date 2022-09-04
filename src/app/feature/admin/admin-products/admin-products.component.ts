import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from './components/product-form/product-form.component';
import {
  ProductInterface,
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

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.subscription = this.productsService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  ngOnInit(): void {

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
