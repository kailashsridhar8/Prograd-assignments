import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  loggedIn: boolean=false;

  getUsers():Observable<IUsers>{
    return this.http.get<IUsers>('https://jsonplaceholder.typicode.com/users'); 
  }

  isLoggedIn():boolean{
    
    return this.loggedIn;
  }

  changePermission():void{
    this.loggedIn=true;
    console.log(this.loggedIn);
  }

  addUser(username:string,password:string){
      return this.http.post("http://127.0.0.1:8080/authenticate",{username:username,password:password});
  }
} 
