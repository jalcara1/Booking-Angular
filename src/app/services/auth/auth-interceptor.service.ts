import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor{

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if ( err.status === 401){
          this.router.navigateByUrl('/signin');
        }
        return throwError( err );
      })
    );
  }
}