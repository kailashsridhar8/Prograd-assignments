import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {globalVars} from '../../shared/urls.model';
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
    return this.http.get(globalVars.backendAPI+"/hotel/getAllCities");
  }

  getAllHotels():Observable<any>{
    this.token=localStorage.getItem("TOKEN")||''
     this.headers = new HttpHeaders({
      'Authorization': this.token });
    return this.http.get(globalVars.backendAPI+"/hotel/getAllHotels",{headers:this.headers});
  }

  getAllRooms():Observable<any>{
    this.token=localStorage.getItem("TOKEN")||''
     this.headers = new HttpHeaders({
      'Authorization': this.token });
    return this.http.get(globalVars.backendAPI+"/hotel/getAllRooms",{headers:this.headers});
  }

  getHotelsByCity(city: string,noOfDays: Number){
   
    return this.http.post(globalVars.backendAPI+"/hotel/getHotelsByCity",{city:city,noOfDays:noOfDays});
  }

  getHotelById(id: string){
   
    return this.http.post(globalVars.backendAPI+"/hotel/getHotelById",{id:id});
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
