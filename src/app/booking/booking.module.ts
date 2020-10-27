import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './Components/booking/booking.component';
import { FormBookingComponent } from './Components/form-booking/form-booking.component';


@NgModule({
  declarations: [BookingComponent, FormBookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
