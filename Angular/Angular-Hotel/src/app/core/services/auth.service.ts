import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(email:string,password:string):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/user/login",{email:email,password:password});
  }
  signUpUser(username:string,email:string,password:string):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/user/signup",{username:username,email:email,password:password});
  }
}
