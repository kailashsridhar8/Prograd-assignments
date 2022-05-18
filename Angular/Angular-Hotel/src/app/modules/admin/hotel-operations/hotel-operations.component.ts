import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-hotel-operations',
  templateUrl: './hotel-operations.component.html',
  styleUrls: ['./hotel-operations.component.css']
})
export class HotelOperationsComponent implements OnInit {
  hotels:any=[]; 
  constructor(private adminService:AdminService,private notificationService:NotificationService,private hotelService: HotelService,private authService: AuthService,private route:Router) { }

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

  onClickDelete(hotel_id:string){
  // console.log(hotel_id);
    this.adminService.deleteHotel(hotel_id).subscribe({
      next: (result)=>{
       
        this.notificationService.showSuccess("Deleted Sucessfully","");
       window.location.reload();
   
      },
      error: (err)=>{
        this.notificationService.showError("Error Deleting","");
      }
    });

    this.adminService.deleteRoomsofDeletedHotel(hotel_id).subscribe({
      next: (result)=>{
       
        
       console.log(result);
   
      },
      error: (err)=>{
        console.log(err);
      }
    });








  }

}
