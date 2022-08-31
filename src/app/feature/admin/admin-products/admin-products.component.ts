import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './components/product-form/product-form.component';
import { ProductsService } from './services/productsService/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: any;

  constructor(
    private productsService: ProductsService
  ) { 
   this.productsService.getProducts().subscribe((res)=>{
    res[0].forEach((x:Product) => {
      console.log('idemo',x)
    });
    this.products$ = res[0];
   });
  }

  ngOnInit(): void {
  }

}
function product(product: any): any {
  throw new Error('Function not implemented.');
}

