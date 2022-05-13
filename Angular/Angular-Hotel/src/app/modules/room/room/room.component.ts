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
  originalPrice:number;
  noOfDays:number=1;
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

this.activatedRoute.queryParams.subscribe(params => {
        this.fromDate=params['fromDate'];
        this.toDate=params['toDate'];
        this.noOfDays=params['noOfDays'];
        console.log("noddd"+this.noOfDays)
        if(this.noOfDays==null){
          this.noOfDays=1;
        }
})







    this.hotelService.getHotelById(this.id).subscribe({
      next:(data) => {
        
        this.hotel= data;
        console.log(this.hotel.name+"HotelName");
      
      },
      error:(err) => {
        console.log("Error"+err);
      }
  })

 


  }

 flag:number=0;
  getRoomsId(){
    this.roomService.getRoomsByHotel(this.id).subscribe({

      next:(data)=>{
          
        for (let roomId of data) {

  
          this.flag=0;
          console.log(roomId);
        
          this.roomService.getRoomDetailsById(roomId).subscribe({
            next: (data)=>{

          
            // this.index=this.index+1;
          for(let bookings of data.bookings){
            console.log(bookings.fromDate);
            console.log(bookings.toDate);
            var bookedFrom=new Date(bookings.fromDate);
            var bookedTo=new Date(bookings.toDate);
            
            if(this.dateRangeOverlaps(bookedFrom.getTime(), bookedTo.getTime(),new Date(this.fromDate).getTime(),new Date(this.toDate).getTime())){
              console.log(" overlapping!");
              this.flag=1;
            }
            else{
              console.log("Not overlapping!");
            }

          }

            if(this.flag==0){
              this.rooms.push(data);

            }
           


              
              
             
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

 
  onClick(roomId:Number,roomType:String){
        // this.roomService.bookRoom(roomId,roomType,)
  }




  dateRangeOverlaps(a_start:any, a_end:any, b_start:any, b_end:any) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}





}
