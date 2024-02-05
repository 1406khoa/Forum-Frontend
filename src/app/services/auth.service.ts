import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuth = false

  login(){
    this.isAuth = true
  }

  logout(){
    this.isAuth = false
  }
}
