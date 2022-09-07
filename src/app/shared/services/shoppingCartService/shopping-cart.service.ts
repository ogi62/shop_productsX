import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCartInterface } from '../../models/shoppingCart';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl: string = 'http://localhost:3000/shopping-cart';

  constructor(private http: HttpClient) {}

  private create() {
    const shoppingCartItem: ShoppingCartInterface = {
      dateCreated: new Date().getTime(),
      id: Math.floor(Math.random() * 10000000),
    };

    return this.http.post<ShoppingCartInterface>(
      this.apiUrl,
      shoppingCartItem,
      headerOption
    );
  }

  private getCart(cartId: number) {
    console.log("uspesno");
    return this.http.get(`${this.apiUrl}/${cartId}`)
  }

  async getOrCreateCart() {
    let cartId = localStorage.getItem('cartId');
    if(!cartId) {
      console.log('if grana');
      this.create().subscribe((res)=> {
        localStorage.setItem('cartId',String(res.id));
        this.getCart(res.id);
        console.log(res);
      });
    } else {
      console.log('else grana');
      this.getCart(parseFloat(cartId));
    }
  }
}
