import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  
  findBookingDetailsbyUserId(user_id:string){
    return this.http.post("http://127.0.0.1:8000/user/findBookingDetailsbyUserId",{user_id:user_id })
   }
   getAllBookings(){
     return this.http.get("http://127.0.0.1:8000/admin/getAllBookings");
   } 

}
