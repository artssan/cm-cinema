import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://tu-web-api.com/peliculas'; // Reemplaza con la URL correcta de la API

  constructor(private http: HttpClient) { }

  getMovies(limit?: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(
      map(movies => {
        return limit ? movies.slice(0, limit) : movies;
      }));
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
}