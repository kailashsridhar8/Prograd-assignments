import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  fromDate: any;
  toDate: any;
  constructor(private http: HttpClient) { }


  getAllCities():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/hotel/getAllCities");
  }

  getAllHotels():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/hotel/getAllHotels");
  }

  getAllRooms():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/hotel/getAllRooms");
  }

  getHotelsByCity(city: string,noOfDays: Number){
   
    return this.http.post("http://127.0.0.1:8000/hotel/getHotelsByCity",{city:city,noOfDays:noOfDays});
  }

  setFromDate(fromDate:any){
    this.fromDate=fromDate;
  }
  setToDate(toDate:any){
    this.toDate=toDate;
  }


}
