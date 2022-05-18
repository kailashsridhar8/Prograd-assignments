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

  onAddRoom(hotel_id: any,roomtype: string,price: number,capacity: number,image: string,ratings:string){
   
    return this.http.post("http://127.0.0.1:8000/admin/addRoom",{hotel_id:hotel_id,roomtype: roomtype,price: price,capacity: capacity,image: image,ratings:ratings});
  }
  updateHotel(hotel_id: string,hotel_name: string,address: string,city: string,state: string,contact_no:Number,image: string,breakfast:boolean,offer:string){
   
    return this.http.post("http://127.0.0.1:8000/admin/updateHotel",{hotel_id:hotel_id,hotel_name:hotel_name,address:address,city:city,state:state,contact_no:contact_no,image:image,breakfast:breakfast,offer:offer});
  }

  
  updateRoom(room_id: string,roomtype: string,price: number,ratings:string,capacity: number,image: string){
   
    return this.http.post("http://127.0.0.1:8000/admin/updateRoom",{room_id:room_id,roomtype: roomtype,price: price,capacity: capacity,image: image,ratings:ratings});
  }
  

  deleteHotel(hotel_id:string){
    return this.http.post("http://127.0.0.1:8000/admin/deleteHotel",{hotel_id:hotel_id});
  }
  deleteRoomsofDeletedHotel(hotel_id:string){
    return this.http.post("http://127.0.0.1:8000/admin/deleteRoomsofDeletedHotel",{hotel_id:hotel_id});
  }

  deleteRoom(room_id:string){
    return this.http.post("http://127.0.0.1:8000/admin/deleteRoom",{room_id:room_id});
  }


  // addRoomToHotel(hotel_id: string,room_id: string){
   
  //   return this.http.post("http://127.0.0.1:8000/admin/addRoomToHotel",{hotel_id: hotel_id,room_id: room_id});
  // }
  

}
