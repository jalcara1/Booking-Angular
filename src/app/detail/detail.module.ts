import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import { DetailRoutingModule } from './detail-routing.module';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [DetailComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
