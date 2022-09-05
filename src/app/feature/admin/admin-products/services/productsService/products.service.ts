import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, toArray } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProductInterface } from '../../models/product';



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

  createProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.apiURL, product, headerOption);
  }

 

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.apiURL);
  }

  editProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.put<ProductInterface>(`${this.apiURL}/${product.id}`, product, headerOption);
  }

  getProduct(id:  number | string ):Observable<ProductInterface>  {
    return this.http.get<ProductInterface>(this.apiURL + '/' + id);
  }

  deleteProduct(id: Number): Observable<ProductInterface> {
    return this.http.delete<ProductInterface>(`${this.apiURL}/${id}`, headerOption);
  }

}
