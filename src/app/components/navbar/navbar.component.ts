import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) { }

  isAuth = false

  logIn() {
    this.authService.login()
    this.isAuth = true
  }

  logOut() {
    this.authService.logout()
    this.isAuth = false
  }

  returnHomePage() {
    this.router.navigate([""])
  }
}
