import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RoomService } from 'src/app/core/services/room.service';
import { DialoguebookingComponent } from '../../booking/dialoguebooking/dialoguebooking.component';




@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog,private activatedRoute: ActivatedRoute,private roomService:RoomService,private hotelService:HotelService,private notificationService:NotificationService) { }
  rooms:any=[];
  hotel:any={};
  originalPrice:number;
  noOfDays:number=1;
  isLoggedIn:boolean=false;
  fromDate:any;
  toDate:any;
  id:any;
  index:number = 0;
  paymentHandler:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id=params['id'];
      this.getRoomsId();
        
    


    });

    this.fromDate=localStorage.getItem('fromDatel');
    this.toDate=localStorage.getItem('toDatel');
    this.invokeStripe();

       this.activatedRoute.queryParams.subscribe(params => {
        // this.fromDate=params['fromDate'];
        // console.log("From "+this.fromDate);
     
        // this.toDate=params['toDate'];

        // console.log("To"+this.toDate);


        this.noOfDays=params['noOfDays'];
    
        if(this.noOfDays==null){
          this.noOfDays=1;
        }
})







    this.hotelService.getHotelById(this.id).subscribe({
      next:(data) => {
        
        this.hotel= data;
     
      
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
      
        
          this.roomService.getRoomDetailsById(roomId).subscribe({
            next: (data)=>{

          
             this.index=this.index+1;
          for(let bookings of data.bookings){
          
          
            var bookedFrom=new Date(bookings.fromDate).getTime();
            var bookedTo=new Date(bookings.toDate).getTime();
           

         
            if(this.dateRangeOverlaps(bookedFrom, bookedTo,new Date(this.fromDate).getTime(),new Date(this.toDate).getTime())){
              console.log(" overlapping!");
              this.flag=1;
            }

           
            else{
              console.log("Not overlapping!");
            }
         

          }
     
            if(this.flag==0||data.bookings.length==0){
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

 
  onClick(room_id:string,room_type:string,totalPrice:number){


    if(this.fromDate==null||this.toDate==null){
      this.notificationService.showWarning("Enter Dates of Stay","")
      this.router.navigate(['/home']);
      return;

    }


    
    var user_id=localStorage.getItem('user_id');
    console.log("ls from"+localStorage.getItem('fromDatel'));
    console.log("ls to "+localStorage.getItem('toDatel'));

    this.roomService.bookRoom(room_id,room_type,this.hotel.name,localStorage.getItem('fromDatel'),localStorage.getItem('toDatel'),totalPrice,user_id).subscribe({
    
      
      next: function(data:any){
         console.log("Booking Data"+data);
      },
      error: function(err){
        console.log("Booking Data"+err);
      }
    });

   var bookings={
       fromDate:localStorage.getItem('fromDatel'),
       toDate:localStorage.getItem('toDatel'),
       user_id:localStorage.getItem('user_id'),
    }
    console.log(bookings);
    console.log("Bookings fromdate"+bookings.fromDate);
    this.roomService.addBookingToRoom(room_id,bookings).subscribe({
      next:(data:any)=>{
        console.log("addBookingToRoom Data"+data);
       
       
      },
      error: function(err:any){
        console.log("addBookingToRoom Data"+err);
      }
    });







    this.paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L2YAsSEGRPGWRFA6JEiSrrVdcP1F9hAdoSfaDMDoUEf8bnpMojBdI7q1DZTvTMeZhEGbiZtYZ9kacgCDo380jcf00urPLt6fM',

     locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        callMe();
      }
   
    });
  


    const callMe= ()=>{
    
      this.notificationService.showInfo("Sucessfully Booked in "+this.hotel.name,room_type+ " for "+this.noOfDays+" days is" );
      this.router.navigate(['/bookings']);
  
  
  
  
    }




    this.paymentHandler.open({
      name: 'Happen.Inn',
      description: room_type,
      currency:'inr',
      amount: totalPrice * 100
    });




    // var user_id=localStorage.getItem('user_id');

    //      this.roomService.bookRoom(room_id,room_type,this.hotel.name,this.fromDate,this.toDate,totalPrice,user_id).subscribe({
    //        next: function(data:any){
    //           console.log("Booking Data"+data);
    //        },
    //        error: function(err){
    //          console.log("Booking Data"+err);
    //        }
    //      });

    //     var bookings={
    //         fromDate:this.fromDate,
    //         toDate:this.toDate,
    //         user_id:localStorage.getItem('user_id'),
    //      }
    //      this.roomService.addBookingToRoom(room_id,bookings).subscribe({
    //        next:(data:any)=>{
    //          console.log("addBookingToRoom Data"+data);
    //         //  this.notificationService.showInfo("Sucessfully Booked in "+this.hotel.name,room_type+ " for "+this.noOfDays+" days is" );
    //         //  this.router.navigate(['/bookings']);
            
    //        },
    //        error: function(err:any){
    //          console.log("addBookingToRoom Data"+err);
    //        }
    //      });


      


        //  const dialogRef = this.dialog.open(DialoguebookingComponent);

    //       dialogRef.afterClosed().subscribe(result => {
    //       console.log(`Dialog result: ${result}`);
    // });


  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }


  dateRangeOverlaps(a_start:any, a_end:any, b_start:any, b_end:any) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}








}
