import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashButtonComponent } from './dash-button/dash-button.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashButtonComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DummyModule { }
