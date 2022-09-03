import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/categoryService/category.service';
import {
  ProductInterface,
  ProductsService,
} from '../../services/productsService/products.service';

export interface Categories {
  bread: string;
  dairy: string;
  fruits: string;
  seasonings: string;
  vegetables: string;
}

export interface Product {
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$!: any;
  product!: any;

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryService.getCategories().subscribe((res) => {
      console.log(res);
      this.categories$ = res;
    });
  }

  ngOnInit(): void {}

  save(product: Product) {
    let productWithID: ProductInterface = {
      id: Math.floor(Math.random() * 1000000),
      ...product,
    };

    this.productsService
      .create(productWithID)
      .subscribe((result: ProductInterface) => {
        console.log(result);
        this.productsService.getProducts();
      });
    this.router.navigate(['/admin/products']);
  }
}
