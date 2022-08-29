import { Injectable } from '@angular/core';
import {  GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user$!: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: ActivatedRoute,
    private route: Router
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
    this.afAuth.signOut();
    this.route.navigate(['/']);
  }
}