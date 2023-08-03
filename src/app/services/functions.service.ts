import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Function } from '../models/function.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  private apiUrl = 'https://tu-web-api.com/funciones'; // Reemplaza con la URL correcta de la API

  constructor(private http: HttpClient) { }

  getFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>(this.apiUrl);
  }
}