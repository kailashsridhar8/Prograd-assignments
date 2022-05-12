import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';
import { RoomService } from 'src/app/core/services/room.service';




@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(public dialog: MatDialog,private activatedRoute: ActivatedRoute,private roomService:RoomService,private hotelService:HotelService) { }
  rooms:any=[];
  hotel:any={};
  isLoggedIn:boolean=false;
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

    this.hotelService.getHotelById(this.id).subscribe({
      next:(data) => {
        
        this.hotel= data;
      
      },
      error:(err) => {
        console.log("Error"+err);
      }
  })
  


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

 
  onClick(roomId:Number){
      alert("Room Booked Sucessfully");
  }

}
