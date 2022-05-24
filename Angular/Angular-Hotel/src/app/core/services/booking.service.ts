import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {globalVars} from '../../shared/urls.model';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  
  findBookingDetailsbyUserId(user_id:string){
    return this.http.post(globalVars.backendAPI+"/user/findBookingDetailsbyUserId",{user_id:user_id })
   }
   getAllBookings(){
     return this.http.get(globalVars.backendAPI+"/admin/getAllBookings");
   } 
   cancelBooking(fromDate:any, toDate:any,user_id:any,room_id:any){
      return this.http.post(globalVars.backendAPI+"/user/cancelBooking",{fromDate:fromDate,toDate:toDate,user_id:user_id,room_id:room_id });
   }

}
