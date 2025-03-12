import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;

  login(email: string, password: string) {
    this.isAuthenticated = email === "admin" && password === "admin";
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
  }

}
