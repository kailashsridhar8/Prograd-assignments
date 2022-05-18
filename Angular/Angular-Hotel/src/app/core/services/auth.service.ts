import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn!:string
  
  url:string='http://127.0.0.1:8000/user'
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
    return this.http.post("http://127.0.0.1:8000/user/login",{email:email,password:password});
  }
  signUpUser(username:string,email:string,password:string){
    return this.http.post("http://127.0.0.1:8000/user/signup",{username:username,email:email,password:password});
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
