import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experiences.model';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public experiences: Array<IExperience>;

  constructor(private experienceServices: ExperienceService) { }

  ngOnInit(): void {
    this.getExperiencesTop();
  }

  public getExperiencesTop(): void{
    this.experienceServices.getExperienceTop().subscribe(
      response => {
        this.experiences = response.top5;
      }
    )
  }
}