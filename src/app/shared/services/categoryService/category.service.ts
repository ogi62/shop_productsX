import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  //  getCategories() {
  //   let obsCategories;
  //   let result =  this.db.database
  //     .refFromURL(
  //       'https://shop-productsx-default-rtdb.firebaseio.com/categories'
  //     )
  //     .get()
  //     .then((res) => {
  //       console.log(res.val());
  //       obsCategories = res.val();
  //     });
  //     console.log(obsCategories);
    
      
  //   return from(result);
  // }

  getCategories() {
    return this.db.list('/categories').snapshotChanges();
    // return this.db.list('/categories')
  }

 
}
