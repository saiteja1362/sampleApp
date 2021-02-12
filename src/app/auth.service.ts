import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('username') || ('false'));

  setLoginStatus(value) {
    this.loggedInStatus = value;
    localStorage.setItem('username', 'true');
  }
  get LoginStatus() {
    return JSON.parse(localStorage.getItem('username') || 
    this.loggedInStatus.toString());
  }
}
