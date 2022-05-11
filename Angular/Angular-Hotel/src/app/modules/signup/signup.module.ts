import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularmaterialModule } from 'src/app/shared/modules/angularmaterial/angularmaterial.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupRoutingModule } from './signup-routing.module';
import { DialogSignupComponent } from './dialog-signup/dialog-signup.component';

@NgModule({
  declarations: [
    SignupComponent,
    DialogSignupComponent
  ],
  imports: [
    CommonModule,SignupRoutingModule,AngularmaterialModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    SignupComponent
  ]
})
export class SignupModule { }
