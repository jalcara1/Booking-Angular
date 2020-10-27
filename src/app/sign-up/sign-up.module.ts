import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignupComponent } from './Components/signup/signup.component';
import { FormRegisterComponent } from './Components/form-register/form-register.component';


@NgModule({
  declarations: [SignupComponent, FormRegisterComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
