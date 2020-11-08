import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experiences.model';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit {

  public experiences: Array<IExperience>;

  constructor(private experienceServices: ExperienceService) { }

  ngOnInit(): void {
    this.getAllExperiences();
  }

  private getAllExperiences(): void {
    this.experienceServices.getExperience().subscribe(
      response => {
        this.experiences = response.experiences;
      }
    )
  }
}