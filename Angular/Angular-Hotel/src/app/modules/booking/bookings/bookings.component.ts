import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings:any=[];
  user_id:any;

  constructor(private roomService: RoomService,private bookingService: BookingService,private notificationService:NotificationService) { 

    // this.roomService.shareDataSubject.subscribe(data =>{
    //   console.log("Recieved Data "+ data);
    // })

  }

  ngOnInit(): void {

    this.user_id=localStorage.getItem("user_id");
   
    this.bookingService.findBookingDetailsbyUserId(this.user_id).subscribe({
      next:(bookings) => {
        this.bookings=bookings;
        console.log("Bookings"+this.bookings)
        this.bookings.reverse();
      },
      error:(err) => {
        console.log(err);
      }
     
    })




  }

  cancelBooking(booking:any){
      console.log(booking.fromDate);
      const abc=new Date(booking.fromDate);
      console.log(new Date());
      console.log((new Date().getTime() < abc.getTime()) )

      if(!(new Date().getTime() < abc.getTime())){
        this.notificationService.showWarning("Booking Expired","");
        return;
      }

      this.bookingService.cancelBooking(booking.fromDate,booking.toDate,this.user_id,booking.room_id).subscribe(

        {

          next: (data)=>{
            console.log(data);
          },
          error: (err)=>{
            console.log(err);
          }

        })




  }

}
