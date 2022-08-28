import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './shared/services/auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './shared/shell/signin/signin.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './feature/home/home.component';
import { ProductsComponent } from './feature/products/products.component';
import { ShoppingCartComponent } from './feature/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './feature/check-out/check-out.component';
import { OrderSuccessComponent } from './feature/order-success/order-success.component';
import { MyOrdersComponent } from './feature/my-orders/my-orders.component';
import { AdminProductsComponent } from './feature/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './feature/admin/admin-orders/admin-orders.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path:'admin/products',
    component: AdminProductsComponent
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
