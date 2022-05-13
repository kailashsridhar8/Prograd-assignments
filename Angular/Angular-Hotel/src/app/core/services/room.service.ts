import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

//   shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject
 
//   sendDataToOtherComponent(userInputs:any){
//    this.shareDataSubject.next(userInputs);
// }




  constructor(private http: HttpClient) { }


  getRoomsByHotel(id:any):Observable<any>{

    return this.http.post("http://127.0.0.1:8000/hotel/getRoomsByHotel",{id:id ,responseType: 'text'});
  }

  getRoomDetailsById(id:any):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/hotel/getRoomDetailsById",{id:id});
  }

  // getHotelsByCity(city: string,noOfDays: Number){
   
  //   return this.http.post("http://127.0.0.1:8000/hotel/getHotelsByCity",{city:city,noOfDays:noOfDays});
  // }
  bookRoom(room_id:string,room_type:string,hotel_name:string,fromDate:any,toDate:any,price:number,user_id:string):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/user/bookRoom",{room_id:room_id,room_type:room_type,hotel_name:hotel_name,fromDate:fromDate,toDate:toDate,price:price,user_id:user_id })
  }

   addBookingToRoom(room_id:string,bookings:object){
    return this.http.post("http://127.0.0.1:8000/user/addBookingToRoom",{room_id:room_id,bookings:bookings })
   }


}
