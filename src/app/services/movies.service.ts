import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://localhost:44343/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(limit?: number, exclude?: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(
      map(movies => {
        var moviesList = limit ? movies.slice(0, limit) : movies;
        return moviesList.filter(x => x.movieId != exclude);
      }));
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  deleteMovieById(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  createMovie(movie: Movie) : Observable<any> {
    return this.http.post<any>(this.apiUrl, movie);
  }

  updateMovie(movie: Movie) : Observable<any> {
    return this.http.put<any>(this.apiUrl, movie);
  }
}