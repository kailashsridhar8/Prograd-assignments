import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import {MatCardModule} from '@angular/material/card';
import { LoginModule } from './modules/login/login.module';
import { CoreModule } from './core/core.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SignupModule } from './modules/signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,LoginModule,HttpClientModule,CoreModule,SignupModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
