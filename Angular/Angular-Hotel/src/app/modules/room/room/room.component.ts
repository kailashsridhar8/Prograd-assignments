import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private roomService:RoomService) { }
  rooms:any=[];
  
  id:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id=params['id'];
      this.getRoomsId();
    });
  }
  getRoomsId(){
    this.roomService.getRoomsByHotel(this.id).subscribe({

      next:(data)=>{
          console.log(data);
      },
      error:(err)=>{
        console.log(err);
      }
    }

      
    ) 
  }

}
