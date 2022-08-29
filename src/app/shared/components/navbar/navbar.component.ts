import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$!: Observable<any>;

  constructor(private authService: AuthService ) { 
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
  }

 

}
