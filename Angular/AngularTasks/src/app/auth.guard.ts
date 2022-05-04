import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserServiceService} from '../app/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private userService: UserServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.userService.isLoggedIn()==false){
        alert("Access Denied");
      }
      
      return this.userService.isLoggedIn() ;
    
  }
  
}
