import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}

  login() {
    this.authService.GoogleAuth();
  }
}