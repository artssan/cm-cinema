import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { Function } from 'src/app/models/function.model';
import { Movie } from 'src/app/models/movie.model';
import { FunctionsService } from 'src/app/services/functions.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.scss']
})
export class EditFunctionComponent {
  editFunctionForm: Function = {
    functionId: 0,
    movieId: 0,
    price: 0,
    seatsNumber: 0,
    functionDate: ''
  };

  @ViewChild("functionForm")
  functionForm!: NgForm;

  isSubmitted: boolean = false;
  functionId: any;

  optionsMovie: Movie[] | undefined;
  selectedMovie: string = '';
  movie: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private functionsService: FunctionsService, private moviesService: MoviesService) { }

  dateToString(date: any): string {
    if (date.month.toString().length == 1) {
      date.month = `0${date.month}`
    }

    if (date.day.toString().length == 1) {
      date.day = `0${date.day}`
    }
      
    return `${date.year}-${date.month}-${date.day}`;
  }

  stringToDateObject(date: string): any {
    return { year: Number(date.substring(0, 4)), month: Number(date.substring(5, 7)), day: Number(date.substring(8, 10)) };
  }

  ngOnInit(): void {
    this.functionId = this.route.snapshot.params['functionId'];
    this.getFunctionById();
  }

  getFunctionById(): void {
    this.functionsService.getFunctionById(this.functionId)
      .pipe(finalize(() => {
        this.getMovieById(this.editFunctionForm.movieId);
      }))
      .subscribe((data) => {
      if (data != null) {
        this.editFunctionForm = data;
        this.editFunctionForm.functionDate = this.stringToDateObject(this.editFunctionForm.functionDate);
      }
    });
  }

  getMovieById(movieId: number): void { 
    this.moviesService.getMovieById(movieId).subscribe(movie => {
      this.movie = movie;
      this.getMovies();
    })
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.optionsMovie = movies.filter(x => x.movieId != this.movie.movieId);
    });
  }

  editFunction(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.editFunctionForm.functionDate = this.dateToString(this.editFunctionForm.functionDate);
      this.functionsService.updateFunction(this.editFunctionForm).subscribe(async data => {
        if (data != null) {
          if (data.isSuccessful) {
            this.toastr.success(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-functions']);
            }, 500);
          } else {
            this.toastr.error(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-functions']);
            }, 500);
          }
        }
      });
    }
  }

  onMovieSelected(event: any): void {
    var movie = this.optionsMovie?.find(x => x.title === this.selectedMovie);
    this.editFunctionForm.movieId = movie!.movieId;
  }
}
