import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IReserve } from 'src/app/shared/models/reserveRequest.model';
import { IReserveResponse } from 'src/app/shared/models/reserveResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpsClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError('Error llamando api ' + error.message);
  }

  public reserve(dataReserve: IReserve): Observable<IReserveResponse> {
    const url = `${environment.urlBase}/booking`;
    return this.httpsClient.post<IReserveResponse>(url, dataReserve).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}