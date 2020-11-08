import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDetail } from 'src/app/shared/models/detail.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IETopResponse } from 'src/app/shared/models/TopResponse.model';
import { IExperiencesResponse } from 'src/app/shared/models/experiencesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private httpsClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError('Error llamando api ' + error.message);
  }

  public getExperience(): Observable<IExperiencesResponse> {
    const url = `${environment.urlBase}/experiences`;
    return this.httpsClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceTop(): Observable<IETopResponse> {
    const url = `${environment.urlBase}/experiences/top5`;
    return this.httpsClient.get<IETopResponse>(url).pipe(
            retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById(id: number): Observable<IDetail> {
    const url = `${environment.urlBase}/experiences/detail/${id}`;
    return this.httpsClient.get<IDetail>(url).pipe(
            retry(2), catchError(this.handlerError)
    );
  }
}