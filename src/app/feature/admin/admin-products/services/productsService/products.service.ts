import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, from, map, Observable, toArray } from 'rxjs';
import { Product } from '../../components/product-form/product-form.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: BehaviorSubject<any> = new BehaviorSubject(null);
  products$: Observable<any> = this.products.asObservable();

  constructor(private db: AngularFireDatabase) {}

  create(product: Product) {
    return this.db.list('/products').push(product);
  }

  async getAll() {
    let result = await this.db.database
      .refFromURL(
        'https://shop-productsx-default-rtdb.firebaseio.com/products'
      )
      .get()
      .then((res) => res.val());

    return result;
  }

  getProducts() {
    const products = this.getAll();

    // return from(products);
    

    return from(products).pipe(
      map((products) =>{
        console.log(products, 'provera')
        return products;
      }),
      toArray()
    );
  }

}
