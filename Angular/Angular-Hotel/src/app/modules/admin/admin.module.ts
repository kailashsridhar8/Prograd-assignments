import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent,AdminDashboardComponent
  ],
  imports: [
    CommonModule,AdminRoutingModule,AngularmaterialModule,FormsModule,ReactiveFormsModule,MatFormFieldModule
  ],
  exports:[
    AdminComponent,AdminDashboardComponent
  ]
})
export class AdminModule { }
