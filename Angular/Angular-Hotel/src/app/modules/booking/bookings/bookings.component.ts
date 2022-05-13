import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private roomService: RoomService) { 

    // this.roomService.shareDataSubject.subscribe(data =>{
    //   console.log("Recieved Data "+ data);
    // })

  }

  ngOnInit(): void {
  }

}
