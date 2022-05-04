import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,BrowserAnimationsModule,AngularmaterialModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    SignupComponent
  ]
})
export class SignupModule { }
