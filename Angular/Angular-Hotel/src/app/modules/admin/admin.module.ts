import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddRoomtohotelComponent } from './add-roomtohotel/add-roomtohotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { RoomOperationsComponent } from './room-operations/room-operations.component';
import { HotelOperationsComponent } from './hotel-operations/hotel-operations.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';


@NgModule({
  declarations: [
    AdminComponent,AdminDashboardComponent, AddHotelComponent, AddRoomComponent, AddRoomtohotelComponent, UpdateHotelComponent, RoomOperationsComponent, HotelOperationsComponent, UpdateRoomComponent, BookingsListComponent
  ],
  imports: [
    CommonModule,AdminRoutingModule,AngularmaterialModule,FormsModule,ReactiveFormsModule,MatFormFieldModule
  ],
  exports:[
    AdminComponent,AdminDashboardComponent,AddHotelComponent,AdminComponent
  ]
})
export class AdminModule { }
