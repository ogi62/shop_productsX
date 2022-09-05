import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/authService/auth.service';
import { UserService } from './shared/services/userService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    ) {
    auth.user$.subscribe((user)=> {
      if(!user) {
        return;
      }

      userService.get(user.uid);
        userService.save(user);
        let returnUrl = String(localStorage.getItem('returnUrl'));

        if(!returnUrl) {
          return;
        }
        if (returnUrl) {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    )
  }
}
