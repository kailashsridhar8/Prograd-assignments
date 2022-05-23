import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {globalVars} from '../../shared/urls.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn!:string
  
  url:string=`${globalVars.backendAPI}/user`;
  constructor(private http: HttpClient) { 

    this.isLoggedIn=localStorage.getItem("Login_Status")||"no"
  }

  validate(){
    const uri=localStorage.getItem("TOKEN");
    
  }

  Login(){

    this.isLoggedIn=localStorage.getItem("Login_Status")||"no"

  }

 

  Logout(){
    this.removeToken().subscribe((res)=>{
          
    })
    localStorage.clear()
    this.isLoggedIn="no"
  }



  

  loginUser(email:string,password:string){
    // console.log(globalVars.backendAPI+"/user/login","http://3.108.217.116:8000/user/login");
    return this.http.post(globalVars.backendAPI+"/user/login",{email:email,password:password});
  }
  signUpUser(username:string,email:string,password:string,phone: string){
    return this.http.post(globalVars.backendAPI+"/user/signup",{username:username,email:email,password:password,phone:phone});
  }

 
 
   getAccessToken(){
    let ref_token=localStorage.getItem("TOKEN")
    
    ref_token=ref_token?.split(' ')[2]||''

    console.log("reff"+ref_token);
    
    return this.http.get(`${this.url}/getToken/?refreshToken=${ref_token}`,{responseType:"text"})
  }



  removeToken(){
    let ref_token=localStorage.getItem("TOKEN")
  
    ref_token=ref_token?.split(' ')[2]||''
    
    return this.http.delete(`${this.url}/removeToken/?refreshToken=${ref_token}`,{responseType:"text"})
  }


}
