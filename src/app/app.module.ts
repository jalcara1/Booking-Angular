import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { DetailModule } from './detail/detail.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { SignInModule } from './sign-in/sign-in.module';
import { BookingModule } from './booking/booking.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './service/auth/auth-interceptor.service';
import { ScoreComponent } from './shared/Components/score/score.component';
import { TitleComponent } from './shared/Components/title/title.component';
import { TopbarComponent } from './shared/Components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    TitleComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DetailModule,
    RouterModule,
    SignUpModule,
    SignInModule,
    BookingModule,
    HttpClientModule,
    BrowserAnimationsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }