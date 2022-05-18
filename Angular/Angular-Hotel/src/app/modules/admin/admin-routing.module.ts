import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddRoomtohotelComponent } from './add-roomtohotel/add-roomtohotel.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { HotelOperationsComponent } from './hotel-operations/hotel-operations.component';
import { RoomOperationsComponent } from './room-operations/room-operations.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { UpdateRoomComponent } from './update-room/update-room.component';





 const routes: Routes = [
  { path: '', component: BookingsListComponent },
  {path: 'add-hotel',component: AddHotelComponent},
  { path: 'add-room',component: AddRoomComponent},
  {path:'hotel-operations',component: HotelOperationsComponent},
  {path:'room-operations',component: RoomOperationsComponent},
  {path:'hotel-operations/update-hotel/:id',component: UpdateHotelComponent},
  {path:'room-operations/update-room/:id',component: UpdateRoomComponent},
  {path:'bookings-list',component: BookingsListComponent},
  // { path: 'addroomtohotel',component: AddRoomtohotelComponent},


];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
