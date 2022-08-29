import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: string | undefined;

  constructor(private authService: AuthService ) { 
    this.authService.user$.subscribe((res)=> {
      this.user = res?.displayName;
      console.log(res?.displayName);
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
  }

}
