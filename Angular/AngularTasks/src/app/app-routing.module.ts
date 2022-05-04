import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { 
    
    path: 'profile', component: ProfileComponent },
    {
      path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
   {path:'home', component: HomeComponent},
   {path:'about-us',component: AboutUsComponent},
   {path:'contact',component: ContactComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'admin', component:AdminComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
