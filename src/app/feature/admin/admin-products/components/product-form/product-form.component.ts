import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/categoryService/category.service';

export interface Categories {
  bread: string;
  dairy: string;
  fruits: string;
  seasonings: string;
  vegetables: string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$!: any;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((res)=> {
      console.log(res);
      this.categories$ = res;
    });
   }

  ngOnInit(): void {
  }

}
