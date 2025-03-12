import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = (route, state) => {

  const isAuthenticated = false;

  if (!isAuthenticated)
    inject(Router).navigate(['/login']);

  return true;
};
