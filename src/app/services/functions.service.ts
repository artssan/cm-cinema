import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from '../models/funcion.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  private apiUrl = 'https://tu-web-api.com/funciones'; // Reemplaza con la URL correcta de la API

  constructor(private http: HttpClient) { }

  getFunciones(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(this.apiUrl);
  }
}