import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable,throwError  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ViewDetailsService {

  flightsUrl = 'http://localhost:1020/delete';
  
  constructor(private http: HttpClient) { 

  }

  view() : Observable<FlightBooking[]> {
    return this.http.get<FlightBooking[]>('http://localhost:1020/getAllId').pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
    }

  delete(id: any) : Observable<any> {
    const url = `${this.flightsUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError));
  }

  private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
      console.log('An error occurred:', err.error.message);
      errMsg=err.error.message;} 
    else {
      console.log(`Backend returned code ${err.status}`);
      errMsg=err.error.status;
    }
    return throwError(errMsg); 
  }  
}
