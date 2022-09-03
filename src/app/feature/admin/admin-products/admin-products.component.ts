import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './components/product-form/product-form.component';
import { ProductInterface, ProductsService } from './services/productsService/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$!: any;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      console.log('res',res);
      this.products$ = res;
    })
  }

  editProduct(product: Product) {
    this.router.navigate(['/admin/products/',product.id])
  }

}





