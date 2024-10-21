import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginAuth: AuthService) {}
 canActivate(): boolean {
    if(this.loginAuth.isLoggedIn()){
      // this.router.navigate(['/dashboard']);
      console.log("jay")
      return true;
    }
    
    else{
      // this.router.navigate(['login']);
      // this.router.navigate(['access-denied']);
      return false;
    }
  }
}
