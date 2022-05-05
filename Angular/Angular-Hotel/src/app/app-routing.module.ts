import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { LoginComponent } from './modules/login/login/login.component';
import { RoomComponent } from './modules/room/room/room.component';
import { SignupComponent } from './modules/signup/signup/signup.component';

const routes: Routes = [
  // {
  //   path: 'login',component:LoginComponent,

  // },
  // {path:'signup',component:SignupComponent},
  {path:'',component:HomeComponent},
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },

  {path:'room/:id',component:RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
