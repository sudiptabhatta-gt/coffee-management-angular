import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)

  let loginUserData = JSON.parse(localStorage.getItem('loginUserData') as string)

  if(loginUserData){
    return true;
  } else {
    router.navigateByUrl('login')
    return false;
  }
};
