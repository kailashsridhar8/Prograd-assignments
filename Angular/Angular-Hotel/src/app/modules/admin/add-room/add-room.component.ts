import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  hotels:any=[];
  constructor(private route:Router,private authService: AuthService,private hotelService:HotelService,private adminService:AdminService, private notificationService:NotificationService) { }

  ngOnInit(): void {

    this.hotelService.getAllHotels().subscribe({
      next: (data:any) => {
        this.hotels=data;
        console.log(data);
      },
      error: (err) => {


        console.log(err);

        if(err==="IV_JWT"){
       
         
         this.authService.getAccessToken().subscribe({next:(res:any)=>{
          
           localStorage.removeItem("TOKEN")
         
           if(res==="jwt expired"){
             this.route.navigate(['/login'])
             localStorage.clear()
             this.authService.Logout()
             this.authService.removeToken()
             return
           }
           let response=JSON.parse(res)
           let token=response.token
           let role=response.role
 
           localStorage.setItem("TOKEN",token);
           // localStorage.setItem("Login_Status",role);
           console.log(" "+role);
           
           //this.route.navigate(['/home'])
           window.location.reload()
         }});
 
        }
        else{
          this.notificationService.showError("Some error occurred","");
        }
        console.log("err");








        console.log(err);
      }
    });

  }
  onAddRoom(form:NgForm){


    if (form.invalid) {
      return;
    }

    this.adminService.onAddRoom(form.value.hotel_id,form.value.roomtype,form.value.price,form.value.capacity,form.value.image,form.value.ratings).subscribe({
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

}
