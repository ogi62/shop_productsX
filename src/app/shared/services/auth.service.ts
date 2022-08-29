import { Injectable } from '@angular/core';
import {  GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user$!: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.user$ = this.afAuth.authState;
    console.log(this.user$)
  }
  // Sign in with Google
  GoogleAuth() {
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
  }
}