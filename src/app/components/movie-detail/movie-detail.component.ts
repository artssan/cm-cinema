import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent {
  movie!: Movie;
  movieId: any;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['movieId'];
    this.getMovieById();
  }

  getMovieById() {
    this.moviesService.getMovieById(this.movieId).subscribe((data) => {
      if (data != null) {
        this.movie = data;
      }
    });
  }
}
