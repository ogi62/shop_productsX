import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/categoryService/category.service';
import { ProductsService} from '../../services/productsService/products.service';
import { pipe, take } from 'rxjs';
import { ProductInterface } from '../../models/product';





@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$!: any;
  product: ProductInterface = {
    title: '',
    imageUrl: '',
    category: '',
    id: 0
  };
  id: any;

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories$ = res;
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productsService
        .getProduct(this.id)
        .pipe(take(1))
        .subscribe((res: ProductInterface) => {
          this.product = res;
        });
    }
  }

  ngOnInit(): void {}

  save(product: ProductInterface) {
    if (this.id) {
      this.productsService
        .editProduct(this.product)
        .subscribe((res: ProductInterface) => {
          this.productsService.getProducts();
        });
    } else {
      let productWithID: ProductInterface = {
        ...product,
        id: Math.floor(Math.random() * 1000000),
      };

      this.productsService
        .createProduct(productWithID)
        .subscribe((result: ProductInterface) => {
          this.productsService.getProducts();
        });
    }
    setTimeout(() => {
      this.router.navigate(['/admin/products']);
    }, 400);
  }

  
}
