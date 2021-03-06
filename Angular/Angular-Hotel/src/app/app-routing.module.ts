import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './core/services/admin-auth.guard';
import { UserAuthGuard } from './core/services/user-auth.guard';


const routes: Routes = [

  {path:'home',
  
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),canActivate:[UserAuthGuard]

},
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule)
  },

  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },

  {path:'room/:id',
  
  loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule), canActivate:[UserAuthGuard]

},
  {path:'admin',
   loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canActivate:[AdminAuthGuard]

},

{path:'bookings',
loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule), canActivate:[UserAuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
