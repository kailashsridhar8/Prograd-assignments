import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private roomService:RoomService,private hotelService:HotelService) { }
  rooms:any=[];
  hotels:any=[];
  fromDate:any;
  toDate:any;
  id:any;
  index:number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id=params['id'];
      this.getRoomsId();
    });
    this.fromDate=this.hotelService.getFromDate();
    this.toDate=this.hotelService.getToDate();
    console.log(this.fromDate);
  }
  getRoomsId(){
    this.roomService.getRoomsByHotel(this.id).subscribe({

      next:(data)=>{
          
        for (let roomId of data) {

  

          console.log(roomId);
          // this.options.push(city.name);
          this.roomService.getRoomDetailsById(roomId).subscribe({
            next: (data)=>{


            //  if (this.fromDate.getTime() > data.getTime())
            console.log("Rooms"+data.availableFrom);
            this.index=this.index+1;

              this.rooms.push(data);
              
             
            },
            error: (data)=>{
              console.log(data);
            }
          })
        }




      },
      error:(err)=>{
        console.log(err);
      }
    }

      
    ) 
  }

}
