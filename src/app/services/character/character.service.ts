import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Character } from 'src/app/commons/models/character/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets a List object type Character corresponding to the received house.
   * @method getByHouse
   * @param {string} house
   * @returns {Observable<Object>}
   */
  getByHouse(house: string): Observable<object> {
    return this.http.get<Character[]>(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .pipe(
        catchError(this.handleError<Character[]>('getByHouse', []))
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
