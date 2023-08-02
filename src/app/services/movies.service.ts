import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://tu-web-api.com/peliculas'; // Reemplaza con la URL correcta de la API

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }
}