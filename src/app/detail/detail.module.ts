import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './Components/detail/detail.component';
import { CardComponent } from './Components/card/card.component';


@NgModule({
  declarations: [DetailComponent, CardComponent],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
