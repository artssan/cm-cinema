import { Component, OnInit, TemplateRef } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  movies!: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }
  
  getMovies(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
