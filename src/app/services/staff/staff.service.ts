import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Staff } from 'src/app/commons/models/staff/staff';

@Injectable()
export class StaffService {
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets a List object type Staff corresponding to the received house.
   * @method get
   * @returns {Observable<Object>}
   */
  get(): Observable<object> {
    return this.http.get<Staff[]>(`http://hp-api.herokuapp.com/api/characters/staff`)
      .pipe(
        catchError(this.handleError<Staff[]>('get Staff', []))
      );;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
