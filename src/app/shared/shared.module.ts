import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './components/score/score.component';
import { TitleComponent } from './components/title/title.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [     
    ScoreComponent, 
    TitleComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [     
    ScoreComponent, 
    TitleComponent,
    TopbarComponent,
  ]
})

export class SharedModule { }