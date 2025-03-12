import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authorizationGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  let isAuthenticated = false;

  if (isAuthenticated) {
    return true;
  }
  router.navigate(['/login']).then();
  return false;
};
