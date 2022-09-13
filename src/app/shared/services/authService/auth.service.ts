import { Injectable } from '@angular/core';
import {  GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../../models/app-user';
import { UserService } from '../userService/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user$!: Observable<any>;
  private apiUrl: string = 'http://localhost:3000/shopping-cart';


  constructor(
    private afAuth: AngularFireAuth,
    private router: ActivatedRoute,
    private route: Router,
    private userService: UserService,
    private http: HttpClient
    ) {
    this.user$ = this.afAuth.authState;
    console.log(this.user$)
  }
  // Sign in with Google
  GoogleAuth() {
    let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!',result.user?.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //.Logout
  logOut() {
    const cartId = localStorage.getItem('cartId');
    this.deleteProduct(cartId);
    localStorage.clear();
    this.afAuth.signOut();
    this.route.navigate(['/']);
  }

  get appUser$(): Observable<AppUser | any> {
    return this.user$.pipe(
    switchMap((user: AppUser) => {
      if(user) {
        return this.userService.get(user.uid)
      } else {
        return of(null)
      }      
    })
    )
  }

  deleteProduct(id: string | null){
    return this.http.delete(this.apiUrl+'/'+id);
  }
}