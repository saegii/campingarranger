import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if ("true" != localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
