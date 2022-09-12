import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductInterface } from 'src/app/feature/admin/admin-products/models/product';
import { ShoppingCartInterface } from '../../models/shoppingCart';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl: string = 'http://localhost:3000/shopping-cart';
  cartItemcount$ = new Subject<number>();


  constructor(private http: HttpClient) {}


  addToCart(productId: number) {
    return this.http.post<number>(this.apiUrl + `/${productId}`, {});
  }
}
