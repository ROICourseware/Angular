import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const countriesGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
 // change to 1 == 1 to allow route
 if (1!=1) {
  console.log('canActivate called and allowed...');
  return true;
}

console.log('canActivate not allowed, redirecting...');
router.navigate(['/about']);
return false;
};
