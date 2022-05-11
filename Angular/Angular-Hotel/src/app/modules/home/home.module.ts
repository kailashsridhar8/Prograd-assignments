import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,HomeRoutingModule,AngularmaterialModule,FormsModule,ReactiveFormsModule,MatFormFieldModule
  ]
})
export class HomeModule { }
