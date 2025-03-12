import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

export const authenticationGuard: CanActivateFn = (_route, _state) => {

  const authenticationService = inject(AuthenticationService);
  const isAuthenticated = authenticationService.isAuthenticated;

  if (!isAuthenticated) {
    inject(Router).navigate(['/login']).then();
    return false;
  }

  return true;
};
