import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Course } from '../models/course-type';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(
    private http: HttpClient) { }

  getCourse(): Observable<Course[]>{
    return this.http.get<Course>('http://localhost:3001/courses').pipe(
      map((res: Course) => res),
      catchError((error: any) => this.errorHandler(error))
    )
  }
  getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(`http://localhost:3001/courses/${id}`).pipe(
      map((res: Course) => res),
      catchError((error: any) => this.errorHandler(error))
    )
  }

  errorHandler(e: any): Observable<any> {
    alert('Ocorreu um erro!')
    return EMPTY //Observable vazio
  }
}
