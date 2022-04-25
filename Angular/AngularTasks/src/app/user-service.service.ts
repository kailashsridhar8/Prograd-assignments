import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  getUsers():Observable<IUsers>{
    return this.http.get<IUsers>('https://jsonplaceholder.typicode.com/users'); 
  }
} 
