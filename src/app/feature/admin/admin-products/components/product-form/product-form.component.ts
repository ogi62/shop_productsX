import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/categoryService/category.service';
import { ProductsService } from '../../services/productsService/products.service';

export interface Categories {
  bread: string;
  dairy: string;
  fruits: string;
  seasonings: string;
  vegetables: string;
}

export interface Product {
  name: string;
  price: number;
  categories: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$!: any;

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService
    ) {
    this.categoryService.getCategories().subscribe((res)=> {
      console.log(res);
      this.categories$ = res;
    });
   }

  ngOnInit(): void {
  }

  save(product: Product) {
    this.productsService.create(product);
  }

}
