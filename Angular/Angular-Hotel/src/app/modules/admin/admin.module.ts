import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,AdminDashboardComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,AngularmaterialModule,FormsModule,ReactiveFormsModule,MatFormFieldModule
  ]
})
export class AdminModule { }
