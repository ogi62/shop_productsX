import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, switchMap, of } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { UserService } from '../userService/user.service';
import { AppUser } from '../../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {


  constructor(
    private auth: AuthService,
    private userService: UserService
    ) { }

    // didnt do ... dont know how to do it ... 

}
