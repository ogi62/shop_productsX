import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './shared/services/authService/auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RouterModule } from '@angular/router';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


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
import { AuthGuardService } from './shared/services/authGuardService/auth-guard.service';
import { UserService } from './shared/services/userService/user.service';
import { AdminAuthGuardService } from './shared/services/adminAuthGuardService/admin-auth-guard.service';
import { ProductFormComponent } from './feature/admin/admin-products/components/product-form/product-form.component';
import { CategoryService } from './shared/services/categoryService/category.service';
import { ProductsService } from './feature/admin/admin-products/services/productsService/products.service';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },

  {
    path: 'check-out',
    component: CheckOutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'my/orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

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
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    NgbDropdownModule,
    FormsModule,
  ],
  providers: [
    AuthService, 
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
