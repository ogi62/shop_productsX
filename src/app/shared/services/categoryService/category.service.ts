import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, of } from 'rxjs';
import { CategoryInterface } from '../../models/category';




@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private apiURL : string = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

   getCategories() {
    return this.http.get<CategoryInterface[]>(this.apiURL)
  }

}
