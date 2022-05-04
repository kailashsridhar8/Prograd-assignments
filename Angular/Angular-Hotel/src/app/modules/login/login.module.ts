import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,BrowserModule,MatButtonModule,MatGridListModule,MatDividerModule,MatCardModule,MatIconModule,MatToolbarModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
