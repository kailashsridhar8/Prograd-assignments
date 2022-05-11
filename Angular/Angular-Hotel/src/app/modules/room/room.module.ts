import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import { RoomRoutingModule } from './room-routing.module';



@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule,AngularmaterialModule,RoomRoutingModule
  ],
  exports: [
    RoomComponent
  ]
})
export class RoomModule { }
