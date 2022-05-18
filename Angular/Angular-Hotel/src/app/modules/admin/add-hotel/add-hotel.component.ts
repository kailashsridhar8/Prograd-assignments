import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  breakfasts:any=[{name:true},{name:false}];
  cities: any=[];
  hotels:any=[];
  rooms:any=[];
  constructor(private adminService:AdminService,private hotelService:HotelService,private notificationService:NotificationService) { }

  ngOnInit(): void {


    this.hotelService.getAllCities().subscribe({
      next: (data:any) => {
        this.cities=data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });

    
    this.hotelService.getAllHotels().subscribe({
      next: (data:any) => {
        this.hotels=data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.hotelService.getAllRooms().subscribe({
      next: (data:any) => {
        this.rooms=data;
        
      },
      error: (err) => {
        console.log(err);
      }
    });






  }


  onAddHotel(form:NgForm){

    if (form.invalid) {
      return;
    }


    this.adminService.AddHotel(form.value.hotel_name,form.value.address,form.value.city,form.value.state,form.value.contact_no,form.value.image,form.value.breakfast,form.value.offer).subscribe({
      next:(data) => {
        
        this.notificationService.showSuccess("Hotel Added Sucessfully!","");
      },
      error:(err) => {
        console.log("Error"+err);
        this.notificationService.showError("Hotel cannot be added ","");
      }
    }
    
    )
  }


}
