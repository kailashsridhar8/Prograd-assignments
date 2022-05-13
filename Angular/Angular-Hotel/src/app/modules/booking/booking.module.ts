import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings/bookings.component';
import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import { BookingRoutingModule } from './booking-routing.module';
import { DialoguebookingComponent } from './dialoguebooking/dialoguebooking.component';



@NgModule({
  declarations: [
    BookingsComponent,
    DialoguebookingComponent
  ],
  imports: [
    CommonModule,AngularmaterialModule,BookingRoutingModule
  ],
  exports:[
    BookingsComponent,DialoguebookingComponent
  ]
})
export class BookingModule { }
