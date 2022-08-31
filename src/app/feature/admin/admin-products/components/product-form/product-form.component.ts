import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number | string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
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
    this.categoryService.getCategories().subscribe((res)=> {
      console.log(res);
      this.categories$ = res;
    });

    // let id = this.route.snapshot.paramMap.get('id');
    // if(id) this.productsService.get(id).subscribe((p)=> {
    //   this.product = p
    // })
  }

  ngOnInit(): void {
  }

  save(product: Product) {
    console.log(product)
    this.productsService.create(product);
    this.router.navigate(['/admin/products']);
  }

}
