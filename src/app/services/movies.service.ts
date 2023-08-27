import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://challengemicroservicesapi.azure-api.net/movies/api/movies';

  private headers = new HttpHeaders({'Ocp-Apim-Subscription-Key':'10eae1776f634f4a8a24b6933debbf26'});
  private requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getMovies(limit?: number, exclude?: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl, this.requestOptions).pipe(
      map(movies => {
        var moviesList = limit ? movies.slice(0, limit) : movies;
        return moviesList.filter(x => x.movieId != exclude);
      }));
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`, this.requestOptions);
  }

  deleteMovieById(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.requestOptions);
  }

  createMovie(movie: Movie) : Observable<any> {
    return this.http.post<any>(this.apiUrl, movie, this.requestOptions);
  }

  updateMovie(movie: Movie) : Observable<any> {
    return this.http.put<any>(this.apiUrl, movie, this.requestOptions);
  }
}