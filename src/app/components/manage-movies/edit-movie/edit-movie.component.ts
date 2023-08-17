import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  editMovieForm: Movie = {
    movieId: 0,
    title: '',
    year: 0,
    genre: '',
    director: '',
    cast: '',
    description: '',
    posterImage: '',
    backgroundImage: ''
  };

  @ViewChild("movieForm")
  movieForm!: NgForm;

  isSubmitted: boolean = false;
  movieId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['movieId'];
    this.getMovieById();
  }

  getMovieById() {
    this.moviesService.getMovieById(this.movieId).subscribe((data) => {
      if (data != null) {
        this.editMovieForm = data;
      }
    });
  }

  editMovie(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.moviesService.updateMovie(this.editMovieForm).subscribe(async data => {
        if (data != null) {
          if (data.isSuccessful) {
            this.toastr.success(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-movies']);
            }, 500);
          } else {
            this.toastr.error(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-movies']);
            }, 500);
          }
        }
      });
    }
  }
}
