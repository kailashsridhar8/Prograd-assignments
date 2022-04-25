import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyModule } from './dummy/dummy.module';
import { SharedModule } from './shared/shared.module';
import { Task1Component } from './task1/task1.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoreModule } from './core/core.module';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { HttpClientModule } from  '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    HomeComponent,
    ProfileComponent,
    AboutUsComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DummyModule,SharedModule,FormsModule,CoreModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
