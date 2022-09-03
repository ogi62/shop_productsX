import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, toArray } from 'rxjs';
import { Product } from '../../components/product-form/product-form.component';
import { HttpClient } from '@angular/common/http';

export interface ProductInterface {
  id: number;
  category: string;
  title: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: BehaviorSubject<any> = new BehaviorSubject(null);
  products$: Observable<any> = this.products.asObservable();

  constructor(
    private http: HttpClient
    ) {}

  // create(product: Product) {
  //   return this.db.list('/products').push(product);
  // }

 

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }



}
