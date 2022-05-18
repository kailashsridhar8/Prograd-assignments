import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  room_id:string;
  // hotels:any=[];
  rooms:any=[];
  hap_roomtype: string;
  // hap_hotel_id: string;
  hap_price:number;
  hap_ratings:any;
  hap_capacity:any;
  hap_image:string;
  constructor(private adminService:AdminService,private router: Router,private activatedRoute: ActivatedRoute,private roomService:RoomService,private hotelService:HotelService,private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.room_id=params['id'];

    });
    // this.hotelService.getAllHotels().subscribe({
    //   next: (data:any) => {
    //     this.hotels=data;
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });

    this.roomService.getRoomDetailsById(this.room_id).subscribe({

      next:(rooms) => {
        this.rooms=rooms;
        this.hap_roomtype=this.rooms.roomtype;
        // this.hap_hotel_id= this.rooms.hotel_id;
  
        this.hap_price=this.rooms.price;
        this.hap_ratings=this.rooms.ratings;
        this.hap_capacity=this.rooms.capacity;
        this.hap_image=this.rooms.image

        
      }
    });

 



  }


  onUpdateRoom(form:NgForm){
    this.adminService.updateRoom( this.room_id,form.value.roomtype,form.value.price,form.value.ratings,form.value.capacity,form.value.image).subscribe({
      next:(data) => {
        console.log(data+"Updated");
          this.notificationService.showSuccess("Updated Sucessfully","");
      },
      error:(err) => {
        this.notificationService.showError("Some Error occurred","");
      }
    })
  }





}
