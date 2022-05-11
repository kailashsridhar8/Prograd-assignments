import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:'',
  
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)

},
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },

  {path:'room/:id',
  
  loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule)

},
  {path:'admin-dashboard',
   loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
