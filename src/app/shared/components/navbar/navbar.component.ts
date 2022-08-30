import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../../models/app-user';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser!: AppUser;

  constructor(private authService: AuthService ) { 
    this.authService.appUser$.subscribe(user => this.appUser = user)
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
  }

 

}
