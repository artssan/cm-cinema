import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Function } from '../models/function.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  private apiUrl = 'https://challengemicroservicesapi.azure-api.net/functions/api/functions';

  private headers = new HttpHeaders({'Ocp-Apim-Subscription-Key':'10eae1776f634f4a8a24b6933debbf26'});
  private requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>(this.apiUrl, this.requestOptions);
  }

  getFunctionsByMovieId(movieId: number): Observable<Function[]> {
    var dateNow = new Date();
    return this.http.get<Function[]>(`${this.apiUrl}/movie/${movieId}/?date=${dateNow.toDateString()}`, this.requestOptions);
  }

  deleteFunctionById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.requestOptions);
  }

  createFunction(func: Function): Observable<any> {
    return this.http.post<any>(this.apiUrl, func, this.requestOptions);
  }

  updateFunction(func: Function): Observable<any> {
    return this.http.put<any>(this.apiUrl, func, this.requestOptions);
  }

  getFunctionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.requestOptions);
  }
}