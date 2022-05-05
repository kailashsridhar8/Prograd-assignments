import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }


  getRoomsByHotel(id:any):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/hotel/getRoomsByHotel",{id:id});
  }

  // getHotelsByCity(city: string,noOfDays: Number){
   
  //   return this.http.post("http://127.0.0.1:8000/hotel/getHotelsByCity",{city:city,noOfDays:noOfDays});
  // }


}
