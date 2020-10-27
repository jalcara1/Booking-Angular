import { Routes } from '@angular/router';
import { BookingComponent } from './booking/Components/booking/booking.component';
import { DetailComponent } from './detail/Components/detail/detail.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { SigninComponent } from './sign-in/Components/signin/signin.component';
import { SignupComponent } from './sign-up/Components/signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
    { path: 'detail/:_id', loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule) },
    { path: 'booking/:_id', loadChildren: () => import('./booking/booking.module').then(mod => mod.BookingModule) },
    { path: 'signin', loadChildren: () => import('./sign-in/sign-in.module').then(mod => mod.SignInModule) },
    { path: 'signup', loadChildren: () => import('./sign-up/sign-up.module').then(mod => mod.SignUpModule) },
    { path: '404', loadChildren: () => import('./error-page/error-page.module').then(mod => mod.ErrorPageModule) },
    { path: '**', redirectTo: '/404' }
  ];