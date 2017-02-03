import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CountryGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    console.log('canActivate called and redirecting...');
    this.router.navigate(['/about']);
    return false;
  }
}