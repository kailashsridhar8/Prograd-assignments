import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {
  breakfasts:any=[{name:true},{name:false}];
  cities: any=[];
  hotels:any=[];
  rooms:any=[];
  hap_offer:any;
  hap_breakfast:any;
  hap_image:string;
  hap_contact_no:number;
  hap_state:string;
  hap_hotel_name: string;
  constructor(private adminService:AdminService,private router: Router,private activatedRoute: ActivatedRoute,private roomService:RoomService,private hotelService:HotelService,private notificationService:NotificationService) { }
 hotel_id:string;
 hap_city: string;
 hap_address: string;

  lastname:string="Hello Peter";
  ngOnInit(): void {
       this.activatedRoute.params.subscribe(params => {
      this.hotel_id=params['id'];

    });

    this.hotelService.getHotelById(this.hotel_id).subscribe({

      next:(hotel) => {
        this.hotels=hotel;
         this.hap_offer=this.hotels.offer;
         this.hap_breakfast=this.hotels.breakfast;
         this.hap_image=this.hotels.image;
         this.hap_contact_no=this.hotels.contact_no;
         this.hap_state=this.hotels.state;
         this.hap_city=this.hotels.city;
         this.hap_address=this.hotels.address;
         this.hap_hotel_name=this.hotels.name;

         console.log(this.hotels.city)
      }
    });

    this.hotelService.getAllCities().subscribe({
      next: (data:any) => {
        this.cities=data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });


  }
  onUpdateHotel(form:NgForm){
      this.adminService.updateHotel(this.hotel_id,form.value.hotel_name, form.value.address,form.value.city,form.value.state,form.value.contact_no,form.value.image,form.value.breakfast,form.value.offer).subscribe({
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
