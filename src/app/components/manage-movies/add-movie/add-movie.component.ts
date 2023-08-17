import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit{
  addMovieForm: Movie = {
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

  constructor(private router: Router, private moviesService: MoviesService, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  addMovie(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.moviesService.createMovie(this.addMovieForm).subscribe(async data => {
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
