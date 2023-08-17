import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Function } from '../models/function.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  private apiUrl = 'https://localhost:7010/api/functions';

  constructor(private http: HttpClient) { }

  getFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>(this.apiUrl);
  }

  getFunctionsByMovieId(movieId: number): Observable<Function[]> {
    var dateNow = new Date();
    return this.http.get<Function[]>(`${this.apiUrl}/movie/${movieId}/?date=${dateNow.toDateString()}`);
  }

  deleteFunctionById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  createFunction(func: Function): Observable<any> {
    return this.http.post<any>(this.apiUrl, func);
  }

  updateFunction(func: Function): Observable<any> {
    return this.http.put<any>(this.apiUrl, func);
  }

  getFunctionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}