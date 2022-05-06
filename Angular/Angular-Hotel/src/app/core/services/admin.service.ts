import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  AddHotel(name: string,address: string,city: string,state: string,contact_no:Number,image: string,breakfast:boolean,offer:string){
   
    return this.http.post("http://127.0.0.1:8000/admin/addHotel",{name:name,address:address,city:city,state:state,contact_no:contact_no,image:image,breakfast:breakfast,offer:offer});
  }

  onAddRoom(roomtype: string,price: number,capacity: number,image: string){
   
    return this.http.post("http://127.0.0.1:8000/admin/addRoom",{roomtype: roomtype,price: price,capacity: capacity,image: image});
  }

  addRoomToHotel(hotel_id: string,room_id: string){
   
    return this.http.post("http://127.0.0.1:8000/admin/addRoomToHotel",{hotel_id: hotel_id,room_id: room_id});
  }
  

}
