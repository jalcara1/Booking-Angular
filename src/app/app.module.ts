import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DetailModule } from './detail/detail.module';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { BookingModule } from './booking/booking.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './services/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,    
    SharedModule,    
    DetailModule,
    RouterModule,
    SignupModule,
    SigninModule,
    BookingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService      
    }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }