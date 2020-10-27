import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { CardComponent } from './Components/card/card.component';
import { ExpCardComponent } from './Components/exp-card/exp-card.component';
import { ExpListComponent } from './Components/exp-list/exp-list.component';
import { RankingComponent } from './Components/ranking/ranking.component';


@NgModule({
  declarations: [HomeComponent, CardComponent, ExpCardComponent, ExpListComponent, RankingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
