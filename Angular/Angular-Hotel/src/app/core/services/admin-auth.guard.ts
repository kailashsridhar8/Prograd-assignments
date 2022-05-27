import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,private notificationService: NotificationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(localStorage.getItem("Login_Status")==="admin"){
        return true;
      }
      else{
        console.log("Here");
        this.notificationService.showError("UnAuthorized","");
        if(localStorage.getItem("Login_Status")==="user"){
          this.router.navigate(['/home']);
          return false;
        }
        else{
          this.router.navigate(['/']);
        }
        

   
      }
      return false;
   
  }
  
}
