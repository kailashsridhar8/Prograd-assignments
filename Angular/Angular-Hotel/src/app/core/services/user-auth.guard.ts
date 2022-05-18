import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService,private notification: NotificationService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem("Login_Status")==="user"){
        return true;
      }
      else{
        this.notification.showError("UnAuthorized","");
        this.router.navigate(['/home']);
      }
    

      
      return true;
  }
  
}
