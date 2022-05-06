import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  cities: any=[];
  hotels:any=[];
  rooms:any=[];
  breakfasts:any=[{name:true},{name:false}];
    
  


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
  onAddRoom(form:NgForm){


    if (form.invalid) {
      return;
    }

    this.adminService.onAddRoom(form.value.roomtype,form.value.price,form.value.capacity,form.value.image).subscribe({
      next:(data) => {
      
        this.notificationService.showSuccess("Room Added Sucessfully!","");
      },
      error:(err) => {
        console.log("Error"+err);
        this.notificationService.showError("Room cannot be added ","");
      }
    }
    
    );
  };
  onAddRoomToHotel(form:NgForm){
    if (form.invalid) {
      return;
    }

    this.adminService.addRoomToHotel(form.value.hotelid,form.value.roomid).subscribe({
      next:(data) => {
      
        this.notificationService.showSuccess("Room Added Sucessfully to Hotel!","");
      },
      error:(err) => {
     
        this.notificationService.showError("Room cannot be added ","");
      }
    }
    
    );

  }


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

}
