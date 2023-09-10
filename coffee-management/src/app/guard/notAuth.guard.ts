import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';

export const notAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)

  let loginUserData = JSON.parse(localStorage.getItem('loginUserData') as string)

  if(loginUserData){
    if(loginUserData.role == 'admin'){
        router.navigate(['/home'])
    } else {
        router.navigate(['/user', loginUserData.id])
    }
    return false; 
  } else {
    return true;
  }
};