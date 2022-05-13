import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
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
import { HomeModule } from './modules/home/home.module';
import { RoomModule } from './modules/room/room.module';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { AdminModule } from './modules/admin/admin.module';
import { BookingModule } from './modules/booking/booking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,SharedModule,MatButtonModule,HomeModule,ToastrModule.forRoot(),
    AppRoutingModule,RoomModule,AdminModule,BookingModule,
    BrowserAnimationsModule,MatFormFieldModule,LoginModule,HttpClientModule,CoreModule,SignupModule,FormsModule,ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
