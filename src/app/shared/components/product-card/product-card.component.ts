import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/feature/admin/admin-products/models/product';
import { ProductsService } from 'src/app/feature/admin/admin-products/services/productsService/products.service';
import { ShoppingCartInterface } from '../../models/shoppingCart';
import { ShoppingCartService } from '../../services/shoppingCartService/shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  
  @Input() category!: string | null;
  @Input()product!: ProductInterface;
  @Input('show-actions') showActions: boolean = true;
  @Input('width-15') width15!: boolean;



  constructor(private shoppingCartService: ShoppingCartService) {
    
   }

  ngOnInit(): void {
  }

  addToCart(product: ProductInterface) {
    this.shoppingCartService.addToCart(product.id).subscribe(
      result => {
        this.shoppingCartService.cartItemcount$.next(result);
      }, error => {
        console.log('Error ocurred while addToCart data : ', error);
      });
  }
  
  
}
