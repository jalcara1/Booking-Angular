import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { SigninComponent } from './Components/signin/signin.component';


@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
