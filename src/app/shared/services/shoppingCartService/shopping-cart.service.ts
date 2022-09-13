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
  private apiUrl: string = 'http://localhost:3000/shopping-cart/';
  cartItemcount$ = new Subject<number>();


  constructor(private http: HttpClient) {}

  private createCart() {
    const shoppingCart : ShoppingCartInterface = {
      dateCreated: new Date().getTime(),
      id: Math.floor((Math.random() * 1000000) + 123456 ),
      products: []
    }

    return this.http.post<ShoppingCartInterface>(
      this.apiUrl,
      shoppingCart,
      headerOption
      )
  }

  private getCart(cartId: string | null) {
    console.log(cartId,'ovo smo ubacili');
    console.log(`${this.apiUrl}${cartId}`,'a ovo je link ');
    return this.http.get<ShoppingCartInterface>(`${this.apiUrl}${cartId}`)
  }

  getOrCreateCart() {
    let cartId = localStorage.getItem('cartId');
    console.log(cartId);
    if(!cartId) {
       this.createCart().subscribe((res)=> {
        localStorage.setItem('cartId',String(res.id));
        return this.getCart(String(res.id));
      })
    }
   return this.getCart(cartId);

  }


  addToCart(product: ProductInterface) {
    // return this.http.post<number>(this.apiUrl + `/${productId}`, {});
    let cartId;
    let cart;
    let products;
    this.getOrCreateCart().subscribe((res) => {
      console.log(res);
      cart= res;
      cartId = res.id;
      products = res.products;
      console.log(products);
    });
  }
}
