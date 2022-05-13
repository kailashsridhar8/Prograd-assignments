import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings:any=[];
  constructor(private roomService: RoomService,private bookingService: BookingService) { 

    // this.roomService.shareDataSubject.subscribe(data =>{
    //   console.log("Recieved Data "+ data);
    // })

  }

  ngOnInit(): void {

    var user_id=localStorage.getItem("user_id");
   
    this.bookingService.findBookingDetailsbyUserId(user_id).subscribe({
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

}
