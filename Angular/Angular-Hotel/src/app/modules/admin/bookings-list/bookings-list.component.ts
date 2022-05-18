import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {
  bookings:any=[];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {

    this.bookingService.getAllBookings().subscribe({
      next: (data)=>{
        this.bookings = data;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
