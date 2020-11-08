import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { OnlyLoggedInUsersGuardGuard } from './shared/guards/only-logged-in-users-guard.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },  
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(mod => mod.SigninModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(mod => mod.SignupModule) },
  { path: 'detail/:_id', loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule) },
  { path: 'booking/:_id', loadChildren: () => import('./booking/booking.module').then(mod => mod.BookingModule), canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: '404', loadChildren: () => import('./error-page/error-page.module').then(mod => mod.ErrorPageModule) },
  {  path: '**', redirectTo: '/404' }
];