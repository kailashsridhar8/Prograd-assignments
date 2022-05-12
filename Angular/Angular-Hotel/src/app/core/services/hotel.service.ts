import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  token!:string
  headers!:HttpHeaders
  fromDate: any;
  toDate: any;
  constructor(private http: HttpClient) { }


  getAllCities():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/hotel/getAllCities");
  }

  getAllHotels():Observable<any>{
    this.token=localStorage.getItem("TOKEN")||''
     this.headers = new HttpHeaders({
      'Authorization': this.token });
    return this.http.get("http://127.0.0.1:8000/hotel/getAllHotels",{headers:this.headers});
  }

  getAllRooms():Observable<any>{
    this.token=localStorage.getItem("TOKEN")||''
     this.headers = new HttpHeaders({
      'Authorization': this.token });
    return this.http.get("http://127.0.0.1:8000/hotel/getAllRooms",{headers:this.headers});
  }

  getHotelsByCity(city: string,noOfDays: Number){
   
    return this.http.post("http://127.0.0.1:8000/hotel/getHotelsByCity",{city:city,noOfDays:noOfDays});
  }

  getHotelById(id: string){
   
    return this.http.post("http://127.0.0.1:8000/hotel/getHotelById",{id:id});
  }
  setFromDate(fromDate:any){
    this.fromDate=fromDate;
  }
  setToDate(toDate:any){
    this.toDate=toDate;
  }
  getToDate(){
    return this.toDate;
  }
  getFromDate(){
    return this.fromDate;
  }

}
