import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { FlightBooking  } from '../shared/FlightBooking';

@Injectable()
export class BookFlightService {

  errorMessage: String = "";

  constructor(private http: HttpClient) { }

  getData(data:any) {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:1020/bookFlight', data, { headers: options }).pipe(
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