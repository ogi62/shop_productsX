import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, switchMap, of } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { UserService } from '../userService/user.service';
import { AppUser } from '../../models/app-user';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  // didnt do ... dont know how to do it ... finally i manage to do :)
  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.auth.user$.pipe(
      switchMap((user: AppUser) => this.userService.get(user.uid)),
      map((appUser) => appUser.isAdmin)
    );
  }
}
