import {  inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const router = inject(Router);
  console.log('canActivate called and redirecting...');
  // router.navigate(['/about']);
  return true;
  
};
