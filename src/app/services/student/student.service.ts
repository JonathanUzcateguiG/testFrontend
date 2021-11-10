import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Student } from 'src/app/commons/models/student/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  requestStudents: Array<Student> = [];
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets a List object type Student corresponding to the received house.
   * @method get
   * @returns {Observable<Object>}
   */
  get(): Observable<object> {
    return this.http.get<Student[]>(`http://hp-api.herokuapp.com/api/characters/students`)
      .pipe(
        catchError(this.handleError<Student[]>('get Student', []))
      );
  }

  /**
   * Gets a List object type Student corresponding to the received house.
   * @method getRequestStudents
   * @returns {Observable<Object>}
   */
  getRequestStudents(): Observable<object> {
    return this.http.get<Student[]>(`http://hp-api.herokuapp.com/api/characters/students`)
      .pipe(
        catchError(this.handleError<Student[]>('get Student', []))
      );
  }

  /**
   * Stores new student
   * @method storeRequestStudent
   * @param {Student} student
   * @returns {void}
   */
  storeRequestStudent(student: Student): void {
    this.requestStudents.push(student);
    localStorage.setItem('stored_student', JSON.stringify(student));
  }

  /**
   * Retrieve Stored student
   * @method getNewStudent
   * @param {Student} student
   * @returns {Student}
   */
  getNewStudent(): Student {
    let retrievedStudent = localStorage.getItem('stored_student');
    let student: Student = JSON.parse(retrievedStudent || '{}');
    return student;
  }

  /**
   * Retrieve All Requests Students
   * @method getRequest
   * @returns {Array<Student>}
   */
  getRequest(): Array<Student> {
    return this.requestStudents;
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
