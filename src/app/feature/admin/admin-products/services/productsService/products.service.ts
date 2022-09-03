import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, toArray } from 'rxjs';
import { Product } from '../../components/product-form/product-form.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';

export interface ProductInterface {
  id: number;
  category: string;
  title: string;
  price: number;
  imageUrl: string;
}

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiURL : string = 'http://localhost:3000/products';
  products: BehaviorSubject<any> = new BehaviorSubject(null);
  products$: Observable<any> = this.products.asObservable();

  constructor(
    private http: HttpClient
    ) {}

  create(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.apiURL, product, headerOption);
  }

 

  getProducts() {
    return this.http.get<ProductInterface[]>(this.apiURL);
  }



}
